/**
 * quiz.js — 题目引擎
 * 负责：题目渲染、用户作答、判分、组卷
 */

const Quiz = {
  currentSubject: null,
  currentQuestions: [],
  currentIndex: 0,
  answers: [],       // 用户答案记录
  isExam: false,
  examSubject: null,
  examResults: {},   // 考核各科成绩
  timerInterval: null,
  timeElapsed: 0,
  timeLimit: 0,

  /**
   * 开始每日练习
   * @param {string} subject - 'chinese' | 'math' | 'english'
   */
  startPractice(subject) {
    this.currentSubject = subject;
    this.currentIndex = 0;
    this.answers = [];
    this.isExam = false;
    this.timeElapsed = 0;

    // 加载题目
    this.currentQuestions = this.loadPracticeQuestions(subject);

    // 设置计时器
    const timeMap = { chinese: 45 * 60, math: 45 * 60, english: 40 * 60 };
    this.timeLimit = timeMap[subject];
    this.startTimer('practiceTimer');

    // 渲染第一题
    this.renderQuestion();
    this.updateProgress();
  },

  /**
   * 加载练习题目（混合题库 + 动态生成）
   */
  loadPracticeQuestions(subject) {
    // 全部内容开放，不限制周数
    const maxWeek = 7;

    switch (subject) {
      case 'chinese': {
        // 从全部语文题库随机选1篇阅读
        if (typeof CHINESE_READINGS === 'undefined') return [];
        const reading = CHINESE_READINGS[Math.floor(Math.random() * CHINESE_READINGS.length)];
        return this.expandReading(reading);
      }

      case 'math': {
        // 口算10 + 笔算15 + 应用题5 = 30题，使用全难度范围
        const oral = Generator.generate(maxWeek, 10, 'oral');
        const written = Generator.generate(maxWeek, 15, 'written');
        const word = Generator.generate(maxWeek, 5, 'word');
        return [...oral, ...written, ...word];
      }

      case 'english': {
        // 从全部200词中随机选
        if (typeof ENGLISH_WORDS === 'undefined') return [];
        const words = this.pickDailyWords(maxWeek, 8);
        return this.expandEnglishWords(words);
      }

      default:
        return [];
    }
  },

  /**
   * 将一篇阅读展开为多个题目
   */
  expandReading(reading) {
    if (!reading) return [];
    const questions = [];

    // 第一段：阅读提示
    questions.push({
      type: 'info',
      title: '📖 仔细阅读下面的短文',
      content: reading.passage,
      hasPinyin: reading.hasPinyin
    });

    // 展开配套题目
    if (reading.questions) {
      reading.questions.forEach((q, i) => {
        questions.push({
          ...q,
          id: 'ch_' + reading.id + '_' + i,
          stage: q.stage || '阅读理解'
        });
      });
    }

    return questions;
  },

  /**
   * 选取今日英语词汇
   */
  pickDailyWords(week, count) {
    // 本周新词 + 之前学过的词混合，打乱确保随机性
    const allWords = [...ENGLISH_WORDS];
    const newWords = allWords.filter(w => w.week === week);
    const oldWords = allWords.filter(w => w.week < week);

    // 从新词中随机选
    const shuffledNew = [...newWords].sort(() => Math.random() - 0.5);
    const selected = [...shuffledNew];

    // 从旧词中随机挑一些复习
    const reviewsNeeded = Math.max(0, count - selected.length);
    if (reviewsNeeded > 0 && oldWords.length > 0) {
      const shuffledOld = [...oldWords].sort(() => Math.random() - 0.5);
      selected.push(...shuffledOld.slice(0, reviewsNeeded));
    }

    // 不够的话用更多新词补充
    while (selected.length < count && shuffledNew.length > selected.length) {
      selected.push(shuffledNew[selected.length]);
    }

    // 最终打乱顺序（确保新旧词混合，不按类别排列）
    return [...selected].sort(() => Math.random() - 0.5).slice(0, count);
  },

  /**
   * 将英语单词列表展开为练习题
   */
  expandEnglishWords(words) {
    if (!words || words.length === 0) return [];
    const questions = [];

    words.forEach((word, idx) => {
      // 学习提示
      questions.push({
        type: 'info',
        title: '🔤 学习新词',
        content: word.emoji + ' ' + word.en + ' — ' + word.zh,
        stage: '新词学习'
      });

      // 看图识词
      questions.push({
        type: 'multiple_choice',
        question: word.emoji + ' 这个图对应的英文是？',
        ...this.generateWordOptions(word, words, 'en'),
        id: 'en_pic_' + idx,
        stage: '看图识词',
        explanation: word.emoji + ' = ' + word.en + '（' + word.zh + '）'
      });

      // 中英配对
      questions.push({
        type: 'multiple_choice',
        question: '"' + word.zh + '" 的英文是？',
        ...this.generateWordOptions(word, words, 'en'),
        id: 'en_match_' + idx,
        stage: '中英配对',
        explanation: word.zh + ' = ' + word.en
      });
    });

    // 词汇归类题（确保有同类词可出题）
    if (words.length >= 3) {
      // 找一个有同类词的单词来出归类题
      const wordsWithSameCategory = words.filter(w =>
        words.some(o => o !== w && o.category === w.category)
      );
      if (wordsWithSameCategory.length > 0) {
        const word = wordsWithSameCategory[Math.floor(Math.random() * wordsWithSameCategory.length)];
        const others = words.filter(w => w !== word);
        const catResult = this.generateCategoryOptions(word, others);
        if (catResult) {
          // 找到同类词中的正确答案用于解释
          const sameWord = others.find(w => w.category === word.category);
          questions.push({
            type: 'multiple_choice',
            question: '下面哪个和 "' + word.en + '" （' + word.zh + '）是同一类？',
            ...catResult,
            id: 'en_cat_' + word.id,
            stage: '词汇归类',
            explanation: word.en + '（' + word.zh + '）和正确答案同属"' + word.category + '"类'
          });
        }
      }
    }

    return questions;
  },

  /** 为单选题生成干扰项，随机排列选项位置 */
  generateWordOptions(correct, allWords, field) {
    const others = allWords.filter(w => w[field] !== correct[field]);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    const distractors = shuffled.slice(0, 3).map(w => w[field]);
    const correctVal = correct[field];
    const options = [correctVal, ...distractors];
    // Fisher-Yates 打乱，让正确答案不总在第一个
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return { options: options, answer: options.indexOf(correctVal) };
  },

  /** 生成归类题选项：正确答案是另一个同类词，不是原词本身 */
  generateCategoryOptions(correct, others) {
    const sameCategory = others.filter(w => w.category === correct.category);
    const diffCategory = others.filter(w => w.category !== correct.category);

    // 没有同类词，无法出归类题
    if (sameCategory.length === 0) return null;

    // 正确答案从同类词中选（不是原词本身）
    const shuffledSame = [...sameCategory].sort(() => Math.random() - 0.5);
    const shuffledDiff = [...diffCategory].sort(() => Math.random() - 0.5);

    let opts = [shuffledSame[0].en];
    if (shuffledSame.length > 1) opts.push(shuffledSame[1].en);
    for (const w of shuffledDiff) {
      if (opts.length >= 4) break;
      if (!opts.includes(w.en)) opts.push(w.en);
    }
    // 补足4个选项
    const allOthers = [...others].sort(() => Math.random() - 0.5);
    for (const w of allOthers) {
      if (opts.length >= 4) break;
      if (!opts.includes(w.en)) opts.push(w.en);
    }

    const correctAnswer = opts[0]; // 正确答案（第一个同类词）
    // Fisher-Yates 打乱
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return { options: opts, answer: opts.indexOf(correctAnswer) };
  },

  /**
   * 开始考核
   */
  startExam(weekNum) {
    this.isExam = true;
    this.examSubject = 'chinese';
    this.examResults = {};
    this.currentIndex = 0;
    this.answers = [];
    this.timeElapsed = 0;
    this.timeLimit = 30 * 60; // 语文30分钟

    // 加载考核题（支持自选周数，默认当前周）
    const week = weekNum || Schedule.getWeekNumber();
    if (typeof EXAM_SETS !== 'undefined') {
      const exam = EXAM_SETS.find(e => e.week === week) || EXAM_SETS[week - 1] || EXAM_SETS[0];
      if (exam) {
        this.examQuestions = exam;
      }
    }

    this.currentQuestions = this.examQuestions?.chinese || [];
    this.startTimer('examTimer');
    this.renderQuestion();
    this.renderExamTabs();
  },

  /** 切换考核科目 */
  switchExamSubject(subject) {
    // 保存当前科目答案
    this.saveExamSubjectAnswers();

    this.examSubject = subject;
    this.currentIndex = 0;
    this.answers = (this.examResults[subject]?.answers) || [];

    const timeMap = { chinese: 30, math: 30, english: 25 };
    this.timeLimit = timeMap[subject] * 60;
    this.timeElapsed = this.examResults[subject]?.timeElapsed || 0;

    this.currentQuestions = this.examQuestions?.[subject] || [];
    this.startTimer('examTimer');
    this.renderQuestion();
    this.renderExamTabs();
  },

  saveExamSubjectAnswers() {
    if (!this.isExam) return;
    this.examResults[this.examSubject] = {
      answers: [...this.answers],
      timeElapsed: this.timeElapsed
    };
  },

  /**
   * 渲染当前题目
   */
  renderQuestion() {
    const contentEl = document.getElementById(this.isExam ? 'examContent' : 'practiceContent');
    const actionsEl = document.getElementById(this.isExam ? 'examActions' : 'practiceActions');
    const feedbackEl = document.getElementById('practiceFeedback');
    const stageEl = document.getElementById('practiceStage');

    if (!contentEl || !actionsEl) return;

    if (this.currentIndex >= this.currentQuestions.length) {
      this.finishSession();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];

    // 阶段提示
    if (stageEl && q.stage) {
      stageEl.textContent = '✏️ ' + q.stage;
    }

    // 信息展示题（阅读短文、学习提示等）
    if (q.type === 'info') {
      contentEl.innerHTML = `
        <div style="font-family: var(--font-hand); font-size: 1.1rem; margin-bottom: 8px;">${q.title || ''}</div>
        <div class="passage ${q.hasPinyin ? 'pinyin' : ''}">${q.content || ''}</div>
      `;
      actionsEl.innerHTML = `
        <button class="option-btn" onclick="Quiz.nextQuestion()" style="text-align:center; background:var(--orange); color:#fff; font-weight:bold;">
          我读完了，继续做题 →
        </button>
      `;
      if (feedbackEl) feedbackEl.innerHTML = '';
      return;
    }

    // 普通题目
    contentEl.innerHTML = `<div class="question-text">${q.question}</div>`;

    // 根据题目类型渲染作答区
    if (q.type === 'multiple_choice') {
      this.renderMultipleChoice(q, actionsEl);
    } else if (q.type === 'fill_blank') {
      this.renderFillBlank(q, actionsEl);
    } else if (q.type === 'input') {
      this.renderTextInput(q, actionsEl);
    }

    if (feedbackEl) feedbackEl.innerHTML = '';
    this.updateProgress();
  },

  /** 渲染选择题 */
  renderMultipleChoice(q, container) {
    const labels = ['A', 'B', 'C', 'D'];
    let html = '';
    q.options.forEach((opt, i) => {
      html += `<button class="option-btn" onclick="Quiz.submitAnswer(${i})" data-idx="${i}">
        <strong>${labels[i]}.</strong> ${opt}
      </button>`;
    });
    container.innerHTML = html;
  },

  /** 渲染填空题（数字输入） */
  renderFillBlank(q, container) {
    // 判断答案是否为数字
    const isNumeric = typeof q.answer === 'number';

    if (isNumeric) {
      // 显示输入框 + 数字键盘
      container.innerHTML = `
        <div style="text-align:center;">
          <input type="number" id="fillBlankInput"
            style="font-size:1.8rem; width:150px; text-align:center; padding:12px;
            border: 3px solid var(--gray-light); border-radius:14px; font-family:var(--font-hand);"
            placeholder="?" autofocus>
          <br><br>
          <button class="option-btn" onclick="Quiz.submitFillBlank()"
            style="text-align:center; background:var(--green); color:#fff; max-width:200px; margin:0 auto;">
            确认答案 ✓
          </button>
        </div>
        <div class="num-pad" style="margin-top:10px;">
          ${[1,2,3,4,5,6,7,8,9,'⌫',0,'−'].map(n => {
            if (n === '⌫') return '<button onclick="Quiz.numPadBackspace()">⌫</button>';
            if (n === '−') return '<button onclick="Quiz.numPadToggleSign()">±</button>';
            return `<button onclick="Quiz.numPadInput(${n})">${n}</button>`;
          }).join('')}
        </div>
      `;
      setTimeout(() => {
        const inp = document.getElementById('fillBlankInput');
        if (inp) inp.focus();
      }, 100);
    } else {
      // 非数字填空：文本输入
      container.innerHTML = `
        <input type="text" id="fillBlankInput"
          style="font-size:1.3rem; width:100%; padding:12px; border:3px solid var(--gray-light);
          border-radius:14px; font-family:var(--font-main);"
          placeholder="请输入答案">
        <br><br>
        <button class="option-btn" onclick="Quiz.submitFillBlank()"
          style="text-align:center; background:var(--green); color:#fff;">
          确认答案 ✓
        </button>
      `;
    }
  },

  /** 渲染文本输入题 */
  renderTextInput(q, container) {
    container.innerHTML = `
      <input type="text" id="textInput"
        style="font-size:1.3rem; width:100%; padding:12px; border:3px solid var(--gray-light);
        border-radius:14px; font-family:var(--font-main);"
        placeholder="请输入答案">
      <br><br>
      <button class="option-btn" onclick="Quiz.submitTextInput()"
        style="text-align:center; background:var(--green); color:#fff;">
        确认答案 ✓
      </button>
    `;
  },

  /** 数字键盘输入 */
  numPadInput(num) {
    const inp = document.getElementById('fillBlankInput');
    if (inp) inp.value += num;
  },
  numPadBackspace() {
    const inp = document.getElementById('fillBlankInput');
    if (inp) inp.value = inp.value.slice(0, -1);
  },
  numPadToggleSign() {
    const inp = document.getElementById('fillBlankInput');
    if (inp) {
      if (inp.value.startsWith('-')) inp.value = inp.value.slice(1);
      else if (inp.value) inp.value = '-' + inp.value;
    }
  },

  /** 提交选择题答案 */
  submitAnswer(choice) {
    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = choice === q.answer;
    this.answers.push({ questionId: q.id, userAnswer: choice, correctAnswer: q.answer, isCorrect });

    // 显示反馈
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      if (i === choice && !isCorrect) btn.classList.add('wrong');
    });

    const feedbackEl = document.getElementById('practiceFeedback');
    if (feedbackEl) {
      feedbackEl.innerHTML = isCorrect
        ? '<span class="feedback-correct">✅ 太棒了！' + (q.explanation ? ' ' + q.explanation : '') + '</span>'
        : '<span class="feedback-wrong">❌ 不对哦~ 正确答案是 ' + (q.options ? q.options[q.answer] : '') +
          (q.explanation ? '。' + q.explanation : '') + '</span>';
    }

    if (this.isExam) {
      // 考核模式：不显示反馈，直接下一题
      feedbackEl.innerHTML = '';
      setTimeout(() => this.nextQuestion(), 300);
    } else {
      // 练习模式：延迟后自动进入下一题
      setTimeout(() => this.nextQuestion(), 1500);
    }
  },

  /** 提交填空题答案 */
  submitFillBlank() {
    const inp = document.getElementById('fillBlankInput');
    if (!inp) return;
    const q = this.currentQuestions[this.currentIndex];

    let userAnswer = inp.value.trim();
    let isCorrect = false;

    if (typeof q.answer === 'number') {
      userAnswer = parseFloat(userAnswer);
      isCorrect = !isNaN(userAnswer) && userAnswer === q.answer;
    } else {
      isCorrect = userAnswer.toLowerCase() === String(q.answer).toLowerCase();
    }

    this.answers.push({ questionId: q.id, userAnswer, correctAnswer: q.answer, isCorrect });

    const feedbackEl = document.getElementById('practiceFeedback');
    if (feedbackEl) {
      feedbackEl.innerHTML = isCorrect
        ? '<span class="feedback-correct">✅ 太棒了！答案是 ' + q.answer + '</span>'
        : '<span class="feedback-wrong">❌ 正确答案是 ' + q.answer + '</span>';
    }

    setTimeout(() => this.nextQuestion(), this.isExam ? 300 : 1500);
  },

  /** 提交文本输入题 */
  submitTextInput() {
    const inp = document.getElementById('textInput');
    if (!inp) return;
    const q = this.currentQuestions[this.currentIndex];
    const userAnswer = inp.value.trim();
    const isCorrect = userAnswer.toLowerCase() === String(q.answer).toLowerCase();

    this.answers.push({ questionId: q.id, userAnswer, correctAnswer: q.answer, isCorrect });

    const feedbackEl = document.getElementById('practiceFeedback');
    if (feedbackEl) {
      feedbackEl.innerHTML = isCorrect
        ? '<span class="feedback-correct">✅ 太棒了！</span>'
        : '<span class="feedback-wrong">❌ 正确答案是 ' + q.answer + '</span>';
    }

    setTimeout(() => this.nextQuestion(), this.isExam ? 300 : 1500);
  },

  /** 下一题 */
  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= this.currentQuestions.length) {
      this.finishSession();
    } else {
      this.renderQuestion();
    }
  },

  /** 结束当前练习/考核 */
  finishSession() {
    this.stopTimer();

    if (this.isExam) {
      this.saveExamSubjectAnswers();
      this.finishExam();
    } else {
      this.showPracticeResult();
    }
  },

  /** 练习完成结果 */
  showPracticeResult() {
    const correctCount = this.answers.filter(a => a.isCorrect).length;
    const total = this.answers.length;
    const score = total > 0 ? Math.round(correctCount / total * 100) : 0;

    // 保存到 storage
    Storage.saveSubjectProgress(this.currentSubject, correctCount, total, this.timeElapsed);

    const subjectNames = { chinese: '语文', math: '数学', english: '英语' };
    const name = subjectNames[this.currentSubject];

    const stars = score === 100 ? 25 : 15;

    App.showModal(
      name + '练习完成！',
      `<div class="score-big">${score}分</div>
       <p>答对 ${correctCount}/${total} 题</p>
       <p>用时 ${this.formatTime(this.timeElapsed)}</p>
       <p>⭐ +${stars}</p>`,
      [{ text: '返回首页', cls: '', action: () => { App.backToHome(); App.closeModal(); } }]
    );
  },

  /** 完成考核 */
  finishExam() {
    const results = this.examResults;

    // 计算各科成绩
    let totalScore = 0, totalMax = 0;
    ['chinese', 'math', 'english'].forEach(sub => {
      const subResult = results[sub];
      if (subResult && subResult.answers) {
        const correct = subResult.answers.filter(a => a.isCorrect).length;
        const total = subResult.answers.length;
        results[sub].score = correct;
        results[sub].total = total;
        totalScore += correct;
        totalMax += total;
      } else {
        results[sub] = { score: 0, total: 0, answers: [], timeElapsed: 0 };
      }
    });

    results.totalScore = totalScore;
    results.totalMax = totalMax;
    results.passed = (totalScore / totalMax * 100) >= 60 || false;

    const week = Schedule.getWeekNumber();
    Storage.saveExamResult(week, results);
    Rewards.checkExamRewards(week, results);

    // 展示成绩单
    const chiPct = (results.chinese.total > 0) ? Math.round(results.chinese.score / results.chinese.total * 100) : 0;
    const matPct = (results.math.total > 0) ? Math.round(results.math.score / results.math.total * 100) : 0;
    const engPct = (results.english.total > 0) ? Math.round(results.english.score / results.english.total * 100) : 0;

    App.showModal(
      results.passed ? '🎉 考核通过！' : '😅 考核未通过',
      `<div class="score-big">${Math.round(totalScore/totalMax*100)}分</div>
       <p>📖 语文：${results.chinese.score}/${results.chinese.total}（${chiPct}分）</p>
       <p>🧮 数学：${results.math.score}/${results.math.total}（${matPct}分）</p>
       <p>🔤 英语：${results.english.score}/${results.english.total}（${engPct}分）</p>
       <p style="font-size:0.85rem;color:var(--brown-light)">${results.passed ? '真棒！贴纸已解锁！' : '别灰心，可以重新考哦~'}</p>`,
      [
        { text: '查看错题', cls: 'secondary', action: () => { this.showExamReview(); } },
        { text: '返回首页', cls: '', action: () => { App.backToHome(); App.closeModal(); } }
      ]
    );
  },

  /** 显示考核错题回顾 */
  showExamReview() {
    let reviewHtml = '';
    ['chinese', 'math', 'english'].forEach(sub => {
      const subResult = this.examResults[sub];
      if (!subResult?.answers) return;
      const wrongs = subResult.answers.filter(a => !a.isCorrect);
      if (wrongs.length > 0) {
        reviewHtml += `<h4>${sub === 'chinese' ? '📖 语文' : sub === 'math' ? '🧮 数学' : '🔤 英语'} 错题（${wrongs.length}道）</h4>`;
        wrongs.forEach(w => {
          reviewHtml += `<p style="text-align:left;font-size:0.9rem;">❌ 你的答案：${w.userAnswer} → 正确答案：${w.correctAnswer}</p>`;
        });
      }
    });

    App.showModal('📝 错题回顾', reviewHtml || '<p>没有错题，全部正确！🎉</p>',
      [{ text: '关闭', cls: '' }]
    );
  },

  /** 渲染考核科目标签 */
  renderExamTabs() {
    const tabsEl = document.getElementById('examTabs');
    if (!tabsEl) return;

    const subjects = ['chinese', 'math', 'english'];
    const names = ['语文(15题)', '数学(25题)', '英语(15题)'];

    tabsEl.innerHTML = subjects.map((sub, i) => {
      const done = this.examResults[sub]?.answers?.length > 0;
      return `<button class="exam-tab ${this.examSubject === sub ? 'active' : ''}"
        onclick="Quiz.switchExamSubject('${sub}')">
        ${done ? '✅ ' : ''}${names[i]}
      </button>`;
    }).join('');
  },

  /** 计时器 */
  startTimer(displayId) {
    this.stopTimer();
    const displayEl = document.getElementById(displayId);
    this.timerInterval = setInterval(() => {
      this.timeElapsed++;
      if (displayEl) {
        displayEl.textContent = '⏱ ' + this.formatTime(this.timeElapsed);
      }
      // 倒计时提醒
      if (this.isExam && this.timeLimit - this.timeElapsed <= 300 && this.timeElapsed % 60 === 0) {
        const remaining = Math.ceil((this.timeLimit - this.timeElapsed) / 60);
        if (remaining > 0 && remaining <= 5) {
          // 最后5分钟提醒
        }
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  },

  /** 更新进度条 */
  updateProgress() {
    const fillEl = document.getElementById('progressFill');
    const textEl = document.getElementById('progressText');
    if (fillEl && textEl && this.currentQuestions.length > 0) {
      const pct = Math.round(this.currentIndex / this.currentQuestions.length * 100);
      fillEl.style.width = pct + '%';
      textEl.textContent = this.currentIndex + '/' + this.currentQuestions.length;
    }
  },

  /** 获取成绩百分比 */
  getScorePercent() {
    const correct = this.answers.filter(a => a.isCorrect).length;
    return this.answers.length > 0 ? Math.round(correct / this.answers.length * 100) : 0;
  }
};
