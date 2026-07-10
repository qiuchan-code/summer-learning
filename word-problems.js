// ============================================================
// 小学数学应用题题库（一二年级适用）
// 共 80 题，含六个分类，难度 1-7
// ============================================================

var WORD_PROBLEMS = [
  // ==========================================
  // 一、比多少（15题）—— 比较两个数量的多少
  // ==========================================

  { id: 'wp001', type: 'fill_blank', question: '小明有 8 颗糖，小红有 5 颗糖，小明比小红多几颗糖？', answer: 3, difficulty: 1, category: '比多少' },
  { id: 'wp002', type: 'fill_blank', question: '树上有 6 只小鸟，又飞来 2 只，现在树上的小鸟比原来多了几只？', answer: 2, difficulty: 1, category: '比多少' },
  { id: 'wp003', type: 'fill_blank', question: '妈妈买了 9 个苹果，爸爸买了 7 个苹果，爸爸比妈妈少买几个苹果？', answer: 2, difficulty: 1, category: '比多少' },
  { id: 'wp004', type: 'fill_blank', question: '池塘里有 5 只白鸭子，3 只灰鸭子，白鸭子比灰鸭子多几只？', answer: 2, difficulty: 1, category: '比多少' },
  { id: 'wp005', type: 'fill_blank', question: '姐姐折了 10 颗星星，妹妹折了 4 颗星星，妹妹比姐姐少折几颗？', answer: 6, difficulty: 1, category: '比多少' },
  { id: 'wp006', type: 'fill_blank', question: '小东有 12 张贴纸，小南有 7 张贴纸，小东比小南多几张贴纸？', answer: 5, difficulty: 2, category: '比多少' },
  { id: 'wp007', type: 'fill_blank', question: '花丛中有 15 只蝴蝶，飞走了 6 只，剩下的蝴蝶比飞走的蝴蝶多几只？', answer: 3, difficulty: 2, category: '比多少' },
  { id: 'wp008', type: 'fill_blank', question: '篮子里有 18 个橘子，盘子里的橘子比篮子里少 5 个，盘子里有几个橘子？', answer: 13, difficulty: 2, category: '比多少' },
  { id: 'wp009', type: 'fill_blank', question: '大熊重 20 千克，小熊重 11 千克，大熊比小熊重多少千克？', answer: 9, difficulty: 2, category: '比多少' },
  { id: 'wp010', type: 'fill_blank', question: '一（1）班有 16 个男生，女生比男生多 3 个，女生有多少个？', answer: 19, difficulty: 2, category: '比多少' },
  { id: 'wp011', type: 'fill_blank', question: '小丽跳绳跳了 45 下，小芳跳了 38 下，小丽比小芳多跳几下？', answer: 7, difficulty: 3, category: '比多少' },
  { id: 'wp012', type: 'fill_blank', question: '书店里故事书有 52 本，漫画书有 36 本，故事书比漫画书多多少本？', answer: 16, difficulty: 3, category: '比多少' },
  { id: 'wp013', type: 'fill_blank', question: '爷爷今年 68 岁，奶奶今年比爷爷小 3 岁，奶奶今年多少岁？', answer: 65, difficulty: 3, category: '比多少' },
  { id: 'wp014', type: 'fill_blank', question: '一箱牛奶 24 盒，另一箱比它多 18 盒，另一箱有多少盒？', answer: 42, difficulty: 4, category: '比多少' },
  { id: 'wp015', type: 'fill_blank', question: '小明的储蓄罐里有 87 元，比小红多 29 元，小红有多少元？', answer: 58, difficulty: 4, category: '比多少' },

  // ==========================================
  // 二、求一共（15题）—— 求两个或多个数量的总和
  // ==========================================

  { id: 'wp016', type: 'fill_blank', question: '明明有 3 支铅笔，妈妈又给了他 4 支，明明一共有几支铅笔？', answer: 7, difficulty: 1, category: '求一共' },
  { id: 'wp017', type: 'fill_blank', question: '草地上有 5 只白兔，又跑来了 4 只灰兔，草地上一共有几只兔子？', answer: 9, difficulty: 1, category: '求一共' },
  { id: 'wp018', type: 'fill_blank', question: '鱼缸里有 6 条红色小鱼和 2 条黑色小鱼，鱼缸里一共有几条小鱼？', answer: 8, difficulty: 1, category: '求一共' },
  { id: 'wp019', type: 'fill_blank', question: '桌子上有 4 杯果汁，又端来了 3 杯，现在桌子上一共有几杯果汁？', answer: 7, difficulty: 1, category: '求一共' },
  { id: 'wp020', type: 'fill_blank', question: '弟弟搭了 7 块积木，姐姐搭了 3 块积木，两人一共搭了几块积木？', answer: 10, difficulty: 1, category: '求一共' },
  { id: 'wp021', type: 'fill_blank', question: '果园里有 13 棵桃树和 8 棵梨树，一共有多少棵果树？', answer: 21, difficulty: 2, category: '求一共' },
  { id: 'wp022', type: 'fill_blank', question: '书架上层有 17 本书，下层有 9 本书，书架上一共有多少本书？', answer: 26, difficulty: 2, category: '求一共' },
  { id: 'wp023', type: 'fill_blank', question: '小可收集了 14 枚邮票，小爱收集了 19 枚邮票，两人一共收集了多少枚？', answer: 33, difficulty: 2, category: '求一共' },
  { id: 'wp024', type: 'fill_blank', question: '一袋糖果有 15 颗，另一袋有 16 颗，两袋糖果一共有多少颗？', answer: 31, difficulty: 2, category: '求一共' },
  { id: 'wp025', type: 'fill_blank', question: '一年级有 28 名同学参加跳绳比赛，二年级有 35 名同学参加，两个年级一共有多少名同学参加？', answer: 63, difficulty: 3, category: '求一共' },
  { id: 'wp026', type: 'fill_blank', question: '超市上午卖出 46 个面包，下午卖出 37 个面包，这一天一共卖出多少个面包？', answer: 83, difficulty: 3, category: '求一共' },
  { id: 'wp027', type: 'fill_blank', question: '小贝买了一本 25 元的笔记本和一支 18 元的钢笔，一共花了多少钱？', answer: 43, difficulty: 3, category: '求一共' },
  { id: 'wp028', type: 'fill_blank', question: '停车场里上午停了 57 辆车，下午又停进 34 辆，下午停车场一共有多少辆车？', answer: 91, difficulty: 4, category: '求一共' },
  { id: 'wp029', type: 'fill_blank', question: '操场上有 48 个学生在跑步，26 个学生在踢球，还有 19 个学生在跳绳，操场上一共有多少个学生？', answer: 93, difficulty: 4, category: '求一共' },
  { id: 'wp030', type: 'fill_blank', question: '三袋大米分别重 28 千克、34 千克和 22 千克，一共重多少千克？', answer: 84, difficulty: 4, category: '求一共' },

  // ==========================================
  // 三、求剩余（15题）—— 从一个数量中去掉一部分
  // ==========================================

  { id: 'wp031', type: 'fill_blank', question: '妈妈买了 8 个包子，小明吃了 3 个，还剩几个包子？', answer: 5, difficulty: 1, category: '求剩余' },
  { id: 'wp032', type: 'fill_blank', question: '花园里有 9 朵花，小朋友摘走了 4 朵，还剩几朵花？', answer: 5, difficulty: 1, category: '求剩余' },
  { id: 'wp033', type: 'fill_blank', question: '瓶子里有 10 颗彩虹糖，吃了 6 颗，还剩几颗？', answer: 4, difficulty: 1, category: '求剩余' },
  { id: 'wp034', type: 'fill_blank', question: '树上结了 7 个桃子，被小鸟啄走了 2 个，树上还剩几个桃子？', answer: 5, difficulty: 1, category: '求剩余' },
  { id: 'wp035', type: 'fill_blank', question: '气球摊上有 10 个气球，卖出了 5 个，还剩几个气球？', answer: 5, difficulty: 1, category: '求剩余' },
  { id: 'wp036', type: 'fill_blank', question: '小红有 20 块饼干，分给同学 8 块，自己还剩几块？', answer: 12, difficulty: 2, category: '求剩余' },
  { id: 'wp037', type: 'fill_blank', question: '河里有 19 条小鱼游来游去，游走了 7 条，河里还剩几条小鱼？', answer: 12, difficulty: 2, category: '求剩余' },
  { id: 'wp038', type: 'fill_blank', question: '书架上有 25 本图书，借出去 13 本，书架上还剩几本图书？', answer: 12, difficulty: 2, category: '求剩余' },
  { id: 'wp039', type: 'fill_blank', question: '小乐有 33 张奥特曼卡片，送给弟弟 11 张，还剩多少张？', answer: 22, difficulty: 2, category: '求剩余' },
  { id: 'wp040', type: 'fill_blank', question: '公交车上有 26 位乘客，到站下去 14 位，车上还剩几位乘客？', answer: 12, difficulty: 3, category: '求剩余' },
  { id: 'wp041', type: 'fill_blank', question: '奶奶包了 55 个饺子，煮熟后吃了 28 个，还剩多少个饺子？', answer: 27, difficulty: 3, category: '求剩余' },
  { id: 'wp042', type: 'fill_blank', question: '学校食堂买了 80 个鸡蛋，用了 47 个，还剩多少个鸡蛋？', answer: 33, difficulty: 3, category: '求剩余' },
  { id: 'wp043', type: 'fill_blank', question: '爷爷果园里有 63 个苹果，摘了 35 个送给邻居，还剩多少个苹果？', answer: 28, difficulty: 4, category: '求剩余' },
  { id: 'wp044', type: 'fill_blank', question: '商场有 100 个玩偶，上午卖出 42 个，下午卖出 27 个，还剩多少个？', answer: 31, difficulty: 4, category: '求剩余' },
  { id: 'wp045', type: 'fill_blank', question: '图书馆原来有 72 本新书，一周后被借走 38 本，还剩多少本没被借走？', answer: 34, difficulty: 4, category: '求剩余' },

  // ==========================================
  // 四、乘法应用（15题）—— 求几个相同加数的和
  // ==========================================

  { id: 'wp046', type: 'fill_blank', question: '一张桌子有 4 条腿，2 张这样的桌子一共有几条腿？', answer: 8, difficulty: 3, category: '乘法应用' },
  { id: 'wp047', type: 'fill_blank', question: '每串糖葫芦有 5 颗山楂，3 串这样的糖葫芦一共有多少颗山楂？', answer: 15, difficulty: 3, category: '乘法应用' },
  { id: 'wp048', type: 'fill_blank', question: '一个笔筒里放 6 支笔，4 个这样的笔筒一共能放多少支笔？', answer: 24, difficulty: 4, category: '乘法应用' },
  { id: 'wp049', type: 'fill_blank', question: '每辆自行车有 2 个轮子，7 辆自行车一共有多少个轮子？', answer: 14, difficulty: 4, category: '乘法应用' },
  { id: 'wp050', type: 'fill_blank', question: '一个盒子装 8 块巧克力，5 盒一共有多少块巧克力？', answer: 40, difficulty: 4, category: '乘法应用' },
  { id: 'wp051', type: 'fill_blank', question: '每个小朋友分 3 个气球，9 个小朋友一共需要多少个气球？', answer: 27, difficulty: 5, category: '乘法应用' },
  { id: 'wp052', type: 'fill_blank', question: '一排有 7 个座位，6 排一共有多少个座位？', answer: 42, difficulty: 5, category: '乘法应用' },
  { id: 'wp053', type: 'fill_blank', question: '每只小猫有 4 条腿，8 只小猫一共有多少条腿？', answer: 32, difficulty: 5, category: '乘法应用' },
  { id: 'wp054', type: 'fill_blank', question: '每袋装 6 个苹果，装满 7 袋需要多少个苹果？', answer: 42, difficulty: 5, category: '乘法应用' },
  { id: 'wp055', type: 'fill_blank', question: '教室里有 5 排课桌，每排 8 张课桌，教室一共有多少张课桌？', answer: 40, difficulty: 5, category: '乘法应用' },
  { id: 'wp056', type: 'fill_blank', question: '每包饼干 9 元，买 6 包一共要花多少钱？', answer: 54, difficulty: 6, category: '乘法应用' },
  { id: 'wp057', type: 'fill_blank', question: '一个停车场有 8 排停车位，每排 9 个，一共有多少个停车位？', answer: 72, difficulty: 6, category: '乘法应用' },
  { id: 'wp058', type: 'fill_blank', question: '同学们站成方队，每行 7 人，站了 7 行，一共有多少个同学？', answer: 49, difficulty: 6, category: '乘法应用' },
  { id: 'wp059', type: 'fill_blank', question: '每盒彩笔 12 支，买了 4 盒，一共有多少支彩笔？', answer: 48, difficulty: 6, category: '乘法应用' },
  { id: 'wp060', type: 'fill_blank', question: '一本故事书每天读 9 页，读了 8 天，一共读了多少页？', answer: 72, difficulty: 6, category: '乘法应用' },

  // ==========================================
  // 五、除法应用（10题）—— 把一个数平均分成几份
  // ==========================================

  { id: 'wp061', type: 'fill_blank', question: '把 12 颗糖平均分给 3 个小朋友，每个小朋友分到几颗糖？', answer: 4, difficulty: 4, category: '除法应用' },
  { id: 'wp062', type: 'fill_blank', question: '有 20 支铅笔，平均放到 4 个笔筒里，每个笔筒放几支？', answer: 5, difficulty: 4, category: '除法应用' },
  { id: 'wp063', type: 'fill_blank', question: '24 个小朋友做游戏，每 6 人一组，可以分成几组？', answer: 4, difficulty: 4, category: '除法应用' },
  { id: 'wp064', type: 'fill_blank', question: '妈妈把 30 个草莓平均装到 5 个小盘子里，每个盘子装几个草莓？', answer: 6, difficulty: 5, category: '除法应用' },
  { id: 'wp065', type: 'fill_blank', question: '有 36 本作业本，平均分给 6 个小组，每个小组分到几本？', answer: 6, difficulty: 5, category: '除法应用' },
  { id: 'wp066', type: 'fill_blank', question: '把 45 朵花扎成花束，每束 5 朵，可以扎成几束？', answer: 9, difficulty: 5, category: '除法应用' },
  { id: 'wp067', type: 'fill_blank', question: '56 个气球，每 7 个扎成一捆，可以扎成几捆？', answer: 8, difficulty: 5, category: '除法应用' },
  { id: 'wp068', type: 'fill_blank', question: '老师有 48 颗贴纸奖励，平均分给 8 个表现好的同学，每个同学得几颗？', answer: 6, difficulty: 6, category: '除法应用' },
  { id: 'wp069', type: 'fill_blank', question: '把 63 本书平均放到 7 个书架上，每个书架放几本书？', answer: 9, difficulty: 6, category: '除法应用' },
  { id: 'wp070', type: 'fill_blank', question: '运动会有 72 名运动员，每 8 人组成一个方阵，可以组成几个方阵？', answer: 9, difficulty: 6, category: '除法应用' },

  // ==========================================
  // 六、两步计算（10题）—— 需要两步运算才能得出答案
  // ==========================================

  { id: 'wp071', type: 'fill_blank', question: '小明买了 3 盒铅笔，每盒 5 支，用掉了 7 支，还剩多少支？', answer: 8, difficulty: 5, category: '两步计算' },
  { id: 'wp072', type: 'fill_blank', question: '果园里有 8 棵苹果树，每棵结了 4 个苹果，摘走了 12 个，树上还有多少个苹果？', answer: 20, difficulty: 5, category: '两步计算' },
  { id: 'wp073', type: 'fill_blank', question: '小红有 25 元钱，买了一个 8 元的布丁，剩下的钱买了 3 支一样价格的笔，每支笔多少钱？', answer: 5, difficulty: 5, category: '两步计算' },
  { id: 'wp074', type: 'fill_blank', question: '爸爸买了 4 袋糖果，每袋 9 颗，分给弟弟 15 颗，还剩多少颗？', answer: 21, difficulty: 6, category: '两步计算' },
  { id: 'wp075', type: 'fill_blank', question: '图书馆有 45 本故事书，借走了 18 本，剩下的平均放到 3 个书架上，每个书架放几本？', answer: 9, difficulty: 6, category: '两步计算' },
  { id: 'wp076', type: 'fill_blank', question: '同学们做纸鹤，第一组做了 28 只，第二组做了 35 只，把全部纸鹤平均装进 7 个盒子里，每个盒子装几只？', answer: 9, difficulty: 6, category: '两步计算' },
  { id: 'wp077', type: 'fill_blank', question: '一盒巧克力有 6 排，每排 8 块，吃掉了 19 块，还剩多少块？', answer: 29, difficulty: 6, category: '两步计算' },
  { id: 'wp078', type: 'fill_blank', question: '姐姐有 72 张贴纸，送给妹妹 24 张后，她又买了 3 包贴纸，每包 5 张，姐姐现在有多少张贴纸？', answer: 63, difficulty: 7, category: '两步计算' },
  { id: 'wp079', type: 'fill_blank', question: '游乐场门票 8 元一张，小宇买了 4 张，付了 50 元，应找回多少钱？', answer: 18, difficulty: 7, category: '两步计算' },
  { id: 'wp080', type: 'fill_blank', question: '食堂买了 5 袋大米，每袋 20 千克，用掉 35 千克后，还剩多少千克大米？', answer: 65, difficulty: 7, category: '两步计算' }
];

// 导出（按需选择一种方式）
// Node.js / CommonJS:
// if (typeof module !== 'undefined' && module.exports) { module.exports = WORD_PROBLEMS; }
// 浏览器端直接使用全局变量 WORD_PROBLEMS（已通过 const 声明为该文件顶层变量）
