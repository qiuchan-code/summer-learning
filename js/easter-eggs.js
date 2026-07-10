/**
 * easter-eggs.js — 彩蛋与隐藏互动
 * 为小朋友准备的惊喜小功能
 */

const EasterEggs = {
  mascotClicks: 0,
  mascotTimer: null,
  konamiBuffer: '',
  ladybugVisible: false,

  init() {
    this.bindMascotClicks();
    this.bindKonamiCode();
    this.spawnLadybug();
    this.dailyJoke();
  },

  /** 吉祥物快速点击 → 跳舞 */
  bindMascotClicks() {
    const mascot = document.getElementById('mascot');
    if (!mascot) return;

    mascot.addEventListener('click', () => {
      this.mascotClicks++;
      if (this.mascotTimer) clearTimeout(this.mascotTimer);
      this.mascotTimer = setTimeout(() => { this.mascotClicks = 0; }, 1500);

      if (this.mascotClicks >= 5) {
        this.mascotClicks = 0;
        this.mascotDance();
      }
    });
  },

  /** 吉祥物跳舞 */
  mascotDance() {
    const mascot = document.getElementById('mascot');
    const speech = document.getElementById('mascotSpeech');
    if (!mascot) return;

    const danceFrames = ['🐛', '🦋', '🐛', '🦋', '💃', '🕺', '🐛'];
    let i = 0;
    if (speech) speech.textContent = '啦啦啦~我在跳舞！';

    const interval = setInterval(() => {
      mascot.textContent = danceFrames[i % danceFrames.length];
      mascot.style.transform = 'rotate(' + (Math.random() * 20 - 10) + 'deg) scale(1.2)';
      i++;
      if (i >= danceFrames.length) {
        clearInterval(interval);
        mascot.style.transform = '';
        mascot.textContent = '🐛';
        if (speech) speech.textContent = '嘿嘿，被你发现啦！';
        Storage.unlockSticker('easter_dance');
        Storage.addStars(5);
        setTimeout(() => App.refreshHome(), 1500);
      }
    }, 250);
  },

  /** 科乐美代码 ↑↑↓↓←→←→BA */
  bindKonamiCode() {
    const konami = 'ArrowUp ArrowUp ArrowDown ArrowDown ArrowLeft ArrowRight ArrowLeft ArrowRight b a';
    document.addEventListener('keydown', (e) => {
      this.konamiBuffer += (e.key.length === 1 ? e.key.toLowerCase() : e.key) + ' ';
      if (this.konamiBuffer.length > konami.length + 50) {
        this.konamiBuffer = this.konamiBuffer.slice(-konami.length - 10);
      }
      if (this.konamiBuffer.includes(konami)) {
        this.konamiBuffer = '';
        this.rainbowMode();
      }
    });
  },

  /** 彩虹模式 */
  rainbowMode() {
    const colors = ['#FF6B6B', '#FFE74C', '#5BAF6B', '#4A90D9', '#C084FC', '#FF7B42'];
    let i = 0;
    const bg = document.body;
    const originalBg = bg.style.backgroundColor;

    const interval = setInterval(() => {
      bg.style.backgroundColor = colors[i % colors.length];
      i++;
    }, 300);

    Storage.unlockSticker('easter_konami');
    Storage.addStars(5);

    setTimeout(() => {
      clearInterval(interval);
      bg.style.backgroundColor = originalBg;
      App.refreshHome();
    }, 3000);
  },

  /** 随机出现隐藏瓢虫 */
  spawnLadybug() {
    const chance = 0.1; // 10%概率
    if (Math.random() > chance) return;

    // 只在首页显示
    if (!document.getElementById('view-home')?.classList.contains('active')) return;

    setTimeout(() => {
      if (this.ladybugVisible) return;
      this.ladybugVisible = true;

      const bug = document.createElement('div');
      bug.textContent = '🐞';
      bug.style.cssText = `
        position: fixed; bottom: 100px; right: 20px; font-size: 2rem;
        cursor: pointer; z-index: 150; animation: bounce 1s infinite;
        transition: all 0.3s;
      `;
      bug.title = '点我！';
      bug.onclick = () => {
        bug.remove();
        this.ladybugVisible = false;
        Storage.unlockSticker('easter_ladybug');
        Storage.addStars(5);
        App.showModal('🐞 发现隐藏瓢虫！',
          '<p>你真细心！找到了隐藏的小瓢虫~</p><p>⭐ +5 积分！</p>',
          [{ text: '耶！', cls: '' }]
        );
      };
      document.body.appendChild(bug);

      // 10秒后自动消失
      setTimeout(() => {
        if (bug.parentNode) {
          bug.remove();
          this.ladybugVisible = false;
        }
      }, 10000);
    }, 5000 + Math.random() * 10000);
  },

  /** 每日小笑话/冷知识 */
  dailyJoke() {
    const jokes = [
      '为什么数学书总是很忧郁？因为它有太多的问题（problems）！',
      '什么东西越洗越脏？水！',
      '"红"这个字读作"hóng"，但"江"这个字不读"gōng"哦~',
      '你知道吗？猫有32块肌肉来控制耳朵！',
      '英语里"goodbye"来自"God be with you"（上帝与你同在）',
      '1到100全部加起来等于5050，高斯8岁就算出来了！',
      '李白写了1000多首诗，但现存只有900多首了~',
      '铅笔的"铅"其实不是铅做的，是石墨！'
    ];
    const today = new Date();
    const idx = (today.getDate() + today.getMonth() * 31) % jokes.length;
    console.log('💡 每日小知识：' + jokes[idx]);
  }
};
