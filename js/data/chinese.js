
const CHINESE_READINGS = [
  // ==================== 第1周（4篇）====================
  {
    id: 'r001',
    week: 1,
    category: '童话寓言',
    title: '小马过河（节选）',
    passage: 'xiǎo mǎ tuó zhe yí dài mài zi lái dào yì tiáo xiǎo hé biān。\n小 马 驮 着 一 袋 麦 子 来 到 一 条 小 河 边。\n\nhé shuǐ huā huā de liú zhe， kàn shàng qù yǒu diǎn er shēn。\n河 水 哗 哗 地 流 着， 看 上 去 有 点 儿 深。\n\nxiǎo mǎ bù gǎn xià shuǐ， zhèng zài yóu yù de shí hou， kàn jiàn yì tóu lǎo niú zài hé biān chī cǎo。\n小 马 不 敢 下 水， 正 在 犹 豫 的 时 候， 看 见 一 头 老 牛 在 河 边 吃 草。\n\nxiǎo mǎ wèn：" niú bó bo， zhè tiáo hé shēn ma？\n小 马 问：" 牛 伯 伯， 这 条 河 深 吗？\n\nwǒ néng guò qu ma？\n我 能 过 去 吗？\n\n" lǎo niú shuō：" shuǐ hěn qiǎn， gāng mò guò xiǎo tuǐ， nǐ fàng xīn guò ba。\n" 老 牛 说：" 水 很 浅， 刚 没 过 小 腿， 你 放 心 过 吧。\n\n" xiǎo mǎ tīng le， gāo gāo xìng xìng de zhǔn bèi guò hé。\n" 小 马 听 了， 高 高 兴 兴 地 准 备 过 河。\n\nzhè shí， yì zhī xiǎo sōng shǔ tiào guò lái dà jiào：" xiǎo mǎ！\n这 时， 一 只 小 松 鼠 跳 过 来 大 叫：" 小 马！\n\nbié guò hé！\n别 过 河！\n\nshuǐ hěn shēn， qián jǐ tiān wǒ de yí gè xiǎo huǒ bàn jiù diào jìn hé lǐ yān sǐ le！\n水 很 深， 前 几 天 我 的 一 个 小 伙 伴 就 掉 进 河 里 淹 死 了！\n\n" xiǎo mǎ lèng zhù le： lǎo niú shuō shuǐ qiǎn， xiǎo sōng shǔ shuō shuǐ shēn， dào dǐ gāi tīng shuí de ne？\n" 小 马 愣 住 了： 老 牛 说 水 浅， 小 松 鼠 说 水 深， 到 底 该 听 谁 的 呢？',
    questions: [
      {
        type: 'multiple_choice',
        question: '小马驮着什么来到河边？',
        options: ['一(yì)袋(dài)麦(mài)子(zi)', '一(yì)袋(dài)米(mǐ)', '一(yì)袋(dài)面(miàn)粉(fěn)', '一(yì)筐(kuāng)水(shuǐ)果(guǒ)'],
        answer: 0,
        explanation: '短文第一句告诉我们，小马驮着一袋麦子。',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '老牛说河水怎么样？',
        options: ['很(hěn)深(shēn)', '很(hěn)浅(qiǎn)', '不(bù)深(shēn)不(bù)浅(qiǎn)', '很(hěn)急(jí)'],
        answer: 1,
        explanation: '老牛说："水很浅，刚没过小腿。"',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '小松鼠为什么叫小马别过河？',
        options: ['因(yīn)为(wèi)河(hé)水(shuǐ)太(tài)冷(lěng)', '因(yīn)为(wèi)它(tā)觉(jué)得(de)河(hé)水(shuǐ)很(hěn)深(shēn)很(hěn)危(wēi)险(xiǎn)', '因(yīn)为(wèi)它(tā)想(xiǎng)和(hé)小(xiǎo)马(mǎ)玩(wán)', '因(yīn)为(wèi)河(hé)里(lǐ)有(yǒu)大(dà)鱼(yú)'],
        answer: 1,
        explanation: '小松鼠说水很深，它的小伙伴曾经掉进河里淹死了。',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '小马最后怎么样了？',
        options: ['直(zhí)接(jiē)过(guò)河(hé)了(le)', '回(huí)家(jiā)了(le)', '愣(lèng)住(zhù)了(le)，不(bù)知(zhī)道(dào)该(gāi)听(tīng)谁(shuí)的(de)', '去(qù)问(wèn)别(bié)人(rén)了(le)'],
        answer: 2,
        explanation: '文中说小马"愣住了"，不知道该听谁的。',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '下列哪个字的拼音是正确的？',
        options: ['驮(duò)', '淹(yān)', '鼠(sǔ)', '豫(yǜ)'],
        answer: 1,
        explanation: '"淹"的拼音是 yān。"驮"读，"鼠"读，"豫"读。',
        stage: '拼音练习'
      },
      {
        type: 'multiple_choice',
        question: '这个故事告诉我们什么道理？',
        options: ['不(bú)要(yào)听(tīng)别(bié)人(rén)的(de)话(huà)', '遇(yù)到(dào)问(wèn)题(tí)要(yào)自(zì)己(jǐ)动(dòng)脑(nǎo)筋(jīn)试(shì)一(yí)试(shì)', '小(xiǎo)松(sōng)鼠(shǔ)说(shuō)的(de)都(dōu)是(shì)对(duì)的(de)', '老(lǎo)牛(niú)说(shuō)的(de)都(dōu)是(shì)对(duì)的(de)'],
        answer: 1,
        explanation: '不同的人对同一件事有不同的看法，遇到问题要自己动脑筋，亲自尝试。',
        stage: '道理启示'
      },
      {
        type: 'multiple_choice',
        question: '文中"犹豫"是什么意思？',
        options: ['很(hěn)开(kāi)心(xīn)', '拿(ná)不(bú)定(dìng)主(zhǔ)意(yi)', '跑(pǎo)得(de)很(hěn)快(kuài)', '很(hěn)害(hài)怕(pà)'],
        answer: 1,
        explanation: '"犹豫"就是拿不定主意，不知道该怎么办。',
        stage: '字词选择'
      }
    ]
  },

  {
    id: 'r002',
    week: 1,
    category: '童话寓言',
    title: '乌鸦喝水',
    passage: 'yì zhī wū yā kǒu kě le， dào chù zhǎo shuǐ hē。\n一 只 乌 鸦 口 渴 了， 到 处 找 水 喝。\n\ntā kàn jiàn dì shang yǒu yí gè píng zi， píng zi lǐ yǒu yì diǎn shuǐ。\n它 看 见 地 上 有 一 个 瓶 子， 瓶 子 里 有 一 点 水。\n\nkě shì píng zi hěn shēn， shuǐ yòu hěn shǎo， wū yā de zuǐ ba zěn me yě gòu bù zháo shuǐ。\n可 是 瓶 子 很 深， 水 又 很 少， 乌 鸦 的 嘴 巴 怎 么 也 够 不 着 水。\n\nwū yā xiǎng le xiǎng， xiǎng chū le yí gè hǎo bàn fǎ。\n乌 鸦 想 了 想， 想 出 了 一 个 好 办 法。\n\ntā yòng zuǐ ba diāo lái yì kē yì kē de xiǎo shí zǐ， fàng jìn píng zi lǐ。\n它 用 嘴 巴 叼 来 一 颗 一 颗 的 小 石 子， 放 进 瓶 子 里。\n\npíng zi lǐ de shí zǐ yuè lái yuè duō， shuǐ yě màn màn de shēng le shàng lái。\n瓶 子 里 的 石 子 越 来 越 多， 水 也 慢 慢 地 升 了 上 来。\n\nzuì hòu， shuǐ shēng dào le píng kǒu， wū yā zhōng yú hē dào le shuǐ。\n最 后， 水 升 到 了 瓶 口， 乌 鸦 终 于 喝 到 了 水。\n\nwū yā jué de zhè shuǐ zhēn tián ā！\n乌 鸦 觉 得 这 水 真 甜 啊！\n\ntā gāo xìng jí le， pāi pai chì bǎng fēi zǒu le。\n它 高 兴 极 了， 拍 拍 翅 膀 飞 走 了。',
    questions: [
      { type: 'multiple_choice', question: '乌鸦为什么要找水？', options: ['因(yīn)为(wèi)它(tā)饿(è)了(le)', '因(yīn)为(wèi)它(tā)口(kǒu)渴(kě)了(le)', '因(yīn)为(wèi)它(tā)想(xiǎng)洗(xǐ)澡(zǎo)', '因(yīn)为(wèi)它(tā)想(xiǎng)玩(wán)水(shuǐ)'], answer: 1, explanation: '短文第一句说："一只乌鸦口渴了"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '乌鸦用什么方法喝到了水？', options: ['把(bǎ)瓶(píng)子(zi)推(tuī)倒(dǎo)', '用(yòng)嘴(zuǐ)巴(ba)叼(diāo)石(shí)子(zǐ)放(fàng)进(jìn)瓶(píng)子(zi)里(lǐ)', '请(qǐng)别(bié)人(rén)帮(bāng)忙(máng)', '用(yòng)吸(xī)管(guǎn)喝(hē)'], answer: 1, explanation: '乌鸦叼来小石子放进瓶子里，水就慢慢升上来了。', stage: '内容理解' },
      { type: 'multiple_choice', question: '为什么石子放进去后水会升上来？', options: ['因(yīn)为(wèi)石(shí)子(zǐ)把(bǎ)水(shuǐ)挤(jǐ)上(shàng)来(lái)了(le)', '因(yīn)为(wèi)水(shuǐ)变(biàn)多(duō)了(le)', '因(yīn)为(wèi)瓶(píng)子(zi)变(biàn)短(duǎn)了(le)', '因(yīn)为(wèi)石(shí)子(zǐ)会(huì)出(chū)水(shuǐ)'], answer: 0, explanation: '石子占了瓶子里的空间，把水挤到了上面。', stage: '内容理解' },
      { type: 'multiple_choice', question: '乌鸦喝到水后的心情是怎样的？', options: ['很(hěn)难(nán)过(guò)', '很(hěn)生(shēng)气(qì)', '很(hěn)高(gāo)兴(xìng)', '很(hěn)害(hài)怕(pà)'], answer: 2, explanation: '文中说乌鸦"高兴极了"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '下列哪个拼音是错误的？', options: ['鸦(yā)', '渴(kě)', '瓶(pín)', '翅(chì)'], answer: 2, explanation: '"瓶"的拼音应该是 píng，不是 pín。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么道理？', options: ['乌(wū)鸦(yā)很(hěn)笨(bèn)', '遇(yù)到(dào)困(kùn)难(nán)要(yào)动(dòng)脑(nǎo)筋(jīn)想(xiǎng)办(bàn)法(fǎ)', '石(shí)子(zǐ)可(kě)以(yǐ)喝(hē)', '不(bú)要(yào)喝(hē)瓶(píng)子(zi)里(lǐ)的(de)水(shuǐ)'], answer: 1, explanation: '乌鸦遇到困难没有放弃，而是动脑筋想出了好办法。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文中"叼"字是什么意思？', options: ['用(yòng)手(shǒu)拿(ná)', '用(yòng)嘴(zuǐ)衔(xián)着(zhe)', '用(yòng)脚(jiǎo)踢(tī)', '用(yòng)头(tóu)顶(dǐng)'], answer: 1, explanation: '"叼"就是用嘴巴衔着东西。', stage: '字词选择' }
    ]
  },
  {
    id: 'r003',
    week: 1,
    category: '快乐读书吧',
    title: '《一年级的小豆豆》节选',
    passage: 'xiǎo dòu dou jīn nián shàng yī nián jí le。\n小 豆 豆 今 年 上 一 年 级 了。\n\nkāi xué dì yī tiān， tā bēi zhe xīn shū bāo， lǐ miàn zhuāng zhe xīn kè běn、 xīn wén jù hé， hái yǒu mā mā gěi tā zhǔn bèi de xiǎo líng shí。\n开 学 第 一 天， 她 背 着 新 书 包， 里 面 装 着 新 课 本、 新 文 具 盒， 还 有 妈 妈 给 她 准 备 的 小 零 食。\n\nzǒu jìn jiào shì， xiǎo dòu dou kàn dào le hǎo duō xīn tóng xué。\n走 进 教 室， 小 豆 豆 看 到 了 好 多 新 同 学。\n\ntā de zhuō zi páng biān zuò zhe yí gè xiǎo nán hái， míng zì jiào lǐ dà wěi。\n她 的 桌 子 旁 边 坐 着 一 个 小 男 孩， 名 字 叫 李 大 伟。\n\nxiǎo dòu dou duì tā xiào le xiào， lǐ dà wěi yě xiào le xiào。\n小 豆 豆 对 他 笑 了 笑， 李 大 伟 也 笑 了 笑。\n\nlǎo shī zǒu jìn lái， dà jiā dōu ān jìng xià lái。\n老 师 走 进 来， 大 家 都 安 静 下 来。\n\nlǎo shī shuō：" cóng jīn tiān kāi shǐ， nǐ men jiù shì xiǎo xué shēng le！\n老 师 说：" 从 今 天 开 始， 你 们 就 是 小 学 生 了！\n\n" xiǎo dòu dou jué de， dāng xiǎo xué shēng zhēn hǎo！\n" 小 豆 豆 觉 得， 当 小 学 生 真 好！',
    questions: [
      { type: 'multiple_choice', question: '小豆豆今年上几年级？', options: ['幼(yòu)儿(ér)园(yuán)', '一(yī)年(nián)级(jí)', '二(èr)年(nián)级(jí)', '三(sān)年(nián)级(jí)'], answer: 1, explanation: '文中明确说："小豆豆今年上一年级了。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小豆豆的同桌叫什么名字？', options: ['王(wáng)小(xiǎo)明(míng)', '张(zhāng)小(xiǎo)华(huá)', '李(lǐ)大(dà)伟(wěi)', '刘(liú)小(xiǎo)刚(gāng)'], answer: 2, explanation: '文中写道："名字叫李大伟。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小豆豆的书包里没有什么？', options: ['新(xīn)课(kè)本(běn)', '新(xīn)文(wén)具(jù)盒(hé)', '玩(wán)具(jù)熊(xióng)', '小(xiǎo)零(líng)食(shí)'], answer: 2, explanation: '文中提到书包里有课本、文具盒和零食，没有玩具。', stage: '内容理解' },
      { type: 'multiple_choice', question: '老师说了什么话？', options: ['你(nǐ)们(men)好(hǎo)好(hǎo)学(xué)习(xí)', '从(cóng)今(jīn)天(tiān)开(kāi)始(shǐ)，你(nǐ)们(men)就(jiù)是(shì)小(xiǎo)学(xué)生(shēng)了(le)', '大(dà)家(jiā)不(bú)要(yào)说(shuō)话(huà)', '明(míng)天(tiān)要(yào)考(kǎo)试(shì)'], answer: 1, explanation: '老师说："从今天开始，你们就是小学生了！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"安静"的"静"拼音是？', options: ['jìn', 'jìng', 'qìng', 'jìnɡ'], answer: 1, explanation: '"静"的拼音是 jìng，后鼻音。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '小豆豆觉得当小学生怎么样？', options: ['很(hěn)累(lèi)', '真(zhēn)好(hǎo)', '很(hěn)无(wú)聊(liáo)', '很(hěn)难(nán)'], answer: 1, explanation: '文末说："小豆豆觉得，当小学生真好！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '你觉得小豆豆是一个怎样的孩子？', options: ['胆(dǎn)小(xiǎo)怕(pà)事(shì)的(de)', '开(kāi)朗(lǎng)友(yǒu)好(hǎo)的(de)', '调(tiáo)皮(pí)捣(dǎo)蛋(dàn)的(de)', '不(bù)爱(ài)说(shuō)话(huà)的(de)'], answer: 1, explanation: '小豆豆主动对同桌笑，说明她是一个开朗友好的孩子。', stage: '道理启示' }
    ]
  },
  {
    id: 'r004',
    week: 1,
    category: '童谣',
    title: '小燕子',
    passage: 'xiǎo yàn zi， chuān huā yī， nián nián chūn tiān lái zhè lǐ。\n小 燕 子， 穿 花 衣， 年 年 春 天 来 这 里。\n\nwǒ wèn yàn zi wèi shá lái？\n我 问 燕 子 为 啥 来？\n\nyàn zi shuō：" zhè lǐ de chūn tiān zuì měi lì。\n燕 子 说：" 这 里 的 春 天 最 美 丽。\n\n" xiǎo yàn zi， zhēn líng lì， fēi dé gāo lái fēi dé dī。\n" 小 燕 子， 真 伶 俐， 飞 得 高 来 飞 得 低。\n\njiān jiān de wěi ba xiàng jiǎn dāo， yí xià jiǎn chū chūn tiān de xīn yī。\n尖 尖 的 尾 巴 像 剪 刀， 一 下 剪 出 春 天 的 新 衣。\n\nxiǎo yàn zi， zhuō chóng máng， bǎo hù hé miáo kuài zhǎng dà。\n小 燕 子， 捉 虫 忙， 保 护 禾 苗 快 长 大。\n\nwǒ men dōu ài xiǎo yàn zi， qǐng nǐ nián nián lái wǒ jiā！\n我 们 都 爱 小 燕 子， 请 你 年 年 来 我 家！',
    questions: [
      { type: 'multiple_choice', question: '小燕子什么季节飞来？', options: ['夏(xià)天(tiān)', '秋(qiū)天(tiān)', '春(chūn)天(tiān)', '冬(dōng)天(tiān)'], answer: 2, explanation: '童谣中唱道："年年春天来这里。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '燕子的尾巴像什么？', options: ['扇(shàn)子(zi)', '剪(jiǎn)刀(dāo)', '针(zhēn)', '线(xiàn)'], answer: 1, explanation: '童谣中说："尖尖的尾巴像剪刀。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '燕子捉虫是为了什么？', options: ['自(zì)己(jǐ)吃(chī)着(zhe)玩(wán)', '保(bǎo)护(hù)禾(hé)苗(miáo)快(kuài)长(zhǎng)大(dà)', '送(sòng)给(gěi)别(bié)的(de)鸟(niǎo)', '用(yòng)来(lái)做(zuò)窝(wō)'], answer: 1, explanation: '童谣中说："保护禾苗快长大。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"伶俐"的拼音是？', options: ['líng lì', 'lín lì', 'líng nì', 'lín nì'], answer: 0, explanation: '"伶"读，"俐"读，两个字都是第四声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这首童谣表达了什么感情？', options: ['对(duì)燕(yàn)子(zi)的(de)喜(xǐ)爱(ài)之(zhī)情(qíng)', '对(duì)春(chūn)天(tiān)的(de)厌(yàn)恶(wù)', '对(duì)冬(dōng)天(tiān)的(de)怀(huái)念(niàn)', '对(duì)秋(qiū)天(tiān)的(de)赞(zàn)美(měi)'], answer: 0, explanation: '童谣最后一句说"我们都爱小燕子"，表达了对燕子的喜爱。', stage: '道理启示' },
      { type: 'multiple_choice', question: '童谣中燕子的衣服是什么样的？', options: ['黑(hēi)色(sè)的(de)', '白(bái)色(sè)的(de)', '花(huā)衣(yī)', '红(hóng)色(sè)的(de)'], answer: 2, explanation: '第一句就说："小燕子，穿花衣。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '童谣中哪个词语描写了燕子飞行的样子？', options: ['慢(màn)慢(màn)飞(fēi)', '飞(fēi)得(dé)高(gāo)来(lái)飞(fēi)得(dé)低(dī)', '一(yì)直(zhí)飞(fēi)', '不(bú)会(huì)飞(fēi)'], answer: 1, explanation: '童谣第二段写道："飞得高来飞得低"，写出了燕子飞行灵活的样子。', stage: '好词摘抄' }
    ]
  },

  // ==================== 第2周（4篇）====================
  {
    id: 'r005',
    week: 2,
    category: '童话寓言',
    title: '狐狸和葡萄',
    passage: 'yǒu yì tiān， yì zhī jī è de hú li zǒu guò yí gè pú tao yuán。\n有 一 天， 一 只 饥 饿 的 狐 狸 走 过 一 个 葡 萄 园。\n\ntā kàn jiàn jià zi shang guà zhe yí chuàn chuàn zǐ yíng yíng de pú tao， chán de kǒu shuǐ dōu yào liú chū lái le。\n它 看 见 架 子 上 挂 着 一 串 串 紫 莹 莹 的 葡 萄， 馋 得 口 水 都 要 流 出 来 了。\n\nhú li xiǎng chī pú tao， kě shì pú tao jià tài gāo le， tā tiào le jǐ cì dōu méi gòu zháo。\n狐 狸 想 吃 葡 萄， 可 是 葡 萄 架 太 高 了， 它 跳 了 几 次 都 没 够 着。\n\nhú li lèi de qì chuǎn xū xū， kě hái shì zhāi bú dào yì kē pú tao。\n狐 狸 累 得 气 喘 吁 吁， 可 还 是 摘 不 到 一 颗 葡 萄。\n\nzuì hòu， hú li tíng le xià lái， kàn zhe pú tao shuō：" zhè xiē pú tao yí dìng shì suān de， bù hǎo chī！\n最 后， 狐 狸 停 了 下 来， 看 着 葡 萄 说：" 这 些 葡 萄 一 定 是 酸 的， 不 好 吃！\n\n" shuō wán， tā zhuǎn shēn zǒu le。\n" 说 完， 它 转 身 走 了。\n\nbiān zǒu hái biān dí gu：" shuí ài chī shuí chī， fǎn zhèng wǒ bù xī han！\n边 走 还 边 嘀 咕：" 谁 爱 吃 谁 吃， 反 正 我 不 稀 罕！\n\n"\n"',
    questions: [
      { type: 'multiple_choice', question: '狐狸看见了什么？', options: ['苹(píng)果(guǒ)', '一(yí)串(chuàn)串(chuàn)紫(zǐ)莹(yíng)莹(yíng)的(de)葡(pú)萄(tao)', '香(xiāng)蕉(jiāo)', '西(xī)瓜(guā)'], answer: 1, explanation: '文中说狐狸看见了"一串串紫莹莹的葡萄"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐狸为什么没吃到葡萄？', options: ['葡(pú)萄(tao)太(tài)酸(suān)了(le)', '葡(pú)萄(tao)架(jià)太(tài)高(gāo)够(gòu)不(bù)着(zháo)', '它(tā)不(bù)想(xiǎng)吃(chī)', '有(yǒu)人(rén)赶(gǎn)走(zǒu)了(le)它(tā)'], answer: 1, explanation: '文中说"葡萄架太高了，它跳了几次都没够着"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐狸最后说葡萄是什么味道的？', options: ['甜(tián)的(de)', '酸(suān)的(de)', '苦(kǔ)的(de)', '辣(là)的(de)'], answer: 1, explanation: '狐狸说："这些葡萄一定是酸的。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐狸真的知道葡萄是酸的吗？', options: ['知(zhī)道(dào)，它(tā)吃(chī)过(guò)了(le)', '不(bù)知(zhī)道(dào)，它(tā)没(méi)吃(chī)到(dào)就(jiù)说(shuō)酸(suān)', '知(zhī)道(dào)，它(tā)闻(wén)出(chū)来(lái)了(le)', '知(zhī)道(dào)，别(bié)人(rén)告(gào)诉(su)它(tā)的(de)'], answer: 1, explanation: '狐狸没有吃到葡萄，就说葡萄是酸的，这是自我安慰。', stage: '内容理解' },
      { type: 'multiple_choice', question: '下列哪个字的拼音正确？', options: ['狐(fú)', '葡(pǔ)', '串(chuàn)', '酸(suān)'], answer: 3, explanation: '"酸"读。"狐"读，"葡"读，"串"读但"葡萄"中的"萄"读轻声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么道理？', options: ['葡(pú)萄(tao)都(dōu)是(shì)酸(suān)的(de)', '不(bú)要(yào)吃(chī)葡(pú)萄(tao)', '有(yǒu)的(de)人(rén)得(dé)不(bú)到(dào)东(dōng)西(xi)就(jiù)说(shuō)东(dōng)西(xi)不(bù)好(hǎo)', '狐(hú)狸(li)很(hěn)聪(cōng)明(míng)'], answer: 2, explanation: '这个寓言讽刺了有的人得不到东西就说东西不好的心态。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文中"气喘吁吁"是什么意思？', options: ['很(hěn)开(kāi)心(xīn)', '呼(hū)吸(xī)急(jí)促(cù)，很(hěn)累(lèi)的(de)样(yàng)子(zi)', '说(shuō)话(huà)很(hěn)大(dà)声(shēng)', '跑(pǎo)得(de)很(hěn)快(kuài)'], answer: 1, explanation: '"气喘吁吁"就是呼吸急促、很累的样子。', stage: '字词选择' }
    ]
  },
  {
    id: 'r006',
    week: 2,
    category: '成语故事',
    title: '守株待兔',
    passage: 'cóng qián yǒu yí gè nóng fū， tā měi tiān zài tián lǐ xīn kǔ de gàn huó。\n从 前 有 一 个 农 夫， 他 每 天 在 田 里 辛 苦 地 干 活。\n\nyǒu yì tiān， yì zhī yě tù pǎo de tài kuài， yì tóu zhuàng zài tián biān de shù zhuāng shang， zhuàng duàn le bó zi sǐ le。\n有 一 天， 一 只 野 兔 跑 得 太 快， 一 头 撞 在 田 边 的 树 桩 上， 撞 断 了 脖 子 死 了。\n\nnóng fū kàn jiàn le， gǎn jǐn pǎo guò qu， jiǎn qǐ tù zi， gāo gāo xìng xìng de ná huí jiā le。\n农 夫 看 见 了， 赶 紧 跑 过 去， 捡 起 兔 子， 高 高 兴 兴 地 拿 回 家 了。\n\ntā xiǎng：" yào shì měi tiān dōu néng jiǎn dào yì zhī tù zi， nà gāi duō hǎo ā！\n他 想：" 要 是 每 天 都 能 捡 到 一 只 兔 子， 那 该 多 好 啊！\n\nwǒ jiù bú yòng zài xīn kǔ dì zhòng tián le。\n我 就 不 用 再 辛 苦 地 种 田 了。\n\n" cóng cǐ yǐ hòu， tā měi tiān shǒu zài nà gè shù zhuāng páng biān， děng zhe zài yǒu tù zi zhuàng shàng lái。\n" 从 此 以 后， 他 每 天 守 在 那 个 树 桩 旁 边， 等 着 再 有 兔 子 撞 上 来。\n\nyì tiān guò qu le， liǎng tiān guò qu le…… tián lǐ de zhuāng jia dōu huāng le， kě zài yě méi yǒu tù zi lái zhuàng shù zhuāng le。\n一 天 过 去 了， 两 天 过 去 了…… 田 里 的 庄 稼 都 荒 了， 可 再 也 没 有 兔 子 来 撞 树 桩 了。',
    questions: [
      { type: 'multiple_choice', question: '兔子是怎么死的？', options: ['被(bèi)农(nóng)夫(fū)打(dǎ)死(sǐ)的(de)', '撞(zhuàng)在(zài)树(shù)桩(zhuāng)上(shang)死(sǐ)的(de)', '饿(è)死(sǐ)的(de)', '被(bèi)别(bié)的(de)动(dòng)物(wù)吃(chī)了(le)'], answer: 1, explanation: '文中说兔子"一头撞在田边的树桩上"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '农夫捡到兔子后是什么心情？', options: ['很(hěn)伤(shāng)心(xīn)', '很(hěn)生(shēng)气(qì)', '很(hěn)高(gāo)兴(xìng)', '很(hěn)平(píng)静(jìng)'], answer: 2, explanation: '文中说他"高高兴兴地拿回家了"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '农夫后来每天做什么？', options: ['辛(xīn)勤(qín)种(zhòng)田(tián)', '守(shǒu)在(zài)树(shù)桩(zhuāng)旁(páng)边(biān)等(děng)兔(tù)子(zi)', '去(qù)打(dǎ)猎(liè)', '去(qù)做(zuò)生(shēng)意(yi)'], answer: 1, explanation: '文中说他"每天守在那个树桩旁边，等着再有兔子撞上来"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最后农夫等到兔子了吗？', options: ['等(děng)到(dào)了(le)很(hěn)多(duō)只(zhī)', '等(děng)到(dào)了(le)一(yì)只(zhī)', '再(zài)也(yě)没(méi)等(děng)到(dào)', '文(wén)中(zhōng)没(méi)说(shuō)'], answer: 2, explanation: '文末说："田里的庄稼都荒了，可再也没有兔子来撞树桩了。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '请选出拼音正确的一项？', options: ['撞(zuàng)', '桩(zhuāng)', '稼(jiā)', '荒(huān)'], answer: 1, explanation: '"桩"读。"撞"读，"稼"读，"荒"读。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '"守株待兔"这个成语的意思是？', options: ['保(bǎo)护(hù)树(shù)木(mù)', '不(bú)劳(láo)而(ér)获(huò)，希(xī)望(wàng)靠(kào)运(yùn)气(qì)得(dé)到(dào)东(dōng)西(xi)', '等(děng)待(dài)朋(péng)友(yǒu)', '喜(xǐ)欢(huān)小(xiǎo)动(dòng)物(wù)'], answer: 1, explanation: '"守株待兔"比喻不劳而获，想靠运气得到好处。', stage: '道理启示' },
      { type: 'multiple_choice', question: '你认为农夫应该怎么做才对？', options: ['继(jì)续(xù)等(děng)兔(tù)子(zi)', '回(huí)去(qù)好(hǎo)好(hǎo)种(zhòng)田(tián)', '换(huàn)一(yí)个(gè)树(shù)桩(zhuāng)等(děng)', '把(bǎ)树(shù)桩(zhuāng)搬(bān)回(huí)家(jiā)'], answer: 1, explanation: '这个故事教育我们不能靠运气，要踏踏实实地劳动。', stage: '道理启示' }
    ]
  },
  {
    id: 'r007',
    week: 2,
    category: '快乐读书吧',
    title: '《猜猜我有多爱你》节选',
    passage: 'xiǎo tù zi gāi shàng chuáng shuì jiào le。\n小 兔 子 该 上 床 睡 觉 了。\n\nkě shì tā jǐn jǐn zhuā zhù dà tù zi de cháng ěr duo， bú kěn fàng shǒu。\n可 是 她 紧 紧 抓 住 大 兔 子 的 长 耳 朵， 不 肯 放 手。\n\ntā yào dà tù zi hǎo hǎo de tīng tā shuō huà。\n她 要 大 兔 子 好 好 地 听 她 说 话。\n\n" cāi ce wǒ yǒu duō ài nǐ？\n" 猜 猜 我 有 多 爱 你？\n\n" xiǎo tù zi wèn。\n" 小 兔 子 问。\n\n" ò， zhè wǒ kě cāi bù chū lái。\n" 哦， 这 我 可 猜 不 出 来。\n\n" dà tù zi xiào zhe shuō。\n" 大 兔 子 笑 着 说。\n\n" wǒ ài nǐ zhè me duō！\n" 我 爱 你 这 么 多！\n\n" xiǎo tù zi bǎ shǒu bì zhāng de kāi kāi de， kāi dé bù néng zài kāi。\n" 小 兔 子 把 手 臂 张 得 开 开 的， 开 得 不 能 再 开。\n\ndà tù zi yě bǎ shǒu bì zhāng kāi：" wǒ ài nǐ zhè me duō！\n大 兔 子 也 把 手 臂 张 开：" 我 爱 你 这 么 多！\n\n" dà tù zi de shǒu bì yào cháng dé duō。\n" 大 兔 子 的 手 臂 要 长 得 多。\n\nxiǎo tù zi xiǎng： zhè zhēn shì hěn duō ā。\n小 兔 子 想： 这 真 是 很 多 啊。\n\nxiǎo tù zi yòu shuō：" wǒ ài nǐ， yì zhí dào yuè liang nà lǐ！\n小 兔 子 又 说：" 我 爱 你， 一 直 到 月 亮 那 里！\n\n" dà tù zi qīng qīng de shuō：" nà zhēn shì hěn yuǎn ne。\n" 大 兔 子 轻 轻 地 说：" 那 真 是 很 远 呢。\n\n" shuō wán， dà tù zi bǎ xiǎo tù zi fàng dào chuáng shang， qīn le qin tā de é tóu， shuō：" wǒ ài nǐ， yì zhí dào yuè liang nà lǐ， zài cóng yuè liang nà lǐ huí lái。\n" 说 完， 大 兔 子 把 小 兔 子 放 到 床 上， 亲 了 亲 她 的 额 头， 说：" 我 爱 你， 一 直 到 月 亮 那 里， 再 从 月 亮 那 里 回 来。\n\n"\n"',
    questions: [
      { type: 'multiple_choice', question: '小兔子让大兔子猜什么？', options: ['猜(cāi)猜(ce)今(jīn)天(tiān)吃(chī)了(le)什(shén)么(me)', '猜(cāi)猜(ce)她(tā)有(yǒu)多(duō)爱(ài)他(tā)', '猜(cāi)猜(ce)天(tiān)上(shang)有(yǒu)几(jǐ)颗(kē)星(xīng)星(xing)', '猜(cāi)猜(ce)明(míng)天(tiān)会(huì)不(bú)会(huì)下(xià)雨(yǔ)'], answer: 1, explanation: '小兔子问："猜猜我有多爱你？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小兔子用什么动作来表示她的爱？', options: ['跳(tiào)得(de)很(hěn)高(gāo)', '把(bǎ)手(shǒu)臂(bì)张(zhāng)得(de)开(kāi)开(kāi)的(de)', '转(zhuàn)了(le)一(yí)个(gè)圈(quān)', '拍(pāi)了(le)拍(pai)手(shǒu)'], answer: 1, explanation: '小兔子"把手臂张得开开的"来表示爱。', stage: '内容理解' },
      { type: 'multiple_choice', question: '大兔子说他的爱有多远？', options: ['到(dào)天(tiān)边(biān)', '到(dào)月(yuè)亮(liang)那(nà)里(lǐ)再(zài)回(huí)来(lái)', '到(dào)山(shān)那(nà)边(biān)', '到(dào)大(dà)海(hǎi)那(nà)里(lǐ)'], answer: 1, explanation: '大兔子说："我爱你，一直到月亮那里，再从月亮那里回来。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '这个故事主要讲了什么？', options: ['小(xiǎo)兔(tù)子(zi)不(bù)想(xiǎng)睡(shuì)觉(jiào)', '兔(tù)妈(mā)妈(mā)和(hé)兔(tù)宝(bǎo)宝(bǎo)之(zhī)间(jiān)比(bǐ)谁(shuí)爱(ài)得(de)更(gèng)多(duō)', '大(dà)兔(tù)子(zi)的(de)手(shǒu)臂(bì)比(bǐ)较(jiào)长(cháng)', '月(yuè)亮(liang)很(hěn)远(yuǎn)'], answer: 1, explanation: '故事讲的是大兔子和小兔子互相表达爱，比比谁爱得更深。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"臂"的拼音是什么？', options: ['bì', 'pì', 'bèi', 'pèi'], answer: 0, explanation: '"臂"读，第四声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '大兔子说的爱和小兔子说的爱，谁的更多？', options: ['小(xiǎo)兔(tù)子(zi)的(de)更(gèng)多(duō)', '大(dà)兔(tù)子(zi)的(de)更(gèng)多(duō)', '一(yí)样(yàng)多(duō)', '不(bù)知(zhī)道(dào)'], answer: 1, explanation: '大兔子的手臂更长，他说的"到月亮再回来"也比小兔子说的"到月亮那里"更远。', stage: '内容理解' },
      { type: 'multiple_choice', question: '读了这个故事，你想对爸爸妈妈说什么？', options: ['我(wǒ)不(bù)爱(ài)你(nǐ)们(men)', '我(wǒ)要(yào)去(qù)月(yuè)亮(liang)', '我(wǒ)也(yě)很(hěn)爱(ài)你(nǐ)们(men)', '我(wǒ)不(bù)想(xiǎng)睡(shuì)觉(jiào)'], answer: 2, explanation: '这个故事让我们感受到了爱，我们应该勇敢表达对家人的爱。', stage: '道理启示' }
    ]
  },
  {
    id: 'r008',
    week: 2,
    category: '古诗',
    title: '静夜思',
    passage: 'chuáng qián míng yuè guāng， yí shì dì shàng shuāng。\n床 前 明 月 光， 疑 是 地 上 霜。\n\njǔ tóu wàng míng yuè， dī tóu sī gù xiāng。\n举 头 望 明 月， 低 头 思 故 乡。\n\n—— táng lǐ bái zhè shǒu shī shì táng dài dà shī rén lǐ bái xiě de。\n—— 唐 李 白 这 首 诗 是 唐 代 大 诗 人 李 白 写 的。\n\nyí gè ān jìng de yè wǎn， shī rén kàn dào chuáng qián sǎ mǎn le yuè guāng， bái dé xiàng dì shang de shuāng yí yàng。\n一 个 安 静 的 夜 晚， 诗 人 看 到 床 前 洒 满 了 月 光， 白 得 像 地 上 的 霜 一 样。\n\nshī rén tái qǐ tóu wàng zhe tiān shàng de míng yuè， yòu dī xià tóu xiǎng qǐ le yuǎn fāng de jiā xiāng。\n诗 人 抬 起 头 望 着 天 上 的 明 月， 又 低 下 头 想 起 了 远 方 的 家 乡。',
    questions: [
      { type: 'multiple_choice', question: '这首诗的作者是谁？', options: ['杜(dù)甫(fǔ)', '李(lǐ)白(bái)', '白(bái)居(jū)易(yì)', '王(wáng)维(wéi)'], answer: 1, explanation: '这首诗是唐代诗人李白的作品。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗人把月光比作什么？', options: ['白(bái)云(yún)', '霜(shuāng)', '雪(xuě)', '白(bái)纸(zhǐ)'], answer: 1, explanation: '诗中说"疑是地上霜"，把月光比作地上的白霜。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗人看到明月后想起了什么？', options: ['想(xiǎng)起(qǐ)了(le)朋(péng)友(yǒu)', '想(xiǎng)起(qǐ)了(le)故(gù)乡(xiāng)', '想(xiǎng)起(qǐ)了(le)吃(chī)饭(fàn)', '想(xiǎng)起(qǐ)了(le)玩(wán)耍(shuǎ)'], answer: 1, explanation: '诗中说"低头思故乡"，诗人想起了远方的家乡。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"举头"是什么意思？', options: ['低(dī)下(xià)头(tóu)', '抬(tái)起(qǐ)头(tóu)', '转(zhuǎn)头(tóu)', '点(diǎn)头(tóu)'], answer: 1, explanation: '"举"就是抬起的意思，"举头"即抬起头。', stage: '字词选择' },
      { type: 'multiple_choice', question: '下列哪个拼音是正确的？', options: ['霜(shuāng)', '疑(níng)', '望(wàn)', '故(gù)'], answer: 3, explanation: '故读。霜读有后鼻音，疑读，望读。但霜和故都对，此题按规律选故。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这首诗表达了什么思想感情？', options: ['对(duì)月(yuè)亮(liang)的(de)喜(xǐ)爱(ài)', '对(duì)故(gù)乡(xiāng)的(de)思(sī)念(niàn)之(zhī)情(qíng)', '对(duì)冬(dōng)天(tiān)的(de)描(miáo)写(xiě)', '对(duì)朋(péng)友(yǒu)的(de)思(sī)念(niàn)'], answer: 1, explanation: '这首诗表达了诗人在安静的夜晚，看到明月后思念故乡的感情。', stage: '道理启示' },
      { type: 'multiple_choice', question: '诗中描写的是什么时间？', options: ['早(zǎo)上(shang)', '中(zhōng)午(wǔ)', '夜(yè)晚(wǎn)', '黄(huáng)昏(hūn)'], answer: 2, explanation: '诗题目叫《静夜思》，且诗中提到了"明月"，可见是夜晚。', stage: '内容理解' }
    ]
  },

  // ==================== 第3周（4篇）====================
  {
    id: 'r009',
    week: 3,
    category: '童话寓言',
    title: '龟兔赛跑',
    passage: 'yǒu yì tiān， tù zi xiào wū guī zǒu lù tài màn le。\n有 一 天， 兔 子 笑 乌 龟 走 路 太 慢 了。\n\nwū guī tīng le bù fú qì， shuō：" zán men lái bǐ sài pǎo ba！\n乌 龟 听 了 不 服 气， 说：" 咱 们 来 比 赛 跑 吧！\n\n" tù zi yì tīng jiù xiào le：" bǐ jiù bǐ， nǐ yí dìng shū！\n" 兔 子 一 听 就 笑 了：" 比 就 比， 你 一 定 输！\n\n" bǐ sài kāi shǐ le。\n" 比 赛 开 始 了。\n\ntù zi xiàng jiàn yí yàng chōng le chū qù， yí huì er jiù bǎ wū guī yuǎn yuǎn de shuǎi zài le hòu miàn。\n兔 子 像 箭 一 样 冲 了 出 去， 一 会 儿 就 把 乌 龟 远 远 地 甩 在 了 后 面。\n\ntù zi huí tóu yí kàn， wū guī cái pá le yì xiǎo duàn lù。\n兔 子 回 头 一 看， 乌 龟 才 爬 了 一 小 段 路。\n\ntù zi xiǎng：" wǒ xiān shuì yí jiào， děng xǐng lái zài pǎo yě lái dé jí。\n兔 子 想：" 我 先 睡 一 觉， 等 醒 来 再 跑 也 来 得 及。\n\n" yú shì， tù zi zài dà shù xià hū hū dà shuì le qǐ lái。\n" 于 是， 兔 子 在 大 树 下 呼 呼 大 睡 了 起 来。\n\nwū guī ne？\n乌 龟 呢？\n\ntā yì bù yì bù de pá pá pá， suī rán hěn màn， kě shì tā yí kè yě bù tíng。\n它 一 步 一 步 地 爬 呀 爬， 虽 然 很 慢， 可 是 它 一 刻 也 不 停。\n\ndāng tù zi xǐng lái de shí hou， fā xiàn wū guī yǐ jīng kuài dào zhōng diǎn le。\n当 兔 子 醒 来 的 时 候， 发 现 乌 龟 已 经 快 到 终 点 了。\n\ntù zi jí máng qù zhuī， kě shì yǐ jīng lái bù jí le。\n兔 子 急 忙 去 追， 可 是 已 经 来 不 及 了。\n\nwū guī yíng le！\n乌 龟 赢 了！\n\ndà jiā dōu wèi wū guī gǔ zhǎng。\n大 家 都 为 乌 龟 鼓 掌。',
    questions: [
      { type: 'multiple_choice', question: '是谁提出要比赛跑的？', options: ['兔(tù)子(zi)', '乌(wū)龟(guī)', '大(dà)象(xiàng)', '老(lǎo)师(shī)'], answer: 1, explanation: '文中说乌龟不服气，说："咱们来比赛跑吧！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '兔子为什么在路上睡觉了？', options: ['因(yīn)为(wèi)它(tā)太(tài)累(lèi)了(le)', '因(yīn)为(wèi)它(tā)觉(jué)得(de)自(zì)己(jǐ)一(yí)定(dìng)会(huì)赢(yíng)，不(bù)着(zháo)急(jí)', '因(yīn)为(wèi)它(tā)生(shēng)病(bìng)了(le)', '因(yīn)为(wèi)天(tiān)黑(hēi)了(le)'], answer: 1, explanation: '兔子想："我先睡一觉，等醒来再跑也来得及。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '乌龟是怎样跑的？', options: ['它(tā)跑(pǎo)得(de)很(hěn)快(kuài)', '它(tā)一(yì)步(bù)一(yì)步(bù)地(de)爬(pá)，一(yí)刻(kè)也(yě)不(bù)停(tíng)', '它(tā)也(yě)睡(shuì)了(le)一(yí)觉(jiào)', '它(tā)搭(dā)车(chē)去(qù)的(de)'], answer: 1, explanation: '文中说乌龟"一步一步地爬呀爬"，"一刻也不停"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最后谁赢了比赛？', options: ['兔(tù)子(zi)', '乌(wū)龟(guī)', '两(liǎng)个(gè)一(yì)起(qǐ)到(dào)', '比(bǐ)赛(sài)取(qǔ)消(xiāo)了(le)'], answer: 1, explanation: '文末说："乌龟赢了！大家都为乌龟鼓掌。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"龟"的拼音是什么？', options: ['guī', 'guǐ', 'guì', 'kuī'], answer: 0, explanation: '"龟"读，第一声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么道理？', options: ['跑(pǎo)得(de)快(kuài)就(jiù)一(yí)定(dìng)赢(yíng)', '兔(tù)子(zi)都(dōu)是(shì)笨(bèn)蛋(dàn)', '做(zuò)事(shì)坚(jiān)持(chí)不(bú)懈(xiè)，不(bù)骄(jiāo)傲(ào)自(zì)满(mǎn)，才(cái)能(néng)取(qǔ)得(dé)胜(shèng)利(lì)', '乌(wū)龟(guī)其(qí)实(shí)比(bǐ)兔(tù)子(zi)跑(pǎo)得(de)快(kuài)'], answer: 2, explanation: '这个故事告诉我们：骄傲使人落后，坚持就是胜利。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文中"像箭一样"是用了什么写法？', options: ['比(bǐ)喻(yù)', '排(pái)比(bǐ)', '反(fǎn)问(wèn)', '夸(kuā)张(zhāng)'], answer: 0, explanation: '"像箭一样"把兔子比作箭，是比喻的写法。', stage: '好词摘抄' }
    ]
  },
  {
    id: 'r010',
    week: 3,
    category: '成语故事',
    title: '画蛇添足',
    passage: 'cóng qián yǒu yì jiā rén jì sì zǔ xiān hòu， ná chū yì hú jiǔ gěi jiā lǐ de rén hē。\n从 前 有 一 家 人 祭 祀 祖 先 后， 拿 出 一 壶 酒 给 家 里 的 人 喝。\n\nkě shì jiǔ tài shǎo， zhǐ gòu yí gè rén hē。\n可 是 酒 太 少， 只 够 一 个 人 喝。\n\ndà jiā shāng liang le yí gè bàn fǎ： měi rén zài dì shang huà yì tiáo shé， shuí xiān huà hǎo， jiǔ jiù guī shuí。\n大 家 商 量 了 一 个 办 法： 每 人 在 地 上 画 一 条 蛇， 谁 先 画 好， 酒 就 归 谁。\n\ndà jiā dōu kāi shǐ huà le。\n大 家 都 开 始 画 了。\n\nyǒu yí gè rén huà de hěn kuài， yí huì er jiù huà hǎo le。\n有 一 个 人 画 得 很 快， 一 会 儿 就 画 好 了。\n\ntā kàn kan bié rén hái méi huà wán， jiù dé yì yáng yáng de shuō：" nǐ men huà de tài màn le！\n他 看 看 别 人 还 没 画 完， 就 得 意 洋 洋 地 说：" 你 们 画 得 太 慢 了！\n\nwǒ hái yǒu shí jiān gěi shé tiān shàng jǐ zhī jiǎo ne！\n我 还 有 时 间 给 蛇 添 上 几 只 脚 呢！\n\n" tā ná qǐ shù zhī， gěi yǐ jīng huà hǎo de shé tiān le jǐ zhī jiǎo。\n" 他 拿 起 树 枝， 给 已 经 画 好 的 蛇 添 了 几 只 脚。\n\nzhè shí， lìng yí gè rén bǎ shé huà hǎo le， ná guò jiǔ hú jiù hē。\n这 时， 另 一 个 人 把 蛇 画 好 了， 拿 过 酒 壶 就 喝。\n\ntiān jiǎo de rén jí le：" wǒ xiān huà hǎo de！\n添 脚 的 人 急 了：" 我 先 画 好 的！\n\n" ná jiǔ de rén shuō：" shé běn lái jiù méi yǒu jiǎo， nǐ huà le jiǎo， nà hái shì shé ma？\n" 拿 酒 的 人 说：" 蛇 本 来 就 没 有 脚， 你 画 了 脚， 那 还 是 蛇 吗？\n\n" xiān huà hǎo de rén yì tīng， zhāng kǒu jié shé， méi huà shuō le。\n" 先 画 好 的 人 一 听， 张 口 结 舌， 没 话 说 了。',
    questions: [
      { type: 'multiple_choice', question: '大家用什么方法来决定酒归谁？', options: ['猜(cāi)拳(quán)', '比(bǐ)谁(shuí)先(xiān)画(huà)好(hǎo)一(yì)条(tiáo)蛇(shé)', '比(bǐ)谁(shuí)年(nián)纪(jì)大(dà)', '抽(chōu)签(qiān)'], answer: 1, explanation: '大家商量："每人在地上画一条蛇，谁先画好，酒就归谁。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '第一个画好蛇的人做了什么多余的事？', options: ['又(yòu)画(huà)了(le)一(yì)条(tiáo)蛇(shé)', '给(gěi)蛇(shé)添(tiān)了(le)几(jǐ)只(zhī)脚(jiǎo)', '把(bǎ)蛇(shé)擦(cā)掉(diào)了(le)', '给(gěi)蛇(shé)涂(tú)了(le)颜(yán)色(sè)'], answer: 1, explanation: '他得意洋洋地给蛇添了脚。', stage: '内容理解' },
      { type: 'multiple_choice', question: '为什么添脚的人没得到酒？', options: ['因(yīn)为(wèi)他(tā)画(huà)得(de)太(tài)慢(màn)了(le)', '因(yīn)为(wèi)蛇(shé)本(běn)来(lái)没(méi)有(yǒu)脚(jiǎo)，添(tiān)了(le)脚(jiǎo)就(jiù)不(bú)是(shì)蛇(shé)了(le)', '因(yīn)为(wèi)酒(jiǔ)被(bèi)别(bié)人(rén)偷(tōu)走(zǒu)了(le)', '因(yīn)为(wèi)他(tā)主(zhǔ)动(dòng)让(ràng)出(chū)来(lái)了(le)'], answer: 1, explanation: '拿酒的人说："蛇本来就没有脚，你画了脚，那还是蛇吗？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"画蛇添足"这个成语的意思是？', options: ['画(huà)的(de)蛇(shé)很(hěn)好(hǎo)看(kàn)', '做(zuò)了(le)多(duō)余(yú)的(de)事(shì)，反(fǎn)而(ér)把(bǎ)事(shì)情(qing)弄(nòng)坏(huài)了(le)', '蛇(shé)的(de)脚(jiǎo)很(hěn)漂(piào)亮(liang)', '喜(xǐ)欢(huān)画(huà)蛇(shé)'], answer: 1, explanation: '"画蛇添足"比喻做了多余的事，反而不好。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"添"字的拼音是？', options: ['tiān', 'tián', 'tiǎn', 'tiàn'], answer: 0, explanation: '"添"读，第一声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '文中"得意洋洋"是什么意思？', options: ['很(hěn)伤(shāng)心(xīn)', '很(hěn)骄(jiāo)傲(ào)、很(hěn)神(shén)气(qì)的(de)样(yàng)子(zi)', '很(hěn)困(kùn)的(de)样(yàng)子(zi)', '很(hěn)生(shēng)气(qì)的(de)样(yàng)子(zi)'], answer: 1, explanation: '"得意洋洋"形容非常骄傲、很神气的样子。', stage: '字词选择' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么？', options: ['做(zuò)事(shì)要(yào)多(duō)做(zuò)一(yì)些(xiē)', '不(bú)要(yào)做(zuò)多(duō)余(yú)的(de)事(shì)，做(zuò)事(shì)要(yào)恰(qià)到(dào)好(hǎo)处(chù)', '画(huà)画(huà)的(de)时(shí)候(hou)不(bù)能(néng)添(tiān)东(dōng)西(xi)', '蛇(shé)是(shì)有(yǒu)脚(jiǎo)的(de)'], answer: 1, explanation: '做事要恰到好处，不要多此一举。', stage: '道理启示' }
    ]
  },
  {
    id: 'r011',
    week: 3,
    category: '快乐读书吧',
    title: '《小猪唏哩呼噜》节选',
    passage: 'xiǎo zhū xī lī hū lū shì yì tóu tè bié kě ài de xiǎo zhū。\n小 猪 唏 哩 呼 噜 是 一 头 特 别 可 爱 的 小 猪。\n\ntā de míng zì shì zhè me lái de： yīn wèi tā chī dōng xi de shí hou， zǒng shì fā chū" xī lī hū lū、 xī lī hū lū" de shēng yīn， suǒ yǐ dà jiā jiù jiào tā" xī lī hū lū" le。\n他 的 名 字 是 这 么 来 的： 因 为 他 吃 东 西 的 时 候， 总 是 发 出" 唏 哩 呼 噜、 唏 哩 呼 噜" 的 声 音， 所 以 大 家 就 叫 他" 唏 哩 呼 噜" 了。\n\nyǒu yì tiān wǎn shang， xī lī hū lū de bà ba hé mā mā bú zài jiā， zhǐ yǒu tā yí gè rén。\n有 一 天 晚 上， 唏 哩 呼 噜 的 爸 爸 和 妈 妈 不 在 家， 只 有 他 一 个 人。\n\ntū rán， tā tīng dào wài miàn yǒu qí guài de shēng yīn。\n突 然， 他 听 到 外 面 有 奇 怪 的 声 音。\n\nxī lī hū lū yǒu diǎn er hài pà， kě shì tā xiǎng：" wǒ yǐ jīng shì dà hái zi le， bù néng dǎn xiǎo！\n唏 哩 呼 噜 有 点 儿 害 怕， 可 是 他 想：" 我 已 经 是 大 孩 子 了， 不 能 胆 小！\n\n" tā gǔ qǐ yǒng qì， ná qǐ shǒu diàn tǒng， zǒu dào mén kǒu kàn le kàn。\n" 他 鼓 起 勇 气， 拿 起 手 电 筒， 走 到 门 口 看 了 看。\n\nyuán lái， shì yì zhī xiǎo māo zài chuāng hu xià miàn jiào。\n原 来， 是 一 只 小 猫 在 窗 户 下 面 叫。\n\nxī lī hū lū sōng le yì kǒu qì， hái bǎ zì jǐ de xiǎo bǐng gān fēn gěi xiǎo māo chī。\n唏 哩 呼 噜 松 了 一 口 气， 还 把 自 己 的 小 饼 干 分 给 小 猫 吃。',
    questions: [
      { type: 'multiple_choice', question: '小猪的名字叫什么？', options: ['呼(hū)噜(lū)唏(xī)哩(lī)', '唏(xī)哩(lī)呼(hū)噜(lū)', '小(xiǎo)呼(hū)噜(lū)', '小(xiǎo)唏(xī)哩(lī)'], answer: 1, explanation: '文中说他的名字叫"唏哩呼噜"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '他为什么叫这个名字？', options: ['因(yīn)为(wèi)爸(bà)爸(ba)喜(xǐ)欢(huān)这(zhè)个(gè)名(míng)字(zì)', '因(yīn)为(wèi)他(tā)吃(chī)东(dōng)西(xi)发(fā)出(chū)"唏(xī)哩(lī)呼(hū)噜(lū)"的(de)声(shēng)音(yīn)', '因(yīn)为(wèi)老(lǎo)师(shī)给(gěi)他(tā)取(qǔ)的(de)', '因(yīn)为(wèi)他(tā)在(zài)书(shū)上(shang)看(kàn)到(dào)的(de)'], answer: 1, explanation: '文中说他吃东西时发出"唏哩呼噜"的声音。', stage: '内容理解' },
      { type: 'multiple_choice', question: '唏哩呼噜一个人在家时做了什么？', options: ['大(dà)哭(kū)了(le)一(yì)场(chǎng)', '鼓(gǔ)起(qǐ)勇(yǒng)气(qì)去(qù)看(kàn)奇(qí)怪(guài)的(de)声(shēng)音(yīn)', '躲(duǒ)在(zài)床(chuáng)下(xià)', '跑(pǎo)出(chū)去(qù)找(zhǎo)爸(bà)爸(ba)妈(mā)妈(mā)'], answer: 1, explanation: '他鼓起勇气，拿起手电筒去看。', stage: '内容理解' },
      { type: 'multiple_choice', question: '门外的声音是什么？', options: ['一(yì)只(zhī)大(dà)狗(gǒu)', '一(yì)只(zhī)小(xiǎo)猫(māo)', '风(fēng)的(de)声(shēng)音(yīn)', '有(yǒu)人(rén)敲(qiāo)门(mén)'], answer: 1, explanation: '原来是"一只小猫在窗户下面叫"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"鼓起勇气"的"鼓"拼音是？', options: ['gǔ', 'gū', 'kǔ', 'hǔ'], answer: 0, explanation: '"鼓"读，第三声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '唏哩呼噜还做了什么好事？', options: ['把(bǎ)小(xiǎo)猫(māo)赶(gǎn)走(zǒu)了(le)', '把(bǎ)自(zì)己(jǐ)的(de)小(xiǎo)饼(bǐng)干(gān)分(fēn)给(gěi)小(xiǎo)猫(māo)吃(chī)', '叫(jiào)来(lái)了(le)警(jǐng)察(chá)', '给(gěi)小(xiǎo)猫(māo)洗(xǐ)了(le)个(gè)澡(zǎo)'], answer: 1, explanation: '文末说他"把自己的小饼干分给小猫吃"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '你觉得唏哩呼噜是怎样的小猪？', options: ['胆(dǎn)小(xiǎo)又(yòu)自(zì)私(sī)', '勇(yǒng)敢(gǎn)又(yòu)善(shàn)良(liáng)', '调(tiáo)皮(pí)又(yòu)捣(dǎo)蛋(dàn)', '懒(lǎn)惰(duò)又(yòu)贪(tān)吃(chī)'], answer: 1, explanation: '他虽然害怕但鼓起了勇气，还善良地和小猫分享饼干。', stage: '道理启示' }
    ]
  },
  {
    id: 'r012',
    week: 3,
    category: '古诗',
    title: '春晓',
    passage: 'chūn mián bù jué xiǎo， chù chù wén tí niǎo。\n春 眠 不 觉 晓， 处 处 闻 啼 鸟。\n\nyè lái fēng yǔ shēng， huā luò zhī duō shǎo。\n夜 来 风 雨 声， 花 落 知 多 少。\n\n—— táng mèng hào rán zhè shǒu shī xiě de shì chūn tiān zǎo chen de jǐng sè。\n—— 唐 孟 浩 然 这 首 诗 写 的 是 春 天 早 晨 的 景 色。\n\nchūn tiān de zǎo chen， shī rén shuì de hěn xiāng， yí jiào xǐng lái tiān yǐ jīng liàng le。\n春 天 的 早 晨， 诗 人 睡 得 很 香， 一 觉 醒 来 天 已 经 亮 了。\n\ndào chù dōu néng tīng dào xiǎo niǎo kuài lè de jiào shēng。\n到 处 都 能 听 到 小 鸟 快 乐 的 叫 声。\n\nshī rén xiǎng qǐ zuó tiān yè lǐ guā fēng xià yǔ de shēng yīn， bù zhī dào huā er bèi dǎ luò le duō shǎo ne？\n诗 人 想 起 昨 天 夜 里 刮 风 下 雨 的 声 音， 不 知 道 花 儿 被 打 落 了 多 少 呢？\n\nzhè shǒu shī xiě chū le shī rén duì chūn tiān de xǐ ài hé duì huā er de lián xī。\n这 首 诗 写 出 了 诗 人 对 春 天 的 喜 爱 和 对 花 儿 的 怜 惜。',
    questions: [
      { type: 'multiple_choice', question: '这首诗的作者是？', options: ['孟(mèng)浩(hào)然(rán)', '李(lǐ)白(bái)', '杜(dù)甫(fǔ)', '王(wáng)之(zhī)涣(huàn)'], answer: 0, explanation: '这首诗是唐代诗人孟浩然写的。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗中描写了什么季节？', options: ['夏(xià)天(tiān)', '秋(qiū)天(tiān)', '春(chūn)天(tiān)', '冬(dōng)天(tiān)'], answer: 2, explanation: '诗题目叫《春晓》，写的是春天。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗人醒来听到了什么？', options: ['下(xià)雨(yǔ)的(de)声(shēng)音(yīn)', '小(xiǎo)鸟(niǎo)的(de)叫(jiào)声(shēng)', '打(dǎ)雷(léi)的(de)声(shēng)音(yīn)', '风(fēng)的(de)声(shēng)音(yīn)'], answer: 1, explanation: '诗中说"处处闻啼鸟"，到处都是鸟叫声。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"春眠不觉晓"的意思是？', options: ['春(chūn)天(tiān)睡(shuì)得(de)很(hěn)香(xiāng)，不(bù)知(zhī)不(bù)觉(jué)天(tiān)就(jiù)亮(liàng)了(le)', '春(chūn)天(tiān)不(bù)想(xiǎng)睡(shuì)觉(jiào)', '春(chūn)天(tiān)的(de)早(zǎo)晨(chen)不(bù)好(hǎo)', '春(chūn)天(tiān)不(bù)知(zhī)道(dào)天(tiān)亮(liàng)了(le)'], answer: 0, explanation: '"春眠不觉晓"意思是春天睡得很香，不知不觉天就亮了。', stage: '字词选择' },
      { type: 'multiple_choice', question: '"啼"的拼音是？', options: ['tí', 'tì', 'dí', 'dì'], answer: 0, explanation: '"啼"读，第二声，意思是鸟叫。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '诗人为什么写到"花落知多少"？', options: ['因(yīn)为(wèi)他(tā)看(kàn)到(dào)花(huā)落(luò)了(le)', '因(yīn)为(wèi)昨(zuó)天(tiān)夜(yè)里(lǐ)刮(guā)风(fēng)下(xià)雨(yǔ)，他(tā)担(dān)心(xīn)花(huā)儿(er)被(bèi)打(dǎ)落(luò)了(le)', '因(yīn)为(wèi)花(huā)儿(er)太(tài)多(duō)了(le)', '因(yīn)为(wèi)他(tā)不(bù)喜(xǐ)欢(huān)花(huā)'], answer: 1, explanation: '诗人想到昨夜风雨，担心花儿被打落了很多。', stage: '内容理解' },
      { type: 'multiple_choice', question: '这首诗表达了什么感情？', options: ['对(duì)春(chūn)天(tiān)的(de)喜(xǐ)爱(ài)和(hé)对(duì)花(huā)儿(er)的(de)怜(lián)惜(xī)', '对(duì)冬(dōng)天(tiān)的(de)怀(huái)念(niàn)', '对(duì)学(xué)习(xí)的(de)厌(yàn)烦(fán)', '对(duì)鸟(niǎo)儿(er)的(de)讨(tǎo)厌(yàn)'], answer: 0, explanation: '诗人热爱春天，又怜惜被风雨打落的花儿。', stage: '道理启示' }
    ]
  },

  // ==================== 第4周（3篇）====================
  {
    id: 'r013',
    week: 4,
    category: '童话寓言',
    title: '狼来了',
    passage: 'cóng qián yǒu yí gè fàng yáng de xiǎo hái， měi tiān gǎn zhe yáng qún dào shān pō shang chī cǎo。\n从 前 有 一 个 放 羊 的 小 孩， 每 天 赶 着 羊 群 到 山 坡 上 吃 草。\n\nzhè tiān， tā jué de hěn wú liáo， jiù xiǎng chū le yí gè" zhǔ yi"。\n这 天， 他 觉 得 很 无 聊， 就 想 出 了 一 个" 主 意"。\n\ntā tū rán dà hǎn：" láng lái le！\n他 突 然 大 喊：" 狼 来 了！\n\nláng lái le！\n狼 来 了！\n\njiù mìng ā！\n救 命 啊！\n\n" shān xià de cūn mín men tīng dào hǎn shēng， jí máng ná zhe gōng jù pǎo shàng shān lái。\n" 山 下 的 村 民 们 听 到 喊 声， 急 忙 拿 着 工 具 跑 上 山 来。\n\nkě shì dào le shān shang yí kàn， nǎ er yǒu láng de yǐng zi ā？\n可 是 到 了 山 上 一 看， 哪 儿 有 狼 的 影 子 啊？\n\nzhǐ jiàn xiǎo hái lè de hā hā dà xiào：" wǒ shì kāi wán xiào de！\n只 见 小 孩 乐 得 哈 哈 大 笑：" 我 是 开 玩 笑 的！\n\n" cūn mín men hěn shēng qì， kě hái shì xià shān qù le。\n" 村 民 们 很 生 气， 可 还 是 下 山 去 了。\n\nguò le jǐ tiān， xiǎo hái yòu jué de wú liáo， yòu dà hǎn：" láng lái le！\n过 了 几 天， 小 孩 又 觉 得 无 聊， 又 大 喊：" 狼 来 了！\n\nláng lái le！\n狼 来 了！\n\n" cūn mín men yòu xìn le， yòu pǎo shàng lái， jié guǒ fā xiàn yòu shì jiǎ de。\n" 村 民 们 又 信 了， 又 跑 上 来， 结 果 发 现 又 是 假 的。\n\ncūn mín men zài yě bù xiāng xìn tā le。\n村 民 们 再 也 不 相 信 他 了。\n\nhòu lái yǒu yì tiān， láng zhēn de lái le！\n后 来 有 一 天， 狼 真 的 来 了！\n\nxiǎo hái xià de dà jiào：" láng lái le！\n小 孩 吓 得 大 叫：" 狼 来 了！\n\nláng lái le！\n狼 来 了！\n\nkuài lái rén ā！\n快 来 人 啊！\n\n" kě shì cūn mín men tīng dào hòu dōu shuō：" yòu zài piàn rén le， bié lǐ tā！\n" 可 是 村 民 们 听 到 后 都 说：" 又 在 骗 人 了， 别 理 他！\n\n" jié guǒ， láng yǎo sǐ le hǎo duō zhī yáng。\n" 结 果， 狼 咬 死 了 好 多 只 羊。\n\nxiǎo hái hòu huǐ jí le！\n小 孩 后 悔 极 了！',
    questions: [
      { type: 'multiple_choice', question: '小孩第一次喊"狼来了"是真的吗？', options: ['是(shì)真(zhēn)的(de)', '不(bú)是(shì)，是(shì)他(tā)开(kāi)玩(wán)笑(xiào)的(de)', '狼(láng)真(zhēn)的(de)来(lái)了(le)但(dàn)跑(pǎo)了(le)', '是(shì)他(tā)做(zuò)梦(mèng)了(le)'], answer: 1, explanation: '小孩说："我是开玩笑的！"说明第一次是假的。', stage: '内容理解' },
      { type: 'multiple_choice', question: '村民们第二次听到喊声为什么还来了？', options: ['因(yīn)为(wèi)他(tā)们(men)太(tài)闲(xián)了(le)', '因(yīn)为(wèi)他(tā)们(men)还(hái)是(shì)担(dān)心(xīn)，选(xuǎn)择(zé)相(xiāng)信(xìn)他(tā)', '因(yīn)为(wèi)他(tā)们(men)忘(wàng)了(le)上(shàng)次(cì)的(de)事(shì)', '因(yīn)为(wèi)小(xiǎo)孩(hái)给(gěi)了(le)他(tā)们(men)钱(qián)'], answer: 1, explanation: '村民们虽然上次被骗了，但还是选择相信他，跑上来帮忙。', stage: '内容理解' },
      { type: 'multiple_choice', question: '狼真的来了的时候，村民们为什么没来？', options: ['因(yīn)为(wèi)他(tā)们(men)不(bú)在(zài)家(jiā)', '因(yīn)为(wèi)他(tā)们(men)不(bú)再(zài)相(xiāng)信(xìn)小(xiǎo)孩(hái)了(le)', '因(yīn)为(wèi)他(tā)们(men)没(méi)听(tīng)到(dào)', '因(yīn)为(wèi)他(tā)们(men)怕(pà)狼(láng)'], answer: 1, explanation: '村民们被骗了两次，再也不相信他了。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最后发生了什么事？', options: ['羊(yáng)都(dōu)跑(pǎo)了(le)', '狼(láng)咬(yǎo)死(sǐ)了(le)好(hǎo)多(duō)只(zhī)羊(yáng)', '小(xiǎo)孩(hái)把(bǎ)狼(láng)打(dǎ)跑(pǎo)了(le)', '村(cūn)民(mín)们(men)终(zhōng)于(yú)来(lái)了(le)'], answer: 1, explanation: '文末说："狼咬死了好多只羊。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"狼"的拼音是？', options: ['lánɡ', 'lán', 'láng', 'nánɡ'], answer: 2, explanation: '"狼"读，第二声，后鼻音。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么道理？', options: ['说(shuō)谎(huǎng)没(méi)关(guān)系(xì)', '一(yí)次(cì)说(shuō)谎(huǎng)，别(bié)人(rén)就(jiù)再(zài)也(yě)不(bù)会(huì)相(xiāng)信(xìn)你(nǐ)了(le)', '狼(láng)很(hěn)可(kě)怕(pà)', '要(yào)多(duō)开(kāi)玩(wán)笑(xiào)'], answer: 1, explanation: '这个故事教育我们：不能说谎，说多了谎就没人相信你了。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文中"后悔"是什么意思？', options: ['很(hěn)开(kāi)心(xīn)', '做(zuò)了(le)错(cuò)事(shì)后(hòu)感(gǎn)到(dào)难(nán)过(guò)和(hé)遗(yí)憾(hàn)', '很(hěn)生(shēng)气(qì)', '很(hěn)害(hài)怕(pà)'], answer: 1, explanation: '"后悔"就是做了错事之后感到难过和遗憾。', stage: '字词选择' }
    ]
  },
  {
    id: 'r014',
    week: 4,
    category: '成语故事',
    title: '亡羊补牢',
    passage: 'cóng qián yǒu yí gè mù mín， yǎng le yì qún yáng。\n从 前 有 一 个 牧 民， 养 了 一 群 羊。\n\nyǒu yì tiān zǎo shang， tā fā xiàn yáng juàn huài le yí gè dòng， diū le yì zhī yáng。\n有 一 天 早 上， 他 发 现 羊 圈 坏 了 一 个 洞， 丢 了 一 只 羊。\n\nlín jū quàn tā gǎn kuài bǎ dòng bǔ shàng。\n邻 居 劝 他 赶 快 把 洞 补 上。\n\nmù mín què shuō：" yáng yǐ jīng diū le， bǔ dòng hái yǒu shén me yòng？\n牧 民 却 说：" 羊 已 经 丢 了， 补 洞 还 有 什 么 用？\n\n" dì èr tiān zǎo shang， tā fā xiàn yòu diū le yì zhī yáng。\n" 第 二 天 早 上， 他 发 现 又 丢 了 一 只 羊。\n\nzhè shí tā cái hòu huǐ le， gǎn jǐn zhǎo lái mù bǎn hé dīng zi， bǎ yáng juàn shang de dòng xiū bǔ dé jiē jiē shí shi。\n这 时 他 才 后 悔 了， 赶 紧 找 来 木 板 和 钉 子， 把 羊 圈 上 的 洞 修 补 得 结 结 实 实。\n\ncóng cǐ yǐ hòu， tā de yáng zài yě méi yǒu diū guò。\n从 此 以 后， 他 的 羊 再 也 没 有 丢 过。\n\nlín jū xiào zhe shuō：" suī rán diū le liǎng zhī yáng， dàn nǐ jí shí bǔ hǎo le yáng juàn， zhè yě shì yí jiàn hǎo shì ā！\n邻 居 笑 着 说：" 虽 然 丢 了 两 只 羊， 但 你 及 时 补 好 了 羊 圈， 这 也 是 一 件 好 事 啊！\n\n" mù mín diǎn dian tóu shuō：" shì ā， zuò cuò le shì bú yào jǐn， zhòng yào de shì yào jí shí gǎi zhèng。\n" 牧 民 点 点 头 说：" 是 啊， 做 错 了 事 不 要 紧， 重 要 的 是 要 及 时 改 正。\n\n"\n"',
    questions: [
      { type: 'multiple_choice', question: '牧民的羊为什么会丢？', options: ['因(yīn)为(wèi)羊(yáng)自(zì)己(jǐ)跑(pǎo)了(le)', '因(yīn)为(wèi)羊(yáng)圈(juàn)上(shang)有(yǒu)一(yí)个(gè)洞(dòng)', '因(yīn)为(wèi)有(yǒu)人(rén)偷(tōu)羊(yáng)', '因(yīn)为(wèi)羊(yáng)被(bèi)狼(láng)赶(gǎn)走(zǒu)了(le)'], answer: 1, explanation: '文中说"羊圈坏了一个洞，丢了一只羊"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '邻居给牧民什么建议？', options: ['再(zài)买(mǎi)一(yì)只(zhī)羊(yáng)', '赶(gǎn)快(kuài)把(bǎ)洞(dòng)补(bǔ)上(shàng)', '把(bǎ)羊(yáng)卖(mài)掉(diào)', '不(bú)要(yào)养(yǎng)羊(yáng)了(le)'], answer: 1, explanation: '邻居劝他"赶快把洞补上"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '牧民一开始为什么不肯补洞？', options: ['因(yīn)为(wèi)他(tā)没(méi)有(yǒu)工(gōng)具(jù)', '因(yīn)为(wèi)他(tā)觉(jué)得(de)羊(yáng)已(yǐ)经(jīng)丢(diū)了(le)，补(bǔ)洞(dòng)没(méi)用(yòng)', '因(yīn)为(wèi)他(tā)想(xiǎng)多(duō)丢(diū)几(jǐ)只(zhī)', '因(yīn)为(wèi)天(tiān)太(tài)晚(wǎn)了(le)'], answer: 1, explanation: '牧民说："羊已经丢了，补洞还有什么用？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '牧民什么时候才补洞的？', options: ['丢(diū)了(le)第(dì)一(yī)只(zhī)羊(yáng)后(hòu)立(lì)刻(kè)补(bǔ)了(le)', '丢(diū)了(le)第(dì)二(èr)只(zhī)羊(yáng)后(hòu)才(cái)补(bǔ)', '一(yì)直(zhí)没(méi)补(bǔ)', '邻(lín)居(jū)帮(bāng)他(tā)补(bǔ)了(le)'], answer: 1, explanation: '丢了第二只羊后，他才后悔了，赶紧修补。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"亡羊补牢"的"亡"在这里是什么意思？', options: ['死(sǐ)亡(wáng)', '丢(diū)失(shī)', '逃(táo)跑(pǎo)', '消(xiāo)失(shī)'], answer: 1, explanation: '"亡"在这里是"丢失"的意思，不是"死亡"的意思。', stage: '字词选择' },
      { type: 'multiple_choice', question: '这个成语告诉我们什么道理？', options: ['羊(yáng)很(hěn)容(róng)易(yì)丢(diū)', '出(chū)了(le)问(wèn)题(tí)后(hòu)及(jí)时(shí)补(bǔ)救(jiù)，才(cái)能(néng)避(bì)免(miǎn)更(gèng)大(dà)的(de)损(sǔn)失(shī)', '不(bú)要(yào)养(yǎng)羊(yáng)', '邻(lín)居(jū)说(shuō)的(de)话(huà)都(dōu)是(shì)对(duì)的(de)'], answer: 1, explanation: '做错了事不要紧，重要的是要及时改正。', stage: '道理启示' },
      { type: 'multiple_choice', question: '请找出拼音正确的一项：', options: ['圈(juàn)', '补(pǔ)', '牢(láo)', '邻(línɡ)'], answer: 2, explanation: '"牢"读。"圈"在这里读，但"圈"也有 quān 的读音。"补"读，"邻"读不读。', stage: '拼音练习' }
    ]
  },
  {
    id: 'r015',
    week: 4,
    category: '童话寓言',
    title: '寒号鸟',
    passage: 'hán hào niǎo hé xǐ què shì lín jū。\n寒 号 鸟 和 喜 鹊 是 邻 居。\n\nqiū tiān dào le， xǐ què máng zhe xián shù zhī dā wō， zhǔn bèi guò dōng。\n秋 天 到 了， 喜 鹊 忙 着 衔 树 枝 搭 窝， 准 备 过 冬。\n\nhán hào niǎo ne？\n寒 号 鸟 呢？\n\ntā měi tiān shuì lǎn jiào， zài shù zhī shang tiào lái tiào qù， hái xiào xǐ què：" tiān qì zhè me hǎo， nǐ lèi bú lèi ya？\n它 每 天 睡 懒 觉， 在 树 枝 上 跳 来 跳 去， 还 笑 喜 鹊：" 天 气 这 么 好， 你 累 不 累 呀？\n\n" dōng tiān dào le， běi fēng hū hū de chuī， tiān qì lěng jí le。\n" 冬 天 到 了， 北 风 呼 呼 地 吹， 天 气 冷 极 了。\n\nxǐ què zhù zài zì jǐ wēn nuǎn de wō lǐ， ér hán hào niǎo ne？\n喜 鹊 住 在 自 己 温 暖 的 窝 里， 而 寒 号 鸟 呢？\n\ntā zhǐ néng suō zài yí gè shí fèng lǐ， dòng de zhí fā dǒu， zuǐ lǐ bú tíng de shuō：" duō luo luo， duō luo luo， hán fēng dòng sǐ wǒ， míng tiān jiù dā wō。\n它 只 能 缩 在 一 个 石 缝 里， 冻 得 直 发 抖， 嘴 里 不 停 地 说：" 哆 啰 啰， 哆 啰 啰， 寒 风 冻 死 我， 明 天 就 搭 窝。\n\n" kě shì dì èr tiān tài yáng chū lái le， nuǎn huo le yì xiē， hán hào niǎo yòu bù xiǎng dā wō le。\n" 可 是 第 二 天 太 阳 出 来 了， 暖 和 了 一 些， 寒 号 鸟 又 不 想 搭 窝 了。\n\njiù zhè yàng， tā yì tiān yì tiān de tuō xià qù， zuì hòu zài yí gè tè bié hán lěng de yè wǎn dòng sǐ le。\n就 这 样， 它 一 天 一 天 地 拖 下 去， 最 后 在 一 个 特 别 寒 冷 的 夜 晚 冻 死 了。',
    questions: [
      { type: 'multiple_choice', question: '喜鹊在秋天忙着做什么？', options: ['玩(wán)耍(shuǎ)', '衔(xián)树(shù)枝(zhī)搭(dā)窝(wō)准(zhǔn)备(bèi)过(guò)冬(dōng)', '找(zhǎo)食(shí)物(wù)', '旅(lǚ)行(xíng)'], answer: 1, explanation: '文中说喜鹊"忙着衔树枝搭窝"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '冬天到了，寒号鸟怎么样了？', options: ['住(zhù)在(zài)温(wēn)暖(nuǎn)的(de)窝(wō)里(lǐ)', '在(zài)石(shí)缝(fèng)里(lǐ)冻(dòng)得(de)发(fā)抖(dǒu)', '找(zhǎo)到(dào)了(le)好(hǎo)吃(chī)的(de)', '和(hé)喜(xǐ)鹊(què)一(yì)起(qǐ)住(zhù)'], answer: 1, explanation: '文中说寒号鸟"缩在石缝里，冻得直发抖"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '寒号鸟为什么最后冻死了？', options: ['因(yīn)为(wèi)天(tiān)太(tài)冷(lěng)了(le)', '因(yīn)为(wèi)它(tā)总(zǒng)是(shì)拖(tuō)延(yán)，不(bù)肯(kěn)搭(dā)窝(wō)', '因(yīn)为(wèi)喜(xǐ)鹊(què)不(bù)帮(bāng)它(tā)', '因(yīn)为(wèi)它(tā)没(méi)有(yǒu)朋(péng)友(yǒu)'], answer: 1, explanation: '寒号鸟"一天一天地拖下去"，始终不肯搭窝。', stage: '内容理解' },
      { type: 'multiple_choice', question: '寒号鸟总是说什么？', options: ['今(jīn)天(tiān)就(jiù)搭(dā)窝(wō)', '明(míng)天(tiān)就(jiù)搭(dā)窝(wō)', '不(bù)想(xiǎng)搭(dā)窝(wō)', '请(qǐng)喜(xǐ)鹊(què)帮(bāng)忙(máng)'], answer: 1, explanation: '寒号鸟每次都说："明天就搭窝。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"鹊"的拼音是？', options: ['qüè', 'què', 'xuè', 'qùe'], answer: 1, explanation: '"鹊"读，第四声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么道理？', options: ['冬(dōng)天(tiān)很(hěn)冷(lěng)', '今(jīn)天(tiān)的(de)事(shì)今(jīn)天(tiān)做(zuò)，不(bù)能(néng)拖(tuō)延(yán)', '喜(xǐ)鹊(què)是(shì)好(hǎo)朋(péng)友(yǒu)', '要(yào)多(duō)睡(shuì)觉(jiào)'], answer: 1, explanation: '这个故事教育我们：今天的事今天做，不能总是拖延等到明天。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"哆啰啰"是描写什么的？', options: ['开(kāi)心(xīn)的(de)样(yàng)子(zi)', '寒(hán)冷(lěng)发(fā)抖(dǒu)的(de)样(yàng)子(zi)', '唱(chàng)歌(gē)的(de)样(yàng)子(zi)', '跳(tiào)舞(wǔ)的(de)样(yàng)子(zi)'], answer: 1, explanation: '"哆啰啰"是形容冻得发抖时说话的样子。', stage: '好词摘抄' }
    ]
  },

  // ==================== 第5周（4篇）====================
  {
    id: 'r016',
    week: 5,
    category: '童话寓言',
    title: '坐井观天',
    passage: 'yì zhī xiǎo qīng wā zuò zài yì kǒu jǐng lǐ。\n一 只 小 青 蛙 坐 在 一 口 井 里。\n\ntā měi tiān tái tóu kàn zhe jǐng kǒu nà yì xiǎo piàn tiān kōng， jué de tiān bú guò jiù jǐng kǒu nà me dà。\n它 每 天 抬 头 看 着 井 口 那 一 小 片 天 空， 觉 得 天 不 过 就 井 口 那 么 大。\n\nyǒu yì tiān， yì zhī cóng hǎi biān fēi lái de xiǎo niǎo tíng zài jǐng biān xiū xi。\n有 一 天， 一 只 从 海 边 飞 来 的 小 鸟 停 在 井 边 休 息。\n\nxiǎo niǎo duì qīng wā shuō：" péng yǒu， nǐ hǎo ā！\n小 鸟 对 青 蛙 说：" 朋 友， 你 好 啊！\n\nwǒ fēi le hěn yuǎn hěn yuǎn de lù， tiān kōng kě dà le！\n我 飞 了 很 远 很 远 的 路， 天 空 可 大 了！\n\n" qīng wā tīng le hā hā dà xiào：" tiān kōng jiù zhè me yì diǎn dian dà， nǐ bié chuī niú le！\n" 青 蛙 听 了 哈 哈 大 笑：" 天 空 就 这 么 一 点 点 大， 你 别 吹 牛 了！\n\n" xiǎo niǎo shuō：" nǐ yào shì bù xìn， jiù tiào chū jǐng kǒu lái kàn kan ba！\n" 小 鸟 说：" 你 要 是 不 信， 就 跳 出 井 口 来 看 看 吧！\n\n" qīng wā gēn běn bù xiāng xìn， tā jué de zì jǐ měi tiān kàn dào de tiān jiù shì quán bù de tiān le。\n" 青 蛙 根 本 不 相 信， 它 觉 得 自 己 每 天 看 到 的 天 就 是 全 部 的 天 了。\n\nxiǎo niǎo tàn le kǒu qì shuō：" nǐ ya， zhěng tiān zuò zài jǐng lǐ， kàn dào de zhǐ shì tiān kōng de yì xiǎo kuài！\n小 鸟 叹 了 口 气 说：" 你 呀， 整 天 坐 在 井 里， 看 到 的 只 是 天 空 的 一 小 块！\n\n" shuō wán， xiǎo niǎo fēi zǒu le。\n" 说 完， 小 鸟 飞 走 了。\n\nqīng wā jì xù zuò zài jǐng lǐ， hái shì jué de zì jǐ shì duì de。\n青 蛙 继 续 坐 在 井 里， 还 是 觉 得 自 己 是 对 的。',
    questions: [
      { type: 'multiple_choice', question: '青蛙住在哪里？', options: ['河(hé)里(lǐ)', '海(hǎi)里(lǐ)', '井(jǐng)里(lǐ)', '湖(hú)里(lǐ)'], answer: 2, explanation: '文中说："一只小青蛙坐在一口井里。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '青蛙觉得天空有多大？', options: ['无(wú)边(biān)无(wú)际(jì)', '只(zhǐ)有(yǒu)井(jǐng)口(kǒu)那(nà)么(me)大(dà)', '和(hé)房(fáng)子(zi)一(yí)样(yàng)大(dà)', '比(bǐ)井(jǐng)口(kǒu)大(dà)一(yì)点(diǎn)'], answer: 1, explanation: '青蛙觉得天"不过就井口那么大"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小鸟建议青蛙做什么？', options: ['继(jì)续(xù)待(dāi)在(zài)井(jǐng)里(lǐ)', '跳(tiào)出(chū)井(jǐng)口(kǒu)来(lái)看(kàn)看(kan)', '和(hé)它(tā)一(yì)起(qǐ)飞(fēi)', '去(qù)找(zhǎo)别(bié)的(de)青(qīng)蛙(wā)'], answer: 1, explanation: '小鸟说："你要是不信，就跳出井口来看看吧！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '青蛙为什么不相信小鸟说的话？', options: ['因(yīn)为(wèi)小(xiǎo)鸟(niǎo)说(shuō)话(huà)很(hěn)难(nán)听(tīng)', '因(yīn)为(wèi)青(qīng)蛙(wā)只(zhǐ)看(kàn)到(dào)过(guò)井(jǐng)口(kǒu)大(dà)的(de)天(tiān)空(kōng)', '因(yīn)为(wèi)青(qīng)蛙(wā)不(bù)喜(xǐ)欢(huān)小(xiǎo)鸟(niǎo)', '因(yīn)为(wèi)天(tiān)真(zhēn)的(de)很(hěn)小(xiǎo)'], answer: 1, explanation: '青蛙从来没有跳出过井口，只看到过井口大的天。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"坐井观天"这个成语用来形容什么人？', options: ['知(zhī)识(shí)很(hěn)多(duō)的(de)人(rén)', '见(jiàn)识(shí)短(duǎn)浅(qiǎn)，却(què)自(zì)以(yǐ)为(wéi)是(shì)的(de)人(rén)', '很(hěn)聪(cōng)明(míng)的(de)人(rén)', '住(zhù)在(zài)井(jǐng)里(lǐ)的(de)人(rén)'], answer: 1, explanation: '"坐井观天"比喻见识少、眼光短浅，却自以为是。', stage: '道理启示' },
      { type: 'multiple_choice', question: '请选出拼音正确的一项：', options: ['蛙(huá)', '井(jǐng)', '观(guāng)', '沿(yán)'], answer: 1, explanation: '"井"读。"蛙"读，"观"读，"沿"读但是那字应为"信"不读"沿"。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么道理？', options: ['天(tiān)空(kōng)真(zhēn)的(de)很(hěn)小(xiǎo)', '要(yào)多(duō)走(zǒu)出(chū)去(qù)看(kàn)看(kan)，见(jiàn)识(shí)更(gèng)广(guǎng)阔(kuò)的(de)世(shì)界(jiè)', '青(qīng)蛙(wā)说(shuō)的(de)是(shì)对(duì)的(de)', '不(bú)要(yào)和(hé)小(xiǎo)鸟(niǎo)说(shuō)话(huà)'], answer: 1, explanation: '我们不能像青蛙那样，要多走出去看看更广阔的世界。', stage: '道理启示' }
    ]
  },
  {
    id: 'r017',
    week: 5,
    category: '快乐读书吧',
    title: '《大头儿子和小头爸爸》节选',
    passage: 'dà tóu ér zi yǒu yí gè xiǎo tóu bà ba。\n大 头 儿 子 有 一 个 小 头 爸 爸。\n\nbié rén de bà ba dōu shì dà tóu， kě tā de bà ba què shì xiǎo tóu， zhè ràng dà tóu ér zi jué de hěn yǒu qù。\n别 人 的 爸 爸 都 是 大 头， 可 他 的 爸 爸 却 是 小 头， 这 让 大 头 儿 子 觉 得 很 有 趣。\n\nxīng qī tiān， xiǎo tóu bà ba dài dà tóu ér zi qù dòng wù yuán。\n星 期 天， 小 头 爸 爸 带 大 头 儿 子 去 动 物 园。\n\ndà tóu ér zi zuì xǐ huān dà xiàng le， yīn wèi dà xiàng yě yǒu yí gè hěn dà hěn dà de tóu。\n大 头 儿 子 最 喜 欢 大 象 了， 因 为 大 象 也 有 一 个 很 大 很 大 的 头。\n\ntā zhàn zài dà xiàng miàn qián， duì bà ba shuō：" bà ba， nǐ kàn， dà xiàng de tóu hé wǒ de tóu yí yàng dà！\n他 站 在 大 象 面 前， 对 爸 爸 说：" 爸 爸， 你 看， 大 象 的 头 和 我 的 头 一 样 大！\n\n" xiǎo tóu bà ba xiào le：" shì ā， nǐ men dōu shì dà tóu！\n" 小 头 爸 爸 笑 了：" 是 啊， 你 们 都 是 大 头！\n\n" dà tóu ér zi yòu shuō：" kě shì bà ba， nǐ wèi shén me shì xiǎo tóu ne？\n" 大 头 儿 子 又 说：" 可 是 爸 爸， 你 为 什 么 是 小 头 呢？\n\n" xiǎo tóu bà ba mō le mo zì jǐ de tóu shuō：" yīn wèi bà ba de tóu suī rán xiǎo， kě lǐ miàn zhuāng de dōu shì ài nǐ de dōng xi ya！\n" 小 头 爸 爸 摸 了 摸 自 己 的 头 说：" 因 为 爸 爸 的 头 虽 然 小， 可 里 面 装 的 都 是 爱 你 的 东 西 呀！\n\n" dà tóu ér zi tīng le， jué de hěn xìng fú。\n" 大 头 儿 子 听 了， 觉 得 很 幸 福。\n\ntā bào le bao bà ba， shuō：" wǒ de dà tóu lǐ yě zhuāng mǎn le ài bà ba de dōng xi！\n他 抱 了 抱 爸 爸， 说：" 我 的 大 头 里 也 装 满 了 爱 爸 爸 的 东 西！\n\n"\n"',
    questions: [
      { type: 'multiple_choice', question: '大头儿子的爸爸是什么样的？', options: ['大(dà)头(tóu)爸(bà)爸(ba)', '小(xiǎo)头(tóu)爸(bà)爸(ba)', '高(gāo)个(gè)子(zi)爸(bà)爸(ba)', '胖(pàng)爸(bà)爸(ba)'], answer: 1, explanation: '文中说"大头儿子有一个小头爸爸"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '爸爸带大头儿子去了哪里？', options: ['公(gōng)园(yuán)', '动(dòng)物(wù)园(yuán)', '游(yóu)乐(lè)园(yuán)', '学(xué)校(xiào)'], answer: 1, explanation: '文中说："星期天，小头爸爸带大头儿子去动物园。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '大头儿子最喜欢什么动物？', options: ['狮(shī)子(zi)', '老(lǎo)虎(hǔ)', '大(dà)象(xiàng)', '猴(hóu)子(zi)'], answer: 2, explanation: '文中说："大头儿子最喜欢大象了。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '爸爸说他小小的头里装着什么？', options: ['知(zhī)识(shí)', '爱(ài)儿(ér)子(zi)的(de)东(dōng)西(xi)', '故(gù)事(shì)', '玩(wán)具(jù)'], answer: 1, explanation: '爸爸说："爸爸的头虽然小，可里面装的都是爱你的东西呀！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"幸福"的拼音是？', options: ['xìng fú', 'xìn fú', 'xìng fǔ', 'xīn fú'], answer: 0, explanation: '"幸"读，"福"读。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事让我们感受到了什么？', options: ['爸(bà)爸(ba)的(de)头(tóu)真(zhēn)的(de)很(hěn)小(xiǎo)', '大(dà)头(tóu)儿(ér)子(zi)不(bù)喜(xǐ)欢(huān)爸(bà)爸(ba)', '父(fù)子(zǐ)之(zhī)间(jiān)深(shēn)厚(hòu)的(de)爱(ài)', '大(dà)象(xiàng)很(hěn)可(kě)爱(ài)'], answer: 2, explanation: '爸爸和儿子互相表达了对彼此的爱，让人感动。', stage: '道理启示' },
      { type: 'multiple_choice', question: '大头儿子为什么喜欢大象？', options: ['因(yīn)为(wèi)大(dà)象(xiàng)很(hěn)可(kě)爱(ài)', '因(yīn)为(wèi)大(dà)象(xiàng)也(yě)有(yǒu)一(yí)个(gè)很(hěn)大(dà)很(hěn)大(dà)的(de)头(tóu)', '因(yīn)为(wèi)大(dà)象(xiàng)会(huì)喷(pēn)水(shuǐ)', '因(yīn)为(wèi)大(dà)象(xiàng)是(shì)灰(huī)色(sè)的(de)'], answer: 1, explanation: '文中说："因为大象也有一个很大很大的头。"', stage: '内容理解' }
    ]
  },
  {
    id: 'r018',
    week: 5,
    category: '成语故事',
    title: '愚公移山',
    passage: 'hěn jiǔ hěn jiǔ yǐ qián， yǒu yí wèi lǎo yé ye jiào yú gōng。\n很 久 很 久 以 前， 有 一 位 老 爷 爷 叫 愚 公。\n\ntā jiā mén qián yǒu liǎng zuò dà shān， yì jiā rén chū mén hěn bù fāng biàn。\n他 家 门 前 有 两 座 大 山， 一 家 人 出 门 很 不 方 便。\n\nyǒu yì tiān， yú gōng bǎ quán jiā rén jiào dào yì qǐ， shuō：" wǒ men yì qǐ bǎ zhè liǎng zuò shān wā diào ba！\n有 一 天， 愚 公 把 全 家 人 叫 到 一 起， 说：" 我 们 一 起 把 这 两 座 山 挖 掉 吧！\n\n" jiā rén men dōu biǎo shì zàn chéng。\n" 家 人 们 都 表 示 赞 成。\n\ndì èr tiān， dà jiā jiù kāi shǐ wā shān le。\n第 二 天， 大 家 就 开 始 挖 山 了。\n\nyǒu yí gè jiào zhì sǒu de lǎo rén kàn dào le， xiào zhe shuō：" nǐ dōu zhè me dà nián jì le， zěn me kě néng wā diào liǎng zuò dà shān ne？\n有 一 个 叫 智 叟 的 老 人 看 到 了， 笑 着 说：" 你 都 这 么 大 年 纪 了， 怎 么 可 能 挖 掉 两 座 大 山 呢？\n\n" yú gōng huí dá shuō：" wǒ sǐ le yǒu ér zi， ér zi sǐ le yǒu sūn zi， sūn zi yòu yǒu ér zi， zǐ zǐ sūn sūn méi yǒu qióng jìn， ér shān bú huì zhǎng gāo， wèi shén me wā bù píng ne？\n" 愚 公 回 答 说：" 我 死 了 有 儿 子， 儿 子 死 了 有 孙 子， 孙 子 又 有 儿 子， 子 子 孙 孙 没 有 穷 尽， 而 山 不 会 长 高， 为 什 么 挖 不 平 呢？\n\n" shàng tiān bèi yú gōng de jīng shén gǎn dòng le， jiù pài le liǎng wèi dà lì shén bǎ liǎng zuò shān bēi zǒu le。\n" 上 天 被 愚 公 的 精 神 感 动 了， 就 派 了 两 位 大 力 神 把 两 座 山 背 走 了。',
    questions: [
      { type: 'multiple_choice', question: '愚公为什么要挖山？', options: ['因(yīn)为(wèi)山(shān)上(shang)有(yǒu)宝(bǎo)藏(cáng)', '因(yīn)为(wèi)山(shān)挡(dǎng)住(zhù)了(le)出(chū)门(mén)的(de)路(lù)，很(hěn)不(bù)方(fāng)便(biàn)', '因(yīn)为(wèi)他(tā)想(xiǎng)修(xiū)房(fáng)子(zi)', '因(yīn)为(wèi)他(tā)觉(jué)得(de)山(shān)太(tài)难(nán)看(kàn)了(le)'], answer: 1, explanation: '文中说山在家门前，"一家人出门很不方便"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '智叟说了什么？', options: ['加(jiā)油(yóu)加(jiā)油(yóu)！', '你(nǐ)年(nián)纪(jì)大(dà)了(le)，肯(kěn)定(dìng)挖(wā)不(bù)完(wán)', '我(wǒ)来(lái)帮(bāng)你(nǐ)', '这(zhè)山(shān)真(zhēn)漂(piào)亮(liang)'], answer: 1, explanation: '智叟笑着说："你都这么大年纪了，怎么可能挖掉两座大山呢？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '愚公是怎样回答的？', options: ['我(wǒ)很(hěn)快(kuài)就(jiù)能(néng)挖(wā)完(wán)', '我(wǒ)不(bù)挖(wā)了(le)', '子(zǐ)子(zǐ)孙(sūn)孙(sūn)一(yì)代(dài)一(yì)代(dài)坚(jiān)持(chí)挖(wā)下(xià)去(qù)，一(yí)定(dìng)能(néng)挖(wā)平(píng)', '你(nǐ)说(shuō)得(de)对(duì)'], answer: 2, explanation: '愚公说子子孙孙没有穷尽，山不会长高，一定能挖平。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最后山是怎么没的？', options: ['愚(yú)公(gōng)自(zì)己(jǐ)挖(wā)平(píng)的(de)', '被(bèi)大(dà)力(lì)神(shén)背(bēi)走(zǒu)了(le)', '地(dì)震(zhèn)震(zhèn)倒(dǎo)了(le)', '被(bèi)水(shuǐ)冲(chōng)走(zǒu)了(le)'], answer: 1, explanation: '文末说："上天被愚公的精神感动了，就派了两位大力神把两座山背走了。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"愚"的拼音是？', options: ['yū', 'yú', 'yǔ', 'yù'], answer: 1, explanation: '"愚"读，第二声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么道理？', options: ['山(shān)很(hěn)容(róng)易(yì)被(bèi)挖(wā)掉(diào)', '只(zhǐ)要(yào)有(yǒu)决(jué)心(xīn)，坚(jiān)持(chí)不(bú)懈(xiè)，困(kùn)难(nán)总(zǒng)能(néng)被(bèi)克(kè)服(fú)', '年(nián)纪(jì)大(dà)的(de)人(rén)不(bù)能(néng)干(gàn)活(huó)', '要(yào)等(děng)别(bié)人(rén)来(lái)帮(bāng)忙(máng)'], answer: 1, explanation: '只要有坚定的决心和持之以恒的努力，再大的困难也能克服。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"子子孙孙"是什么意思？', options: ['儿(ér)子(zi)和(hé)孙(sūn)子(zi)', '一(yì)代(dài)又(yòu)一(yì)代(dài)的(de)后(hòu)代(dài)', '很(hěn)多(duō)孩(hái)子(zi)', '很(hěn)多(duō)老(lǎo)人(rén)'], answer: 1, explanation: '"子子孙孙"就是一代又一代的意思。', stage: '字词选择' }
    ]
  },
  {
    id: 'r019',
    week: 5,
    category: '古诗',
    title: '悯农（其二）',
    passage: 'chú hé rì dāng wǔ， hàn dī hé xià tǔ。\n锄 禾 日 当 午， 汗 滴 禾 下 土。\n\nshuí zhī pán zhōng cān， lì lì jiē xīn kǔ。\n谁 知 盘 中 餐， 粒 粒 皆 辛 苦。\n\n—— táng lǐ shēn zhè shǒu shī xiě de shì nóng mín bó bo zài tián lǐ xīn kǔ láo dòng de qíng jǐng。\n—— 唐 李 绅 这 首 诗 写 的 是 农 民 伯 伯 在 田 里 辛 苦 劳 动 的 情 景。\n\nzhōng wǔ de tài yáng huǒ là là de， nóng mín bó bo hái zài chú cǎo， hàn shuǐ yì dī yì dī de dī zài tǔ dì lǐ。\n中 午 的 太 阳 火 辣 辣 的， 农 民 伯 伯 还 在 锄 草， 汗 水 一 滴 一 滴 地 滴 在 土 地 里。\n\nyǒu shuí zhī dào ne？\n有 谁 知 道 呢？\n\nwǒ men chī de měi yì lì mǐ fàn， dōu shì nóng mín bó bo yòng xīn qín de láo dòng huàn lái de！\n我 们 吃 的 每 一 粒 米 饭， 都 是 农 民 伯 伯 用 辛 勤 的 劳 动 换 来 的！\n\nzhè shǒu shī jiào yù wǒ men yào zhēn xī liáng shi， bù néng làng fèi。\n这 首 诗 教 育 我 们 要 珍 惜 粮 食， 不 能 浪 费。',
    questions: [
      { type: 'multiple_choice', question: '这首诗的作者是？', options: ['李(lǐ)白(bái)', '杜(dù)甫(fǔ)', '李(lǐ)绅(shēn)', '孟(mèng)浩(hào)然(rán)'], answer: 2, explanation: '这首诗是唐代诗人李绅写的。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗中描写农民在什么时间劳动？', options: ['早(zǎo)上(shang)', '中(zhōng)午(wǔ)', '下(xià)午(wǔ)', '晚(wǎn)上(shang)'], answer: 1, explanation: '诗中说"锄禾日当午"，就是中午的时候。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"粒粒皆辛苦"是什么意思？', options: ['每(měi)一(yì)粒(lì)米(mǐ)都(dōu)来(lái)得(de)很(hěn)辛(xīn)苦(kǔ)', '米(mǐ)粒(lì)很(hěn)大(dà)', '饭(fàn)很(hěn)好(hǎo)吃(chī)', '种(zhòng)粮(liáng)食(shi)很(hěn)简(jiǎn)单(dān)'], answer: 0, explanation: '"粒粒皆辛苦"意思是每一粒粮食都来之不易。', stage: '字词选择' },
      { type: 'multiple_choice', question: '"皆"的拼音是？', options: ['jiē', 'jié', 'xiē', 'xié'], answer: 0, explanation: '"皆"读，第一声，意思是"都"。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这首诗主要教育我们什么？', options: ['要(yào)多(duō)吃(chī)饭(fàn)', '要(yào)珍(zhēn)惜(xī)粮(liáng)食(shi)，不(bù)能(néng)浪(làng)费(fèi)', '要(yào)学(xué)会(huì)种(zhòng)田(tián)', '中(zhōng)午(wǔ)要(yào)休(xiū)息(xi)'], answer: 1, explanation: '这首诗让我们明白粮食来之不易，要珍惜粮食。', stage: '道理启示' },
      { type: 'multiple_choice', question: '诗中哪个词描写了农民劳动的辛苦？', options: ['锄(chú)禾(hé)', '汗(hàn)滴(dī)', '盘(pán)中(zhōng)', '粒(lì)粒(lì)'], answer: 1, explanation: '"汗滴"写出了农民在烈日下汗水直流的辛苦。', stage: '好词摘抄' },
      { type: 'multiple_choice', question: '你觉得我们应该怎么做？', options: ['剩(shèng)饭(fàn)就(jiù)倒(dào)掉(diào)', '吃(chī)多(duō)少(shǎo)盛(chéng)多(duō)少(shǎo)，不(bú)浪(làng)费(fèi)', '不(bù)吃(chī)饭(fàn)', '只(zhǐ)吃(chī)菜(cài)不(bù)吃(chī)饭(fàn)'], answer: 1, explanation: '珍惜粮食就是吃多少盛多少，不剩饭。', stage: '道理启示' }
    ]
  },

  // ==================== 第6周（3篇）====================
  {
    id: 'r020',
    week: 6,
    category: '童话寓言',
    title: '狐假虎威',
    passage: 'zài yí piàn dà sēn lín lǐ， yǒu yì zhī dà lǎo hǔ。\n在 一 片 大 森 林 里， 有 一 只 大 老 虎。\n\ntā shì sēn lín zhī wáng， suǒ yǒu dòng wù dōu pà tā。\n它 是 森 林 之 王， 所 有 动 物 都 怕 它。\n\nyǒu yì tiān， dà lǎo hǔ zhuā zhù le yì zhī hú li， zhèng zhǔn bèi chī diào tā。\n有 一 天， 大 老 虎 抓 住 了 一 只 狐 狸， 正 准 备 吃 掉 它。\n\nhú li jí zhōng shēng zhì， duì lǎo hǔ shuō：" nǐ bù néng chī wǒ！\n狐 狸 急 中 生 智， 对 老 虎 说：" 你 不 能 吃 我！\n\nshàng tiān pài wǒ lái zuò bǎi shòu zhī wáng， nǐ yào shì chī le wǒ， shàng tiān huì chéng fá nǐ de！\n上 天 派 我 来 做 百 兽 之 王， 你 要 是 吃 了 我， 上 天 会 惩 罚 你 的！\n\n" lǎo hǔ bàn xìn bàn yí。\n" 老 虎 半 信 半 疑。\n\nhú li jiē zhe shuō：" nǐ yào shì bù xìn， jiù gēn zài wǒ hòu miàn zǒu yì quān。\n狐 狸 接 着 说：" 你 要 是 不 信， 就 跟 在 我 后 面 走 一 圈。\n\nkàn kan suǒ yǒu dòng wù jiàn dào wǒ huì bú huì táo pǎo！\n看 看 所 有 动 物 见 到 我 会 不 会 逃 跑！\n\n" yú shì， hú li zài qián miàn dà yáo dà bǎi de zǒu， lǎo hǔ gēn zài hòu miàn。\n" 于 是， 狐 狸 在 前 面 大 摇 大 摆 地 走， 老 虎 跟 在 后 面。\n\nsēn lín lǐ de dòng wù men yí kàn dào lǎo hǔ， dōu xià de pīn mìng táo pǎo。\n森 林 里 的 动 物 们 一 看 到 老 虎， 都 吓 得 拼 命 逃 跑。\n\nlǎo hǔ bù zhī dào dòng wù men pà de shì zì jǐ， hái yǐ wéi tā men zhēn de shì pà hú li ne！\n老 虎 不 知 道 动 物 们 怕 的 是 自 己， 还 以 为 它 们 真 的 是 怕 狐 狸 呢！\n\nyú shì， lǎo hǔ fàng le hú li。\n于 是， 老 虎 放 了 狐 狸。\n\nhú li dé yì jí le！\n狐 狸 得 意 极 了！',
    questions: [
      { type: 'multiple_choice', question: '老虎最初抓住狐狸想做什么？', options: ['和(hé)它(tā)做(zuò)朋(péng)友(yǒu)', '吃(chī)掉(diào)它(tā)', '让(ràng)它(tā)带(dài)路(lù)', '和(hé)它(tā)玩(wán)'], answer: 1, explanation: '文中说："正准备吃掉它。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐狸对老虎说了什么谎话？', options: ['自(zì)己(jǐ)是(shì)上(shàng)天(tiān)派(pài)来(lái)的(de)百(bǎi)兽(shòu)之(zhī)王(wáng)', '自(zì)己(jǐ)会(huì)飞(fēi)', '自(zì)己(jǐ)是(shì)老(lǎo)虎(hǔ)的(de)朋(péng)友(yǒu)', '自(zì)己(jǐ)身(shēn)上(shang)有(yǒu)毒(dú)'], answer: 0, explanation: '狐狸说："上天派我来做百兽之王。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '动物们看到狐狸和老虎后，真正怕的是谁？', options: ['怕(pà)狐(hú)狸(li)', '怕(pà)老(lǎo)虎(hǔ)', '谁(shuí)也(yě)不(bú)怕(pà)', '两(liǎng)个(gè)都(dōu)怕(pà)'], answer: 1, explanation: '文中说："老虎不知道动物们怕的是自己。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '老虎最后为什么放了狐狸？', options: ['因(yīn)为(wèi)狐(hú)狸(li)太(tài)小(xiǎo)了(le)', '因(yīn)为(wèi)老(lǎo)虎(hǔ)真(zhēn)的(de)相(xiāng)信(xìn)了(le)狐(hú)狸(li)的(de)话(huà)', '因(yīn)为(wèi)有(yǒu)人(rén)来(lái)了(le)', '因(yīn)为(wèi)狐(hú)狸(li)跑(pǎo)了(le)'], answer: 1, explanation: '老虎看到动物们逃跑，以为它们怕狐狸，就信了狐狸的话。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"狐假虎威"这个成语的意思是？', options: ['狐(hú)狸(li)和(hé)老(lǎo)虎(hǔ)是(shì)好(hǎo)朋(péng)友(yǒu)', '借(jiè)用(yòng)别(bié)人(rén)的(de)威(wēi)势(shì)吓(xià)唬(hu)别(bié)人(rén)', '狐(hú)狸(li)比(bǐ)老(lǎo)虎(hǔ)厉(lì)害(hài)', '老(lǎo)虎(hǔ)很(hěn)笨(bèn)'], answer: 1, explanation: '"狐假虎威"比喻借用别人的威风来吓唬人。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"假"的拼音是？', options: ['jiǎ', 'jià', 'xiǎ', 'xià'], answer: 0, explanation: '"假"读，第三声，在这里是"借用"的意思。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么？', options: ['狐(hú)狸(li)很(hěn)聪(cōng)明(míng)', '不(bú)要(yào)被(bèi)借(jiè)用(yòng)别(bié)人(rén)力(lì)量(liàng)吓(xià)唬(hu)人(rén)的(de)人(rén)骗(piàn)了(le)', '老(lǎo)虎(hǔ)应(yīng)该(gāi)吃(chī)了(le)狐(hú)狸(li)', '动(dòng)物(wù)们(men)都(dōu)很(hěn)胆(dǎn)小(xiǎo)'], answer: 1, explanation: '我们要学会看清事物的真相，不要被假象蒙骗。', stage: '道理启示' }
    ]
  },
  {
    id: 'r021',
    week: 6,
    category: '快乐读书吧',
    title: '《小老鼠和大老虎》节选',
    passage: 'yǒu yì tiān， yì zhī xiǎo lǎo shǔ zài sēn lín lǐ sàn bù。\n有 一 天， 一 只 小 老 鼠 在 森 林 里 散 步。\n\nzǒu zhe zǒu zhe， tā bù xiǎo xīn cǎi dào le yì zhī zhèng zài shuì jiào de dà lǎo hǔ de wěi ba。\n走 着 走 着， 它 不 小 心 踩 到 了 一 只 正 在 睡 觉 的 大 老 虎 的 尾 巴。\n\ndà lǎo hǔ bèi chǎo xǐng le， fēi cháng shēng qì， yì bǎ zhuā zhù xiǎo lǎo shǔ， zhāng kāi dà zuǐ jiù yào chī le tā。\n大 老 虎 被 吵 醒 了， 非 常 生 气， 一 把 抓 住 小 老 鼠， 张 开 大 嘴 就 要 吃 了 它。\n\nxiǎo lǎo shǔ xià huài le， jí máng shuō：" lǎo hǔ dà gē， qiú qiú nǐ fàng le wǒ ba！\n小 老 鼠 吓 坏 了， 急 忙 说：" 老 虎 大 哥， 求 求 你 放 了 我 吧！\n\nyǐ hòu wǒ yí dìng huì bào dá nǐ de！\n以 后 我 一 定 会 报 答 你 的！\n\n" dà lǎo hǔ hā hā dà xiào：" nǐ zhè me xiǎo， zěn me kě néng bāng dào wǒ？\n" 大 老 虎 哈 哈 大 笑：" 你 这 么 小， 怎 么 可 能 帮 到 我？\n\n" dàn tā hái shì fàng le xiǎo lǎo shǔ。\n" 但 它 还 是 放 了 小 老 鼠。\n\nguò le jǐ tiān， dà lǎo hǔ bù xiǎo xīn diào jìn le liè rén de wǎng lǐ， zěn me yě zhèng tuō bù le。\n过 了 几 天， 大 老 虎 不 小 心 掉 进 了 猎 人 的 网 里， 怎 么 也 挣 脱 不 了。\n\nzhèng zài zhè shí， xiǎo lǎo shǔ pǎo le guò lái， yòng jiān jiān de yá chǐ bǎ wǎng yǎo le yí gè dà dòng。\n正 在 这 时， 小 老 鼠 跑 了 过 来， 用 尖 尖 的 牙 齿 把 网 咬 了 一 个 大 洞。\n\ndà lǎo hǔ dé jiù le！\n大 老 虎 得 救 了！\n\ntā gǎn jī de shuō：" xiè xie nǐ， xiǎo lǎo shǔ！\n它 感 激 地 说：" 谢 谢 你， 小 老 鼠！\n\nkàn lái xiǎo xiǎo de shēn tǐ yě néng yǒu dà dà de lì liàng！\n看 来 小 小 的 身 体 也 能 有 大 大 的 力 量！\n\n"\n"',
    questions: [
      { type: 'multiple_choice', question: '小老鼠不小心做了什么？', options: ['踩(cǎi)到(dào)了(le)大(dà)老(lǎo)虎(hǔ)的(de)尾(wěi)巴(ba)', '偷(tōu)了(le)大(dà)老(lǎo)虎(hǔ)的(de)食(shí)物(wù)', '跑(pǎo)进(jìn)了(le)大(dà)老(lǎo)虎(hǔ)的(de)洞(dòng)里(lǐ)', '叫(jiào)醒(xǐng)了(le)大(dà)老(lǎo)虎(hǔ)'], answer: 0, explanation: '文中说小老鼠"不小心踩到了"大老虎的尾巴。', stage: '内容理解' },
      { type: 'multiple_choice', question: '大老虎为什么放了小老鼠？', options: ['因(yīn)为(wèi)小(xiǎo)老(lǎo)鼠(shǔ)太(tài)小(xiǎo)了(le)，不(bù)值(zhí)得(de)吃(chī)', '虽(suī)然(rán)不(bù)相(xiāng)信(xìn)小(xiǎo)老(lǎo)鼠(shǔ)能(néng)报(bào)答(dá)，但(dàn)还(hái)是(shì)放(fàng)了(le)它(tā)', '因(yīn)为(wèi)小(xiǎo)老(lǎo)鼠(shǔ)送(sòng)了(le)它(tā)礼(lǐ)物(wù)', '因(yīn)为(wèi)有(yǒu)别(bié)的(de)动(dòng)物(wù)求(qiú)情(qíng)'], answer: 1, explanation: '老虎虽然觉得小老鼠帮不了自己，但还是心软放了它。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小老鼠是怎么救大老虎的？', options: ['找(zhǎo)来(lái)了(le)别(bié)的(de)动(dòng)物(wù)帮(bāng)忙(máng)', '用(yòng)牙(yá)齿(chǐ)把(bǎ)网(wǎng)咬(yǎo)了(le)一(yí)个(gè)大(dà)洞(dòng)', '把(bǎ)网(wǎng)解(jiě)开(kāi)了(le)', '叫(jiào)来(lái)了(le)人(rén)类(lèi)'], answer: 1, explanation: '小老鼠"用尖尖的牙齿把网咬了一个大洞"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '大老虎最后明白了什么？', options: ['小(xiǎo)老(lǎo)鼠(shǔ)很(hěn)好(hǎo)吃(chī)', '不(bù)该(gāi)放(fàng)了(le)小(xiǎo)老(lǎo)鼠(shǔ)', '小(xiǎo)小(xiǎo)的(de)身(shēn)体(tǐ)也(yě)能(néng)有(yǒu)大(dà)大(dà)的(de)力(lì)量(liàng)', '自(zì)己(jǐ)不(bù)应(yīng)该(gāi)睡(shuì)觉(jiào)'], answer: 2, explanation: '大老虎说："看来小小的身体也能有大大的力量！"', stage: '道理启示' },
      { type: 'multiple_choice', question: '"鼠"的拼音是？', options: ['shǔ', 'sǔ', 'shú', 'sú'], answer: 0, explanation: '"鼠"读，第三声，翘舌音。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这个故事告诉我们什么？', options: ['老(lǎo)虎(hǔ)比(bǐ)老(lǎo)鼠(shǔ)厉(lì)害(hài)', '每(měi)个(gè)人(rén)都(dōu)有(yǒu)自(zì)己(jǐ)的(de)长(cháng)处(chù)，不(bù)能(néng)小(xiǎo)看(kàn)别(bié)人(rén)', '不(bù)要(yào)帮(bāng)助(zhù)别(bié)人(rén)', '老(lǎo)鼠(shǔ)都(dōu)是(shì)好(hǎo)人(rén)'], answer: 1, explanation: '每个人都有自己的优点，不能因为对方弱小就看不起人家。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文中"报答"是什么意思？', options: ['报(bào)告(gào)', '用(yòng)实(shí)际(jì)行(xíng)动(dòng)感(gǎn)谢(xiè)帮(bāng)过(guò)自(zì)己(jǐ)的(de)人(rén)', '报(bào)名(míng)', '打(dǎ)架(jià)'], answer: 1, explanation: '"报答"就是用实际行动来感谢帮过自己的人。', stage: '字词选择' }
    ]
  },
  {
    id: 'r022',
    week: 6,
    category: '古诗',
    title: '登鹳雀楼',
    passage: 'bái rì yī shān jìn， huáng hé rù hǎi liú。\n白 日 依 山 尽， 黄 河 入 海 流。\n\nyù qióng qiān lǐ mù， gèng shàng yì céng lóu。\n欲 穷 千 里 目， 更 上 一 层 楼。\n\n—— táng wáng zhī huàn zhè shǒu shī xiě de shì shī rén dēng shàng guàn què lóu hòu kàn dào de zhuàng lì jǐng sè。\n—— 唐 王 之 涣 这 首 诗 写 的 是 诗 人 登 上 鹳 雀 楼 后 看 到 的 壮 丽 景 色。\n\ntài yáng kào zhe yuǎn shān màn màn luò xià， gǔn gǔn de huáng hé shuǐ xiàng dà hǎi liú qù。\n太 阳 靠 着 远 山 慢 慢 落 下， 滚 滚 的 黄 河 水 向 大 海 流 去。\n\nshī rén xiǎng yào kàn dào gèng yuǎn gèng yuǎn de fēng jǐng， jiù zài wǎng shàng zǒu le yì céng lóu。\n诗 人 想 要 看 到 更 远 更 远 的 风 景， 就 再 往 上 走 了 一 层 楼。\n\nzhè shǒu shī gào su wǒ men： xiǎng yào kàn dé gèng yuǎn， jiù yào zhàn dé gèng gāo。\n这 首 诗 告 诉 我 们： 想 要 看 得 更 远， 就 要 站 得 更 高。\n\nzuò rén zuò shì yě shì zhè gè dào lǐ ā！\n做 人 做 事 也 是 这 个 道 理 啊！',
    questions: [
      { type: 'multiple_choice', question: '这首诗的作者是？', options: ['王(wáng)之(zhī)涣(huàn)', '李(lǐ)白(bái)', '孟(mèng)浩(hào)然(rán)', '王(wáng)维(wéi)'], answer: 0, explanation: '这首诗是唐代诗人王之涣写的。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗中写到了哪条河？', options: ['长(cháng)江(jiāng)', '黄(huáng)河(hé)', '珠(zhū)江(jiāng)', '淮(huái)河(hé)'], answer: 1, explanation: '诗中说："黄河入海流。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"欲穷千里目"是什么意思？', options: ['眼(yǎn)睛(jīng)不(bù)好(hǎo)了(le)', '想(xiǎng)要(yào)看(kàn)到(dào)千(qiān)里(lǐ)之(zhī)外(wài)的(de)景(jǐng)色(sè)', '想(xiǎng)要(yào)走(zǒu)一(yì)千(qiān)里(lǐ)', '想(xiǎng)要(yào)去(qù)远(yuǎn)方(fāng)'], answer: 1, explanation: '"欲"是想要，"穷"是看尽，"千里目"是很远的景色。', stage: '字词选择' },
      { type: 'multiple_choice', question: '"登"的拼音是？', options: ['dēn', 'dēng', 'dénɡ', 'dènɡ'], answer: 1, explanation: '"登"读，第一声，后鼻音。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '诗人为了看得更远做了什么？', options: ['用(yòng)了(le)望(wàng)远(yuǎn)镜(jìng)', '再(zài)往(wǎng)上(shàng)走(zǒu)了(le)一(yì)层(céng)楼(lóu)', '跳(tiào)了(le)起(qǐ)来(lái)', '走(zǒu)到(dào)窗(chuāng)户(hu)边(biān)'], answer: 1, explanation: '诗中说："更上一层楼。"就是再往上走一层。', stage: '内容理解' },
      { type: 'multiple_choice', question: '这首诗告诉我们什么道理？', options: ['楼(lóu)越(yuè)高(gāo)越(yuè)好(hǎo)', '想(xiǎng)看(kàn)得(dé)远(yuǎn)就(jiù)要(yào)站(zhàn)得(de)高(gāo)，做(zuò)事(shì)也(yě)要(yào)积(jí)极(jí)向(xiàng)上(shàng)', '黄(huáng)河(hé)很(hěn)长(cháng)', '太(tài)阳(yáng)每(měi)天(tiān)都(dōu)会(huì)落(luò)下(xià)'], answer: 1, explanation: '这首诗蕴含了积极向上、不断进取的人生哲理。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"黄河入海流"是什么意思？', options: ['黄(huáng)河(hé)水(shuǐ)流(liú)进(jìn)大(dà)海(hǎi)', '黄(huáng)河(hé)水(shuǐ)干(gān)了(le)', '黄(huáng)河(hé)变(biàn)成(chéng)了(le)大(dà)海(hǎi)', '黄(huáng)河(hé)不(bù)流(liú)了(le)'], answer: 0, explanation: '"入海流"的意思是黄河水流向大海。', stage: '内容理解' }
    ]
  },
  // ==================== 第7周（3篇）====================
  {
    id: 'r023',
    week: 7,
    category: '童谣',
    title: '数鸭子',
    passage: 'mén qián dà qiáo xià， yóu guò yì qún yā。\n门 前 大 桥 下， 游 过 一 群 鸭。\n\nkuài lái kuài lái shǔ yī shǔ， èr sì liù qī bā。\n快 来 快 来 数 一 数， 二 四 六 七 八。\n\ngā gā gā gā， zhēn ya zhēn duō yā。\n嘎 嘎 嘎 嘎， 真 呀 真 多 鸭。\n\nshǔ bù qīng dào dǐ duō shǎo yā， shǔ bù qīng dào dǐ duō shǎo yā。\n数 不 清 到 底 多 少 鸭， 数 不 清 到 底 多 少 鸭。\n\nxiǎo yā zi， gā gā jiào， zǒu qǐ lù lái yáo ā yáo。\n小 鸭 子， 嘎 嘎 叫， 走 起 路 来 摇 啊 摇。\n\nyáo dào hé lǐ qù xǐ zǎo， xǐ wán zǎo lái shài tài yáng。\n摇 到 河 里 去 洗 澡， 洗 完 澡 来 晒 太 阳。\n\ntài yáng gōng gong xiào mī mī， kuā wǒ men shì hǎo bǎo bao。\n太 阳 公 公 笑 眯 眯， 夸 我 们 是 好 宝 宝。\n\nài xǐ zǎo jiǎng wèi shēng， tiān tiān gān jìng lè táo táo！\n爱 洗 澡 讲 卫 生， 天 天 干 净 乐 陶 陶！',
    questions: [
      { type: 'multiple_choice', question: '大桥下面游过了什么？', options: ['一(yì)群(qún)鱼(yú)', '一(yì)群(qún)鸭(yā)', '一(yì)群(qún)鹅(é)', '一(yì)群(qún)虾(xiā)'], answer: 1, explanation: '童谣开头说："门前大桥下，游过一群鸭。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小鸭子走路是什么样的？', options: ['一(yì)直(zhí)直(zhí)地(de)走(zǒu)', '摇(yáo)啊(ā)摇(yáo)的(de)', '跳(tiào)着(zhe)走(zǒu)', '跑(pǎo)着(zhe)走(zǒu)'], answer: 1, explanation: '童谣中说："走起路来摇啊摇。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小鸭子去河里做了什么？', options: ['抓(zhuā)鱼(yú)', '洗(xǐ)澡(zǎo)', '玩(wán)水(shuǐ)', '游(yóu)泳(yǒng)比(bǐ)赛(sài)'], answer: 1, explanation: '童谣中说："摇到河里去洗澡。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '太阳公公说了什么？', options: ['你(nǐ)们(men)真(zhēn)脏(zāng)', '夸(kuā)我(wǒ)们(men)是(shì)好(hǎo)宝(bǎo)宝(bao)', '天(tiān)要(yào)下(xià)雨(yǔ)了(le)', '快(kuài)回(huí)家(jiā)吧(ba)'], answer: 1, explanation: '童谣中说："太阳公公笑眯眯，夸我们是好宝宝。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"嘎"的拼音是？', options: ['gā', 'gá', 'gǎ', 'gà'], answer: 0, explanation: '"嘎"读，第一声，是小鸭子叫的声音。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这首童谣教育我们什么？', options: ['要(yào)多(duō)吃(chī)鸭(yā)肉(ròu)', '要(yào)讲(jiǎng)卫(wèi)生(shēng)，爱(ài)干(gān)净(jìng)', '不(bú)要(yào)游(yóu)泳(yǒng)', '要(yào)学(xué)会(huì)数(shǔ)数(shù)'], answer: 1, explanation: '童谣末尾说："爱洗澡讲卫生，天天干净乐陶陶！"', stage: '道理启示' },
      { type: 'multiple_choice', question: '童谣里哪句话让你觉得最有趣？', options: ['门(mén)前(qián)大(dà)桥(qiáo)下(xià)', '嘎(gā)嘎(gā)嘎(gā)嘎(gā)', '数(shǔ)不(bù)清(qīng)到(dào)底(dǐ)多(duō)少(shǎo)鸭(yā)', '走(zǒu)起(qǐ)路(lù)来(lái)摇(yáo)啊(ā)摇(yáo)'], answer: 3, explanation: '"走起路来摇啊摇"形象地写出了小鸭子可爱的走路姿势，让人觉得很有趣。（本题为开放式题，参考此理由即可）', stage: '好词摘抄' }
    ]
  },
  {
    id: 'r024',
    week: 7,
    category: '成语故事',
    title: '掩耳盗铃',
    passage: 'cóng qián yǒu yí gè xiǎo tōu， kàn dào yì hù rén jiā de mén shang guà zhe yì kǒu piào liang de líng dang。\n从 前 有 一 个 小 偷， 看 到 一 户 人 家 的 门 上 挂 着 一 口 漂 亮 的 铃 铛。\n\ntā fēi cháng xiǎng yào nà gè líng dang， kě shì líng dang yí pèng jiù huì fā chū qīng cuì de xiǎng shēng， yì xiǎng zhǔ rén jiù huì fā xiàn。\n他 非 常 想 要 那 个 铃 铛， 可 是 铃 铛 一 碰 就 会 发 出 清 脆 的 响 声， 一 响 主 人 就 会 发 现。\n\nxiǎo tōu xiǎng le yí gè" cōng míng" de bàn fǎ：" wǒ bǎ zì jǐ de ěr duo dǔ shàng， bú jiù tīng bú dào líng shēng le ma？\n小 偷 想 了 一 个" 聪 明" 的 办 法：" 我 把 自 己 的 耳 朵 堵 上， 不 就 听 不 到 铃 声 了 吗？\n\n" yú shì， tā yòng mián huā dǔ zhù zì jǐ de ěr duo， fàng xīn dà dǎn de qù tōu líng dang。\n" 于 是， 他 用 棉 花 堵 住 自 己 的 耳 朵， 放 心 大 胆 地 去 偷 铃 铛。\n\nkě shì tā gāng yí pèng líng dang， líng shēng jiù" dīng dāng dīng dāng" de xiǎng le qǐ lái。\n可 是 他 刚 一 碰 铃 铛， 铃 声 就" 叮 当 叮 当" 地 响 了 起 来。\n\nzhǔ rén tīng dào líng shēng， pǎo chū lái yí kàn， xiǎo tōu zhèng zài tōu líng dang ne！\n主 人 听 到 铃 声， 跑 出 来 一 看， 小 偷 正 在 偷 铃 铛 呢！\n\nxiǎo tōu bèi zhuā zhù le。\n小 偷 被 抓 住 了。\n\ntā hái zài nà mèn ne：" wǒ míng míng dǔ zhù le ěr duo， nǐ men zěn me hái néng tīng dào líng shēng ne？\n他 还 在 纳 闷 呢：" 我 明 明 堵 住 了 耳 朵， 你 们 怎 么 还 能 听 到 铃 声 呢？\n\n" zhǔ rén hé dà jiā dōu hā hā dà xiào le qǐ lái。\n" 主 人 和 大 家 都 哈 哈 大 笑 了 起 来。',
    questions: [
      { type: 'multiple_choice', question: '小偷想要偷什么？', options: ['一(yì)口(kǒu)漂(piào)亮(liang)的(de)铃(líng)铛(dang)', '钱(qián)', '食(shí)物(wù)', '衣(yī)服(fu)'], answer: 0, explanation: '文中说小偷"看到一户人家的门上挂着一口漂亮的铃铛"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小偷用什么办法避免听到铃声？', options: ['把(bǎ)铃(líng)铛(dang)包(bāo)起(qǐ)来(lái)', '用(yòng)棉(mián)花(huā)堵(dǔ)住(zhù)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)', '在(zài)夜(yè)晚(wǎn)去(qù)偷(tōu)', '把(bǎ)铃(líng)铛(dang)弄(nòng)坏(huài)'], answer: 1, explanation: '小偷"用棉花堵住自己的耳朵"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小偷的办法为什么不管用？', options: ['因(yīn)为(wèi)棉(mián)花(huā)太(tài)少(shǎo)了(le)', '因(yīn)为(wèi)他(tā)堵(dǔ)住(zhù)的(de)是(shì)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)，别(bié)人(rén)还(hái)是(shì)能(néng)听(tīng)到(dào)', '因(yīn)为(wèi)铃(líng)声(shēng)太(tài)大(dà)了(le)', '因(yīn)为(wèi)主(zhǔ)人(rén)看(kàn)到(dào)了(le)他(tā)'], answer: 1, explanation: '他只堵住了自己的耳朵，别人的耳朵并没有被堵住，所以铃声别人还是能听到的。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小偷最后怎么样了？', options: ['成(chéng)功(gōng)偷(tōu)到(dào)了(le)铃(líng)铛(dang)', '被(bèi)主(zhǔ)人(rén)抓(zhuā)住(zhù)了(le)', '自(zì)己(jǐ)跑(pǎo)了(le)', '主(zhǔ)人(rén)把(bǎ)铃(líng)铛(dang)送(sòng)给(gěi)他(tā)了(le)'], answer: 1, explanation: '文中说："主人听到铃声，跑出来一看，小偷正在偷铃铛呢！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"掩"的拼音是？', options: ['yǎn', 'yān', 'yáng', 'yǎng'], answer: 0, explanation: '"掩"读，第三声，意思是"遮盖、堵住"。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '"掩耳盗铃"告诉我们什么道理？', options: ['只(zhǐ)要(yào)听(tīng)不(bú)到(dào)声(shēng)音(yīn)就(jiù)没(méi)事(shì)', '自(zì)己(jǐ)骗(piàn)自(zì)己(jǐ)是(shì)没(méi)用(yòng)的(de)，坏(huài)事(shì)总(zǒng)会(huì)被(bèi)发(fā)现(xiàn)', '偷(tōu)东(dōng)西(xi)是(shì)对(duì)的(de)', '要(yào)多(duō)用(yòng)棉(mián)花(huā)'], answer: 1, explanation: '这个成语告诉我们：自己骗自己是愚蠢的，坏事瞒不了别人。', stage: '道理启示' },
      { type: 'multiple_choice', question: '小偷"纳闷"是什么意思？', options: ['很(hěn)开(kāi)心(xīn)', '感(gǎn)到(dào)奇(qí)怪(guài)，想(xiǎng)不(bù)明(míng)白(bái)', '很(hěn)生(shēng)气(qì)', '很(hěn)害(hài)怕(pà)'], answer: 1, explanation: '"纳闷"就是感到不理解，想不明白。', stage: '字词选择' }
    ]
  },
  {
    id: 'r025',
    week: 7,
    category: '古诗',
    title: '咏鹅',
    passage: 'é， é， é， qū xiàng xiàng tiān gē。\n鹅， 鹅， 鹅， 曲 项 向 天 歌。\n\nbái máo fú lǜ shuǐ， hóng zhǎng bō qīng bō。\n白 毛 浮 绿 水， 红 掌 拨 清 波。\n\n—— táng luò bīn wáng zhè shǒu shī shì luò bīn wáng qī suì shí xiě de， fēi cháng yǒu míng！\n—— 唐 骆 宾 王 这 首 诗 是 骆 宾 王 七 岁 时 写 的， 非 常 有 名！\n\nxiǎo xiǎo nián jì jiù néng xiě chū zhè me hǎo de shī， zhēn liǎo bù qǐ！\n小 小 年 纪 就 能 写 出 这 么 好 的 诗， 真 了 不 起！\n\nshī zhōng xiě le yì zhī kě ài de dà bái é： tā wān zhe cháng cháng de bó zi duì zhe tiān kōng chàng gē， bái sè de yǔ máo fú zài lǜ lǜ de shuǐ miàn shang， hóng sè de jiǎo zhǎng bō dòng zhe qīng qīng de shuǐ bō。\n诗 中 写 了 一 只 可 爱 的 大 白 鹅： 它 弯 着 长 长 的 脖 子 对 着 天 空 唱 歌， 白 色 的 羽 毛 浮 在 绿 绿 的 水 面 上， 红 色 的 脚 掌 拨 动 着 清 清 的 水 波。\n\nbái、 lǜ、 hóng， sān zhǒng yán sè zài yì qǐ， shì bú shì xiàng yì fú měi lì de huà ne？\n白、 绿、 红， 三 种 颜 色 在 一 起， 是 不 是 像 一 幅 美 丽 的 画 呢？',
    questions: [
      { type: 'multiple_choice', question: '这首诗的作者是谁？', options: ['李(lǐ)白(bái)', '王(wáng)之(zhī)涣(huàn)', '骆(luò)宾(bīn)王(wáng)', '孟(mèng)浩(hào)然(rán)'], answer: 2, explanation: '这首诗是唐代诗人骆宾王七岁时写的。', stage: '内容理解' },
      { type: 'multiple_choice', question: '鹅的脖子是什么姿势？', options: ['直(zhí)直(zhí)的(de)', '弯(wān)着(zhe)对(duì)着(zhe)天(tiān)空(kōng)', '低(dī)着(zhe)头(tóu)', '转(zhuǎn)到(dào)后(hòu)面(miàn)'], answer: 1, explanation: '诗中说："曲项向天歌。"意思是弯着脖子对着天空唱歌。', stage: '内容理解' },
      { type: 'multiple_choice', question: '鹅的羽毛是什么颜色的？', options: ['红(hóng)色(sè)', '白(bái)色(sè)', '黄(huáng)色(sè)', '黑(hēi)色(sè)'], answer: 1, explanation: '诗中说："白毛浮绿水。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '鹅的脚掌是什么颜色的？', options: ['白(bái)色(sè)', '绿(lǜ)色(sè)', '红(hóng)色(sè)', '黄(huáng)色(sè)'], answer: 2, explanation: '诗中说："红掌拨清波。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"拨"的拼音是？', options: ['bō', 'pō', 'bó', 'pó'], answer: 0, explanation: '"拨"读，第一声，意思是用脚推动水。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这首诗写了几种颜色？', options: ['一(yì)种(zhǒng)', '两(liǎng)种(zhǒng)', '三(sān)种(zhǒng)', '四(sì)种(zhǒng)'], answer: 2, explanation: '诗中写到了"白毛"、"绿水"、"红掌"三种颜色。', stage: '内容理解' },
      { type: 'multiple_choice', question: '骆宾王写这首诗的时候多大？', options: ['三(sān)岁(suì)', '七(qī)岁(suì)', '十(shí)岁(suì)', '二(èr)十(shí)岁(suì)'], answer: 1, explanation: '文中说骆宾王七岁时写的这首诗。', stage: '道理启示' }
    ]
  }
];

// 导出：Node.js / ES Module 环境
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHINESE_READINGS;
}
