/**
 * exam-sets.js — 考核题库
 * 7次周考 + 1次期末考试，难度逐周递进，内容仅覆盖到当周为止。
 *
 * 每题格式：{ type, question, options, answer, explanation }
 *   type:  'multiple_choice' | 'fill_blank' | 'info'  (info 为阅读提示/标题)
 *   answer: 选项索引(0起) 或 正确答案字符串/数字
 *
 * 考核题目与日常练习不重复。
 */

const EXAM_SETS = [
