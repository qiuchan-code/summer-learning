/**
 * rewards.js — 积分、徽章、贴纸系统
 */

const Rewards = {
  /** 徽章定义 */
  BADGES: [
    { id: 'first_day', name: '初次见面', icon: '👋', desc: '完成第一天学习' },
    { id: '7day_streak', name: '七日之约', icon: '🔥', desc: '连续7天打卡' },
    { id: '30day_streak', name: '坚持就是胜利', icon: '💪', desc: '连续30天打卡' },
    { id: 'perfect_attendance', name: '全勤奖', icon: '🏆', desc: '完成全部53天' },
    { id: 'math_master', name: '数学小达人', icon: '🧮', desc: '3次数学考核满分' },
    { id: 'chinese_master', name: '阅读小能手', icon: '📖', desc: '3次语文考核满分' },
    { id: 'english_master', name: '英语小天才', icon: '🌟', desc: '3次英语考核满分' },
    { id: 'triple_perfect', name: '三连满分', icon: '💎', desc: '一次考核三科全部满分' },
    { id: 'exam_all_pass', name: '逢考必过', icon: '🎯', desc: '7次考核全部通过' },
    { id: 'star_1000', name: '千星收集者', icon: '⭐', desc: '累计获得1000积分' }
  ],

  /** 贴纸定义 */
  STICKERS: [
    { id: 'exam_1', name: '启程之星', icon: '🚀', desc: '通过第1周考核' },
    { id: 'exam_2', name: '勇气之盾', icon: '🛡️', desc: '通过第2周考核' },
    { id: 'exam_3', name: '智慧之书', icon: '📚', desc: '通过第3周考核' },
    { id: 'exam_4', name: '勤奋之笔', icon: '✏️', desc: '通过第4周考核' },
    { id: 'exam_5', name: '坚持之心', icon: '❤️', desc: '通过第5周考核' },
    { id: 'exam_6', name: '飞跃之翼', icon: '🦋', desc: '通过第6周考核' },
    { id: 'exam_7', name: '胜利之杯', icon: '🏆', desc: '通过第7周考核' },
    { id: 'easter_ladybug', name: '神秘瓢虫', icon: '🐞', desc: '找到了隐藏的瓢虫！' },
    { id: 'easter_dance', name: '舞蹈大师', icon: '💃', desc: '让小书虫跳了舞！' },
    { id: 'easter_konami', name: '秘密代码', icon: '🎮', desc: '输入了秘密代码！' }
  ],

  /**
   * 完成练习后检查并发放奖励
   */
  checkAndAward(subject, score, total) {
    const data = Storage.load();
    const percent = total > 0 ? (score / total * 100) : 0;

    // 基础积分：完成一科 +15
    Storage.addStars(15);
    this.showStarAnimation(15);

    // 满分额外 +10
    if (percent === 100) {
      Storage.addStars(10);
      this.showStarAnimation(10);
    }

    // 三科全完成额外 +20
    if (Storage.isAllDoneToday()) {
      Storage.addStars(20);
      this.showStarAnimation(20);
    }

    // 更新连续打卡
    Storage.updateStreak();

    // 检查徽章
    this.checkBadges();
  },

  /**
   * 检查连续打卡徽章
   */
  checkStreak(streak) {
    if (streak >= 30) {
      if (Storage.unlockBadge('30day_streak')) this.showBadgeUnlock('30day_streak');
    }
    if (streak >= 7) {
      if (Storage.unlockBadge('7day_streak')) this.showBadgeUnlock('7day_streak');
    }
  },

  /**
   * 考核后检查奖励
   */
  checkExamRewards(weekNum, results) {
    const passed = results.passed;
    if (passed) {
      Storage.unlockSticker('exam_' + weekNum);

      // 单科 ≥ 80 +30
      ['chinese', 'math', 'english'].forEach(sub => {
        const pct = results[sub].score / results[sub].total * 100;
        if (pct >= 100) {
          Storage.addStars(50);
        } else if (pct >= 80) {
          Storage.addStars(30);
        }
      });

      // 三科全部满分
      const allPerfect = ['chinese', 'math', 'english'].every(
        sub => results[sub].score === results[sub].total
      );
      if (allPerfect) {
        Storage.addStars(30);
        Storage.unlockBadge('triple_perfect');
      }
    }

    // 更新连续打卡
    Storage.updateStreak();

    // 检查徽章
    this.checkBadges();
  },

  /**
   * 检查所有徽章条件
   */
  checkBadges() {
    const data = Storage.load();

    // 第一天完成
    if (Object.keys(data.dailyProgress).length >= 1) {
      Storage.unlockBadge('first_day');
    }

    // 数学满分3次
    const mathPerfects = Object.values(data.examResults)
      .filter(r => r.math && r.math.score === r.math.total).length;
    if (mathPerfects >= 3) Storage.unlockBadge('math_master');

    // 语文满分3次
    const chPerfects = Object.values(data.examResults)
      .filter(r => r.chinese && r.chinese.score === r.chinese.total).length;
    if (chPerfects >= 3) Storage.unlockBadge('chinese_master');

    // 英语满分3次
    const enPerfects = Object.values(data.examResults)
      .filter(r => r.english && r.english.score === r.english.total).length;
    if (enPerfects >= 3) Storage.unlockBadge('english_master');

    // 全勤
    if (Object.keys(data.dailyProgress).length >= 53) {
      Storage.unlockBadge('perfect_attendance');
    }

    // 全部考核通过
    const allPassed = [1, 2, 3, 4, 5, 6, 7].every(
      w => data.examResults[w]?.passed
    );
    if (allPassed) Storage.unlockBadge('exam_all_pass');

    // 千星
    if (data.stars >= 1000) Storage.unlockBadge('star_1000');
  },

  /**
   * 星星飞行动画（视觉反馈）
   */
  showStarAnimation(count) {
    // 用 CSS 动画展示浮动星星
    const container = document.getElementById('starJar');
    if (!container) return;
    const star = document.createElement('span');
    star.textContent = '+' + count + '⭐';
    star.style.cssText = `
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      font-size: 2rem; font-weight: bold; z-index: 300; pointer-events: none;
      animation: starFloat 1.5s ease-out forwards;
      font-family: 'ZCOOL KuaiLe', cursive;
    `;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1600);
  },

  /**
   * 徽章解锁弹窗
   */
  showBadgeUnlock(badgeId) {
    const badge = this.BADGES.find(b => b.id === badgeId);
    if (!badge) return;
    // 延迟展示，避免与其他弹窗冲突
    setTimeout(() => {
      App.showModal(
        '🎉 获得新徽章！',
        `<div style="font-size:3rem;">${badge.icon}</div>
         <h3>${badge.name}</h3>
         <p>${badge.desc}</p>`,
        [{ text: '太棒了！', cls: '' }]
      );
    }, 500);
  }
};
