/**
 * auth.js — 账户系统
 * 管理员：panghui / 180803 → 完整体验
 * 游客：仅能体验第1天内容，之后提示联系管理员
 */

const Auth = {
  KEY: 'summer_auth',

  /** 管理员账号 */
  ADMIN_USER: 'panghui',
  ADMIN_PASS: '180803',

  /** 获取当前认证状态 */
  get() {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },

  /** 保存认证状态 */
  save(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch { /* localStorage 不可用 */ }
  },

  /** 管理员登录 */
  login(username, password) {
    if (username === this.ADMIN_USER && password === this.ADMIN_PASS) {
      this.save({ type: 'admin', loginTime: Date.now() });
      return { success: true };
    }
    return { success: false, error: '账号或密码错误，请重试' };
  },

  /** 游客体验模式 */
  loginAsGuest() {
    this.save({ type: 'guest', loginTime: Date.now(), day1Completed: false });
    return { success: true };
  },

  /** 退出登录 */
  logout() {
    localStorage.removeItem(this.KEY);
  },

  /** 是否已登录（管理员或游客） */
  isLoggedIn() {
    const state = this.get();
    return state !== null;
  },

  /** 是否为管理员 */
  isAdmin() {
    const state = this.get();
    return state && state.type === 'admin';
  },

  /** 是否为游客 */
  isGuest() {
    const state = this.get();
    return state && state.type === 'guest';
  },

  /** 游客是否已完成第1天 */
  guestDay1Done() {
    const state = this.get();
    return state && state.type === 'guest' && state.day1Completed === true;
  },

  /** 标记游客已完成第1天 */
  markGuestDay1Done() {
    const state = this.get();
    if (state && state.type === 'guest') {
      state.day1Completed = true;
      this.save(state);
    }
  },

  /**
   * 检查当前用户是否可以访问指定天数的内容
   * @param {number} dayNum - 学习天数（1-53）
   * @returns {object} { allowed: boolean, reason: string }
   */
  canAccessDay(dayNum) {
    if (this.isAdmin()) {
      return { allowed: true };
    }
    if (this.isGuest()) {
      if (dayNum <= 1) {
        return { allowed: true };
      }
      return {
        allowed: false,
        reason: '你目前是游客体验模式，仅能体验第一天的内容。\n\n需要联系管理员开放全部权限，即可解锁全部 53 天的学习内容、7 次周考核和期末考试。\n\n📱 联系管理员微信：lqcf0524'
      };
    }
    return { allowed: false, reason: '请先登录' };
  },

  /**
   * 检查是否可以访问考核
   * 游客不能参加任何考核
   */
  canAccessExam() {
    if (this.isAdmin()) {
      return { allowed: true };
    }
    return {
      allowed: false,
      reason: '考核功能需要完整权限。\n\n你目前是游客体验模式，仅能体验第一天的练习内容。\n\n📱 联系管理员微信：lqcf0524\n🔑 或使用管理员账号登录'
    };
  },

  /** 获取游客升级提示文本 */
  getUpgradeMessage() {
    return '🎒 第一天体验结束啦！\n\n你目前是游客体验模式，仅能体验第一天的内容。\n\n想要继续学习吗？联系管理员开放全部权限吧：\n\n📱 微信：lqcf0524\n\n开通后即可解锁：\n✅ 全部 53 天学习内容\n✅ 7 次周考核 + 期末考试\n✅ 积分 / 徽章 / 贴纸系统\n✅ 进度追踪与数据导出';
  }
};
