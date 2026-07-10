/**
 * math.js — 数学静态题库（应用题）
 * WORD_PROBLEMS 全局数组，Generator.pickWordProblems() 引用
 */

const WORD_PROBLEMS = [
  // ═══════ 比多少 (15题) ═══════
  { id:'wp001', type:'fill_blank', question:'小明有8颗糖，小红比小明多3颗。小红有几颗糖？', answer:11, difficulty:1, category:'比多少' },
  { id:'wp002', type:'fill_blank', question:'树上有5只鸟，飞来的比树上的多4只。飞来了几只鸟？', answer:9, difficulty:1, category:'比多少' },
  { id:'wp003', type:'fill_blank', question:'小华有12支铅笔，小丽比小华少5支。小丽有几支铅笔？', answer:7, difficulty:1, category:'比多少' },
  { id:'wp004', type:'fill_blank', question:'草地上有9只兔子，又来了几只，现在比原来多6只。现在有几只？', answer:15, difficulty:1, category:'比多少' },
  { id:'wp005', type:'fill_blank', question:'姐姐今年10岁，妹妹比姐姐小3岁。妹妹今年几岁？', answer:7, difficulty:1, category:'比多少' },
  { id:'wp006', type:'fill_blank', question:'池塘里有11条红鱼，黑鱼比红鱼多4条。黑鱼有几条？', answer:15, difficulty:1, category:'比多少' },
  { id:'wp007', type:'fill_blank', question:'书架上层有15本书，下层比上层少6本。下层有几本书？', answer:9, difficulty:2, category:'比多少' },
  { id:'wp008', type:'fill_blank', question:'小刚拍了20下皮球，小强比小刚多拍8下。小强拍了多少下？', answer:28, difficulty:2, category:'比多少' },
  { id:'wp009', type:'fill_blank', question:'果园里有35棵苹果树，梨树比苹果树多12棵。梨树有多少棵？', answer:47, difficulty:2, category:'比多少' },
  { id:'wp010', type:'fill_blank', question:'一班有42人，二班比一班少5人。二班有多少人？', answer:37, difficulty:3, category:'比多少' },
  { id:'wp011', type:'fill_blank', question:'妈妈买了18个橘子，买的苹果比橘子多7个。买了几个苹果？', answer:25, difficulty:2, category:'比多少' },
  { id:'wp012', type:'fill_blank', question:'小狗重6千克，小猫比小狗轻2千克。小猫重几千克？', answer:4, difficulty:1, category:'比多少' },
  { id:'wp013', type:'fill_blank', question:'花坛里有24朵红花，黄花比红花多9朵。黄花有几朵？', answer:33, difficulty:3, category:'比多少' },
  { id:'wp014', type:'fill_blank', question:'小东有30张卡片，小南比小东少8张。小南有几张？', answer:22, difficulty:3, category:'比多少' },
  { id:'wp015', type:'fill_blank', question:'大象重50千克，小象比大象轻18千克。小象重多少？', answer:32, difficulty:3, category:'比多少' },

  // ═══════ 求一共 (15题) ═══════
  { id:'wp016', type:'fill_blank', question:'树上有6只小鸟，又飞来5只。现在树上有几只小鸟？', answer:11, difficulty:1, category:'求一共' },
  { id:'wp017', type:'fill_blank', question:'小明上午写了7个字，下午写了8个字。一共写了几个字？', answer:15, difficulty:1, category:'求一共' },
  { id:'wp018', type:'fill_blank', question:'花丛里有4只蝴蝶，又飞来9只。一共有几只蝴蝶？', answer:13, difficulty:1, category:'求一共' },
  { id:'wp019', type:'fill_blank', question:'鱼缸里有8条金鱼，爸爸又买了7条放进去。一共有几条？', answer:15, difficulty:1, category:'求一共' },
  { id:'wp020', type:'fill_blank', question:'操场上有13个男生和11个女生在跑步。一共有多少人？', answer:24, difficulty:1, category:'求一共' },
  { id:'wp021', type:'fill_blank', question:'篮子里有16个鸡蛋，又放进8个。篮子里现在有几个鸡蛋？', answer:24, difficulty:2, category:'求一共' },
  { id:'wp022', type:'fill_blank', question:'车上原来有25人，又上来13人。现在车上有多少人？', answer:38, difficulty:2, category:'求一共' },
  { id:'wp023', type:'fill_blank', question:'一箱苹果28个，一箱梨19个。两箱水果一共几个？', answer:47, difficulty:2, category:'求一共' },
  { id:'wp024', type:'fill_blank', question:'大猴子摘了32个桃子，小猴子摘了27个。一共摘了几个？', answer:59, difficulty:3, category:'求一共' },
  { id:'wp025', type:'fill_blank', question:'图书馆上午借出46本书，下午借出38本。一共借出几本？', answer:84, difficulty:3, category:'求一共' },
  { id:'wp026', type:'fill_blank', question:'商店里有56个气球，又进货29个。现在有几个气球？', answer:85, difficulty:4, category:'求一共' },
  { id:'wp027', type:'fill_blank', question:'公园里有45棵柳树和37棵杨树。一共有多少棵树？', answer:82, difficulty:4, category:'求一共' },
  { id:'wp028', type:'fill_blank', question:'小芳有9块积木，小文有7块。两人一共有几块积木？', answer:16, difficulty:1, category:'求一共' },
  { id:'wp029', type:'fill_blank', question:'食堂中午做了35碗面，晚上做了28碗。一天做了几碗？', answer:63, difficulty:3, category:'求一共' },
  { id:'wp030', type:'fill_blank', question:'山上有66只羊，山下有34只羊。一共有多少只羊？', answer:100, difficulty:4, category:'求一共' },

  // ═══════ 求剩余 (15题) ═══════
  { id:'wp031', type:'fill_blank', question:'妈妈买了15个苹果，吃了6个。还剩几个苹果？', answer:9, difficulty:1, category:'求剩余' },
  { id:'wp032', type:'fill_blank', question:'鱼缸里有12条鱼，捞走了5条。还剩几条鱼？', answer:7, difficulty:1, category:'求剩余' },
  { id:'wp033', type:'fill_blank', question:'草地上有18只羊，走开了7只。还剩几只羊？', answer:11, difficulty:1, category:'求剩余' },
  { id:'wp034', type:'fill_blank', question:'书架上有20本书，借走了8本。还剩几本书？', answer:12, difficulty:1, category:'求剩余' },
  { id:'wp035', type:'fill_blank', question:'小明有14块巧克力，吃了5块。还剩几块？', answer:9, difficulty:1, category:'求剩余' },
  { id:'wp036', type:'fill_blank', question:'小丽有17张贴纸，送给了同学6张。还剩几张？', answer:11, difficulty:1, category:'求剩余' },
  { id:'wp037', type:'fill_blank', question:'商店有50个面包，卖出了28个。还剩几个面包？', answer:22, difficulty:2, category:'求剩余' },
  { id:'wp038', type:'fill_blank', question:'篮子里有36个鸡蛋，用掉了19个。还剩几个？', answer:17, difficulty:3, category:'求剩余' },
  { id:'wp039', type:'fill_blank', question:'停车场有45辆车，开走了27辆。还剩几辆？', answer:18, difficulty:3, category:'求剩余' },
  { id:'wp040', type:'fill_blank', question:'水池里有60条鱼，捞走了35条。还剩几条？', answer:25, difficulty:3, category:'求剩余' },
  { id:'wp041', type:'fill_blank', question:'爸爸给小红30元，她花了12元买书。还剩多少元？', answer:18, difficulty:2, category:'求剩余' },
  { id:'wp042', type:'fill_blank', question:'盒子里有55块饼干，吃掉了27块。还剩几块？', answer:28, difficulty:4, category:'求剩余' },
  { id:'wp043', type:'fill_blank', question:'操场上原来有70个同学，走了43个。还剩几个？', answer:27, difficulty:4, category:'求剩余' },
  { id:'wp044', type:'fill_blank', question:'一本书有82页，小明已经看了45页。还有几页没看？', answer:37, difficulty:4, category:'求剩余' },
  { id:'wp045', type:'fill_blank', question:'袋子里有93颗花生，吃了58颗。还剩几颗？', answer:35, difficulty:5, category:'求剩余' },

  // ═══════ 乘法应用 (15题) ═══════
  { id:'wp046', type:'fill_blank', question:'每组有4个小朋友，3个组一共有几个小朋友？', answer:12, difficulty:3, category:'乘法应用' },
  { id:'wp047', type:'fill_blank', question:'一盒巧克力有6颗，5盒一共有几颗？', answer:30, difficulty:3, category:'乘法应用' },
  { id:'wp048', type:'fill_blank', question:'每行种8棵树，种了3行。一共种了几棵树？', answer:24, difficulty:3, category:'乘法应用' },
  { id:'wp049', type:'fill_blank', question:'每只兔子有4条腿，7只兔子一共有几条腿？', answer:28, difficulty:4, category:'乘法应用' },
  { id:'wp050', type:'fill_blank', question:'一辆三轮车有3个轮子，6辆车一共有几个轮子？', answer:18, difficulty:3, category:'乘法应用' },
  { id:'wp051', type:'fill_blank', question:'每个小朋友分5颗糖，8个小朋友一共需要几颗糖？', answer:40, difficulty:4, category:'乘法应用' },
  { id:'wp052', type:'fill_blank', question:'一星期有7天，4个星期一共有几天？', answer:28, difficulty:4, category:'乘法应用' },
  { id:'wp053', type:'fill_blank', question:'每张桌子配6把椅子，5张桌子配几把椅子？', answer:30, difficulty:4, category:'乘法应用' },
  { id:'wp054', type:'fill_blank', question:'一本书9元，买4本需要多少钱？', answer:36, difficulty:5, category:'乘法应用' },
  { id:'wp055', type:'fill_blank', question:'一包饼干8片，7包一共有多少片？', answer:56, difficulty:5, category:'乘法应用' },
  { id:'wp056', type:'fill_blank', question:'每排站9个人，站了6排。一共有多少人？', answer:54, difficulty:5, category:'乘法应用' },
  { id:'wp057', type:'fill_blank', question:'一个笼子关3只小鸡，8个笼子关几只？', answer:24, difficulty:4, category:'乘法应用' },
  { id:'wp058', type:'fill_blank', question:'一只手有5根手指，9只手有几根手指？', answer:45, difficulty:5, category:'乘法应用' },
  { id:'wp059', type:'fill_blank', question:'一只蜘蛛8条腿，5只蜘蛛几条腿？', answer:40, difficulty:5, category:'乘法应用' },
  { id:'wp060', type:'fill_blank', question:'每千克苹果7元，买6千克要多少元？', answer:42, difficulty:5, category:'乘法应用' },

  // ═══════ 除法应用 (10题) ═══════
  { id:'wp061', type:'fill_blank', question:'12块蛋糕平均分给3个小朋友，每人分几块？', answer:4, difficulty:4, category:'除法应用' },
  { id:'wp062', type:'fill_blank', question:'24支铅笔平均分给6个同学，每人几支？', answer:4, difficulty:4, category:'除法应用' },
  { id:'wp063', type:'fill_blank', question:'妈妈买了30颗草莓，5天吃完，平均每天吃几颗？', answer:6, difficulty:4, category:'除法应用' },
  { id:'wp064', type:'fill_blank', question:'42个气球，每7个绑成一束，可以绑几束？', answer:6, difficulty:5, category:'除法应用' },
  { id:'wp065', type:'fill_blank', question:'56个本子，每8个装一袋，可以装几袋？', answer:7, difficulty:5, category:'除法应用' },
  { id:'wp066', type:'fill_blank', question:'有18个小朋友，每3人一组，可以分成几组？', answer:6, difficulty:4, category:'除法应用' },
  { id:'wp067', type:'fill_blank', question:'36个苹果，每个篮子装9个，需要几个篮子？', answer:4, difficulty:5, category:'除法应用' },
  { id:'wp068', type:'fill_blank', question:'妈妈包了45个饺子，每盘放9个，需要几个盘子？', answer:5, difficulty:5, category:'除法应用' },
  { id:'wp069', type:'fill_blank', question:'72块饼干分给8个小朋友，每人分几块？', answer:9, difficulty:6, category:'除法应用' },
  { id:'wp070', type:'fill_blank', question:'有28颗珠子，穿成4串手链，每串几颗？', answer:7, difficulty:5, category:'除法应用' },

  // ═══════ 两步计算 (10题) ═══════
  { id:'wp071', type:'fill_blank', question:'小明买了3支笔，每支2元，付了10元，找回多少元？', answer:4, difficulty:6, category:'两步计算' },
  { id:'wp072', type:'fill_blank', question:'每组5人，6组去春游。来了2辆大巴，每辆坐多少人？', answer:15, difficulty:7, category:'两步计算' },
  { id:'wp073', type:'fill_blank', question:'小红有4盒彩笔，每盒6支，送给同学5支，还剩几支？', answer:19, difficulty:6, category:'两步计算' },
  { id:'wp074', type:'fill_blank', question:'花店有45朵玫瑰和38朵百合，卖出56朵，还剩几朵？', answer:27, difficulty:6, category:'两步计算' },
  { id:'wp075', type:'fill_blank', question:'一本书原价28元，打折后便宜了9元，买2本要多少钱？', answer:38, difficulty:7, category:'两步计算' },
  { id:'wp076', type:'fill_blank', question:'每排8个座位，5排。坐了32人，还有几个空位？', answer:8, difficulty:6, category:'两步计算' },
  { id:'wp077', type:'fill_blank', question:'妈妈买了6个苹果和9个梨，吃掉7个水果，还剩几个？', answer:8, difficulty:6, category:'两步计算' },
  { id:'wp078', type:'fill_blank', question:'小刚有30元，买了一个15元的文具盒和3支2元的笔，还剩多少？', answer:9, difficulty:7, category:'两步计算' },
  { id:'wp079', type:'fill_blank', question:'图书馆有故事书58本，科技书比故事书少12本，两种书共几本？', answer:104, difficulty:7, category:'两步计算' },
  { id:'wp080', type:'fill_blank', question:'一箱饮料24瓶，喝了8瓶，剩下的平均分给4个人，每人几瓶？', answer:4, difficulty:7, category:'两步计算' }
];
