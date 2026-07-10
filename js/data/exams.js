/**
 * exams.js — 考核卷
 * EXAM_SETS 全局数组，8套考卷（7周考 + 1期末）
 */

const EXAM_SETS = (function() {
  // 辅助函数：从题库随机选题
  function pick(arr, n) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(n, arr.length));
  }

  // 生成考核数学题（用生成器）
  function genMathExam(week, oralCount, writtenCount, wordCount) {
    const oral = Generator.generate(week, oralCount, 'oral');
    const written = Generator.generate(week, writtenCount, 'written');
    // 应用题的难度过滤在 Generator.pickWordProblems 里处理
    const word = (typeof WORD_PROBLEMS !== 'undefined')
      ? pick(WORD_PROBLEMS.filter(p => {
          if (week <= 3) return p.difficulty <= 3;
          if (week <= 5) return p.difficulty <= 5;
          return true;
        }), wordCount)
      : [];
    return [...oral, ...written, ...word];
  }

  // 从英语词库生成考核题
  function genEnglishExam(week, count) {
    if (typeof ENGLISH_WORDS === 'undefined') return [];
    const words = ENGLISH_WORDS.filter(w => w.week <= week);
    const selected = pick(words, Math.min(count * 2, words.length));

    const questions = [];
    // 看图识词
    pick(selected, Math.ceil(count / 3)).forEach(w => {
      const others = ENGLISH_WORDS.filter(x => x.en !== w.en);
      const distractors = pick(others, 3).map(x => x.en);
      questions.push({
        type: 'multiple_choice',
        question: w.emoji + ' 对应的英文是？',
        options: [w.en, ...distractors.slice(0, 3)],
        answer: 0,
        id: 'exam_en_pic_' + w.id
      });
    });

    // 中英配对
    pick(selected, Math.ceil(count / 3)).forEach(w => {
      const others = ENGLISH_WORDS.filter(x => x.en !== w.en);
      const distractors = pick(others, 3).map(x => x.en);
      questions.push({
        type: 'multiple_choice',
        question: '"' + w.zh + '" 的英文是？',
        options: [w.en, ...distractors.slice(0, 3)],
        answer: 0,
        id: 'exam_en_match_' + w.id
      });
    });

    // 拼写/填空
    pick(selected, Math.ceil(count / 3)).forEach(w => {
      // 给出首字母提示
      questions.push({
        type: 'fill_blank',
        question: w.emoji + ' "' + w.zh + '" 的英文：' + w.en[0] + '____',
        answer: w.en,
        id: 'exam_en_spell_' + w.id
      });
    });

    return pick(questions, count);
  }

  // 生成语文考核题
  function genChineseExam(week, count) {
    if (typeof CHINESE_READINGS === 'undefined') return [];
    const readings = CHINESE_READINGS.filter(r => r.week <= week);
    const selected = pick(readings, 2);
    const questions = [];

    selected.forEach(r => {
      if (r.questions) {
        const qs = pick(r.questions, Math.min(7, r.questions.length));
        qs.forEach(q => questions.push({ ...q, passage: r.passage }));
      }
    });

    // 补充字词拼音题
    const extraWords = [
      { type:'multiple_choice', question:'下列哪个字读"shān"？', options:['山','水','火','土'], answer:0 },
      { type:'multiple_choice', question:'"花"的正确读音是？', options:['huā','huá','hā','huà'], answer:0 },
      { type:'multiple_choice', question:'下面哪个是"跑"的意思？', options:['快速地移动脚步','慢慢地走','站着不动','坐下来'], answer:0 },
      { type:'multiple_choice', question:'"开心"的反义词是？', options:['伤心','快乐','高兴','兴奋'], answer:0 },
      { type:'multiple_choice', question:'"苹果"中"苹"的读音是？', options:['píng','pín','bíng','pīng'], answer:0 },
      { type:'multiple_choice', question:'下面哪组拼音是正确的？——"小鸟"', options:['xiǎo niǎo','xiǎo liǎo','xiāo niǎo','xiǎo miǎo'], answer:0 },
    ];

    while (questions.length < count && extraWords.length > 0) {
      questions.push(extraWords.shift());
    }

    return pick(questions, count);
  }

  // ═══════ 构建考核集 ═══════
  const sets = [];

  for (let week = 1; week <= 7; week++) {
    sets.push({
      week: week,
      chinese: genChineseExam(week, 15),
      math: genMathExam(week, 10, 10, 5),
      english: genEnglishExam(week, 15)
    });
  }

  // ═══════ 第8周：期末考试 ═══════
  sets.push({
    week: 8,
    chinese: genChineseExam(7, 25),
    math: [...Generator.generate(7, 15, 'oral'), ...Generator.generate(7, 15, 'written'),
      ...(typeof WORD_PROBLEMS !== 'undefined' ? pick(WORD_PROBLEMS.filter(p => p.difficulty >= 3), 5) : [])],
    english: genEnglishExam(7, 25)
  });

  return sets;
})();
