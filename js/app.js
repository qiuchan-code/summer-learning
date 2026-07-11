/**
 * app.js — 主控制器
 * 负责：应用初始化、登录流程、视图切换、事件绑定、首页数据刷新
 */

const App = {

  /** 初始化 */
  init() {
    // 先检查登录状态
    if (!Auth.isLoggedIn()) {
      this.showLoginScreen();
      return;
    }

    // 已登录：游客检查是否超出体验范围
    if (Auth.isGuest() && Auth.guestDay1Done()) {
      // 游客已完成第1天，再次进入时显示升级提示
      setTimeout(() => this.showUpgradeModal(), 500);
    }

    this.startApp();
  },

  /** 启动主应用（登录后调用） */
  startApp() {
    this.registerSW();
    this.refreshHome();
    this.initEasterEggs();
    this.bindSettingsEvents();
    this.setupGlobalListeners();
    console.log('🎒 暑假学习小助手已就绪！');
    console.log('👤 当前身份：' + (Auth.isAdmin() ? '管理员' : '游客'));
    console.log('📅 今天是第' + Schedule.getDayNumber() + '天，第' + Schedule.getWeekNumber() + '周');
    console.log('📝 考核日：' + (Schedule.isExamDay() ? '是！' : '否，还有' + Schedule.daysUntilNextExam() + '天'));
  },

  /** 显示登录界面 */
  showLoginScreen() {
    const overlay = document.getElementById('loginOverlay');
    if (overlay) overlay.classList.remove('hidden');

    // 绑定登录按钮
    const loginBtn = document.getElementById('loginBtn');
    const guestBtn = document.getElementById('guestBtn');
    const userInput = document.getElementById('loginUser');
    const passInput = document.getElementById('loginPass');
    const errorEl = document.getElementById('loginError');

    // 清除旧事件（防止重复绑定）
    const doLogin = () => {
      const user = (userInput?.value || '').trim();
      const pass = (passInput?.value || '').trim();

      if (!user || !pass) {
        if (errorEl) errorEl.textContent = '请输入账号和密码';
        return;
      }

      const result = Auth.login(user, pass);
      if (result.success) {
        if (overlay) overlay.classList.add('hidden');
        this.startApp();
      } else {
        if (errorEl) errorEl.textContent = result.error;
        if (passInput) passInput.value = '';
      }
    };

    const doGuest = () => {
      Auth.loginAsGuest();
      if (overlay) overlay.classList.add('hidden');

      // 如果游客之前已完成第1天，直接显示升级提示
      if (Auth.guestDay1Done()) {
        this.startApp();
        setTimeout(() => this.showUpgradeModal(), 600);
      } else {
        this.startApp();
        // 欢迎提示
        setTimeout(() => {
          this.showModal('👀 游客体验模式',
            '<div class="upgrade-modal">' +
            '<div class="um-icon">🎒</div>' +
            '<p>欢迎体验暑假学习小助手！</p>' +
            '<p>你目前是<strong>游客体验模式</strong>，可以完整体验<strong>第1天</strong>的学习内容。</p>' +
            '<p style="color:var(--brown-light);font-size:0.85rem;">如需解锁全部53天内容，请联系管理员。</p>' +
            '<div class="um-contact">📱 微信：lqcf0524</div>' +
            '</div>',
            [{ text: '开始体验', cls: '', action: () => this.closeModal() }]
          );
        }, 400);
      }
    };

    if (loginBtn) loginBtn.onclick = doLogin;
    if (guestBtn) guestBtn.onclick = doGuest;

    // 回车登录
    if (passInput) {
      passInput.onkeydown = (e) => {
        if (e.key === 'Enter') doLogin();
      };
    }
    if (userInput) {
      userInput.onkeydown = (e) => {
        if (e.key === 'Enter') (passInput || userInput).focus();
      };
    }
  },

  /** 显示游客升级提示 */
  showUpgradeModal() {
    this.showModal('🔒 权限提示',
      '<div class="upgrade-modal">' +
      '<div class="um-icon">🔐</div>' +
      '<h3>体验模式已结束</h3>' +
      '<p>你目前是<strong>游客体验模式</strong>，仅能体验第一天的内容。</p>' +
      '<p>想要继续后面 52 天的学习、参加考核、获取徽章吗？</p>' +
      '<p style="margin-top:4px;">联系管理员开放全部权限：</p>' +
      '<div class="um-contact">📱 微信：lqcf0524</div>' +
      '<p style="font-size:0.8rem;color:var(--brown-light);margin-top:8px;">' +
      '开通后你将获得：全部53天学习内容 · 7次周考核 · 期末考试 · 积分徽章贴纸系统</p>' +
      '</div>',
      [
        { text: '我知道了', cls: '', action: () => this.closeModal() },
        { text: '🔑 切换账号登录', cls: 'secondary', action: () => { this.closeModal(); this.doLogout(); } }
      ]
    );
  },

  /** 退出登录 */
  doLogout() {
    Auth.logout();
    // 刷新页面回到登录界面
    location.reload();
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

    // 游客身份标签
    this.refreshGuestBadge();

    // 三科完成状态
    this.refreshSubjectDoors();

    // 考核入口（管理员始终可见）
    const examEntrance = document.getElementById('examEntrance');
    if (examEntrance) {
      if (dayNum >= 1 && dayNum <= 53 && Auth.isAdmin()) {
        examEntrance.style.display = 'block';
        // 考核日显示不同文字
        const examBtn = examEntrance.querySelector('.exam-btn');
        if (examBtn) {
          examBtn.textContent = isExam ? '🎯 今天是考核日！点击进入' : '📝 进入考核（可自选周数）';
        }
      } else {
        examEntrance.style.display = 'none';
      }
    }

    // 吉祥物
    this.updateMascot();
  },

  /** 游客身份标识 */
  refreshGuestBadge() {
    // 在首页顶部显示游客标签
    let badge = document.getElementById('guestBadge');
    if (Auth.isGuest()) {
      if (!badge) {
        badge = document.createElement('div');
        badge.id = 'guestBadge';
        badge.style.cssText = 'text-align:center;padding:6px;margin:4px 0;background:#FFF3E0;' +
          'border-radius:10px;font-size:0.82rem;color:#E65100;border:1px dashed #FFB74D;';
        const header = document.querySelector('.home-header');
        if (header) header.after(badge);
      }
      const dayNum = Schedule.getDayNumber();
      if (dayNum > 1 || Auth.guestDay1Done()) {
        badge.innerHTML = '🔒 游客模式 · 仅可体验第1天 · <a href="#" onclick="App.showUpgradeModal();return false;" style="color:#FF7B42;">解锁全部</a>';
      } else {
        badge.innerHTML = '👀 游客体验中 · 第1天免费体验 · <a href="#" onclick="App.showUpgradeModal();return false;" style="color:#FF7B42;">了解详情</a>';
      }
    } else {
      if (badge) badge.remove();
    }
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
      streak: ['连续' + data.streak + '天！超棒！', '坚持就是胜利！'],
      guest: ['欢迎来体验！', '试试第一天的内容吧~']
    };

    let pool;
    if (Auth.isGuest() && !allDone) pool = speeches.guest;
    else if (isExam && !allDone) pool = speeches.exam;
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
    const dayNum = Schedule.getDayNumber();

    // 游客权限检查
    if (Auth.isGuest()) {
      if (dayNum > 1 || Auth.guestDay1Done()) {
        this.showUpgradeModal();
        return;
      }
    }

    const names = { chinese: '语文 · 名著阅读', math: '数学 · 计算题', english: '英语 · 单词背诵' };
    const titleEl = document.getElementById('practiceTitle');
    if (titleEl) titleEl.textContent = names[subject];

    // 重置反馈区
    const feedbackEl = document.getElementById('practiceFeedback');
    if (feedbackEl) feedbackEl.innerHTML = '';

    this.switchView('practice');
    Quiz.startPractice(subject);
  },

  /** 打开考核（管理员显示周数选择） */
  openExam() {
    if (!Auth.isAdmin()) {
      this.showUpgradeModal();
      return;
    }

    // 显示周数选择弹窗
    const currentWeek = Schedule.getWeekNumber();
    let weekBtns = '';
    for (let w = 1; w <= 8; w++) {
      const isCurrent = w === currentWeek;
      const label = w === 8 ? '🏆 期末' : '第' + w + '周';
      weekBtns += '<button class="week-select-btn' + (isCurrent ? ' current' : '') +
        '" onclick="App.startExamWeek(' + w + ')" style="display:block;width:100%;margin:6px 0;padding:12px;' +
        'border:2px solid ' + (isCurrent ? 'var(--orange)' : 'var(--gray-light)') +
        ';border-radius:12px;background:' + (isCurrent ? '#FFF5F0' : '#fff') +
        ';font-size:1rem;cursor:pointer;font-family:var(--font-hand);">' +
        label + (isCurrent ? ' ← 当前' : '') + '</button>';
    }

    this.showModal('📝 选择考核周数',
      '<p style="text-align:center;color:var(--brown-light);margin-bottom:8px;">全部考卷已开放，可随时挑战任意一周</p>' +
      '<div style="max-height:50vh;overflow-y:auto;">' + weekBtns + '</div>',
      [{ text: '取消', cls: 'secondary', action: () => this.closeModal() }]
    );
  },

  /** 开始指定周的考核 */
  startExamWeek(week) {
    this.closeModal();
    const titleEl = document.getElementById('examTitle');
    if (titleEl) {
      if (week === 8) titleEl.textContent = '🏆 期末考试';
      else titleEl.textContent = '📝 第' + week + '周考核';
    }
    this.switchView('exam');
    Quiz.startExam(week);
  },

  /** 从日历点击进入指定天学习 */
  goToDay(dayNum, dateStr) {
    if (!Auth.isAdmin()) {
      // 游客只能看第1天
      if (dayNum > 1) {
        this.showUpgradeModal();
        return;
      }
    }

    // 覆写日期，让进度保存到对应天
    Schedule.setOverrideDate(dateStr);

    // 跳到首页，用户可选择学科
    this.switchView('home');
    this.refreshHome();

    // 更新标题提示
    const weekInfo = document.getElementById('weekInfo');
    if (weekInfo) {
      weekInfo.textContent = '📅 正在学习：第' + dayNum + '天（' +
        (new Date(dateStr).getMonth() + 1) + '月' + new Date(dateStr).getDate() + '日）';
      weekInfo.style.color = 'var(--orange)';
    }
  },

  /** 返回首页 */
  backToHome() {
    Quiz.stopTimer();

    // 检查游客是否完成了第1天
    this.checkGuestDay1Complete();

    // 清除日期覆写
    Schedule.clearOverride();

    this.switchView('home');
    this.refreshHome();
  },

  /** 检查游客是否完成了第1天的全部三科 */
  checkGuestDay1Complete() {
    if (!Auth.isGuest()) return;
    if (Auth.guestDay1Done()) return;

    const dayNum = Schedule.getDayNumber();
    if (dayNum !== 1) return;

    // 检查三科是否全部完成
    if (Storage.isAllDoneToday()) {
      Auth.markGuestDay1Done();
      // 延迟显示升级提示，等回到首页后再弹
      setTimeout(() => this.showUpgradeModal(), 800);
    }
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

    // 53天日历（全部可点击）
    for (let day = 1; day <= 53; day++) {
      const d = new Date(Schedule.START_DATE);
      d.setDate(d.getDate() + day - 1);
      const dateStr = d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0');

      const progress = data.dailyProgress[dateStr];
      const isExam = (day % 7 === 0) || (day >= 50 && day === 53);
      const today = Schedule.getDayNumber();
      let cls = 'cal-day clickable';

      if (day === today) cls += ' today';
      else if (day > today) cls += ' future';

      if (progress) {
        const subjects = [progress.chinese, progress.math, progress.english];
        const completed = subjects.filter(s => s?.completed).length;
        if (completed === 3) cls += ' completed';
        else if (completed > 0) cls += ' partial';
      }

      if (isExam) cls += ' exam';

      html += '<div class="' + cls + '" onclick="App.goToDay(' + day + ",'" + dateStr + "')\" title=\"" +
        (d.getMonth() + 1) + '月' + d.getDate() + '日' + (isExam ? ' 考核日' : '') + '\">' + day + '</div>';
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

  /** 注册 Service Worker（离线缓存） */
  registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('📦 SW 已注册:', reg.scope))
        .catch(err => console.warn('SW 注册失败（可能是file://协议限制，正常现象）:', err));
    }
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

    // 退出登录按钮
    const logoutBtn = document.getElementById('settingLogout');
    if (logoutBtn) {
      logoutBtn.onclick = () => this.doLogout();
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
