/**
 * storage.js — localStorage 数据读写封装
 * 所有用户进度数据统一用 "summer_learning" 这个 key 存储。
 */

const Storage = {
  KEY: 'summer_learning',

  /** 默认数据结构 */
  defaultData() {
    return {
      startDate: '2026-07-10',
      stars: 0,
      streak: 0,
      lastActiveDate: '',
      dailyProgress: {},   // { '2026-07-10': { chinese: {score, completed}, math:{...}, english:{...} } }
      examResults: {},     // { '1': { chinese: {score,total,time}, math:{...}, english:{...}, passed: true } }
      stickers: [],        // ['sticker_1', 'sticker_2', ...]
      badges: [],          // ['7day_streak', 'math_master', ...]
      settings: {
        difficulty: 'easy',
        sound: true
      },
      easterEggsFound: 0
    };
  },

  /** 读取全部数据 */
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return this.defaultData();
      // 深度合并，确保新字段不会丢失
      return Object.assign({}, this.defaultData(), JSON.parse(raw));
    } catch (e) {
      console.warn('数据读取失败，使用默认数据', e);
      return this.defaultData();
    }
  },

  /** 保存全部数据 */
  save(data) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    } catch (e) {
      console.error('数据保存失败', e);
      alert('哎呀，保存失败了！可能是存储空间不够了 😢');
    }
  },

  /** 获取今日的练习进度 */
  getTodayProgress() {
    const data = this.load();
    const today = Schedule.getToday();
    return data.dailyProgress[today] || {};
  },

  /** 保存今日某科的练习成绩 */
  saveSubjectProgress(subject, score, total, timeSpent) {
    const data = this.load();
    const today = Schedule.getToday();
    if (!data.dailyProgress[today]) data.dailyProgress[today] = {};
    data.dailyProgress[today][subject] = {
      score, total, timeSpent,
      completed: true,
      completedAt: new Date().toISOString()
    };
    data.lastActiveDate = today;
    this.save(data);
    Rewards.checkAndAward(subject, score, total);
  },

  /** 检查今日三科是否全部完成 */
  isAllDoneToday() {
    const p = this.getTodayProgress();
    return p.chinese?.completed && p.math?.completed && p.english?.completed;
  },

  /** 获取考核成绩 */
  getExamResult(weekNum) {
    const data = this.load();
    return data.examResults[weekNum] || null;
  },

  /** 保存考核成绩 */
  saveExamResult(weekNum, results) {
    const data = this.load();
    data.examResults[weekNum] = results;
    this.save(data);
  },

  /** 更新星星 */
  addStars(n) {
    const data = this.load();
    data.stars += n;
    this.save(data);
    return data.stars;
  },

  /** 更新连续打卡 */
  updateStreak() {
    const data = this.load();
    const today = Schedule.getToday();
    const yesterday = Schedule.getDateOffset(-1);

    if (data.lastActiveDate === today) return data.streak; // 今天已经打过卡

    if (data.lastActiveDate === yesterday) {
      data.streak += 1;
    } else {
      data.streak = 1;
    }
    data.lastActiveDate = today;
    this.save(data);
    Rewards.checkStreak(data.streak);
    return data.streak;
  },

  /** 获取等级称号 */
  getRank() {
    const stars = this.load().stars;
    if (stars >= 1500) return '👑 暑假之王';
    if (stars >= 1000) return '🏅 学霸少年';
    if (stars >= 600) return '⭐ 博学之星';
    if (stars >= 300) return '🌳 智慧小树';
    if (stars >= 100) return '🌿 知识小苗';
    return '🌱 学习小芽';
  },

  /** 解锁贴纸 */
  unlockSticker(stickerId) {
    const data = this.load();
    if (!data.stickers.includes(stickerId)) {
      data.stickers.push(stickerId);
      this.save(data);
    }
  },

  /** 解锁徽章 */
  unlockBadge(badgeId) {
    const data = this.load();
    if (!data.badges.includes(badgeId)) {
      data.badges.push(badgeId);
      this.save(data);
      return true; // 新解锁
    }
    return false;
  },

  /** 导出数据 */
  exportData() {
    const data = this.load();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '暑假学习进度_' + Schedule.getToday() + '.json';
    a.click();
    URL.revokeObjectURL(url);
  },

  /** 导入数据 */
  importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          this.save(data);
          alert('导入成功！刷新页面即可看到进度 🎉');
          location.reload();
        } catch (err) {
          alert('文件格式不对哦，请选择正确的进度文件 📄');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  },

  /** 重置所有数据（需要确认） */
  resetAll() {
    if (confirm('确定要重置所有学习数据吗？这个操作不能撤销哦！\n\n所有积分、徽章、进度都会被清除 😢')) {
      if (confirm('真的真的确定吗？再给你一次反悔的机会~')) {
        localStorage.removeItem(this.KEY);
        location.reload();
      }
    }
  }
};
