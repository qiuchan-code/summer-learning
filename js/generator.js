/**
 * generator.js — 数学题动态生成器
 * 根据难度和类型实时生成计算题，确保每次练习都有新题。
 */

const Generator = {

  /** 返回 min~max 之间的随机整数（含两端） */
  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /** 洗牌算法 */
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /**
   * 根据周数生成对应难度的数学题
   * @param {number} weekNum - 第几周 (1-7)
   * @param {number} count - 生成题数
   * @param {string} type - 'oral'口算 | 'written'笔算 | 'word'应用题
   */
  generate(weekNum, count, type) {
    let problems = [];
    const seeds = Math.max(count, 30); // 多生成一些然后随机取

    switch (type) {
      case 'oral':
        problems = this.generateOral(weekNum, seeds);
        break;
      case 'written':
        problems = this.generateWritten(weekNum, seeds);
        break;
      case 'word':
        problems = this.pickWordProblems(weekNum, count);
        break;
      default:
        problems = this.generateOral(weekNum, seeds);
    }

    return this.shuffle(problems).slice(0, count);
  },

  /** 口算题生成 */
  generateOral(weekNum, count) {
    const problems = [];
    for (let i = 0; i < count; i++) {
      let a, b, op, answer, question;

      if (weekNum <= 1) {
        // 20以内加减
        op = Math.random() < 0.5 ? '+' : '-';
        if (op === '+') {
          a = this.rand(2, 9);
          b = this.rand(2, 9);
          answer = a + b;
          question = a + ' + ' + b + ' = ？';
        } else {
          a = this.rand(6, 19);
          b = this.rand(1, a - 1);
          answer = a - b;
          question = a + ' - ' + b + ' = ？';
        }
      } else if (weekNum <= 2) {
        // 20以内进位加、退位减
        op = Math.random() < 0.5 ? '+' : '-';
        if (op === '+') {
          a = this.rand(5, 9);
          b = this.rand(5, 15 - a);
          if (a + b < 10) b = this.rand(10 - a, 9);
          answer = a + b;
          question = a + ' + ' + b + ' = ？';
        } else {
          a = this.rand(11, 18);
          b = this.rand(2, 9);
          answer = a - b;
          question = a + ' - ' + b + ' = ？';
        }
      } else if (weekNum <= 3) {
        // 100以内无进退位
        op = Math.random() < 0.5 ? '+' : '-';
        if (op === '+') {
          a = this.rand(10, 70);
          b = this.rand(10, 90 - a);
          const onesA = a % 10, onesB = b % 10;
          if (onesA + onesB >= 10) b -= (onesA + onesB - 9); // 确保个位不进位
          answer = a + b;
          question = a + ' + ' + b + ' = ？';
        } else {
          a = this.rand(20, 99);
          b = this.rand(10, a);
          const onesA = a % 10, onesB = b % 10;
          if (onesA < onesB) b += (onesB - onesA); // 确保个位不退位
          answer = a - b;
          question = a + ' - ' + b + ' = ？';
        }
      } else if (weekNum <= 4) {
        // 100以内有进退位 + 乘法初步
        const r = Math.random();
        if (r < 0.5) {
          op = '+';
          a = this.rand(20, 80);
          b = this.rand(11, 99 - a);
          answer = a + b;
          question = a + ' + ' + b + ' = ？';
        } else if (r < 0.8) {
          op = '-';
          a = this.rand(30, 99);
          b = this.rand(11, a);
          answer = a - b;
          question = a + ' - ' + b + ' = ？';
        } else {
          op = '×';
          a = this.rand(2, 6);
          b = this.rand(1, 9);
          answer = a * b;
          question = a + ' × ' + b + ' = ？';
        }
      } else if (weekNum <= 6) {
        // 乘法为主 + 除法初步
        const r = Math.random();
        if (r < 0.4) {
          op = '×';
          a = this.rand(2, 9);
          b = this.rand(2, 9);
          answer = a * b;
          question = a + ' × ' + b + ' = ？';
        } else if (r < 0.7) {
          op = '÷';
          b = this.rand(2, 9);
          const quotient = this.rand(1, 9);
          a = b * quotient;
          answer = a / b;
          question = a + ' ÷ ' + b + ' = ？';
        } else {
          op = Math.random() < 0.5 ? '+' : '-';
          a = this.rand(20, 99);
          b = this.rand(10, a);
          answer = op === '+' ? a + b : a - b;
          question = a + ' ' + op + ' ' + b + ' = ？';
        }
      } else {
        // 综合：混合运算
        const r = Math.random();
        if (r < 0.3) {
          a = this.rand(2, 9); b = this.rand(2, 9);
          const c = this.rand(1, 5);
          answer = a * b + c;
          question = a + ' × ' + b + ' + ' + c + ' = ？';
        } else if (r < 0.5) {
          a = this.rand(2, 9); b = this.rand(2, 9);
          const c = this.rand(1, a * b - 1);
          answer = a * b - c;
          question = a + ' × ' + b + ' - ' + c + ' = ？';
        } else if (r < 0.7) {
          b = this.rand(2, 9); const q = this.rand(1, 9);
          a = b * q; const c = this.rand(1, 5);
          answer = a / b + c;
          question = a + ' ÷ ' + b + ' + ' + c + ' = ？';
        } else {
          a = this.rand(3, 9); b = this.rand(1, 6);
          const c = this.rand(1, 9);
          answer = a * b + c - this.rand(1, c + 3);
          question = a + ' × ' + b + ' + ' + c + ' - ' + (c - this.rand(1, 2)) + ' = ？';
          // 简化：重新生成一个靠谱的题
          answer = a * b + c - Math.min(c, 3);
          question = a + ' × ' + b + ' + ' + c + ' - ' + Math.min(c, 3) + ' = ？';
        }
      }

      problems.push({
        id: 'oral_' + i + '_' + Date.now(),
        type: 'fill_blank',
        question: question,
        answer: answer,
        difficulty: weekNum,
        category: 'oral'
      });
    }
    return problems;
  },

  /** 笔算题（竖式练习） */
  generateWritten(weekNum, count) {
    const problems = [];
    for (let i = 0; i < count; i++) {
      let a, b, op, answer, question;

      if (weekNum <= 3) {
        op = Math.random() < 0.5 ? '+' : '-';
        a = this.rand(20, 99);
        if (op === '+') {
          b = this.rand(10, 99 - a);
          answer = a + b;
        } else {
          b = this.rand(10, a);
          answer = a - b;
        }
      } else if (weekNum <= 5) {
        const r = Math.random();
        if (r < 0.6) {
          op = Math.random() < 0.5 ? '+' : '-';
          a = this.rand(30, 99);
          b = op === '+' ? this.rand(11, 99 - a) : this.rand(11, a);
          answer = op === '+' ? a + b : a - b;
        } else {
          op = '×';
          a = this.rand(2, 9);
          b = this.rand(1, 9);
          answer = a * b;
        }
      } else {
        const r = Math.random();
        if (r < 0.4) {
          op = '÷';
          b = this.rand(2, 9);
          answer = this.rand(1, 9);
          a = b * answer;
        } else if (r < 0.7) {
          op = '×';
          a = this.rand(3, 9);
          b = this.rand(3, 9);
          answer = a * b;
        } else {
          op = Math.random() < 0.5 ? '+' : '-';
          a = this.rand(30, 99);
          b = op === '+' ? this.rand(20, 99 - a) : this.rand(15, a);
          answer = op === '+' ? a + b : a - b;
        }
      }

      question = a + ' ' + (op || '+') + ' ' + b + ' = ？';
      problems.push({
        id: 'written_' + i + '_' + Date.now(),
        type: 'fill_blank',
        question: question,
        answer: answer,
        difficulty: weekNum,
        category: 'written',
        showVertical: true // 提示UI显示竖式格式
      });
    }
    return problems;
  },

  /** 从静态题库选取应用题 */
  pickWordProblems(weekNum, count) {
    if (typeof WORD_PROBLEMS === 'undefined') return [];
    // 根据周数过滤难度合适的题
    const suitable = WORD_PROBLEMS.filter(p => {
      if (weekNum <= 3) return p.difficulty <= 3;
      if (weekNum <= 5) return p.difficulty <= 5;
      return true;
    });
    return this.shuffle(suitable).slice(0, count);
  }
};
