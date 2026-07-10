/**
 * exam-sets.js — 考核题库
 * 7次周考 + 1次期末考试，难度逐周递进，内容仅覆盖到当周为止。
 *
 * 每题格式：{ type, question, options, answer, explanation }
 *   type:  'multiple_choice' | 'fill_blank' | 'info'
 *   answer: 选项索引(0起) 或 正确答案字符串/数字
 *
 * 考核题目与日常练习不重复。
 */

const EXAM_SETS = [

  // ====== 第1周考核 ======
  {
    week: 1,

    chinese: [
      {
        type: 'info',
        title: '📖 阅读短文一（仔细读，然后回答后面的问题）',
        content: '春天来了，小草从地里钻出来了，绿绿的。花儿开了，红红的，黄黄的，真好看。小鸟在树上唱歌，叽叽喳喳，好像在说："春天真美啊！"小朋友们来到公园里放风筝，五颜六色的风筝飞得高高的。大家玩得可开心了。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '短文中没有提到哪种颜色？',
        options: ["红色", "绿色", "黄色", "蓝色"],
        answer: 3,
        explanation: '文中提到"绿绿的"小草、"红红的"花儿、"黄黄的"花儿，没有提到蓝色。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小鸟在做什么？',
        options: ["睡觉", "唱歌", "吃东西", "飞来飞去"],
        answer: 1,
        explanation: '文中写"小鸟在树上唱歌"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小朋友们在哪里放风筝？',
        options: ["家里", "学校里", "公园里", "山上"],
        answer: 2,
        explanation: '文中写"小朋友们来到公园里放风筝"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '风筝是什么样的？',
        options: ["小小的", "五颜六色的", "黑黑的", "圆圆的"],
        answer: 1,
        explanation: '文中写"五颜六色的风筝飞得高高的"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '短文说的是哪个季节？',
        options: ["夏天", "秋天", "冬天", "春天"],
        answer: 3,
        explanation: '第一句就是"春天来了"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '小鸟的叫声是怎样的？请写出文中出现的表示声音的词语（4个字）：',
        options: null,
        answer: '叽叽喳喳',
        explanation: '文中写小鸟"叽叽喳喳"地唱歌。',
        stage: '阅读理解'
      },
      {
        type: 'info',
        title: '📖 阅读短文二',
        content: '我有一个漂亮的书包，是蓝色的。书包上画着一只小熊猫，圆圆的耳朵，黑黑的眼睛，可爱极了。书包里面装着语文书、数学书和文具盒。每天我都背着它去上学，它是我最好的朋友。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '书包是什么颜色的？',
        options: ["红色", "蓝色", "绿色", "黄色"],
        answer: 1,
        explanation: '第一句说"是蓝色的"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '书包上画着什么？',
        options: ["小猫咪", "小狗狗", "小熊猫", "小兔子"],
        answer: 2,
        explanation: '写"画着一只小熊猫"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '书包里没装什么？',
        options: ["语文书", "数学书", "文具盒", "故事书"],
        answer: 3,
        explanation: '文中提到语文书、数学书、文具盒，没有故事书。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '"我"每天背着书包去做什么？',
        options: null,
        answer: '上学',
        explanation: '"每天我都背着它去上学"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '下面哪个字的拼音是"huā"？',
        options: ["火", "花", "画", "话"],
        answer: 1,
        explanation: '"花"的拼音是 huā。火=huǒ，画=huà，话=huà。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"春天"的"春"拼音是？',
        options: ["chūn", "cūn", "chǔn", "cǔn"],
        answer: 0,
        explanation: '"春"拼音 chūn，翘舌音，一声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"公园"的正确拼音是？',
        options: ["gōng yuán", "gōng yüán", "gōng yuān", "gòng yuán"],
        answer: 0,
        explanation: '"公"一声 gōng，"园"二声 yuán，ü在y后省略两点。',
        stage: '字词拼音'
      },
      {
        type: 'fill_blank',
        question: '请写出"小鸟"的正确拼音（用空格隔开）：',
        options: null,
        answer: 'xiǎo niǎo',
        explanation: '"小"=xiǎo（三声），"鸟"=niǎo（三声）。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"开心"这个词中，哪个字读二声？',
        options: ["开", "心", "都读二声", "都不读二声"],
        answer: 3,
        explanation: '"开"读kāi（一声），"心"读xīn（一声），两个都不读二声。',
        stage: '字词拼音'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '3 + 5 = ？',
        options: null,
        answer: 8,
        explanation: '3加5等于8。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '7 + 6 = ？',
        options: null,
        answer: 13,
        explanation: '7+6=13，凑十法：7+3=10,10+3=13。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '9 + 4 = ？',
        options: null,
        answer: 13,
        explanation: '9+4=13，把4拆成1+3，9+1=10，10+3=13。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '12 - 5 = ？',
        options: null,
        answer: 7,
        explanation: '12-5=7，因为5+7=12。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '15 - 8 = ？',
        options: null,
        answer: 7,
        explanation: '15-8=7，因为8+7=15。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '6 + 8 = ？',
        options: null,
        answer: 14,
        explanation: '6+8=14，凑十法：6+4=10，10+4=14。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '11 - 3 = ？',
        options: null,
        answer: 8,
        explanation: '11-3=8，因为3+8=11。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '5 + 9 = ？',
        options: null,
        answer: 14,
        explanation: '5+9=14，5+10-1=14。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '18 - 9 = ？',
        options: null,
        answer: 9,
        explanation: '18-9=9，个位8减9不够，向十位借1。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '4 + 8 = ？',
        options: null,
        answer: 12,
        explanation: '4+8=12，凑十法：8+2=10，10+2=12。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '23 + 15 = ？（请列竖式算一算）',
        options: null,
        answer: 38,
        explanation: '个位3+5=8，十位2+1=3，所以是38。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '34 + 42 = ？',
        options: null,
        answer: 76,
        explanation: '个位4+2=6，十位3+4=7，所以是76。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '56 - 23 = ？',
        options: null,
        answer: 33,
        explanation: '个位6-3=3，十位5-2=3，所以是33。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '48 - 15 = ？',
        options: null,
        answer: 33,
        explanation: '个位8-5=3，十位4-1=3，所以是33。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '61 + 27 = ？',
        options: null,
        answer: 88,
        explanation: '个位1+7=8，十位6+2=8，所以是88。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '75 - 32 = ？',
        options: null,
        answer: 43,
        explanation: '个位5-2=3，十位7-3=4，所以是43。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '13 + 55 = ？',
        options: null,
        answer: 68,
        explanation: '个位3+5=8，十位1+5=6，所以是68。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '99 - 44 = ？',
        options: null,
        answer: 55,
        explanation: '个位9-4=5，十位9-4=5，所以是55。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '42 + 36 = ？',
        options: null,
        answer: 78,
        explanation: '个位2+6=8，十位4+3=7，所以是78。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '87 - 61 = ？',
        options: null,
        answer: 26,
        explanation: '个位7-1=6，十位8-6=2，所以是26。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '小明有8支铅笔，小红给了他5支，小明现在一共有几支铅笔？',
        options: null,
        answer: 13,
        explanation: '8+5=13（支），求一共用加法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '树上有12只小鸟，飞走了4只，还剩几只？',
        options: null,
        answer: 8,
        explanation: '12-4=8（只），飞走了用减法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '妈妈买了15个苹果，吃了6个，还剩几个？',
        options: null,
        answer: 9,
        explanation: '15-6=9（个），吃了用减法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '小明有一些糖，吃了7颗后还剩6颗，原来有几颗？',
        options: null,
        answer: 13,
        explanation: '7+6=13（颗），吃了的加剩下的就是原来的。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '姐姐今年9岁，弟弟今年6岁，姐姐比弟弟大几岁？',
        options: null,
        answer: 3,
        explanation: '9-6=3（岁），比较多少用减法。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🐶 这个图对应的英文是？',
        options: ["dog", "cat", "bird", "fish"],
        answer: 0,
        explanation: '🐶=dog（狗），cat=猫，bird=鸟，fish=鱼。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🍎 这个图对应的英文是？',
        options: ["banana", "orange", "apple", "grape"],
        answer: 2,
        explanation: '🍎=apple（苹果）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '📕 这个图对应的英文是？',
        options: ["pen", "book", "bag", "ruler"],
        answer: 1,
        explanation: '📕=book（书）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🌞 这个图对应的英文是？',
        options: ["moon", "star", "sun", "sky"],
        answer: 2,
        explanation: '🌞=sun（太阳）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🐱 这个图对应的英文是？',
        options: ["dog", "cat", "pig", "cow"],
        answer: 1,
        explanation: '🐱=cat（猫）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"妈妈" 的英文是？',
        options: ["mother", "father", "sister", "brother"],
        answer: 0,
        explanation: 'mother=妈妈。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"红色" 的英文是？',
        options: ["blue", "red", "green", "yellow"],
        answer: 1,
        explanation: 'red=红色。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"水" 的英文是？',
        options: ["fire", "air", "water", "earth"],
        answer: 2,
        explanation: 'water=水。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"一" 的英文是？',
        options: ["two", "three", "one", "four"],
        answer: 2,
        explanation: 'one=1。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"老师" 的英文是？',
        options: ["student", "doctor", "teacher", "nurse"],
        answer: 2,
        explanation: 'teacher=老师。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"狗"的英文单词：d _ _',
        options: null,
        answer: 'dog',
        explanation: '狗=dog，d-o-g。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"猫"的英文单词：c _ _',
        options: null,
        answer: 'cat',
        explanation: '猫=cat，c-a-t。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"太阳"的英文单词：s _ _',
        options: null,
        answer: 'sun',
        explanation: '太阳=sun，s-u-n。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"红色"的英文单词：r _ _',
        options: null,
        answer: 'red',
        explanation: '红色=red，r-e-d。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"苹果"的英文单词：a _ _ _ _',
        options: null,
        answer: 'apple',
        explanation: '苹果=apple，a-p-p-l-e。',
        stage: '拼写'
      }
    ]
  },

  // ====== 第2周考核 ======
  {
    week: 2,

    chinese: [
      {
        type: 'info',
        title: '📖 阅读短文一',
        content: '要下雨了，小蚂蚁们排着长长的队伍，急急忙忙地搬家。一只小蚂蚁扛着一粒米，走啊走，累得满头大汗。另一只小蚂蚁在后面喊："加油！加油！马上就到新家了！"蚂蚁妈妈说："孩子们真能干！"大家齐心协力，终于在下雨前搬好了家。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小蚂蚁们在做什么？',
        options: ["玩耍", "搬家", "睡觉", "吃饭"],
        answer: 1,
        explanation: '第一句就说"小蚂蚁们急急忙忙地搬家"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小蚂蚁扛着什么？',
        options: ["一粒米", "一片树叶", "一块石头", "一只虫子"],
        answer: 0,
        explanation: '写"扛着一粒米"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '蚂蚁妈妈说孩子们怎么样？',
        options: ["真贪玩", "真能干", "真调皮", "真聪明"],
        answer: 1,
        explanation: '蚂蚁妈妈说"孩子们真能干"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '为什么小蚂蚁要搬家？',
        options: ["要上学了", "要找吃的", "要下雨了", "要去旅游"],
        answer: 2,
        explanation: '第一句写"要下雨了"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小蚂蚁搬家的样子是怎样的？',
        options: ["乱七八糟", "急急忙忙", "慢慢悠悠", "开开心心"],
        answer: 1,
        explanation: '写"急急忙忙地搬家"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '小蚂蚁们在什么时候之前搬好了家？',
        options: null,
        answer: '下雨前',
        explanation: '文中最后一句"终于在下雨前搬好了家"。',
        stage: '阅读理解'
      },
      {
        type: 'info',
        title: '📖 阅读短文二',
        content: '我家有一个小闹钟，圆圆的，像一个小太阳。每天早上七点，它就"叮铃铃"地响起来，好像在说："快起床，快起床，上学要迟到啦！"我赶紧从床上爬起来，穿好衣服，吃完早饭，背上书包去学校。小闹钟是我最好的时间伙伴。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小闹钟像什么？',
        options: ["月亮", "星星", "小太阳", "花朵"],
        answer: 2,
        explanation: '写"圆圆的，像一个小太阳"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小闹钟几点钟响？',
        options: ["六点", "七点", "八点", "九点"],
        answer: 1,
        explanation: '写"每天早上七点"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小闹钟的声音是怎样的？',
        options: ["滴滴答答", "叮铃铃", "叽叽喳喳", "哗啦啦"],
        answer: 1,
        explanation: '写"叮铃铃地响起来"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '"我"听到闹钟后做的第一件事是什么？',
        options: null,
        answer: '爬起来',
        explanation: '"我赶紧从床上爬起来"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '"搬家"中"搬"的拼音是？',
        options: ["bān", "pān", "bāng", "bǎn"],
        answer: 0,
        explanation: '"搬"读 bān，一声，声母是b。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"齐心协力"中"齐"的读音是？',
        options: ["qí", "qǐ", "qì", "qī"],
        answer: 0,
        explanation: '"齐"读 qí，二声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"急急忙忙"拼音正确的是？',
        options: ["jí jí máng máng", "jī jī máng máng", "jí jí māng māng", "jí ji máng máng"],
        answer: 0,
        explanation: '急=二声jí，忙=二声máng。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"时间伙伴"中"时"的拼音是？',
        options: ["sí", "shí", "sǐ", "shì"],
        answer: 1,
        explanation: '"时"读shí二声，翘舌音。',
        stage: '字词拼音'
      },
      {
        type: 'fill_blank',
        question: '请给"叮铃铃"写出拼音（用空格隔开）：',
        options: null,
        answer: 'dīng líng líng',
        explanation: '叮=dīng一声，铃=líng二声(叠用)。',
        stage: '字词拼音'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '8 + 7 = ？',
        options: null,
        answer: 15,
        explanation: '8+7=15，凑十法：8+2=10，10+5=15。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '6 + 9 = ？',
        options: null,
        answer: 15,
        explanation: '6+9=15，凑十法：6+4=10，10+5=15。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '14 - 6 = ？',
        options: null,
        answer: 8,
        explanation: '14-6=8，因为6+8=14。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '13 - 7 = ？',
        options: null,
        answer: 6,
        explanation: '13-7=6，因为7+6=13。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '5 + 8 = ？',
        options: null,
        answer: 13,
        explanation: '5+8=13。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '16 - 9 = ？',
        options: null,
        answer: 7,
        explanation: '16-9=7。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '9 + 9 = ？',
        options: null,
        answer: 18,
        explanation: '9+9=18。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '12 - 8 = ？',
        options: null,
        answer: 4,
        explanation: '12-8=4，因为8+4=12。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '7 + 8 = ？',
        options: null,
        answer: 15,
        explanation: '7+8=15。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '17 - 9 = ？',
        options: null,
        answer: 8,
        explanation: '17-9=8。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '28 + 35 = ？',
        options: null,
        answer: 63,
        explanation: '个位8+5=13进1，十位2+3+1=6，结果63。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '46 + 27 = ？',
        options: null,
        answer: 73,
        explanation: '个位6+7=13进1，十位4+2+1=7，结果73。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '53 - 28 = ？',
        options: null,
        answer: 25,
        explanation: '个位3减8不够，借位13-8=5，十位5变4，4-2=2，结果25。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '82 - 47 = ？',
        options: null,
        answer: 35,
        explanation: '个位2减7不够，借位12-7=5，十位8变7，7-4=3，结果35。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '19 + 66 = ？',
        options: null,
        answer: 85,
        explanation: '个位9+6=15进1，十位1+6+1=8，结果85。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '91 - 38 = ？',
        options: null,
        answer: 53,
        explanation: '个位1减8不够，借位11-8=3，十位9变8，8-3=5，结果53。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '55 + 39 = ？',
        options: null,
        answer: 94,
        explanation: '个位5+9=14进1，十位5+3+1=9，结果94。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '70 - 24 = ？',
        options: null,
        answer: 46,
        explanation: '个位0减4不够，借位10-4=6，十位7变6，6-2=4，结果46。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '38 + 46 = ？',
        options: null,
        answer: 84,
        explanation: '个位8+6=14进1，十位3+4+1=8，结果84。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '64 - 29 = ？',
        options: null,
        answer: 35,
        explanation: '个位4减9不够，借位14-9=5，十位6变5，5-2=3，结果35。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '操场上有35个男生和28个女生在跑步，一共有多少人在跑步？',
        options: null,
        answer: 63,
        explanation: '35+28=63（人），求一共用加法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '图书馆原来有80本书，借走了46本，还剩多少本？',
        options: null,
        answer: 34,
        explanation: '80-46=34（本），借走用减法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '小明做了27道口算题，小红比小明多做了9道，小红做了几道？',
        options: null,
        answer: 36,
        explanation: '27+9=36（道），"比……多"用加法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '水果店有53个西瓜，卖出了25个，还剩几个？',
        options: null,
        answer: 28,
        explanation: '53-25=28（个）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '小芳折了18只纸鹤，小丽折了14只，两人一共折了多少只？',
        options: null,
        answer: 32,
        explanation: '18+14=32（只）。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🐰 这个图对应的英文是？',
        options: ["rabbit", "tiger", "monkey", "bear"],
        answer: 0,
        explanation: '🐰=rabbit（兔子）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🖐️ 这个图对应的英文是？',
        options: ["foot", "head", "hand", "arm"],
        answer: 2,
        explanation: '🖐️=hand（手）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '👀 这个图对应的英文是？',
        options: ["ear", "eye", "nose", "mouth"],
        answer: 1,
        explanation: '👀=eye（眼睛）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🍌 这个图对应的英文是？',
        options: ["apple", "orange", "banana", "pear"],
        answer: 2,
        explanation: '🍌=banana（香蕉）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '👨 这个图对应的英文是？',
        options: ["mother", "father", "sister", "baby"],
        answer: 1,
        explanation: '👨=father（爸爸）/man（男人）。本题选father。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"兔子" 的英文是？',
        options: ["rabbit", "cat", "dog", "bird"],
        answer: 0,
        explanation: 'rabbit=兔子。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"爷爷" 的英文是？',
        options: ["father", "uncle", "grandpa", "brother"],
        answer: 2,
        explanation: 'grandpa=爷爷。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"鼻子" 的英文是？',
        options: ["ear", "eye", "mouth", "nose"],
        answer: 3,
        explanation: 'nose=鼻子。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"蓝色" 的英文是？',
        options: ["red", "blue", "green", "black"],
        answer: 1,
        explanation: 'blue=蓝色。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"大的" 的英文是？',
        options: ["small", "big", "tall", "short"],
        answer: 1,
        explanation: 'big=大的，small=小的。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"兔子"的英文：r _ _ _ _ _',
        options: null,
        answer: 'rabbit',
        explanation: '兔子=rabbit，r-a-b-b-i-t。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"眼睛"的英文：e _ _',
        options: null,
        answer: 'eye',
        explanation: '眼睛=eye，e-y-e。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"蓝色"的英文：b _ _ _',
        options: null,
        answer: 'blue',
        explanation: '蓝色=blue，b-l-u-e。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"大的"的英文：b _ _',
        options: null,
        answer: 'big',
        explanation: '大=big，b-i-g。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"爸爸"的英文：f _ _ _ _ _',
        options: null,
        answer: 'father',
        explanation: '爸爸=father，f-a-t-h-e-r。',
        stage: '拼写'
      }
    ]
  },

  // ====== 第3周考核 ======
  {
    week: 3,

    chinese: [
      {
        type: 'info',
        title: '📖 阅读短文一',
        content: '清晨，草叶上、花瓣上，挂着一颗颗小露珠。小露珠亮晶晶的，像一颗颗透明的珍珠。太阳出来了，阳光照在小露珠上，小露珠闪着五颜六色的光，美极了！不一会儿，小露珠慢慢地变小了，最后不见了。它们去哪儿了呢？原来，它们变成水蒸气，飞到天上去了。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小露珠出现在什么时候？',
        options: ["中午", "傍晚", "清晨", "半夜"],
        answer: 2,
        explanation: '第一句写"清晨"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小露珠像什么？',
        options: ["星星", "珍珠", "花朵", "石头"],
        answer: 1,
        explanation: '写"像一颗颗透明的珍珠"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小露珠最后怎么了？',
        options: ["被人拿走了", "掉到地上了", "变成了水蒸气", "变成冰了"],
        answer: 2,
        explanation: '写"变成水蒸气，飞到天上去了"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '太阳出来后，小露珠的光是什么颜色的？',
        options: ["白色", "金色", "红色", "五颜六色"],
        answer: 3,
        explanation: '写"闪着五颜六色的光"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小露珠在哪里？（选文中没提到的）',
        options: ["草叶上", "花瓣上", "树叶上", "—"],
        answer: 2,
        explanation: '文中只提到草叶上和花瓣上，没提到树叶上。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '形容小露珠发光的样子，文中用了一个什么词？',
        options: null,
        answer: '亮晶晶',
        explanation: '写"小露珠亮晶晶的"。',
        stage: '阅读理解'
      },
      {
        type: 'info',
        title: '📖 阅读短文二',
        content: '春天，花园里的花都开了。小蜜蜂们从蜂窝里飞出来，飞到花丛中采蜜。它们一会儿飞到这朵花上，一会儿飞到那朵花上，忙个不停。蜜蜂姐姐说："我们要多采花蜜，冬天才有蜂蜜吃。"小蜜蜂们听了，干得更起劲了。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小蜜蜂们在做什么？',
        options: ["玩耍", "采蜜", "睡觉", "盖房子"],
        answer: 1,
        explanation: '写"飞到花丛中采蜜"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '谁在鼓励小蜜蜂？',
        options: ["蜜蜂妈妈", "蜜蜂姐姐", "蜜蜂哥哥", "蝴蝶"],
        answer: 1,
        explanation: '写"蜜蜂姐姐说"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '为什么要多采花蜜？',
        options: ["为了好玩", "为了冬天有蜂蜜吃", "为了送给别人", "为了比赛"],
        answer: 1,
        explanation: '写"冬天才有蜂蜜吃"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '小蜜蜂采蜜的时节是什么季节？',
        options: null,
        answer: '春天',
        explanation: '第一句写"春天，花园里的花都开了"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '"露珠"正确拼音是？',
        options: ["lù zhū", "lòu zhū", "lù zū", "lǜ zhū"],
        answer: 0,
        explanation: '"露"读lù四声，"珠"读zhū一声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"蜂窝"的"蜂"拼音是？',
        options: ["fēng", "fēn", "fōng", "fěng"],
        answer: 0,
        explanation: '"蜂"读fēng，一声，后鼻音eng。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"珍珠"的正确拼音是？',
        options: ["zhēn zhū", "zēn zū", "zhēng zhū", "zhēn zū"],
        answer: 0,
        explanation: '珍=zhēn翘舌前鼻音，珠=zhū翘舌。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"采蜜"中"采"的读音是？',
        options: ["cǎi", "chǎi", "cài", "cái"],
        answer: 0,
        explanation: '"采"读cǎi三声，平舌音。',
        stage: '字词拼音'
      },
      {
        type: 'fill_blank',
        question: '"水蒸气"中"蒸"的拼音是什么？',
        options: null,
        answer: 'zhēng',
        explanation: '"蒸"读zhēng，一声，翘舌后鼻音。',
        stage: '字词拼音'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '34 + 25 = ？',
        options: null,
        answer: 59,
        explanation: '个位4+5=9，十位3+2=5。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '56 - 23 = ？',
        options: null,
        answer: 33,
        explanation: '个位6-3=3，十位5-2=3。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '71 + 18 = ？',
        options: null,
        answer: 89,
        explanation: '个位1+8=9，十位7+1=8。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '48 - 35 = ？',
        options: null,
        answer: 13,
        explanation: '个位8-5=3，十位4-3=1。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '22 + 47 = ？',
        options: null,
        answer: 69,
        explanation: '个位2+7=9，十位2+4=6。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '89 - 56 = ？',
        options: null,
        answer: 33,
        explanation: '个位9-6=3，十位8-5=3。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '15 + 63 = ？',
        options: null,
        answer: 78,
        explanation: '个位5+3=8，十位1+6=7。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '97 - 42 = ？',
        options: null,
        answer: 55,
        explanation: '个位7-2=5，十位9-4=5。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '30 + 59 = ？',
        options: null,
        answer: 89,
        explanation: '个位0+9=9，十位3+5=8。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '76 - 34 = ？',
        options: null,
        answer: 42,
        explanation: '个位6-4=2，十位7-3=4。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '47 + 38 = ？',
        options: null,
        answer: 85,
        explanation: '个位7+8=15进1，十位4+3+1=8。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '56 + 29 = ？',
        options: null,
        answer: 85,
        explanation: '个位6+9=15进1，十位5+2+1=8。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '83 - 47 = ？',
        options: null,
        answer: 36,
        explanation: '个位3减7不够，13-7=6，十位8变7，7-4=3。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '61 - 35 = ？',
        options: null,
        answer: 26,
        explanation: '个位1减5不够，11-5=6，十位6变5，5-3=2。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '28 + 67 = ？',
        options: null,
        answer: 95,
        explanation: '个位8+7=15进1，十位2+6+1=9。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '74 + 19 = ？',
        options: null,
        answer: 93,
        explanation: '个位4+9=13进1，十位7+1+1=9。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '90 - 54 = ？',
        options: null,
        answer: 36,
        explanation: '个位0减4不够，10-4=6，十位9变8，8-5=3。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '42 - 18 = ？',
        options: null,
        answer: 24,
        explanation: '个位2减8不够，12-8=4，十位4变3，3-1=2。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '35 + 58 = ？',
        options: null,
        answer: 93,
        explanation: '个位5+8=13进1，十位3+5+1=9。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '100 - 37 = ？',
        options: null,
        answer: 63,
        explanation: '100-37=63，连续借位。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '学校有98名同学去春游，坐了一辆车走了45人，还剩多少人没上车？',
        options: null,
        answer: 53,
        explanation: '98-45=53（人）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '一本故事书有76页，小明看了38页，还剩多少页没看？',
        options: null,
        answer: 38,
        explanation: '76-38=38（页）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '果园里有苹果树54棵，梨树比苹果树少18棵，梨树有多少棵？',
        options: null,
        answer: 36,
        explanation: '54-18=36（棵），"比……少"用减法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '三年级一班有42人，二班有39人，两个班一共有多少人？',
        options: null,
        answer: 81,
        explanation: '42+39=81（人）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '妈妈买了65个鸡蛋，做菜用了27个，还剩多少个？',
        options: null,
        answer: 38,
        explanation: '65-27=38（个）。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🐟 这个图对应的英文是？',
        options: ["fish", "bird", "frog", "duck"],
        answer: 0,
        explanation: '🐟=fish（鱼）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🥛 这个图对应的英文是？',
        options: ["water", "juice", "milk", "tea"],
        answer: 2,
        explanation: '🥛=milk（牛奶）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🍚 这个图对应的英文是？',
        options: ["bread", "rice", "noodle", "cake"],
        answer: 1,
        explanation: '🍚=rice（米饭）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '✏️ 这个图对应的英文是？',
        options: ["ruler", "eraser", "pen", "pencil"],
        answer: 3,
        explanation: '✏️=pencil（铅笔）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🚪 这个图对应的英文是？',
        options: ["window", "door", "desk", "chair"],
        answer: 1,
        explanation: '🚪=door（门）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"牛奶" 的英文是？',
        options: ["water", "juice", "milk", "soda"],
        answer: 2,
        explanation: 'milk=牛奶。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"面包" 的英文是？',
        options: ["rice", "bread", "cake", "egg"],
        answer: 1,
        explanation: 'bread=面包。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"桌子" 的英文是？',
        options: ["chair", "bed", "desk", "sofa"],
        answer: 2,
        explanation: 'desk=桌子。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"蛋糕" 的英文是？',
        options: ["bread", "cookie", "candy", "cake"],
        answer: 3,
        explanation: 'cake=蛋糕。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"学校" 的英文是？',
        options: ["home", "school", "park", "shop"],
        answer: 1,
        explanation: 'school=学校。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"牛奶"的英文：m _ _ _',
        options: null,
        answer: 'milk',
        explanation: '牛奶=milk，m-i-l-k。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"米饭"的英文：r _ _ _',
        options: null,
        answer: 'rice',
        explanation: '米饭=rice，r-i-c-e。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"蛋糕"的英文：c _ _ _',
        options: null,
        answer: 'cake',
        explanation: '蛋糕=cake，c-a-k-e。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"门"的英文：d _ _ _',
        options: null,
        answer: 'door',
        explanation: '门=door，d-o-o-r。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"铅笔"的英文：p _ _ _ _ _',
        options: null,
        answer: 'pencil',
        explanation: '铅笔=pencil，p-e-n-c-i-l。',
        stage: '拼写'
      }
    ]
  },

  // ====== 第4周考核 ======
  {
    week: 4,

    chinese: [
      {
        type: 'info',
        title: '📖 阅读短文一',
        content: '秋天到了，果园里热闹极了。红彤彤的苹果像一个个小灯笼，挂在枝头；黄澄澄的梨子散发着甜甜的香味；紫色的葡萄一串串的，像玛瑙一样。果农伯伯笑呵呵地说："今年又是一个丰收年！"小朋友们提着篮子来采摘，欢声笑语充满了整个果园。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '这篇短文写的是什么季节？',
        options: ["春天", "夏天", "秋天", "冬天"],
        answer: 2,
        explanation: '第一句就说"秋天到了"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '苹果被比作了什么？',
        options: ["玛瑙", "小灯笼", "星星", "太阳"],
        answer: 1,
        explanation: '"苹果像一个个小灯笼"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '葡萄是什么颜色的？',
        options: ["红色", "黄色", "紫色", "绿色"],
        answer: 2,
        explanation: '写"紫色的葡萄"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '果农伯伯心情怎样？',
        options: ["难过", "生气", "开心", "着急"],
        answer: 2,
        explanation: '"笑呵呵地说"表示很开心。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小朋友们来果园做什么？',
        options: ["玩耍", "画画", "采摘", "唱歌"],
        answer: 2,
        explanation: '写"提着篮子来采摘"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '文中形容苹果颜色的词是什么？',
        options: null,
        answer: '红彤彤',
        explanation: '写"红彤彤的苹果"。',
        stage: '阅读理解'
      },
      {
        type: 'info',
        title: '📖 阅读短文二',
        content: '小青蛙想学本领。它去找小鸟学飞行，可是它没有翅膀，飞不起来。它去找小猴子学爬树，可是它的手没有爪子，爬不上去。后来，它在池塘里游来游去，发现自己游得特别快，还会捉害虫。青蛙妈妈笑着说："孩子，我们青蛙最厉害的本领就是游泳和捉害虫呀！"',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小青蛙为什么学不会飞行？',
        options: ["太懒了", "没有翅膀", "太小了", "不够努力"],
        answer: 1,
        explanation: '写"它没有翅膀，飞不起来"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小青蛙跟谁学爬树？',
        options: ["小鸟", "小猴子", "小松鼠", "小猫咪"],
        answer: 1,
        explanation: '写"去找小猴子学爬树"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小青蛙最厉害的本领是什么？',
        options: ["飞行", "爬树", "游泳和捉害虫", "唱歌"],
        answer: 2,
        explanation: '青蛙妈妈说"游泳和捉害虫"最厉害。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '这个故事告诉我们每个人都要学会什么？（2个字）',
        options: null,
        answer: '做自己',
        explanation: '故事告诉我们每个人都有自己的特长，做自己就好。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '"丰收"中"丰"的拼音是？',
        options: ["fēng", "fēn", "fōng", "fèng"],
        answer: 0,
        explanation: '"丰"读fēng一声，后鼻音eng。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"黄澄澄"的正确读音是？',
        options: ["huáng dēng dēng", "huáng chéng chéng", "huáng dèng dèng", "huáng děng děng"],
        answer: 0,
        explanation: '"黄澄澄"读huáng dēng dēng（ABB式形容词中B常读一声）。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '哪个词语没有错别字？',
        options: ["欢声笑语", "欢生笑语", "欢声笑雨", "欢升笑语"],
        answer: 0,
        explanation: '"欢声笑语"正确，声=声音。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"采摘"中"采"的读音是？',
        options: ["cǎi", "chǎi", "cài", "cái"],
        answer: 0,
        explanation: '"采"读cǎi三声，平舌音。',
        stage: '字词拼音'
      },
      {
        type: 'fill_blank',
        question: '请给"池塘"写出拼音（用空格隔开）：',
        options: null,
        answer: 'chí táng',
        explanation: '池=chí二声翘舌，塘=táng二声。',
        stage: '字词拼音'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '28 + 47 = ？',
        options: null,
        answer: 75,
        explanation: '个位8+7=15进1，十位2+4+1=7。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '63 - 28 = ？',
        options: null,
        answer: 35,
        explanation: '个位3减8不够，13-8=5，6变5减2得3。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '3 * 2 = ？',
        options: null,
        answer: 6,
        explanation: '3乘2就是2个3相加，3+3=6。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '5 * 3 = ？',
        options: null,
        answer: 15,
        explanation: '5乘3就是3个5相加，5+5+5=15。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '2 * 6 = ？',
        options: null,
        answer: 12,
        explanation: '2乘6就是6个2相加。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '41 - 19 = ？',
        options: null,
        answer: 22,
        explanation: '个位1减9不够，11-9=2，4变3减1得2。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '55 + 36 = ？',
        options: null,
        answer: 91,
        explanation: '个位5+6=11进1，5+3+1=9。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '4 * 2 = ？',
        options: null,
        answer: 8,
        explanation: '4乘2=8。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '72 - 48 = ？',
        options: null,
        answer: 24,
        explanation: '个位2减8不够，12-8=4，7变6减4得2。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '3 * 4 = ？',
        options: null,
        answer: 12,
        explanation: '3乘4=12。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '56 * 1 = ？',
        options: null,
        answer: 56,
        explanation: '任何数乘1等于它本身。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '1 * 89 = ？',
        options: null,
        answer: 89,
        explanation: '1乘任何数等于那个数本身。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '47 + 68 = ？',
        options: null,
        answer: 115,
        explanation: '47+68=115，进位到百位。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '92 - 57 = ？',
        options: null,
        answer: 35,
        explanation: '个位2减7不够，12-7=5，9变8减5得3。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '23 * 3 = ？',
        options: null,
        answer: 69,
        explanation: '23*3：20*3=60，3*3=9，60+9=69。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '12 * 4 = ？',
        options: null,
        answer: 48,
        explanation: '12*4：10*4=40，2*4=8，40+8=48。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '76 + 85 = ？',
        options: null,
        answer: 161,
        explanation: '76+85=161。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '134 - 68 = ？',
        options: null,
        answer: 66,
        explanation: '134-68=66，退位计算。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '31 * 2 = ？',
        options: null,
        answer: 62,
        explanation: '31*2=62，30*2=60，1*2=2。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '105 - 39 = ？',
        options: null,
        answer: 66,
        explanation: '105-39=66，连续借位。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '每排有8棵树，3排一共有多少棵树？',
        options: null,
        answer: 24,
        explanation: '8*3=24（棵），求几个几用乘法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '商店运来苹果47箱，梨38箱，一共运来多少箱？',
        options: null,
        answer: 85,
        explanation: '47+38=85（箱）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '一箱牛奶有6盒，买4箱一共有多少盒？',
        options: null,
        answer: 24,
        explanation: '6*4=24（盒），乘法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '小明有125元钱，买书花去68元，还剩多少钱？',
        options: null,
        answer: 57,
        explanation: '125-68=57（元）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '教室里有5排座位，每排7个座位，一共有多少个座位？',
        options: null,
        answer: 35,
        explanation: '5*7=35（个）。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🦆 这个图对应的英文是？',
        options: ["chicken", "duck", "goose", "swan"],
        answer: 1,
        explanation: '🦆=duck（鸭子）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🚲 这个图对应的英文是？',
        options: ["car", "bus", "bike", "taxi"],
        answer: 2,
        explanation: '🚲=bike（自行车）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '☔ 这个图对应的英文是？',
        options: ["sun", "wind", "rain", "umbrella"],
        answer: 3,
        explanation: '☔=umbrella（雨伞）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '👚 这个图对应的英文是？',
        options: ["skirt", "shirt", "hat", "shoe"],
        answer: 1,
        explanation: '👚=shirt（衬衫/T恤）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🎒 这个图对应的英文是？',
        options: ["bag", "box", "book", "ball"],
        answer: 0,
        explanation: '🎒=bag（书包/背包）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"鸭子" 的英文是？',
        options: ["chicken", "duck", "bird", "fish"],
        answer: 1,
        explanation: 'duck=鸭子。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"下雨了" 的英文是？',
        options: ["It's sunny.", "It's raining.", "It's windy.", "It's cloudy."],
        answer: 1,
        explanation: 'It\'s raining.=下雨了。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"我的书包是蓝色的"，英文怎么说？',
        options: ["My bag is red.", "My bag is blue.", "My bag is black.", "My book is blue."],
        answer: 1,
        explanation: 'My bag is blue.=我的书包是蓝色的。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"你叫什么名字？"的英文是？',
        options: ["How old are you?", "What's your name?", "Where are you?", "Who are you?"],
        answer: 1,
        explanation: 'What\'s your name?=你叫什么名字。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"谢谢你" 的英文是？',
        options: ["Sorry.", "Please.", "Thank you.", "Hello."],
        answer: 2,
        explanation: 'Thank you.=谢谢你。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"鸭子"的英文：d _ _ _',
        options: null,
        answer: 'duck',
        explanation: '鸭子=duck，d-u-c-k。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"自行车"的英文：b _ _ _',
        options: null,
        answer: 'bike',
        explanation: '自行车=bike，b-i-k-e。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"书包"的英文：b _ _',
        options: null,
        answer: 'bag',
        explanation: '书包=bag，b-a-g。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"雨伞"的英文：u _ _ _ _ _ _ _',
        options: null,
        answer: 'umbrella',
        explanation: '雨伞=umbrella，u-m-b-r-e-l-l-a。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请用英文回答：How old are you? （假设你7岁）',
        options: null,
        answer: 'I am seven.',
        explanation: '回答年龄用"I am + 数字."。',
        stage: '拼写'
      }
    ]
  },

  // ====== 第5周考核 ======
  {
    week: 5,

    chinese: [
      {
        type: 'info',
        title: '📖 阅读短文一',
        content: '天还没亮，我和爸爸就来到了海边。海风吹在脸上，凉凉的。远处的海面灰蒙蒙的，什么也看不清。过了一会儿，天边出现了一道红光，慢慢地，太阳露出了小半边脸，红红的，却不刺眼。太阳好像背着重担似的，一步一步地向上升。最后，太阳完全跳出了海面，发出耀眼的光芒，整个世界都亮了起来。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '"我"去哪里看日出？',
        options: ["山上", "公园", "海边", "操场"],
        answer: 2,
        explanation: '第一句写"来到了海边"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '太阳刚露出来时是什么样子的？',
        options: ["很刺眼", "露出小半边脸", "圆圆的", "小小的"],
        answer: 1,
        explanation: '写"露出了小半边脸"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '太阳是怎样升起来的？',
        options: ["一下子跳出来", "慢慢地落下", "一步一步向上升", "突然就出来了"],
        answer: 2,
        explanation: '写"一步一步地向上升"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '太阳完全出来前，海面是什么样子的？',
        options: ["很亮", "灰蒙蒙", "金光闪闪", "蓝蓝的"],
        answer: 1,
        explanation: '写"远处的海面灰蒙蒙的"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '本文把太阳升起的样子比作了什么？',
        options: ["像气球飞上天", "背着重担一样", "像火箭发射", "像花朵绽放"],
        answer: 1,
        explanation: '写"太阳好像背着重担似的"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '太阳出来后发出了什么样的光芒？文中用了什么词？',
        options: null,
        answer: '耀眼',
        explanation: '写"发出耀眼的光芒"。',
        stage: '阅读理解'
      },
      {
        type: 'info',
        title: '📖 阅读短文二',
        content: '一只小蜗牛在墙上慢慢地爬着。它背着自己的小房子，一步也不停歇。一只蝴蝶飞过来说："蜗牛蜗牛，你爬得也太慢了吧！"小蜗牛笑着说："我虽然爬得慢，但只要一直爬，总能到达我想去的地方。"蝴蝶听了，点点头飞走了。小蜗牛继续往上爬，终于爬到了墙顶。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小蜗牛在哪里爬？',
        options: ["地上", "墙上", "树上", "叶子上"],
        answer: 1,
        explanation: '写"在墙上慢慢地爬着"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '蝴蝶对小蜗牛的态度是怎样的？',
        options: ["嘲笑", "鼓励", "羡慕", "无所谓"],
        answer: 0,
        explanation: '蝴蝶说"你爬得也太慢了吧"带有嘲笑意味。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小蜗牛最后爬到了哪里？',
        options: ["半路上", "墙中间", "墙顶", "掉下来了"],
        answer: 2,
        explanation: '写"终于爬到了墙顶"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '这个故事说明了什么道理？（用一句话概括）',
        options: null,
        answer: '坚持就是胜利',
        explanation: '小蜗牛虽然慢但坚持不停歇，最终达到目标。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '"耀眼"中"耀"的拼音是？',
        options: ["yào", "yǎo", "yāo", "yuè"],
        answer: 0,
        explanation: '"耀"读yào四声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"停歇"中"歇"的拼音是？',
        options: ["xiē", "xē", "xiě", "xiè"],
        answer: 0,
        explanation: '"歇"读xiē一声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '选出书写完全正确的一组：',
        options: ["海风、耀眼、慢熳", "海风、耀眼、慢慢", "海凤、耀眼、慢慢", "海风、耀眠、慢慢"],
        answer: 1,
        explanation: '"慢慢"正确（不是"慢熳"），"海风"正确（不是"海凤"），"耀眼"正确（不是"耀眠"）。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '下列哪组的"好"读音不同？',
        options: ["好像(hǎo)", "好书(hǎo)", "好学(hào)", "好看(hǎo)"],
        answer: 2,
        explanation: '"好学"读hào(四声，爱好之意)，其他读hǎo(三声)。',
        stage: '字词拼音'
      },
      {
        type: 'fill_blank',
        question: '请写"继续"的拼音（用空格隔开）：',
        options: null,
        answer: 'jì xù',
        explanation: '继=jì四声，续=xù四声。',
        stage: '字词拼音'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '6 * 7 = ？',
        options: null,
        answer: 42,
        explanation: '6*7=42，口诀:六七四十二。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '8 * 5 = ？',
        options: null,
        answer: 40,
        explanation: '8*5=40，口诀:五八四十。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '9 * 4 = ？',
        options: null,
        answer: 36,
        explanation: '9*4=36，口诀:四九三十六。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '7 * 8 = ？',
        options: null,
        answer: 56,
        explanation: '7*8=56，口诀:七八五十六。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '3 * 9 = ？',
        options: null,
        answer: 27,
        explanation: '3*9=27，口诀:三九二十七。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '5 * 6 = ？',
        options: null,
        answer: 30,
        explanation: '5*6=30，口诀:五六三十。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '4 * 7 = ？',
        options: null,
        answer: 28,
        explanation: '4*7=28，口诀:四七二十八。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '8 * 8 = ？',
        options: null,
        answer: 64,
        explanation: '8*8=64，口诀:八八六十四。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '2 * 9 = ？',
        options: null,
        answer: 18,
        explanation: '2*9=18，口诀:二九十八。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '6 * 6 = ？',
        options: null,
        answer: 36,
        explanation: '6*6=36，口诀:六六三十六。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '124 + 389 = ？',
        options: null,
        answer: 513,
        explanation: '124+389=513。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '43 * 2 = ？',
        options: null,
        answer: 86,
        explanation: '43*2=86，40*2=80，3*2=6。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '28 * 3 = ？',
        options: null,
        answer: 84,
        explanation: '28*3=84，20*3=60，8*3=24，60+24=84。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '456 - 178 = ？',
        options: null,
        answer: 278,
        explanation: '456-178=278，注意借位。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '15 * 5 = ？',
        options: null,
        answer: 75,
        explanation: '15*5=75，10*5=50，5*5=25，50+25=75。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '203 + 497 = ？',
        options: null,
        answer: 700,
        explanation: '203+497=700。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '34 * 3 = ？',
        options: null,
        answer: 102,
        explanation: '34*3=102，30*3=90，4*3=12，90+12=102。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '560 - 285 = ？',
        options: null,
        answer: 275,
        explanation: '560-285=275。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '17 * 4 = ？',
        options: null,
        answer: 68,
        explanation: '17*4=68，10*4=40，7*4=28，40+28=68。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '999 - 456 = ？',
        options: null,
        answer: 543,
        explanation: '999-456=543。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '一盒巧克力有6颗，小明买了8盒，一共有多少颗？',
        options: null,
        answer: 48,
        explanation: '6*8=48（颗），用乘法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '学校买了7包练习本，每包9本，一共买了多少本？',
        options: null,
        answer: 63,
        explanation: '7*9=63（本）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '一本相册有125页，已经放了78页照片，还能放多少页？',
        options: null,
        answer: 47,
        explanation: '125-78=47（页）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '妈妈买了3袋苹果，每袋有5个，又买了12个橘子，一共买了多少个水果？',
        options: null,
        answer: 27,
        explanation: '3*5=15个苹果，15+12=27（个）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '每个小朋友分4块糖，9个小朋友一共需要多少块糖？',
        options: null,
        answer: 36,
        explanation: '4*9=36（块）。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🏃 这个图对应的英文是？',
        options: ["walk", "run", "jump", "sit"],
        answer: 1,
        explanation: '🏃=run（跑）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🎵 这个图对应的英文是？',
        options: ["sing", "dance", "music", "draw"],
        answer: 2,
        explanation: '🎵=music（音乐）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🏊 这个图对应的英文是？',
        options: ["run", "swim", "fly", "climb"],
        answer: 1,
        explanation: '🏊=swim（游泳）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '📖 这个图对应的英文是？',
        options: ["write", "read", "draw", "sing"],
        answer: 1,
        explanation: '📖=read（阅读）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '✍️ 这个图对应的英文是？',
        options: ["read", "sing", "write", "run"],
        answer: 2,
        explanation: '✍️=write（写）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"唱歌" 的英文是？',
        options: ["dance", "sing", "music", "song"],
        answer: 1,
        explanation: 'sing=唱歌（动词）。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"我能游泳" 用英文怎么说？',
        options: ["I can run.", "I can swim.", "I can fly.", "I can sing."],
        answer: 1,
        explanation: 'I can swim.=我能游泳。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"他很高" 的英文是？',
        options: ["He is short.", "He is tall.", "He is big.", "He is small."],
        answer: 1,
        explanation: 'tall=高（形容人）。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"我喜欢苹果" 的英文是？',
        options: ["I like apples.", "I like dogs.", "I am apple.", "I can apple."],
        answer: 0,
        explanation: 'I like apples.=我喜欢苹果。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"它在桌子下面" 的英文是？',
        options: ["It is on the desk.", "It is under the desk.", "It is in the desk.", "It is by the desk."],
        answer: 1,
        explanation: 'under=在……下面。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"跑"的英文：r _ _',
        options: null,
        answer: 'run',
        explanation: '跑=run，r-u-n。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"游泳"的英文：s _ _ _',
        options: null,
        answer: 'swim',
        explanation: '游泳=swim，s-w-i-m。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"唱歌"的英文：s _ _ _',
        options: null,
        answer: 'sing',
        explanation: '唱歌=sing，s-i-n-g。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"高的"的英文：t _ _ _',
        options: null,
        answer: 'tall',
        explanation: '高=tall，t-a-l-l。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请用英文写出"我喜欢读书。"：',
        options: null,
        answer: 'I like reading.',
        explanation: 'I like reading. = 我喜欢读书。',
        stage: '拼写'
      }
    ]
  },

  // ====== 第6周考核 ======
  {
    week: 6,

    chinese: [
      {
        type: 'info',
        title: '📖 阅读短文一',
        content: '森林里有一棵老树，它的叶子黄黄的，树枝也没有精神。啄木鸟医生飞过来了，它用又尖又硬的嘴巴"笃笃笃"地敲着树干。啄木鸟从树洞里捉出了一条又一条虫子。过了几天，老树的叶子变绿了，树枝也挺直了。老树感激地对啄木鸟说："谢谢你，啄木鸟医生！"啄木鸟摆摆翅膀说："不用谢，这是我的工作。"',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '老树一开始是什么状态？',
        options: ["生机勃勃", "叶子黄黄的", "开满了花", "长满果实"],
        answer: 1,
        explanation: '写"叶子黄黄的，树枝也没有精神"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '啄木鸟用什么敲树干？',
        options: ["爪子", "翅膀", "嘴巴", "尾巴"],
        answer: 2,
        explanation: '写"用又尖又硬的嘴巴敲着树干"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '啄木鸟从树洞里捉出了什么？',
        options: ["蜂蜜", "虫子", "树叶", "果子"],
        answer: 1,
        explanation: '写"捉出了一条又一条虫子"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '被治好后老树变成什么样？',
        options: ["更黄了", "还是老样子", "叶子变绿了", "死了"],
        answer: 2,
        explanation: '写"老树的叶子变绿了，树枝也挺直了"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '啄木鸟敲树干的声音是什么？',
        options: ["咚咚咚", "笃笃笃", "砰砰砰", "叽叽叽"],
        answer: 1,
        explanation: '写"笃笃笃地敲着树干"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '老树对啄木鸟说了什么？（3个字）',
        options: null,
        answer: '谢谢你',
        explanation: '写"谢谢你，啄木鸟医生"。',
        stage: '阅读理解'
      },
      {
        type: 'info',
        title: '📖 阅读短文二',
        content: '雨后，天上出现了一座彩虹桥。有红的、橙的、黄的、绿的、青的、蓝的、紫的，七种颜色，美丽极了。小鸟飞过来说："彩虹桥，你真漂亮！我能从你身上飞过去吗？"彩虹桥笑着说："当然可以！"小鸟开心地飞了过去。太阳公公出来了，彩虹桥慢慢地消失了。小鸟说："彩虹桥，明天再见！"',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '彩虹有几种颜色？',
        options: ["五种", "六种", "七种", "八种"],
        answer: 2,
        explanation: '文中列出红、橙、黄、绿、青、蓝、紫共七种颜色。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '彩虹什么时候出现？',
        options: ["晴天", "雨后", "晚上", "中午"],
        answer: 1,
        explanation: '第一句写"雨后，天上出现了一座彩虹桥"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小鸟能飞过彩虹桥吗？',
        options: ["不能", "能", "不知道", "没试"],
        answer: 1,
        explanation: '彩虹桥说"当然可以"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '彩虹最后怎么了？',
        options: null,
        answer: '消失了',
        explanation: '写"彩虹桥慢慢地消失了"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '"啄木鸟"中"啄"的拼音是？',
        options: ["zhuó", "zuó", "zhú", "zhuō"],
        answer: 0,
        explanation: '"啄"读zhuó二声，翘舌音。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"感激"的意思最接近哪个词？',
        options: ["生气", "感谢", "高兴", "难过"],
        answer: 1,
        explanation: '"感激"意思是感谢、感恩。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"彩虹"的正确拼音是？',
        options: ["cǎi hóng", "chǎi hóng", "cǎi hòng", "cài hóng"],
        answer: 0,
        explanation: '彩=cǎi平舌三声，虹=hóng二声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '选出"树"字的正确部首：',
        options: ["木字旁", "氵", "火字旁", "土字旁"],
        answer: 0,
        explanation: '"树"的部首是木字旁。',
        stage: '字词拼音'
      },
      {
        type: 'fill_blank',
        question: '"消失"中"消"的拼音是什么？',
        options: null,
        answer: 'xiāo',
        explanation: '"消"读xiāo一声。',
        stage: '字词拼音'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '7 * 6 = ？',
        options: null,
        answer: 42,
        explanation: '7*6=42，口诀:六七四十二。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '36 / 4 = ？',
        options: null,
        answer: 9,
        explanation: '36/4=9，因为4*9=36。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '8 * 7 = ？',
        options: null,
        answer: 56,
        explanation: '8*7=56。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '24 / 3 = ？',
        options: null,
        answer: 8,
        explanation: '24/3=8，因为3*8=24。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '9 * 6 = ？',
        options: null,
        answer: 54,
        explanation: '9*6=54。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '18 / 2 = ？',
        options: null,
        answer: 9,
        explanation: '18/2=9，因为2*9=18。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '5 * 8 = ？',
        options: null,
        answer: 40,
        explanation: '5*8=40。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '42 / 6 = ？',
        options: null,
        answer: 7,
        explanation: '42/6=7，因为6*7=42。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '4 * 9 = ？',
        options: null,
        answer: 36,
        explanation: '4*9=36。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '56 / 7 = ？',
        options: null,
        answer: 8,
        explanation: '56/7=8，因为7*8=56。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '45 / 5 = ？',
        options: null,
        answer: 9,
        explanation: '45/5=9，五九四十五。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '63 / 7 = ？',
        options: null,
        answer: 9,
        explanation: '63/7=9，七九六十三。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '156 + 278 = ？',
        options: null,
        answer: 434,
        explanation: '156+278=434。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '81 / 9 = ？',
        options: null,
        answer: 9,
        explanation: '81/9=9，九九八十一。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '320 - 147 = ？',
        options: null,
        answer: 173,
        explanation: '320-147=173。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '72 / 8 = ？',
        options: null,
        answer: 9,
        explanation: '72/8=9，八九七十二。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '234 + 567 = ？',
        options: null,
        answer: 801,
        explanation: '234+567=801。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '54 / 6 = ？',
        options: null,
        answer: 9,
        explanation: '54/6=9，六九五十四。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '602 - 389 = ？',
        options: null,
        answer: 213,
        explanation: '602-389=213，连续借位。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '48 / 6 = ？',
        options: null,
        answer: 8,
        explanation: '48/6=8，六八四十八。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '有48颗糖果，平均分给8个小朋友，每人得到几颗？',
        options: null,
        answer: 6,
        explanation: '48/8=6（颗），用除法。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '商店有苹果156个，梨比苹果多78个，梨有多少个？',
        options: null,
        answer: 234,
        explanation: '156+78=234（个）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '把36个桃子平均放在6个盘子里，每个盘子放几个？',
        options: null,
        answer: 6,
        explanation: '36/6=6（个）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '小明3分钟做了27道口算题，平均每分钟做几道？',
        options: null,
        answer: 9,
        explanation: '27/3=9（道）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '5个小朋友一共折了45只纸飞机，平均每人折几只？',
        options: null,
        answer: 9,
        explanation: '45/5=9（只）。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🌳 这个图对应的英文是？',
        options: ["flower", "tree", "grass", "bush"],
        answer: 1,
        explanation: '🌳=tree（树）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🌸 这个图对应的英文是？',
        options: ["tree", "grass", "flower", "leaf"],
        answer: 2,
        explanation: '🌸=flower（花）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '☁️ 这个图对应的英文是？',
        options: ["sun", "moon", "star", "cloud"],
        answer: 3,
        explanation: '☁️=cloud（云）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🌧️ 这个图对应的英文是？',
        options: ["sunny", "rain", "snow", "wind"],
        answer: 1,
        explanation: '🌧️=rain（雨）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '❄️ 这个图对应的英文是？',
        options: ["rain", "wind", "snow", "ice"],
        answer: 2,
        explanation: '❄️=snow（雪）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"今天天气很好" 的英文是？',
        options: ["It's sunny today.", "It's rainy today.", "It's cold today.", "It's night."],
        answer: 0,
        explanation: 'It\'s sunny today.=今天晴天。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"花朵" 的英文是？',
        options: ["tree", "grass", "flower", "leaf"],
        answer: 2,
        explanation: 'flower=花朵。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"春天" 的英文是？',
        options: ["summer", "autumn", "winter", "spring"],
        answer: 3,
        explanation: 'spring=春天。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"我爱你" 的英文是？',
        options: ["I like you.", "I love you.", "I see you.", "I am you."],
        answer: 1,
        explanation: 'I love you.=我爱你。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"他正在读书" 的英文是？',
        options: ["He is running.", "He is reading.", "He is singing.", "He reads."],
        answer: 1,
        explanation: 'He is reading.=他正在读书。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"树"的英文：t _ _ _',
        options: null,
        answer: 'tree',
        explanation: '树=tree，t-r-e-e。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"花"的英文：f _ _ _ _ _',
        options: null,
        answer: 'flower',
        explanation: '花=flower，f-l-o-w-e-r。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"春天"的英文：s _ _ _ _ _',
        options: null,
        answer: 'spring',
        explanation: '春天=spring，s-p-r-i-n-g。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"云"的英文：c _ _ _ _',
        options: null,
        answer: 'cloud',
        explanation: '云=cloud，c-l-o-u-d。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请用英文写出"今天是晴天。"：',
        options: null,
        answer: 'It is sunny today.',
        explanation: 'It is sunny today. = 今天是晴天。',
        stage: '拼写'
      }
    ]
  },

  // ====== 第7周考核 ======
  {
    week: 7,

    chinese: [
      {
        type: 'info',
        title: '📖 阅读短文一',
        content: '小鹰长大了，鹰妈妈决定教它飞行。鹰妈妈把小鹰带到悬崖边，说："孩子，跳下去，展开翅膀！"小鹰往下一看，下面深不见底，吓得直发抖。"妈妈，我怕！"小鹰哭着说。鹰妈妈温柔地说："不怕，妈妈在你身边。相信自己，你一定可以的！"小鹰闭上眼睛，深吸一口气，纵身一跳——它展开翅膀，风托起了它的身体。小鹰睁开眼睛，发现自己正在空中飞翔！它兴奋地喊道："妈妈，我会飞了！""孩子，"鹰妈妈笑着说，"有时候，最大的敌人就是自己的恐惧。"',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '鹰妈妈把小鹰带到了哪里？',
        options: ["山顶", "悬崖边", "树梢", "河边"],
        answer: 1,
        explanation: '写"把小鹰带到悬崖边"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小鹰一开始为什么不敢跳？',
        options: ["太远了", "怕高", "不会飞", "怕妈妈骂"],
        answer: 1,
        explanation: '写"下面深不见底，吓得直发抖"，原因是害怕。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '鹰妈妈对小鹰的态度是怎样的？',
        options: ["严厉批评", "温柔鼓励", "不理不睬", "嘲笑"],
        answer: 1,
        explanation: '鹰妈妈"温柔地"鼓励小鹰。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小鹰是怎么学会飞的？',
        options: ["别人教的", "看视频学的", "被推下去的", "自己勇敢跳下去"],
        answer: 3,
        explanation: '小鹰最终"纵身一跳"，自己打败恐惧。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '鹰妈妈认为最大的敌人是什么？',
        options: ["其他鸟类", "恶劣天气", "自己的恐惧", "猎人"],
        answer: 2,
        explanation: '最后一句:"最大的敌人就是自己的恐惧"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小鹰跳下去之后，什么托起了它？',
        options: ["树枝", "云", "风", "妈妈"],
        answer: 2,
        explanation: '写"风托起了它的身体"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '鹰妈妈的话包含一个重要的道理，请概括（不超过5个字）：',
        options: null,
        answer: '战胜恐惧',
        explanation: '鹰妈妈说"最大的敌人就是自己的恐惧"。',
        stage: '阅读理解'
      },
      {
        type: 'info',
        title: '📖 阅读短文二',
        content: '桌子上有一个小闹钟和一个陀螺。小闹钟每天"滴答滴答"地走着，从来不休息。陀螺说："你整天转来转去的，累不累啊？"小闹钟说："这是我的工作呀。我每走一步，时间就过去一秒。我不能停，停了就会耽误主人的事。"陀螺听了，觉得小闹钟很了不起。从此以后，陀螺也学着小闹钟，每天坚持转呀转。它们成了最好的朋友。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小闹钟的声音是怎样的？',
        options: ["叮铃铃", "滴答滴答", "咚咚咚", "哗哗哗"],
        answer: 1,
        explanation: '写"滴答滴答地走着"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '小闹钟为什么不休息？',
        options: ["它不累", "它怕别人笑", "这是它的工作", "主人不让它停"],
        answer: 2,
        explanation: '小闹钟说"这是我的工作呀"。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '陀螺最后做了什么？',
        options: ["嘲笑小闹钟", "不理小闹钟", "学小闹钟坚持转动", "离开了"],
        answer: 2,
        explanation: '写"陀螺也学着小闹钟，每天坚持转呀转"。',
        stage: '阅读理解'
      },
      {
        type: 'fill_blank',
        question: '这篇短文告诉我们要有什么品质？（2个字）',
        options: null,
        answer: '坚持',
        explanation: '小闹钟"从来不休息"，陀螺"坚持转呀转"，体现了坚持。',
        stage: '阅读理解'
      },
      {
        type: 'multiple_choice',
        question: '"恐惧"中"恐"的读音是？',
        options: ["kǒng", "kòng", "kōng", "gǒng"],
        answer: 0,
        explanation: '"恐"读kǒng三声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '"温柔"的"温"拼音是？',
        options: ["wēn", "wén", "wěn", "wèn"],
        answer: 0,
        explanation: '"温"读wēn一声。',
        stage: '字词拼音'
      },
      {
        type: 'multiple_choice',
        question: '下面哪个词不是同一类？',
        options: ["恐惧", "害怕", "担心", "勇敢"],
        answer: 3,
        explanation: '前三个都是负面情绪词，"勇敢"是积极品质。',
        stage: '字词拼音'
      },
      {
        type: 'fill_blank',
        question: '请写出"悬崖"的正确拼音（用空格隔开）：',
        options: null,
        answer: 'xuán yá',
        explanation: '悬=xuán二声，崖=yá二声。',
        stage: '字词拼音'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '3 * 4 + 5 = ？',
        options: null,
        answer: 17,
        explanation: '先算乘法3*4=12，再算12+5=17。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '6 * 2 - 7 = ？',
        options: null,
        answer: 5,
        explanation: '先算6*2=12，再算12-7=5。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '36 / 4 + 3 = ？',
        options: null,
        answer: 12,
        explanation: '先算36/4=9，再算9+3=12。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '45 / 5 - 2 = ？',
        options: null,
        answer: 7,
        explanation: '先算45/5=9，再算9-2=7。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '8 * 3 + 6 = ？',
        options: null,
        answer: 30,
        explanation: '先算8*3=24，再算24+6=30。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '20 / 4 + 7 = ？',
        options: null,
        answer: 12,
        explanation: '先算20/4=5，再算5+7=12。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '9 * 2 - 8 = ？',
        options: null,
        answer: 10,
        explanation: '先算9*2=18，再算18-8=10。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '28 / 7 + 11 = ？',
        options: null,
        answer: 15,
        explanation: '先算28/7=4，再算4+11=15。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '7 * 5 - 20 = ？',
        options: null,
        answer: 15,
        explanation: '先算7*5=35，再算35-20=15。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '16 / 2 + 5 = ？',
        options: null,
        answer: 13,
        explanation: '先算16/2=8，再算8+5=13。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '(23 + 15) / 2 = ？',
        options: null,
        answer: 19,
        explanation: '先括号:23+15=38，再38/2=19。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '56 - 18 / 2 = ？',
        options: null,
        answer: 47,
        explanation: '先除:18/2=9，再56-9=47。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '4 * (12 - 7) = ？',
        options: null,
        answer: 20,
        explanation: '先括号:12-7=5，再4*5=20。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '345 + 278 = ？',
        options: null,
        answer: 623,
        explanation: '345+278=623。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '63 / 7 + 4 * 5 = ？',
        options: null,
        answer: 29,
        explanation: '先除:63/7=9，再乘:4*5=20，再9+20=29。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '700 - 326 = ？',
        options: null,
        answer: 374,
        explanation: '700-326=374。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '(48 / 6) * 3 = ？',
        options: null,
        answer: 24,
        explanation: '先括号:48/6=8，再8*3=24。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '1000 - 457 = ？',
        options: null,
        answer: 543,
        explanation: '1000-457=543。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '15 + 25 * 2 = ？',
        options: null,
        answer: 65,
        explanation: '先乘:25*2=50，再15+50=65。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '(35 + 45) / 8 = ？',
        options: null,
        answer: 10,
        explanation: '先括号:35+45=80，再80/8=10。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '小明买了3本笔记本，每本8元，又买了一支钢笔12元，一共花了多少钱？',
        options: null,
        answer: 36,
        explanation: '3*8=24元(笔记本)，24+12=36元。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '有56个气球，平均分给7个小朋友，其中2个小朋友不要了，退回几个气球？',
        options: null,
        answer: 16,
        explanation: '56/7=8(每人)，2*8=16(个)退回。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '学校图书馆原来有324本书，上周借出156本，这周归还了89本，现在有多少本？',
        options: null,
        answer: 257,
        explanation: '324-156=168，168+89=257(本)。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '每排种6棵树，种了5排后还剩3棵树没种，原来一共有多少棵树？',
        options: null,
        answer: 33,
        explanation: '6*5=30，30+3=33(棵)。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '原来一共有60颗糖，每袋装6颗，可以装几袋？',
        options: null,
        answer: 10,
        explanation: '60/6=10（袋）。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🐘 这个图对应的英文是？',
        options: ["lion", "tiger", "elephant", "monkey"],
        answer: 2,
        explanation: '🐘=elephant（大象）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🦁 这个图对应的英文是？',
        options: ["tiger", "lion", "bear", "wolf"],
        answer: 1,
        explanation: '🦁=lion（狮子）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🐒 这个图对应的英文是？',
        options: ["dog", "cat", "monkey", "rabbit"],
        answer: 2,
        explanation: '🐒=monkey（猴子）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🐍 这个图对应的英文是？',
        options: ["fish", "frog", "lizard", "snake"],
        answer: 3,
        explanation: '🐍=snake（蛇）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🐼 这个图对应的英文是？',
        options: ["bear", "panda", "cat", "dog"],
        answer: 1,
        explanation: '🐼=panda（熊猫）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"今天星期几？" 的英文是？',
        options: ["What day is today?", "What time is it?", "What is this?", "How are you?"],
        answer: 0,
        explanation: 'What day is today?=今天星期几。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"我来自中国" 的英文是？',
        options: ["I am a student.", "I am from China.", "I like China.", "I go to China."],
        answer: 1,
        explanation: 'I am from China.=我来自中国。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"这是什么？" 的英文是？',
        options: ["What is that?", "What is this?", "Who is this?", "Where is this?"],
        answer: 1,
        explanation: 'What is this?=这是什么。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"我很好，谢谢。" 的英文是？',
        options: ["I am fine, thank you.", "I am sad.", "I am hungry.", "I am happy, sorry."],
        answer: 0,
        explanation: 'I am fine, thank you.=我很好，谢谢。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"几点了？" 的英文是？',
        options: ["What day?", "What time is it?", "When is it?", "How many?"],
        answer: 1,
        explanation: 'What time is it?=几点了。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"大象"的英文：e _ _ _ _ _ _ _',
        options: null,
        answer: 'elephant',
        explanation: '大象=elephant，e-l-e-p-h-a-n-t。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"猴子"的英文：m _ _ _ _ _',
        options: null,
        answer: 'monkey',
        explanation: '猴子=monkey，m-o-n-k-e-y。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"中国"的英文：C _ _ _ _',
        options: null,
        answer: 'China',
        explanation: '中国=China，注意首字母大写。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"熊猫"的英文：p _ _ _ _',
        options: null,
        answer: 'panda',
        explanation: '熊猫=panda，p-a-n-d-a。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请用英文写出"我8岁了。"：',
        options: null,
        answer: 'I am eight years old.',
        explanation: 'I am eight years old. = 我8岁了。',
        stage: '拼写'
      }
    ]
  },

  // ====== 期末考试 ======
  {
    week: 8,

    chinese: [
      {
        type: 'info',
        title: '📖 综合阅读一（仔细阅读，回答后面所有问题）',
        content: '春天来了，泥土里的一粒种子醒了。它伸了个懒腰，觉得四周黑乎乎的、闷闷的。"我要出去看看外面的世界！"种子想。它使劲地往上钻，可是泥土太硬了。雨水姐姐来了，她轻轻地说："种子种子，喝点水吧！"种子喝足了水，身体膨胀起来，一下子就把泥土顶开了一条缝。太阳公公送来温暖的光，种子觉得全身暖洋洋的，充满了力量。它努力地伸展身体，终于——"啵"的一声，它钻出了地面！"哇，外面的世界真美啊！"小嫩芽看到了蓝蓝的天空、白白的云朵，还有飞来飞去的小蝴蝶。它开心地笑了。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '种子一开始醒来时感觉怎样？',
        options: ["很开心", "黑乎乎的、闷闷的", "很冷", "很亮"],
        answer: 1,
        explanation: '写"四周黑乎乎的、闷闷的"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '谁帮种子喝了水？',
        options: ["太阳公公", "月亮姐姐", "雨水姐姐", "春风哥哥"],
        answer: 2,
        explanation: '写"雨水姐姐来了"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '种子喝足水后发生了什么变化？',
        options: ["枯萎了", "身体膨胀起来", "睡着了", "飞了起来"],
        answer: 1,
        explanation: '写"身体膨胀起来"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '太阳公公给了种子什么？',
        options: ["水", "土", "温暖的光", "风"],
        answer: 2,
        explanation: '写"太阳公公送来温暖的光"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '种子钻出地面时发出了什么声音？',
        options: ["啪", "砰", "啵", "咚"],
        answer: 2,
        explanation: '写"啵的一声，它钻出了地面"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '种子钻出地面后看到了什么？（选文中没有的）',
        options: ["蓝天", "白云", "小蝴蝶", "小鸟"],
        answer: 3,
        explanation: '文中提到蓝天、白云、小蝴蝶，没有小鸟。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '种子钻出地面后变成了什么？',
        options: ["大树", "小嫩芽", "花朵", "小草"],
        answer: 1,
        explanation: '写"小嫩芽看到了蓝蓝的天空"。',
        stage: '综合阅读'
      },
      {
        type: 'fill_blank',
        question: '这个故事告诉我们种子生长需要什么条件？写出两个：',
        options: null,
        answer: '水和阳光',
        explanation: '雨水给水，太阳给光，这是植物生长必需的。',
        stage: '综合阅读'
      },
      {
        type: 'info',
        title: '📖 综合阅读二',
        content: '小花猫和小黄狗是好朋友。一天，小花猫的皮球掉进了河里，小花猫急得"喵喵"叫。小黄狗听到了，赶紧跑过来说："别着急，我帮你捞上来！"小黄狗"扑通"一声跳进河里，很快就把皮球叼了上来。小花猫高兴地说："谢谢你！"过了几天，小黄狗的骨头卡在树洞里拿不出来了。小花猫看到后，伸出它灵活的爪子，小心地把骨头掏了出来。小黄狗摇着尾巴说："你也真厉害！"从此以后，它们的友谊更加深厚了。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '小花猫的什么东西掉进了河里？',
        options: ["骨头", "皮球", "鱼", "毛线团"],
        answer: 1,
        explanation: '写"皮球掉进了河里"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '小黄狗用什么动作下河的？',
        options: ["轻轻地走下去", "扑通一声跳下去", "慢慢地滑下去", "飞下去"],
        answer: 1,
        explanation: '写"扑通一声跳进河里"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '小花猫帮小黄狗做了什么？',
        options: ["捞皮球", "掏出骨头", "找食物", "盖房子"],
        answer: 1,
        explanation: '写"小心地把骨头掏了出来"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '这两件事说明了什么？',
        options: ["朋友之间要互相帮助", "猫和狗不能做朋友", "要学会独立", "自己最重要"],
        answer: 0,
        explanation: '两次互相帮助，说明友谊在于互相帮忙。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '小黄狗是怎么表达感谢的？',
        options: ["说谢谢", "摇尾巴", "亲了一下", "送了礼物"],
        answer: 1,
        explanation: '写"小黄狗摇着尾巴说"。',
        stage: '综合阅读'
      },
      {
        type: 'fill_blank',
        question: '文中哪个词形容了小花猫"急"的心情？',
        options: null,
        answer: '喵喵叫',
        explanation: '写"小花猫急得喵喵叫"。',
        stage: '综合阅读'
      },
      {
        type: 'fill_blank',
        question: '故事的结局是什么？请用文中的一个词回答（4个字）：',
        options: null,
        answer: '更加深厚',
        explanation: '写"从此以后，它们的友谊更加深厚了"。',
        stage: '综合阅读'
      },
      {
        type: 'multiple_choice',
        question: '以下哪个字的声母是翘舌音？',
        options: ["三", "山", "伞", "散"],
        answer: 1,
        explanation: '"山"的声母是sh（翘舌），其他三个声母是s（平舌）。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '"暖和"的正确读音是？',
        options: ["nuǎn hé", "nuǎn huo", "nǎn hé", "nuǎn huó"],
        answer: 1,
        explanation: '"暖和"读nuǎn huo，"和"在这里读轻声huo。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '哪个词语中没有错别字？',
        options: ["蓝蓝的天上白云飘", "篮蓝的天上白云飘", "蓝蓝的天上白云漂", "蓝篮的天上白云飘"],
        answer: 0,
        explanation: '"蓝蓝"形容颜色用"蓝"，"飘"是飘浮。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '"友谊"中"谊"的正确读音是？',
        options: ["yí", "yì", "yǐ", "yī"],
        answer: 1,
        explanation: '"谊"读yì四声。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '"膨胀"的"胀"拼音是？',
        options: ["zhàng", "zhāng", "zàng", "zhǎng"],
        answer: 0,
        explanation: '"胀"读zhàng四声，翘舌音。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '下面词语中不是同一类的是：',
        options: ["苹果", "香蕉", "橘子", "土豆"],
        answer: 3,
        explanation: '前三个是水果，土豆是蔬菜。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '选出以下汉字中笔画数最多的一项：',
        options: ["山(3画)", "鸟(5画)", "蝴蝶(蝴15画+蝶15画=30画)", "雨(8画)"],
        answer: 2,
        explanation: '"蝴蝶"两个字笔画之和最多（蝴15画+蝶15画=30画）。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '"终于"的反义词是？',
        options: ["开始", "结束", "一直", "突然"],
        answer: 0,
        explanation: '"终于"表示最终的结果，反义词是"开始"。',
        stage: '字词综合'
      },
      {
        type: 'multiple_choice',
        question: '选出以下成语书写正确的一项：',
        options: ["齐心力协", "齐心协力", "齐协力心", "齐心协历"],
        answer: 1,
        explanation: '"齐心协力"正确写法。',
        stage: '字词综合'
      },
      {
        type: 'fill_blank',
        question: '请写出"温暖"中"暖"的拼音：',
        options: null,
        answer: 'nuǎn',
        explanation: '"暖"读nuǎn三声，前鼻音。',
        stage: '字词综合'
      }
    ],

    math: [
      {
        type: 'fill_blank',
        question: '7 * 8 = ？',
        options: null,
        answer: 56,
        explanation: '口诀:七八五十六。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '54 / 6 = ？',
        options: null,
        answer: 9,
        explanation: '六九五十四。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '36 + 47 = ？',
        options: null,
        answer: 83,
        explanation: '36+47=83。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '93 - 58 = ？',
        options: null,
        answer: 35,
        explanation: '93-58=35。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '6 * 9 = ？',
        options: null,
        answer: 54,
        explanation: '六九五十四。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '72 / 8 = ？',
        options: null,
        answer: 9,
        explanation: '八九七十二。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '5 * 7 + 8 = ？',
        options: null,
        answer: 43,
        explanation: '先乘:5*7=35，再加:35+8=43。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '64 / 8 + 12 = ？',
        options: null,
        answer: 20,
        explanation: '先除:64/8=8，再加:8+12=20。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '45 - 18 / 3 = ？',
        options: null,
        answer: 39,
        explanation: '先除:18/3=6，再减:45-6=39。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '9 * 3 - 15 = ？',
        options: null,
        answer: 12,
        explanation: '先乘:9*3=27，再减:27-15=12。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '81 / 9 + 7 * 2 = ？',
        options: null,
        answer: 23,
        explanation: '先除:81/9=9，先乘:7*2=14，再9+14=23。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '100 - 25 * 2 = ？',
        options: null,
        answer: 50,
        explanation: '先乘:25*2=50，再减:100-50=50。',
        stage: '口算'
      },
      {
        type: 'fill_blank',
        question: '346 + 289 = ？',
        options: null,
        answer: 635,
        explanation: '346+289=635。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '57 * 3 = ？',
        options: null,
        answer: 171,
        explanation: '57*3=171。50*3=150，7*3=21，150+21=171。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '423 - 187 = ？',
        options: null,
        answer: 236,
        explanation: '423-187=236。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '96 / 8 = ？',
        options: null,
        answer: 12,
        explanation: '96/8=12，因为8*12=96。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '258 + 674 = ？',
        options: null,
        answer: 932,
        explanation: '258+674=932。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '68 * 4 = ？',
        options: null,
        answer: 272,
        explanation: '68*4=272。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '802 - 459 = ？',
        options: null,
        answer: 343,
        explanation: '802-459=343，连续借位。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '(56 + 24) / 5 = ？',
        options: null,
        answer: 16,
        explanation: '先括号:56+24=80，再80/5=16。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '120 / 6 + 35 = ？',
        options: null,
        answer: 55,
        explanation: '先除:120/6=20，再加:20+35=55。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '43 * 5 = ？',
        options: null,
        answer: 215,
        explanation: '43*5=215。40*5=200，3*5=15，200+15=215。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '1000 - 384 = ？',
        options: null,
        answer: 616,
        explanation: '1000-384=616。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '72 / 9 * 4 = ？',
        options: null,
        answer: 32,
        explanation: '同级运算从左到右:72/9=8，8*4=32。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '(38 + 46) / 7 = ？',
        options: null,
        answer: 12,
        explanation: '先括号:38+46=84，再84/7=12。',
        showVertical: true,
        stage: '笔算'
      },
      {
        type: 'fill_blank',
        question: '学校开运动会，有4个年级参加，每个年级出12名运动员，另外有8名裁判，一共有多少人参加？',
        options: null,
        answer: 56,
        explanation: '4*12=48名运动员，48+8=56人。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '一箱矿泉水有24瓶，3箱一共有多少瓶？',
        options: null,
        answer: 72,
        explanation: '24*3=72（瓶）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '有96本练习本，平均分给8个班，每班分到多少本？',
        options: null,
        answer: 12,
        explanation: '96/8=12（本）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '商店上午卖出145个冰淇淋，下午卖出208个，一天共卖出多少个？',
        options: null,
        answer: 353,
        explanation: '145+208=353（个）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '小明有500元压岁钱，买玩具花去128元，买书花去96元，还剩多少钱？',
        options: null,
        answer: 276,
        explanation: '500-128-96=276（元）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '一辆公交车上有45人，到站后下车18人，又上车25人，现在车上有多少人？',
        options: null,
        answer: 52,
        explanation: '45-18=27，27+25=52（人）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '每个小组有7人，5个小组去植树，每人植树3棵，一共植树多少棵？',
        options: null,
        answer: 105,
        explanation: '7*5=35人，35*3=105（棵）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '电影院有8排座位，每排9个，已经坐了56人，还能坐多少人？',
        options: null,
        answer: 16,
        explanation: '8*9=72个座位，72-56=16（人）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '工厂生产了300个零件，每盒装8个，装完37盒后还剩多少个零件？',
        options: null,
        answer: 4,
        explanation: '37*8=296个(装入盒)，300-296=4（个）。',
        stage: '应用题'
      },
      {
        type: 'fill_blank',
        question: '一袋糖分给3个小朋友，每人分到12颗后还剩5颗，这袋糖原来有多少颗？',
        options: null,
        answer: 41,
        explanation: '3*12=36颗(分出去)，36+5=41（颗）。',
        stage: '应用题'
      }
    ],

    english: [
      {
        type: 'multiple_choice',
        question: '🍉 这个图对应的英文是？',
        options: ["apple", "banana", "watermelon", "grape"],
        answer: 2,
        explanation: '🍉=watermelon（西瓜）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🦋 这个图对应的英文是？',
        options: ["bird", "bee", "butterfly", "dragonfly"],
        answer: 2,
        explanation: '🦋=butterfly（蝴蝶）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🐸 这个图对应的英文是？',
        options: ["fish", "frog", "turtle", "snake"],
        answer: 1,
        explanation: '🐸=frog（青蛙）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🍰 这个图对应的英文是？',
        options: ["bread", "cookie", "cake", "candy"],
        answer: 2,
        explanation: '🍰=cake（蛋糕）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🖍️ 这个图对应的英文是？',
        options: ["pen", "pencil", "crayon", "brush"],
        answer: 2,
        explanation: '🖍️=crayon（蜡笔）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '🌙 这个图对应的英文是？',
        options: ["sun", "star", "cloud", "moon"],
        answer: 3,
        explanation: '🌙=moon（月亮）。',
        stage: '看图选词'
      },
      {
        type: 'multiple_choice',
        question: '"西瓜" 的英文是？',
        options: ["water", "melon", "watermelon", "lemon"],
        answer: 2,
        explanation: 'watermelon=西瓜。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"早上好" 的英文是？',
        options: ["Good afternoon.", "Good morning.", "Good evening.", "Good night."],
        answer: 1,
        explanation: 'Good morning.=早上好。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"再见" 的英文是？',
        options: ["Hello.", "Sorry.", "Please.", "Goodbye."],
        answer: 3,
        explanation: 'Goodbye.=再见。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"这是一只猫" 的英文是？',
        options: ["This is a dog.", "That is a cat.", "This is a cat.", "It is a dog."],
        answer: 2,
        explanation: 'This is a cat.=这是一只猫。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"请坐下" 的英文是？',
        options: ["Stand up, please.", "Sit down, please.", "Come here, please.", "Open the door."],
        answer: 1,
        explanation: 'Sit down, please.=请坐下。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"你多大了？" 的英文是？',
        options: ["How are you?", "How old are you?", "What is your name?", "Where are you?"],
        answer: 1,
        explanation: 'How old are you?=你多大了。',
        stage: '中英配对'
      },
      {
        type: 'multiple_choice',
        question: '"我的铅笔在哪里？" 英文怎么说？',
        options: ["Where is my pencil?", "What is my pencil?", "Where is my pen?", "This is my pencil."],
        answer: 0,
        explanation: 'Where is my pencil?=我的铅笔在哪里。',
        stage: '中英配对'
      },
      {
        type: 'fill_blank',
        question: '请拼写"西瓜"的英文：w _ _ _ _ _ _ _ _ _',
        options: null,
        answer: 'watermelon',
        explanation: '西瓜=watermelon。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"蝴蝶"的英文：b _ _ _ _ _ _ _ _ _',
        options: null,
        answer: 'butterfly',
        explanation: '蝴蝶=butterfly。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"青蛙"的英文：f _ _ _',
        options: null,
        answer: 'frog',
        explanation: '青蛙=frog。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"月亮"的英文：m _ _ _',
        options: null,
        answer: 'moon',
        explanation: '月亮=moon。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请用英文写出"这是一本书。"：',
        options: null,
        answer: 'This is a book.',
        explanation: 'This is a book. = 这是一本书。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请拼写"蜡笔"的英文：c _ _ _ _ _',
        options: null,
        answer: 'crayon',
        explanation: '蜡笔=crayon。',
        stage: '拼写'
      },
      {
        type: 'fill_blank',
        question: '请用英文写出"我有一只小狗。"：',
        options: null,
        answer: 'I have a dog.',
        explanation: 'I have a dog. = 我有一只小狗。',
        stage: '拼写'
      },
      {
        type: 'multiple_choice',
        question: '当你想借同学的橡皮时，你应该说：',
        options: ["Give me your eraser!", "May I use your eraser, please?", "This is my eraser.", "I don't like erasers."],
        answer: 1,
        explanation: '借东西要用礼貌用语"May I...please?"。',
        stage: '情景对话'
      },
      {
        type: 'multiple_choice',
        question: '当别人对你说"Thank you!"时，你应该回答：',
        options: ["No, thanks.", "You're welcome.", "Sorry.", "Goodbye."],
        answer: 1,
        explanation: 'You\'re welcome.=不客气。',
        stage: '情景对话'
      },
      {
        type: 'multiple_choice',
        question: '你想表示"我非常喜欢这个"，应该说：',
        options: ["I don't like it.", "I like it very much.", "It is OK.", "I am fine."],
        answer: 1,
        explanation: 'I like it very much.=我非常喜欢它。',
        stage: '情景对话'
      },
      {
        type: 'multiple_choice',
        question: '有人问你"What color is your bag?"，你的书包是绿色的，你应该回答：',
        options: ["It is red.", "It is green.", "It is blue.", "My bag is green."],
        answer: 3,
        explanation: '问颜色回答: My bag is green.',
        stage: '情景对话'
      },
      {
        type: 'multiple_choice',
        question: '你想知道对方的名字，你应该问：',
        options: ["How old are you?", "What's your name?", "Where are you?", "How are you?"],
        answer: 1,
        explanation: 'What\'s your name?=你叫什么名字。',
        stage: '情景对话'
      }
    ]
  },

];
