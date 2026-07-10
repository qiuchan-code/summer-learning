/**
 * app.js — 主控制器
 * 负责：应用初始化、视图切换、事件绑定、首页数据刷新
 */

const App = {

  /** 初始化 */
  init() {
    this.refreshHome();
    this.initEasterEggs();
    this.bindSettingsEvents();
    this.setupGlobalListeners();
    console.log('🎒 暑假学习小助手已就绪！');
    console.log('📅 今天是第' + Schedule.getDayNumber() + '天，第' + Schedule.getWeekNumber() + '周');
    console.log('📝 考核日：' + (Schedule.isExamDay() ? '是！' : '否，还有' + Schedule.daysUntilNextExam() + '天'));
  },

  /** 刷新首页数据 */
  refreshHome() {
    const data = Storage.load();
    const dayNum = Schedule.getDayNumber();
    const weekNum = Schedule.getWeekNumber();
    const dayInWeek = Schedule.getDayInWeek();
    const isExam = Schedule.isExamDay();

    // 日期信息
    const dateBadge = document.getElementById('dateBadge');
    if (dateBadge) dateBadge.textContent = Schedule.getDateDisplay();

    const weekInfo = document.getElementById('weekInfo');
    if (weekInfo) {
      if (weekNum === 8) {
        weekInfo.textContent = '🏆 总复习 · 第' + dayInWeek + '天';
      } else if (dayNum > 53) {
        weekInfo.textContent = '🎉 暑假学习之旅已结束！';
      } else if (dayNum === 0) {
        weekInfo.textContent = '📅 学习尚未开始（7月10日开启）';
      } else {
        weekInfo.textContent = '第' + weekNum + '周 · 第' + dayInWeek + '天';
      }
    }

    // 连续打卡
    const streakBadge = document.getElementById('streakBadge');
    if (streakBadge) streakBadge.textContent = '🔥 ' + data.streak + '天';

    // 星星积分
    const starCount = document.getElementById('starCount');
    const starRank = document.getElementById('starRank');
    if (starCount) starCount.textContent = data.stars;
    if (starRank) starRank.textContent = Storage.getRank();

    // 考核倒计时
    const countdownEl = document.getElementById('examCountdown');
    if (countdownEl) {
      if (isExam) {
        countdownEl.innerHTML = '🎯 <strong>今天是考核日！</strong>';
      } else if (dayNum > 53) {
        countdownEl.innerHTML = '🎉 <strong>全部完成！</strong>';
      } else if (dayNum === 0) {
        countdownEl.innerHTML = '📝 学习将于<strong>7月10日</strong>开始';
      } else {
        const days = Schedule.daysUntilNextExam();
        countdownEl.innerHTML = '📝 距下次考核还有 <strong>' + days + '</strong> 天（' + Schedule.getExamDateThisWeek() + '）';
      }
    }

    // 三科完成状态
    this.refreshSubjectDoors();

    // 考核入口
    const examEntrance = document.getElementById('examEntrance');
    if (examEntrance) {
      if (isExam && dayNum >= 1 && dayNum <= 53) {
        examEntrance.style.display = 'block';
      } else {
        examEntrance.style.display = 'none';
      }
    }

    // 吉祥物
    this.updateMascot();
  },

  /** 刷新学科入口状态 */
  refreshSubjectDoors() {
    const progress = Storage.getTodayProgress();
    const subjects = [
      { key: 'chinese', id: 'statusChinese', door: 'doorChinese', name: '语文' },
      { key: 'math', id: 'statusMath', door: 'doorMath', name: '数学' },
      { key: 'english', id: 'statusEnglish', door: 'doorEnglish', name: '英语' }
    ];

    subjects.forEach(s => {
      const statusEl = document.getElementById(s.id);
      const doorEl = document.getElementById(s.door);
      const done = progress[s.key]?.completed;

      if (statusEl) {
        statusEl.textContent = done ? '✅ 已完成' : '待完成';
        statusEl.style.color = done ? 'var(--green)' : '';
      }
      if (doorEl) {
        if (done) doorEl.classList.add('completed');
        else doorEl.classList.remove('completed');
      }
    });
  },

  /** 更新吉祥物状态 */
  updateMascot() {
    const mascot = document.getElementById('mascot');
    const speech = document.getElementById('mascotSpeech');
    if (!mascot || !speech) return;

    const dayNum = Schedule.getDayNumber();
    const isExam = Schedule.isExamDay();
    const progress = Storage.getTodayProgress();
    const allDone = Storage.isAllDoneToday();
    const data = Storage.load();

    const speeches = {
      morning: ['今天也要加油哦！', '新的一天开始了！', '一日之计在于晨~'],
      exam: ['考核日加油！', '你是最棒的！', '冷静仔细，一定行！'],
      allDone: ['太厉害了！全部完成！', '今天收获满满！', '明天继续加油哦~'],
      idle: ['来学习吧！', '点击上面的学科开始~', '积少成多，水滴石穿'],
      streak: ['连续' + data.streak + '天！超棒！', '坚持就是胜利！']
    };

    let pool;
    if (isExam && !allDone) pool = speeches.exam;
    else if (allDone) pool = speeches.allDone;
    else if (data.streak >= 7) pool = speeches.streak;
    else pool = speeches.idle;

    speech.textContent = pool[Math.floor(Math.random() * pool.length)];

    // 表情变化
    if (allDone) mascot.textContent = '🦋';
    else if (isExam) mascot.textContent = '💪';
    else if (data.streak >= 30) mascot.textContent = '🦸';
    else if (data.streak >= 7) mascot.textContent = '🌟';
    else mascot.textContent = '🐛';
  },

  /** 打开练习 */
  openPractice(subject) {
    const names = { chinese: '语文 · 名著阅读', math: '数学 · 计算题', english: '英语 · 单词背诵' };
    const titleEl = document.getElementById('practiceTitle');
    if (titleEl) titleEl.textContent = names[subject];

    // 重置反馈区
    const feedbackEl = document.getElementById('practiceFeedback');
    if (feedbackEl) feedbackEl.innerHTML = '';

    this.switchView('practice');
    Quiz.startPractice(subject);
  },

  /** 打开考核 */
  openExam() {
    const week = Schedule.getWeekNumber();
    const titleEl = document.getElementById('examTitle');
    if (titleEl) {
      if (week === 8) titleEl.textContent = '🏆 期末考试';
      else titleEl.textContent = '📝 第' + week + '周考核';
    }

    this.switchView('exam');
    Quiz.startExam();
  },

  /** 返回首页 */
  backToHome() {
    Quiz.stopTimer();
    this.switchView('home');
    this.refreshHome();
  },

  /** 切换视图 */
  switchView(viewName) {
    // 隐藏所有视图
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    // 显示目标视图
    const target = document.getElementById('view-' + viewName);
    if (target) {
      target.classList.add('active');
      window.scrollTo(0, 0);
    }

    // 更新底部导航
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.remove('active');
      if (n.textContent.includes(viewName === 'home' ? '首页' :
        viewName === 'progress' ? '进度' :
        viewName === 'collection' ? '收藏' : '')) {
        n.classList.add('active');
      }
    });

    // 切换到进度视图时渲染日历
    if (viewName === 'progress') this.renderProgress();
    if (viewName === 'collection') this.renderCollection();

    // 非首页停止计时器
    if (viewName !== 'practice' && viewName !== 'exam') {
      Quiz.stopTimer();
    }
  },

  /** 渲染进度日历 */
  renderProgress() {
    const container = document.getElementById('progressCalendar');
    const statsEl = document.getElementById('progressStats');
    if (!container) return;

    const data = Storage.load();
    let html = '';

    // 53天日历
    for (let day = 1; day <= 53; day++) {
      // 计算日期
      const d = new Date(Schedule.START_DATE);
      d.setDate(d.getDate() + day - 1);
      const dateStr = d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0');

      const progress = data.dailyProgress[dateStr];
      const isExam = (day % 7 === 0) || (day >= 50 && day === 53);
      const today = Schedule.getDayNumber();
      let cls = 'cal-day';

      if (day === today) cls += ' today';
      else if (day > today) cls += ' future';

      if (progress) {
        const subjects = [progress.chinese, progress.math, progress.english];
        const completed = subjects.filter(s => s?.completed).length;
        if (completed === 3) cls += ' completed';
        else if (completed > 0) cls += ' partial';
      }

      if (isExam) cls += ' exam';

      html += '<div class="' + cls + '">' + day + '</div>';
    }
    container.innerHTML = html;

    // 统计
    const completedDays = Object.values(data.dailyProgress).filter(
      p => p.chinese?.completed && p.math?.completed && p.english?.completed
    ).length;

    const totalQuestions = Object.values(data.dailyProgress).reduce((sum, p) => {
      return sum + (p.chinese?.total || 0) + (p.math?.total || 0) + (p.english?.total || 0);
    }, 0);

    if (statsEl) {
      statsEl.innerHTML = `
        <div style="display:flex;justify-content:space-around;padding:16px;background:var(--bg-paper);
          border-radius:var(--radius);box-shadow:var(--shadow);text-align:center;">
          <div><strong style="font-size:1.5rem;">${completedDays}</strong><br>完成天数</div>
          <div><strong style="font-size:1.5rem;">${data.stars}</strong><br>总积分</div>
          <div><strong style="font-size:1.5rem;">${totalQuestions}</strong><br>做题总数</div>
          <div><strong style="font-size:1.5rem;">${data.streak}</strong><br>连续打卡</div>
        </div>
      `;
    }

    // 简单成绩图表
    const chartEl = document.getElementById('progressChart');
    if (chartEl) {
      const exams = data.examResults;
      let chartHtml = '<h3 style="margin-top:16px;">📈 考核成绩趋势</h3><div style="display:flex;gap:8px;align-items:flex-end;height:120px;padding:8px;background:var(--bg-paper);border-radius:var(--radius);">';
      for (let w = 1; w <= 7; w++) {
        const exam = exams[w];
        const pct = exam ? Math.round(exam.totalScore / exam.totalMax * 100) : 0;
        const h = exam ? Math.max(10, pct * 1) : 5;
        chartHtml += '<div style="flex:1;text-align:center;font-size:0.7rem;">' +
          '<div style="background:' + (pct >= 80 ? 'var(--green)' : pct >= 60 ? 'var(--yellow)' : 'var(--red)') +
          ';height:' + h + 'px;border-radius:4px 4px 0 0;"></div>' +
          (exam ? pct : '-') + '<br>第' + w + '周</div>';
      }
      chartHtml += '</div>';
      chartEl.innerHTML = chartHtml;
    }
  },

  /** 渲染收藏页（贴纸 + 徽章） */
  renderCollection() {
    const data = Storage.load();

    // 贴纸相册
    const stickerEl = document.getElementById('stickerAlbum');
    if (stickerEl) {
      stickerEl.innerHTML = '<h3>🎀 考核贴纸</h3>';
      let stickerHtml = '<div class="sticker-album">';
      Rewards.STICKERS.forEach(s => {
        const collected = data.stickers.includes(s.id);
        stickerHtml += '<div class="sticker-slot' + (collected ? ' collected' : '') + '" title="' + s.desc + '">' +
          (collected ? s.icon : '❓') +
          '</div>';
      });
      stickerHtml += '</div>';
      stickerEl.innerHTML = stickerHtml;
    }

    // 徽章墙
    const badgeEl = document.getElementById('badgeWall');
    if (badgeEl) {
      badgeEl.innerHTML = '<h3>🏅 成就徽章</h3>';
      let badgeHtml = '<div class="badge-wall">';
      Rewards.BADGES.forEach(b => {
        const earned = data.badges.includes(b.id);
        badgeHtml += '<div class="badge-item' + (earned ? ' earned' : '') + '" title="' + b.desc + '">' +
          '<div class="badge-icon">' + b.icon + '</div>' +
          '<div class="badge-name">' + b.name + '</div>' +
          '</div>';
      });
      badgeHtml += '</div>';
      badgeEl.innerHTML = badgeHtml;
    }
  },

  /** 显示弹窗 */
  showModal(title, bodyHtml, buttons) {
    const overlay = document.getElementById('modalOverlay');
    const box = document.getElementById('modalBox');
    if (!overlay || !box) return;

    let btnHtml = (buttons || [{ text: '确定', cls: '' }]).map((b, i) =>
      '<button class="' + (b.cls || '') + '" onclick="App._modalBtnAction(' + i + ')">' + b.text + '</button>'
    ).join('');

    box.innerHTML = '<h3>' + title + '</h3>' + bodyHtml + '<div>' + btnHtml + '</div>';
    overlay.style.display = 'flex';

    // 保存按钮回调
    this._modalButtons = buttons || [];
  },

  _modalBtnAction(idx) {
    const btn = this._modalButtons[idx];
    if (btn && btn.action) btn.action();
    else this.closeModal();
  },

  /** 关闭弹窗 */
  closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.style.display = 'none';
    this._modalButtons = [];
  },

  /** 初始化彩蛋 */
  initEasterEggs() {
    if (typeof EasterEggs !== 'undefined') {
      EasterEggs.init();
    }
  },

  /** 绑定设置事件 */
  bindSettingsEvents() {
    const diffSelect = document.getElementById('settingDifficulty');
    const soundCheck = document.getElementById('settingSound');

    if (diffSelect) {
      const data = Storage.load();
      diffSelect.value = data.settings.difficulty || 'easy';
      diffSelect.onchange = () => {
        const d = Storage.load();
        d.settings.difficulty = diffSelect.value;
        Storage.save(d);
      };
    }

    if (soundCheck) {
      const data = Storage.load();
      soundCheck.checked = data.settings.sound !== false;
      soundCheck.onchange = () => {
        const d = Storage.load();
        d.settings.sound = soundCheck.checked;
        Storage.save(d);
      };
    }
  },

  /** 全局监听 */
  setupGlobalListeners() {
    // 点击弹窗遮罩关闭
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closeModal();
      });
    }
  }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
