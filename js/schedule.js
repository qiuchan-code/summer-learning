/**
 * schedule.js — 日期计算、53天进度、7天周期逻辑
 * 工期：2026年7月10日 → 8月31日
 */

const Schedule = {
  START_DATE: new Date(2026, 6, 10), // 7月10日（月份从0开始）
  END_DATE: new Date(2026, 7, 31),   // 8月31日
  TOTAL_DAYS: 53,
  _overrideDate: null,               // 进度日历点击时覆写的日期

  /** 覆写「今天」日期（用于进度日历点击回溯） */
  setOverrideDate(dateStr) {
    this._overrideDate = dateStr;
  },

  /** 清除日期覆写 */
  clearOverride() {
    this._overrideDate = null;
  },

  /** 获取当前的「有效日期」（可能被覆写） */
  getToday() {
    if (this._overrideDate) return this._overrideDate;
    const d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  },

  /** 获取当前学习日编号（1~53），接受覆写 */
  getDayNumber() {
    const dateStr = this._overrideDate || null;
    const today = dateStr ? new Date(dateStr) : new Date();
    today.setHours(12, 0, 0, 0); // 避免时区偏移
    const start = new Date(this.START_DATE);
    start.setHours(0, 0, 0, 0);
    const end = new Date(this.END_DATE);
    end.setHours(23, 59, 59, 999);

    if (today < start) return 0;
    if (today > end) return this.TOTAL_DAYS + 1;

    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(diff, this.TOTAL_DAYS));
  },

  /** 获取指定偏移天数的日期字符串 */
  getDateOffset(offset) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  },

  /** 获取当前是第几周（1~8） */
  getWeekNumber() {
    const day = this.getDayNumber();
    if (day === 0) return 0;
    if (day >= 50) return 8; // 总复习周
    return Math.ceil(day / 7);
  },

  /** 获取当前是本周第几天（1~7，7为考核日） */
  getDayInWeek() {
    const day = this.getDayNumber();
    if (day === 0 || day > this.TOTAL_DAYS) return 0;
    if (day >= 50) return day - 49; // 总复习阶段
    const d = day % 7;
    return d === 0 ? 7 : d;
  },

  /** 今天是不是考核日 */
  isExamDay() {
    const dayInWeek = this.getDayInWeek();
    if (dayInWeek === 0) return false;
    // 第8周（总复习）第4天是期末考核
    if (this.getWeekNumber() === 8 && dayInWeek === 4) return true;
    // 普通周第7天是周考核
    return dayInWeek === 7;
  },

  /** 距下次考核还有几天 */
  daysUntilNextExam() {
    const dayInWeek = this.getDayInWeek();
    const weekNum = this.getWeekNumber();
    if (dayInWeek === 0) return 7;
    if (weekNum === 8) return 4 - dayInWeek;
    return 7 - dayInWeek;
  },

  /** 获取今天的日期显示文本 */
  getDateDisplay() {
    const d = new Date();
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + weekdays[d.getDay()];
  },

  /** 获取周几的汉字 */
  getWeekdayCN(dateStr) {
    const d = new Date(dateStr);
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    return '周' + days[d.getDay()];
  },

  /** 用日期字符串获取学习日编号 */
  getDayNumberByDate(dateStr) {
    const d = new Date(dateStr);
    d.setHours(0, 0, 0, 0);
    const start = new Date(this.START_DATE);
    start.setHours(0, 0, 0, 0);
    const diff = Math.floor((d - start) / (1000 * 60 * 60 * 24)) + 1;
    if (diff < 1 || diff > this.TOTAL_DAYS) return null;
    return diff;
  },

  /** 获取本周的考核日期 */
  getExamDateThisWeek() {
    const day = this.getDayNumber();
    if (day >= 50) return '8月31日';
    const weekStart = Math.floor((day - 1) / 7) * 7 + 1;
    const examDay = weekStart + 6; // 第7天
    const d = new Date(this.START_DATE);
    d.setDate(d.getDate() + examDay - 1);
    return (d.getMonth() + 1) + '月' + d.getDate() + '日';
  },

  /** 获取每周的起止日期（用于显示） */
  getWeekDateRange(weekNum) {
    if (weekNum === 8) return { start: '8月28日', end: '8月31日' };
    const startDay = (weekNum - 1) * 7 + 1;
    const endDay = startDay + 6;
    const start = new Date(this.START_DATE);
    start.setDate(start.getDate() + startDay - 1);
    const end = new Date(this.START_DATE);
    end.setDate(end.getDate() + endDay - 1);
    return {
      start: (start.getMonth() + 1) + '月' + start.getDate() + '日',
      end: (end.getMonth() + 1) + '月' + end.getDate() + '日'
    };
  }
};
