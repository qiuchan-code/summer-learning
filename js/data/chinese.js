/**
 * chinese.js — 语文阅读题库
 * CHINESE_READINGS 全局数组，每篇包含短文 + 7~8道配套题
 */

const CHINESE_READINGS = [
  // ═══════ 第1周：童谣儿歌 + 简单童话 ═══════
  {
    id: 'r001', title: '小老鼠上灯台', week: 1, category: '童谣儿歌', hasPinyin: true,
    passage: 'xiǎo lǎo shǔ，shàng dēng tāi，\n小 老 鼠， 上 灯 台，\n\njī yóu chī，xià bù lái。\n偷 油 吃， 下 不 来。\n\nmiāo miāo miāo，māo lái le，\n喵 喵 喵， 猫 来 了，\n\njī li gū lū gǔn xià lái。\n叽 里 咕 噜 滚 下 来。',
    questions: [
      { type:'multiple_choice', question:'小老鼠爬上了什么地方？', options:['灯台','桌子','窗台','屋顶'], answer:0, explanation:'童谣里说"小老鼠，上灯台"', stage:'内容理解' },
      { type:'multiple_choice', question:'小老鼠在灯台上吃什么？', options:['油','米','糖','饼干'], answer:0, explanation:'童谣里说"偷油吃"', stage:'内容理解' },
      { type:'multiple_choice', question:'谁来把小老鼠吓跑了？', options:['猫','狗','人','鸟'], answer:0, explanation:'童谣里说"猫来了"', stage:'内容理解' },
      { type:'multiple_choice', question:'小老鼠是怎么下来的？', options:['滚下来的','爬下来的','跳下来的','飞下来的'], answer:0, explanation:'童谣里说"叽里咕噜滚下来"', stage:'内容理解' },
      { type:'multiple_choice', question:'"鼠"字的正确读音是？', options:['shǔ','sǔ','shú','sù'], answer:0, explanation:'鼠读shǔ，声母是sh，韵母是u，三声', stage:'拼音练习' },
      { type:'multiple_choice', question:'"猫"字的正确读音是？', options:['māo','máo','mǎo','mào'], answer:0, explanation:'猫读māo，一声', stage:'拼音练习' },
      { type:'multiple_choice', question:'这首童谣告诉我们什么？', options:['偷东西是不对的','老鼠很可爱','猫很可怕','灯台很危险'], answer:0, explanation:'小老鼠偷油吃是不好的行为', stage:'道理启示' },
      { type:'fill_blank', question:'童谣中形容小老鼠滚下来的声音是"叽里____"？（两个字）', answer:'咕噜', stage:'好词摘抄' }
    ]
  },
  {
    id: 'r002', title: '小白兔白又白', week: 1, category: '童谣儿歌', hasPinyin: true,
    passage: 'xiǎo bái tù，bái yòu bái，\n小 白 兔， 白 又 白，\n\nliǎng zhī ěr duo shù qǐ lái。\n两 只 耳 朵 竖 起 来。\n\nài chī luó bo ài chī cài，\n爱 吃 萝 卜 爱 吃 菜，\n\nbèng bèng tiào tiào zhēn kě ài。\n蹦 蹦 跳 跳 真 可 爱。',
    questions: [
      { type:'multiple_choice', question:'小白兔的毛是什么颜色的？', options:['白色','黑色','灰色','黄色'], answer:0, explanation:'歌谣说"小白兔，白又白"', stage:'内容理解' },
      { type:'multiple_choice', question:'小白兔的耳朵是什么样的？', options:['竖起来的','垂下来的','短短的','弯弯的'], answer:0, explanation:'歌谣说"两只耳朵竖起来"', stage:'内容理解' },
      { type:'multiple_choice', question:'小白兔爱吃什么？（多选意思）', options:['萝卜和青菜','肉和鱼','米饭和面包','水果和糖'], answer:0, explanation:'歌谣说"爱吃萝卜爱吃菜"', stage:'内容理解' },
      { type:'multiple_choice', question:'小白兔走路是什么样子的？', options:['蹦蹦跳跳','慢慢走','快快跑','一摇一摆'], answer:0, explanation:'歌谣说"蹦蹦跳跳真可爱"', stage:'内容理解' },
      { type:'multiple_choice', question:'"萝卜"的正确读音是？', options:['luó bo','luó bō','ló bo','luó pō'], answer:0, explanation:'萝读luó，卜在词尾读轻声bo', stage:'拼音练习' },
      { type:'multiple_choice', question:'"耳朵"的正确读音是？', options:['ěr duo','ěr duō','é duo','ěr dōu'], answer:0, explanation:'耳读ěr，朵在词尾读轻声duo', stage:'拼音练习' },
      { type:'fill_blank', question:'歌谣中形容小白兔的词语有____、____和可爱。（填一个表示颜色的词）', answer:'白', stage:'好词摘抄' },
      { type:'multiple_choice', question:'这首童谣表达了对小白兔怎样的感情？', options:['喜爱','害怕','讨厌','无所谓'], answer:0, explanation:'歌谣最后说"真可爱"，表达了对小白兔的喜爱', stage:'道理启示' }
    ]
  },

  // ═══════ 第1-2周：童话寓言 ═══════
  {
    id: 'r003', title: '乌鸦喝水', week: 1, category: '童话寓言', hasPinyin: true,
    passage: 'yǒu yī zhī wū yā kǒu kě le，dào chù zhǎo shuǐ hē。\n有 一 只 乌 鸦 口 渴 了，到 处 找 水 喝。\n\nwū yā kàn jiàn yī gè píng zi，píng zi lǐ yǒu shuǐ，\n乌 鸦 看 见 一 个 瓶 子，瓶 子 里 有 水，\ndàn shì píng kǒu hěn xiǎo，shuǐ yòu hěn shǎo，\n但 是 瓶 口 很 小，水 又 很 少，\nwū yā hē bù dào shuǐ。\n乌 鸦 喝 不 到 水。\n\nwū yā xiǎng le yī gè bàn fǎ。tā bǎ xiǎo shí zǐ\n乌 鸦 想 了 一 个 办 法。它 把 小 石 子\nyī kē yī kē de diāo jìn píng zi lǐ。\n一 颗 一 颗 地 叼 进 瓶 子 里。\n\npíng zi lǐ de shuǐ jiàn jiàn shēng gāo le，\n瓶 子 里 的 水 渐 渐 升 高 了，\nwū yā zhōng yú hē dào le shuǐ。\n乌 鸦 终 于 喝 到 了 水。',
    questions: [
      { type:'multiple_choice', question:'乌鸦为什么找水喝？', options:['它口渴了','它饿了','它想洗澡','它在玩游戏'], answer:0, explanation:'故事开头说"乌鸦口渴了"', stage:'内容理解' },
      { type:'multiple_choice', question:'乌鸦为什么一开始喝不到水？', options:['瓶口小，水又少','瓶子太高了','水太烫了','瓶子盖住了'], answer:0, explanation:'因为瓶口很小，水又很少' , stage:'内容理解'},
      { type:'multiple_choice', question:'乌鸦想出了什么办法？', options:['往瓶子里丢石子','把瓶子推倒','用吸管喝','请别人帮忙'], answer:0, explanation:'乌鸦把小石子一颗一颗叼进瓶子里', stage:'内容理解' },
      { type:'multiple_choice', question:'石子丢进去后，水怎么样了？', options:['渐渐升高了','变少了','流出来了','变颜色了'], answer:0, explanation:'水渐渐升高，乌鸦就喝到了', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事告诉我们什么道理？', options:['遇到困难要动脑筋想办法','乌鸦很聪明','瓶子太小不好用','不要浪费水'], answer:0, explanation:'乌鸉遇到困难没有放弃，而是动脑筋想办法解决', stage:'道理启示' },
      { type:'multiple_choice', question:'"乌鸦"中的"鸦"读什么？', options:['yā','yá','yǎ','yà'], answer:0, explanation:'鸦读yā，一声', stage:'拼音练习' },
      { type:'fill_blank', question:'乌鸦把____一颗一颗叼进瓶子里。', answer:'石子', stage:'字词选择' },
      { type:'multiple_choice', question:'文中"渐渐"是什么意思？', options:['慢慢','很快','突然','立刻'], answer:0, explanation:'"渐渐"表示程度或数量慢慢变化', stage:'字词选择' }
    ]
  },
  {
    id: 'r004', title: '小马过河', week: 2, category: '童话寓言', hasPinyin: true,
    passage: 'xiǎo mǎ yào bǎ yī dài mài zi sòng dào hé duì àn qù。\n小 马 要 把 一 袋 麦 子 送 到 河 对 岸 去。\n\nlái dào hé biān，xiǎo mǎ bù zhī dào hé shuǐ yǒu duō shēn，\n来 到 河 边，小 马 不 知 道 河 水 有 多 深，\nbù gǎn xià hé。\n不 敢 下 河。\n\nlǎo niú shuō："shuǐ hěn qiǎn，cái dào wǒ de xiǎo tuǐ。"\n老 牛 说："水 很 浅，才 到 我 的 小 腿。"\n\nxiǎo sōng shǔ shuō："shuǐ hěn shēn！shàng cì wǒ de\n小 松 鼠 说："水 很 深！上 次 我 的\ntóng bàn jiù bèi hé shuǐ chōng zǒu le！"\n同 伴 就 被 河 水 冲 走 了！"\n\nxiǎo mǎ bù zhī gāi tīng shéi de，huí jiā wèn mā ma。\n小 马 不 知 该 听 谁 的，回 家 问 妈 妈。\nmā ma shuō："nǐ zì jǐ shì yī shì bù jiù zhī dào le ma？"\n妈 妈 说："你 自 己 试 一 试 不 就 知 道 了 吗？"\n\nxiǎo mǎ yòu lái dào hé biān，xiǎo xīn de zǒu jìn hé lǐ。\n小 马 又 来 到 河 边，小 心 地 走 进 河 里。\nyuán lái，hé shuǐ bù xiàng lǎo niú shuō de nà me qiǎn，\n原 来，河 水 不 像 老 牛 说 的 那 么 浅，\nyě bù xiàng sōng shǔ shuō de nà me shēn。\n也 不 像 松 鼠 说 的 那 么 深。',
    questions: [
      { type:'multiple_choice', question:'小马要把什么送到河对岸？', options:['一袋麦子','一袋米','一袋面粉','一袋水果'], answer:0, explanation:'故事说"小马要把一袋麦子送到河对岸去"', stage:'内容理解' },
      { type:'multiple_choice', question:'老牛说河水是深还是浅？', options:['很浅','很深','不深不浅','不知道'], answer:0, explanation:'老牛说"水很浅，才到我的小腿"', stage:'内容理解' },
      { type:'multiple_choice', question:'小松鼠说河水是深还是浅？', options:['很深','很浅','不深不浅','不知道'], answer:0, explanation:'小松鼠说"水很深"，同伴被冲走了', stage:'内容理解' },
      { type:'multiple_choice', question:'马妈妈告诉小马什么？', options:['自己去试一试','听老牛的','听松鼠的','不要过河'], answer:0, explanation:'妈妈说"你自己试一试不就知道了"', stage:'内容理解' },
      { type:'multiple_choice', question:'最后河水到底有多深？', options:['不像老牛说的那么浅，也不像松鼠说的那么深','和老牛说的一样浅','和松鼠说的一样深','小马没有过河'], answer:0, explanation:'河水对不同体型的动物来说深浅不同', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事告诉我们什么？', options:['凡事要自己亲自尝试','不要相信别人','河水很危险','妈妈的语最对'], answer:0, explanation:'别人说的不一定适用于自己，要亲自尝试', stage:'道理启示' },
      { type:'multiple_choice', question:'"麦子"中"麦"的读音是？', options:['mài','mèi','mǎi','méi'], answer:0, explanation:'麦读mài，四声', stage:'拼音练习' },
      { type:'fill_blank', question:'形容小马过河时的动作，它____地走进河里。', answer:'小心', stage:'好词摘抄' }
    ]
  },
  {
    id: 'r005', title: '狼来了', week: 2, category: '童话寓言', hasPinyin: true,
    passage: 'cóng qián，yǒu yī gè fàng yáng de xiǎo hái，\n从 前，有 一 个 放 羊 的 小 孩，\ntiān tiān zài shān shàng fàng yáng。\n天 天 在 山 上 放 羊。\n\nyǒu yī tiān，tā jué de hěn wú liáo，jiù dà shēng hǎn：\n有 一 天，他 觉 得 很 无 聊，就 大 声 喊：\n"láng lái le！láng lái le！"\n"狼 来 了！狼 来 了！"\n\ncūn mín men tīng dào hǎn shēng，gǎn jǐn ná zhe gōng jù\n村 民 们 听 到 喊 声，赶 紧 拿 着 工 具\npǎo lái jiù tā，jié guǒ fā xiàn méi yǒu láng。\n跑 来 救 他，结 果 发 现 没 有 狼。\nxiǎo hái hā hā dà xiào。\n小 孩 哈 哈 大 笑。\n\ndì èr tiān，tā yòu hǎn："láng lái le！"\n第 二 天，他 又 喊："狼 来 了！"\ncūn mín men yòu pǎo lái，yòu méi yǒu láng。\n村 民 们 又 跑 来，又 没 有 狼。\n\nhòu lái，láng zhēn de lái le。xiǎo hái pīn mìng de hǎn：\n后 来，狼 真 的 来 了。小 孩 拼 命 地 喊：\n"láng lái le！láng lái le！kuài lái jiù wǒ！"\n"狼 来 了！狼 来 了！快 来 救 我！"\n\nkě shì zhè yī cì，méi yǒu rén lái le。\n可 是 这 一 次，没 有 人 来 了。',
    questions: [
      { type:'multiple_choice', question:'放羊的小孩为什么要喊"狼来了"？', options:['他觉得无聊，想骗人玩','真的看到狼了','想叫村民来聊天','在练习喊叫'], answer:0, explanation:'他觉得很无聊，就大声喊"狼来了"', stage:'内容理解' },
      { type:'multiple_choice', question:'第一次村民跑来后发现了什么？', options:['没有狼','有一只大灰狼','羊被吃掉了','小孩不见了'], answer:0, explanation:'结果发现没有狼', stage:'内容理解' },
      { type:'multiple_choice', question:'小孩骗了村民几次？', options:['至少两次','一次','三次','没有骗'], answer:0, explanation:'故事中说了两次，第二天又喊了一次', stage:'内容理解' },
      { type:'multiple_choice', question:'狼真的来了时，村民为什么不来？', options:['因为小孩骗过他们，不信了','村民都不在家','村民没听到','村民害怕狼'], answer:0, explanation:'因为小孩之前骗了他们，这次没有人信了', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事告诉我们什么？', options:['不能说谎，说谎会失去别人的信任','狼很可怕','放羊很危险','村民很善良'], answer:0, explanation:'说谎会让别人不再相信你，真有危险时没人来帮', stage:'道理启示' },
      { type:'multiple_choice', question:'"无聊"是什么意思？', options:['觉得没意思，没事做','肚子饿了','很忙','很生气'], answer:0, explanation:'"无聊"就是觉得没意思，不知道干什么', stage:'字词选择' },
      { type:'multiple_choice', question:'村民"赶紧"拿工具，"赶紧"的意思是？', options:['马上、立刻','慢慢地','不情愿地','不慌不忙'], answer:0, explanation:'"赶紧"就是马上、立刻行动的意思', stage:'字词选择' }
    ]
  },

  // ═══════ 第2-3周：快乐读书吧 ═══════
  {
    id: 'r006', title: '小鲤鱼跳龙门（节选）', week: 2, category: '快乐读书吧', hasPinyin: true,
    passage: 'zài yī tiáo xiǎo hé lǐ，zhù zhe yī qún xiǎo lǐ yú。\n在 一 条 小 河 里，住 着 一 群 小 鲤 鱼。\n\nyǒu yī tiān，lǐ yú nǎi nai gěi tā men jiǎng le yī gè gù shì：\n有 一 天，鲤 鱼 奶 奶 给 它 们 讲 了 一 个 故 事：\n"zài hěn yuǎn de dì fang，yǒu yī zuò lóng mén，\n"在 很 远 的 地 方，有 一 座 龙 门，\nzhǐ yào tiào guò qù，jiù néng biàn chéng lóng！"\n只 要 跳 过 去，就 能 变 成 龙！"\n\nxiǎo lǐ yú men tīng le，dōu hěn xiǎng qù zhǎo nà zuò lóng mén。\n小 鲤 鱼 们 听 了，都 很 想 去 找 那 座 龙 门。\nqí zhōng yī tiáo zuì yǒng gǎn de xiǎo hóng lǐ yú shuō：\n其 中 一 条 最 勇 敢 的 小 红 鲤 鱼 说：\n"wǒ qù！wǒ yī dìng yào tiào guò lóng mén！"\n"我 去！我 一 定 要 跳 过 龙 门！"\n\nyú shì，xiǎo hóng lǐ yú dài zhe jǐ gè hǎo péng yǒu，\n于 是，小 红 鲤 鱼 带 着 几 个 好 朋 友，\nshùn zhe hé shuǐ xiàng qián yóu qù。tā men yóu guò le\n顺 着 河 水 向 前 游 去。它 们 游 过 了\njí liú，duǒ guò le dà yú de zhuī gǎn，\n急 流，躲 过 了 大 鱼 的 追 赶，\nyī zhí xiàng zhe yuǎn fāng qián jìn。\n一 直 向 着 远 方 前 进。',
    questions: [
      { type:'multiple_choice', question:'鲤鱼奶奶讲的龙门在哪里？', options:['在很远的地方','在河的上游','在河的下游','在大海里'], answer:0, explanation:'奶奶说"在很远的地方，有一座龙门"', stage:'内容理解' },
      { type:'multiple_choice', question:'跳过龙门会变成什么？', options:['龙','更大的鱼','鸟','马'], answer:0, explanation:'跳过龙门就能变成龙', stage:'内容理解' },
      { type:'multiple_choice', question:'谁最先表示要去找龙门？', options:['一条最勇敢的小红鲤鱼','鲤鱼奶奶','最大的那条鱼','大黑鱼'], answer:0, explanation:'最勇敢的小红鲤鱼说"我去！"', stage:'内容理解' },
      { type:'multiple_choice', question:'小鲤鱼们在途中遇到了什么困难？', options:['急流和大鱼的追赶','瀑布','缺水','冰封的河面'], answer:0, explanation:'它们游过了急流，躲过了大鱼的追赶', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事中小红鲤鱼的特点是？', options:['勇敢、有梦想','胆小怕事','自私自利','懒惰'], answer:0, explanation:'它最勇敢，主动提出要去找龙门', stage:'道理启示' },
      { type:'multiple_choice', question:'"龙门"中"龙"的读音是？', options:['lóng','lǒng','nóng','lòng'], answer:0, explanation:'龙读lóng，声母是l，二声', stage:'拼音练习' },
      { type:'fill_blank', question:'小鲤鱼决心要____过龙门。', answer:'跳', stage:'字词选择' },
      { type:'multiple_choice', question:'文中"勇敢"的反义词是？', options:['胆小','聪明','强壮','快乐'], answer:0, explanation:'勇敢的反义词是胆小或懦弱', stage:'字词选择' }
    ]
  },
  {
    id: 'r007', title:'孤独的小螃蟹（节选）', week:3, category:'快乐读书吧', hasPinyin:true,
    passage:'xiǎo páng xiè zhù zài chí táng biān de yī gè ní dòng lǐ。\n小 螃 蟹 住 在 池 塘 边 的 一 个 泥 洞 里。\n\nyuán běn tā yǒu yī gè hǎo péng yǒu——xiǎo qīng yú。\n原 本 它 有 一 个 好 朋 友——小 青 鱼。\ntā men tiān tiān yī qǐ wán，yī qǐ zhǎo shí wù。\n它 们 天 天 一 起 玩，一 起 找 食 物。\n\nkě shì yǒu yī tiān，xiǎo qīng yú yào bān jiā le，\n可 是 有 一 天，小 青 鱼 要 搬 家 了，\ntā yào qù hěn yuǎn de dì fang。\n它 要 去 很 远 的 地 方。\nxiǎo páng xiè hěn shāng xīn，bù xiǎng ràng péng yǒu zǒu。\n小 螃 蟹 很 伤 心，不 想 让 朋 友 走。\n\nxiǎo qīng yú zǒu hòu，xiǎo páng xiè měi tiān dōu hěn gū dú。\n小 青 鱼 走 后，小 螃 蟹 每 天 都 很 孤 独。\ntā bù xiǎng chū mén，yě bù xiǎng zhǎo shí wù。\n它 不 想 出 门，也 不 想 找 食 物。\n\nhòu lái，tā yù dào le yī zhī xiǎo wō niú。\n后 来，它 遇 到 了 一 只 小 蜗 牛。\nxiǎo wō niú chéng le tā de xīn péng yǒu。\n小 蜗 牛 成 了 它 的 新 朋 友。\ntā men yī qǐ kàn rì luò，yī qǐ tīng fēng shēng。\n它 们 一 起 看 日 落，一 起 听 风 声。\nxiǎo páng xiè zài yě bù jué de gū dú le。\n小 螃 蟹 再 也 不 觉 得 孤 独 了。',
    questions:[
      { type:'multiple_choice', question:'小螃蟹原来最好的朋友是谁？', options:['小青鱼','小蜗牛','小青蛙','小龙虾'], answer:0, explanation:'小螃蟹原本的好朋友是小青鱼', stage:'内容理解' },
      { type:'multiple_choice', question:'小青鱼为什么要离开？', options:['搬家去很远的地方','不喜欢小螃蟹了','被大鱼吃掉了','去上学了'], answer:0, explanation:'小青鱼要搬家去很远的地方', stage:'内容理解' },
      { type:'multiple_choice', question:'小青鱼走后，小螃蟹的心情是？', options:['伤心、孤独','开心','生气','紧张'], answer:0, explanation:'小螃蟹很伤心，每天都很孤独', stage:'内容理解' },
      { type:'multiple_choice', question:'后来谁成了小螃蟹的新朋友？', options:['小蜗牛','小青鱼','小乌龟','小蝌蚪'], answer:0, explanation:'小蜗牛成了它的新朋友', stage:'内容理解' },
      { type:'multiple_choice', question:'小螃蟹和新朋友一起做什么？', options:['看日落、听风声','游泳、捉迷藏','比赛跑步','吃东西'], answer:0, explanation:'它们一起看日落、听风声', stage:'内容理解' },
      { type:'multiple_choice', question:'"孤独"是什么意思？', options:['一个人，很寂寞','很多人在一起','很高兴','很忙碌'], answer:0, explanation:'孤独就是一个人，没有朋友陪伴的感觉', stage:'字词选择' },
      { type:'multiple_choice', question:'这个故事告诉我们什么？', options:['失去老朋友也会有新朋友，不用一直伤心','螃蟹和蜗牛是好朋友','搬家是一件坏事','池塘里有很多动物'], answer:0, explanation:'虽然失去朋友会难过，但生活中还会有新的友谊', stage:'道理启示' }
    ]
  },

  // ═══════ 第1-4周：成语故事 ═══════
  {
    id: 'r008', title:'守株待兔', week:2, category:'成语故事', hasPinyin:true,
    passage:'cóng qián，yǒu yī gè nóng fū zài dì lǐ gàn huó。\n从 前，有 一 个 农 夫 在 地 里 干 活。\n\ntū rán，yī zhī tù zi pǎo guò lái，\n突 然，一 只 兔 子 跑 过 来，\nyī tóu zhuàng zài le tián biān de shù zhuāng shàng，\n一 头 撞 在 了 田 边 的 树 桩 上，\nzhé duàn le bó zi sǐ le。\n折 断 了 脖 子 死 了。\n\nnóng fū jiǎn qǐ tù zi，gāo gāo xìng xìng de huí jiā le。\n农 夫 捡 起 兔 子，高 高 兴 兴 地 回 家 了。\n\ncóng cǐ yǐ hòu，nóng fū zài yě bù gàn huó le，\n从 此 以 后，农 夫 再 也 不 干 活 了，\ntā měi tiān shǒu zài nà gè shù zhuāng páng biān，\n他 每 天 守 在 那 个 树 桩 旁 边，\nděng zhe zài yǒu tù zi zhuàng shàng lái。\n等 着 再 有 兔 子 撞 上 来。\n\ndàn shì，zài yě méi yǒu tù zi lái le。\n但 是，再 也 没 有 兔 子 来 了。\ntā de tián dì huāng wú le，zhuāng jia quán sǐ le。\n他 的 田 地 荒 芜 了，庄 稼 全 死 了。',
    questions:[
      { type:'multiple_choice', question:'兔子是怎么死的？', options:['一头撞在树桩上','被农夫打死的','饿死的','掉进水里淹死的'], answer:0, explanation:'兔子一头撞在田边的树桩上，折断了脖子', stage:'内容理解' },
      { type:'multiple_choice', question:'农夫捡到兔子后怎么样了？', options:['高高兴兴回家了','继续干活','把兔子卖了','请客吃饭'], answer:0, explanation:'农夫捡起兔子，高高兴兴回家了', stage:'内容理解' },
      { type:'multiple_choice', question:'从此以后农夫每天做什么？', options:['守在树桩旁等兔子','更加努力干活','去打猎','去逛街'], answer:0, explanation:'他每天守在树桩旁等再有兔子撞上来', stage:'内容理解' },
      { type:'multiple_choice', question:'后来还有兔子撞上来吗？', options:['再也没有了','每天都有','偶尔有','来了很多'], answer:0, explanation:'但是再也没有兔子来了', stage:'内容理解' },
      { type:'multiple_choice', question:'农夫的田地最后怎么了？', options:['荒芜了，庄稼全死了','丰收了','被水淹了','卖给别人了'], answer:0, explanation:'田地荒芜了，庄稼全死了', stage:'内容理解' },
      { type:'multiple_choice', question:'成语"守株待兔"比喻什么？', options:['不主动努力，抱着侥幸心理等好事发生','勤劳种地','保护树木','喜欢吃兔肉'], answer:0, explanation:'守株待兔比喻不主动努力，想靠运气不劳而获', stage:'道理启示' },
      { type:'multiple_choice', question:'"荒芜"的意思是？', options:['田地长满野草，没人耕种','丰收的样子','美丽的景色','很干净'], answer:0, explanation:'荒芜就是田地没人打理，长满了野草', stage:'字词选择' }
    ]
  },
  {
    id: 'r009', title:'亡羊补牢', week:3, category:'成语故事', hasPinyin:true,
    passage:'cóng qián yǒu yī gè rén，yǎng le yī qún yáng。\n从 前 有 一 个 人，养 了 一 群 羊。\n\nyī tiān zǎo shang，tā fā xiàn yáng juàn pò le yī gè dòng，\n一 天 早 上，他 发 现 羊 圈 破 了 一 个 洞，\ndiū le yī zhī yáng。lín jū quàn tā gǎn kuài bǔ hǎo dòng。\n丢 了 一 只 羊。邻 居 劝 他 赶 快 补 好 洞。\n\ntā shuō："yáng yǐ jīng diū le，hái bǔ shén me？"\n他 说："羊 已 经 丢 了，还 补 什 么？"\n\ndì èr tiān，tā fā xiàn yòu diū le yī zhī yáng。\n第 二 天，他 发 现 又 丢 了 一 只 羊。\nyuán lái láng yòu cóng nà gè dòng zuān jìn lái le。\n原 来 狼 又 从 那 个 洞 钻 进 来 了。\n\nzhè shí tā cái hòu huǐ méi yǒu tīng lín jū de huà。\n这 时 他 才 后 悔 没 有 听 邻 居 的 话。\ntā gǎn jǐn bǎ dòng bǔ hǎo le。\n他 赶 紧 把 洞 补 好 了。\n\ncóng cǐ，tā de yáng zài yě méi yǒu diū guò。\n从 此，他 的 羊 再 也 没 有 丢 过。',
    questions:[
      { type:'multiple_choice', question:'羊圈破了洞，发生了什么？', options:['羊被狼叼走了','羊自己跑了','羊生病了','下雨淋湿了羊'], answer:0, explanation:'羊圈破了洞，狼钻进来叼走了羊', stage:'内容理解' },
      { type:'multiple_choice', question:'邻居劝他做什么？', options:['赶快把洞补好','再买一只羊','搬家','把狼赶走'], answer:0, explanation:'邻居劝他赶快补好洞', stage:'内容理解' },
      { type:'multiple_choice', question:'那人一开始为什么不愿意补洞？', options:['他觉得羊已经丢了，补也没用','他觉得洞太小了','他太忙了','他不会补'], answer:0, explanation:'他说"羊已经丢了，还补什么"', stage:'内容理解' },
      { type:'multiple_choice', question:'第二天又发生了什么？', options:['又丢了一只羊','羊都回来了','狼被抓住了','洞自己好了'], answer:0, explanation:'他发现又丢了一只羊', stage:'内容理解' },
      { type:'multiple_choice', question:'成语"亡羊补牢"告诉我们？', options:['出了问题及时补救，还不算晚','羊丢了就丢了','不要养羊','要听邻居的话'], answer:0, explanation:'出了问题及时改正和补救，可以防止更大的损失', stage:'道理启示' },
      { type:'multiple_choice', question:'"后悔"的意思是什么？', options:['事後觉得自己做错了','事前担心','非常开心','很生气'], answer:0, explanation:'后悔就是事后觉得自己不该那样做', stage:'字词选择' }
    ]
  },

  // ═══════ 第4-6周：神笔故事 ═══════
  {
    id: 'r010', title:'神笔马良（节选）', week:4, category:'神笔故事', hasPinyin:true,
    passage:'mǎ liáng shì yī gè qióng hái zi，dàn tā fēi cháng xǐ huān huà huà。\n马 良 是 一 个 穷 孩 子，但 他 非 常 喜 欢 画 画。\ntā měi tiān yòng shù zhī zài dì shàng huà，yòng shí tou zài qiáng shàng huà。\n他 每 天 用 树 枝 在 地 上 画，用 石 头 在 墙 上 画。\n\nyǒu yī tiān wǎn shang，mǎ liáng mèng jiàn yī wèi lǎo yé ye，\n有 一 天 晚 上，马 良 梦 见 一 位 老 爷 爷，\nsòng gěi tā yī zhī bǐ。lǎo yé ye shuō：\n送 给 他 一 支 笔。老 爷 爷 说：\n"zhè shì yī zhī shén bǐ，yòng tā huà shén me，\n"这 是 一 支 神 笔，用 它 画 什 么，\nshén me jiù huì biàn chéng zhēn de。"\n什 么 就 会 变 成 真 的。"\n\nmǎ liáng xǐng lái，fā xiàn shǒu lǐ zhēn de yǒu yī zhī bǐ！\n马 良 醒 来，发 现 手 里 真 的 有 一 支 笔！\ntā huà le yī zhī xiǎo niǎo，xiǎo niǎo jìng rán fēi zǒu le。\n他 画 了 一 只 小 鸟，小 鸟 竟 然 飞 走 了。\n\nmǎ liáng yòng shén bǐ bāng zhù cūn lǐ de qióng rén：\n马 良 用 神 笔 帮 助 村 里 的 穷 人：\nshéi jiā quē shuǐ，tā jiù huà yī kǒu jǐng；\n谁 家 缺 水，他 就 画 一 口 井；\nshéi jiā quē niú，tā jiù huà yī tóu niú。\n谁 家 缺 牛，他 就 画 一 头 牛。',
    questions:[
      { type:'multiple_choice', question:'马良是一个怎样的孩子？', options:['穷但喜欢画画的','富有的','不喜欢画画的','懒惰的'], answer:0, explanation:'马良是个穷孩子，但非常喜欢画画', stage:'内容理解' },
      { type:'multiple_choice', question:'马良用什么在地上画画？', options:['树枝','粉笔','手指','毛笔'], answer:0, explanation:'他用树枝在地上画，用石头在墙上画', stage:'内容理解' },
      { type:'multiple_choice', question:'谁送给了马良神笔？', options:['梦中的老爷爷','他的爸爸','一位仙女','一个商人'], answer:0, explanation:'马良梦见一位老爷爷送给他一支笔', stage:'内容理解' },
      { type:'multiple_choice', question:'神笔有什么特殊能力？', options:['画什么就能变成真的','能写出漂亮的字','永远不会用完','能发出金光'], answer:0, explanation:'老爷爷说"用笔画什么，什么就会变成真的"', stage:'内容理解' },
      { type:'multiple_choice', question:'马良画了什么来验证神笔？', options:['一只小鸟','一头牛','一口井','一棵树'], answer:0, explanation:'他画了一只小鸟，小鸟竟然飞走了', stage:'内容理解' },
      { type:'multiple_choice', question:'马良用神笔做了什么？', options:['帮助村里的穷人','给自己画金银财宝','到处炫耀','把笔藏起来了'], answer:0, explanation:'他用神笔帮助穷人画井和牛', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事中马良是一个怎样的人？', options:['善良、乐于助人','自私自利','骄傲自大','胆小怕事'], answer:0, explanation:'他得到神笔后用来帮助穷人，说明他善良', stage:'道理启示' },
      { type:'fill_blank', question:'神笔的特点是：画什么就有什么变成____的。', answer:'真', stage:'字词选择' }
    ]
  },

  // ═══════ 更多童话故事 ═══════
  {
    id: 'r011', title:'丑小鸭（节选）', week:3, category:'童话寓言', hasPinyin:true,
    passage:'yā mā ma fū le yī wō dàn。xiǎo yā zi men yī zhī jiē yī zhī\n鸭 妈 妈 孵 了 一 窝 蛋。小 鸭 子 们 一 只 接 一 只\nde cóng dàn ké lǐ zuān chū lái。\n地 从 蛋 壳 里 钻 出 来。\n\nzuì hòu yī zhī xiǎo yā zi zhǎng de hé qí tā xiǎo yā bù yī yàng：\n最 后 一 只 小 鸭 子 长 得 和 其 他 小 鸭 不 一 样：\ntā yòu dà yòu chǒu，dà jiā dōu jiào tā"chǒu xiǎo yā"。\n它 又 大 又 丑，大 家 都 叫 它"丑 小 鸭"。\n\nchǒu xiǎo yā dào chù bèi qī fu，yā zi men zhuó tā，\n丑 小 鸭 到 处 被 欺 负，鸭 子 们 啄 它，\njī men dǎ tā，lián wèi yā de nǚ yōng yě yòng jiǎo tī tā。\n鸡 们 打 它，连 喂 鸭 的 女 佣 也 用 脚 踢 它。\n\nchǒu xiǎo yā shāng xīn de táo zǒu le。\n丑 小 鸭 伤 心 地 逃 走 了。\n\ndōng tiān guò qù le，chūn tiān lái le。\n冬 天 过 去 了，春 天 来 了。\nchǒu xiǎo yā lái dào hú biān，kàn dào shuǐ zhōng yǒu yī qún\n丑 小 鸭 来 到 湖 边，看 到 水 中 有 一 群\nměi lì de bái tiān é。tā dī xià tóu yī kàn，\n美 丽 的 白 天 鹅。它 低 下 头 一 看，\nfā xiàn zì jǐ yě biàn chéng le yī zhī bái tiān é！\n发 现 自 己 也 变 成 了 一 只 白 天 鹅！',
    questions:[
      { type:'multiple_choice', question:'最后孵出来的小鸭子长什么样？', options:['又大又丑','又小又可爱','和别的小鸭一样','是彩色的'], answer:0, explanation:'它又大又丑，和大家不一样', stage:'内容理解' },
      { type:'multiple_choice', question:'丑小鸭在农场受到了什么对待？', options:['被欺负、被赶走','被大家宠爱','被当做英雄','没人注意它'], answer:0, explanation:'鸭子啄它，鸡打它，女佣踢它', stage:'内容理解' },
      { type:'multiple_choice', question:'春天来了，丑小鸭变成了什么？', options:['一只美丽的白天鹅','一只大鸭子','一只孔雀','一只大雁'], answer:0, explanation:'他发现自己变成了一只白天鹅', stage:'内容理解' },
      { type:'multiple_choice', question:'丑小鸭为什么一开始长得不一样？', options:['因为它本来就不是鸭子，是天鹅','因为它生病了','因为它吃得太多了','因为它是最大的'], answer:0, explanation:'丑小鸭本来是天鹅的蛋，被鸭妈妈孵出来', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事告诉我们什么？', options:['不要因为和别人不一样就自卑，每个人都有自己独特的美','天鹅比鸭子好看','要欺负弱小','不要离家出走'], answer:0, explanation:'每个人都有自己的价值，不要因为被别人嘲笑就否定自己', stage:'道理启示' },
      { type:'multiple_choice', question:'"欺负"在文中的意思是？', options:['用不好的方式对待别人','和別人一起玩','帮助别人','夸奖别人'], answer:0, explanation:'欺负就是用不好的方式对别人，让别人难过', stage:'字词选择' },
      { type:'fill_blank', question:'丑小鸭最后变成了美丽的____。', answer:'白天鹅', stage:'字词选择' }
    ]
  },

  // ═══════ 第1-7周：古诗 (12首) ═══════
  {
    id: 'r012', title:'古诗：静夜思', week:1, category:'古诗启蒙', hasPinyin:true,
    passage:'jìng yè sī — lǐ bái\n静 夜 思 — 李 白\n\nchuáng qián míng yuè guāng，\n床 前 明 月 光，\nyí shì dì shàng shuāng。\n疑 是 地 上 霜。\njǔ tóu wàng míng yuè，\n举 头 望 明 月，\ndī tóu sī gù xiāng。\n低 头 思 故 乡。',
    questions:[
      { type:'multiple_choice', question:'《静夜思》的作者是谁？', options:['李白','杜甫','白居易','王维'], answer:0, explanation:'这首诗是唐代大诗人李白写的', stage:'内容理解' },
      { type:'multiple_choice', question:'诗人把月光比作什么？', options:['霜','雪','水','银'], answer:0, explanation:'"疑是地上霜"——怀疑地上的月光是霜', stage:'内容理解' },
      { type:'multiple_choice', question:'"举头"是什么意思？', options:['抬起头','低下头','转过头','点头'], answer:0, explanation:'举就是抬起来，"举头"就是抬起头', stage:'字词选择' },
      { type:'multiple_choice', question:'诗人低头在思念什么？', options:['故乡','朋友','月亮','父母'], answer:0, explanation:'"低头思故乡"，他在思念家乡', stage:'内容理解' },
      { type:'multiple_choice', question:'这首诗表达了什么感情？', options:['思念家乡','喜欢月亮','感到寒冷','很开心'], answer:0, explanation:'诗人在安静的夜晚看到明月，想念远方的家乡', stage:'道理启示' },
      { type:'multiple_choice', question:'"明月"中"明"的意思是？', options:['明亮的','明天的','明白的','名字'], answer:0, explanation:'"明"在这里形容月亮很亮', stage:'字词选择' },
      { type:'multiple_choice', question:'"霜"是什么？', options:['天气冷时地面结的白色冰晶','一种食物','一种颜色','雨'], answer:0, explanation:'霜是天气很冷时，水汽在地面或植物上凝结成的白色冰晶', stage:'字词选择' }
    ]
  },
  {
    id: 'r013', title:'古诗：悯农', week:2, category:'古诗启蒙', hasPinyin:true,
    passage:'mǐn nóng — lǐ shēn\n悯 农 — 李 绅\n\nchú hé rì dāng wǔ，\n锄 禾 日 当 午，\nhàn dī hé xià tǔ。\n汗 滴 禾 下 土。\nshéi zhī pán zhōng cān，\n谁 知 盘 中 餐，\nlì lì jiē xīn kǔ。\n粒 粒 皆 辛 苦。',
    questions:[
      { type:'multiple_choice', question:'农民在什么时间锄禾（除草）？', options:['中午烈日当空的时候','早上','傍晚','晚上'], answer:0, explanation:'"锄禾日当午"——中午太阳最晒的时候', stage:'内容理解' },
      { type:'multiple_choice', question:'农民的汗水滴在了哪里？', options:['禾苗下面的泥土里','饭桌上','家里','河里'], answer:0, explanation:'"汗滴禾下土"——汗水滴在禾苗下面的泥土中', stage:'内容理解' },
      { type:'multiple_choice', question:'"盘中餐"指的是什么？', options:['碗里的饭','盘子','蔬菜','水果'], answer:0, explanation:'盘中餐就是盘子/碗里的食物', stage:'内容理解' },
      { type:'multiple_choice', question:'"粒粒皆辛苦"是什么意思？', options:['每一粒粮食都来得不容易','米粒很大','吃饭很辛苦','种地很快乐'], answer:0, explanation:'每一粒粮食都包含着农民辛苦的劳动', stage:'内容理解' },
      { type:'multiple_choice', question:'这首诗告诉我们应该怎样？', options:['珍惜粮食，不要浪费','多种地','多吃米饭','感谢农民'], answer:0, explanation:'每一粒粮食都来之不易，我们要珍惜食物', stage:'道理启示' },
      { type:'multiple_choice', question:'"辛苦"的意思是什么？', options:['劳累、不容易','快乐','轻松','甜蜜'], answer:0, explanation:'辛苦就是身体劳累、很不容易', stage:'字词选择' }
    ]
  },
  {
    id: 'r014', title:'古诗：春晓', week:3, category:'古诗启蒙', hasPinyin:true,
    passage:'chūn xiǎo — mèng hào rán\n春 晓 — 孟 浩 然\n\nchūn mián bù jué xiǎo，\n春 眠 不 觉 晓，\nchù chù wén tí niǎo。\n处 处 闻 啼 鸟。\nyè lái fēng yǔ shēng，\n夜 来 风 雨 声，\nhuā luò zhī duō shǎo。\n花 落 知 多 少。',
    questions:[
      { type:'multiple_choice', question:'"春眠不觉晓"中"晓"是什么意思？', options:['天亮了','知道了','晚上','中午'], answer:0, explanation:'"晓"就是天亮、早晨的意思', stage:'字词选择' },
      { type:'multiple_choice', question:'诗人醒来时听到了什么？', options:['鸟叫声','风声','雨声','钟声'], answer:0, explanation:'"处处闻啼鸟"——到处都能听到鸟叫', stage:'内容理解' },
      { type:'multiple_choice', question:'昨天晚上发生了什么？', options:['刮风下雨了','下雪了','地震了','打雷了'], answer:0, explanation:'"夜来风雨声"——昨晚听到了风雨的声音', stage:'内容理解' },
      { type:'multiple_choice', question:'诗人担心什么？', options:['花被风雨打落了多少','鸟飞走了','天会不会晴','要不要起床'], answer:0, explanation:'"花落知多少"——不知道有多少花被风雨打落了', stage:'内容理解' },
      { type:'multiple_choice', question:'这首诗描写的是哪个季节？', options:['春天','夏天','秋天','冬天'], answer:0, explanation:'题目"春晓"就是春天的早晨', stage:'内容理解' },
      { type:'multiple_choice', question:'"处处"的意思是？', options:['到处、每个地方','一个地方','很少的地方','某个地方'], answer:0, explanation:'处处就是到处，每个地方都能听到鸟叫声', stage:'字词选择' }
    ]
  },
  {
    id: 'r015', title:'古诗：咏鹅', week:4, category:'古诗启蒙', hasPinyin:true,
    passage:'yǒng é — luò bīn wáng\n咏 鹅 — 骆 宾 王\n\né，é，é，\n鹅，鹅，鹅，\nqū xiàng xiàng tiān gē。\n曲 项 向 天 歌。\nbái máo fú lǜ shuǐ，\n白 毛 浮 绿 水，\nhóng zhǎng bō qīng bō。\n红 掌 拨 清 波。',
    questions:[
      { type:'multiple_choice', question:'这首诗写的是什么动物？', options:['鹅','鸭子','天鹅','鸡'], answer:0, explanation:'题目"咏鹅"——歌颂鹅的诗', stage:'内容理解' },
      { type:'multiple_choice', question:'鹅的脖子是什么样的？', options:['弯曲着朝向天空','直直的','缩起来的','低着的'], answer:0, explanation:'"曲项向天歌"——弯着脖子朝天空叫', stage:'内容理解' },
      { type:'multiple_choice', question:'鹅的羽毛是什么颜色？', options:['白色','黑色','灰色','黄色'], answer:0, explanation:'"白毛浮绿水"——白色的羽毛浮在绿色水面', stage:'内容理解' },
      { type:'multiple_choice', question:'鹅的脚掌是什么颜色？', options:['红色','黄色','黑色','白色'], answer:0, explanation:'"红掌拨清波"——红色的脚掌拨动着清清的水波', stage:'内容理解' },
      { type:'multiple_choice', question:'"绿水"和"清波"说明水是怎样的？', options:['清澈干净的','脏的','蓝色的','深的'], answer:0, explanation:'绿水、清波都说明水很清澈', stage:'内容理解' },
      { type:'multiple_choice', question:'作者写这首诗时几岁？', options:['7岁','20岁','30岁','50岁'], answer:0, explanation:'据说骆宾王七岁就写了这首诗，是个小神童！', stage:'内容理解' }
    ]
  },

  // ═══════ 更多童话 ═══════
  {
    id: 'r016', title:'小猫钓鱼', week:4, category:'童话寓言', hasPinyin:true,
    passage:'māo mā ma dài zhe xiǎo māo qù hé biān diào yú。\n猫 妈 妈 带 着 小 猫 去 河 边 钓 鱼。\n\ngāng zuò xià bù jiǔ，yī zhī qīng tíng fēi lái le。\n刚 坐 下 不 久，一 只 蜻 蜓 飞 来 了。\nxiǎo māo diū xià diào yú gān qù zhuō qīng tíng，\n小 猫 丢 下 钓 鱼 竿 去 捉 蜻 蜓，\nméi zhuō zháo，huí lái yī kàn，mā ma yǐ jīng diào dào le yī tiáo yú。\n没 捉 着，回 来 一 看，妈 妈 已 经 钓 到 了 一 条 鱼。\n\nyī huì ér，yī zhī hú dié fēi lái le。\n一 会 儿，一 只 蝴 蝶 飞 来 了。\nxiǎo māo yòu diū xià diào yú gān qù zhuō hú dié，\n小 猫 又 丢 下 钓 鱼 竿 去 捉 蝴 蝶，\nhú dié yě méi zhuō zháo。huí lái yī kàn，\n蝴 蝶 也 没 捉 着。回 来 一 看，\nmā ma yòu diào dào le yī tiáo dà yú。\n妈 妈 又 钓 到 了 一 条 大 鱼。\n\nxiǎo māo shēng qì de shuō："wǒ zěn me diào bù dào yú？"\n小 猫 生 气 地 说："我 怎 么 钓 不 到 鱼？"\nmā ma shuō："diào yú yào zhuān xīn，nǐ yī huì ér zhuō zhè ge，\n妈 妈 说："钓 鱼 要 专 心，你 一 会 儿 捉 这 个，\nyī huì ér zhuō nà ge，zěn me néng diào dào yú ne？"\n一 会 儿 捉 那 个，怎 么 能 钓 到 鱼 呢？"\n\nxiǎo māo tīng le mā ma de huà，zhuān xīn diào yú，\n小 猫 听 了 妈 妈 的 话，专 心 钓 鱼，\nzhōng yú diào dào le yī tiáo dà yú！\n终 于 钓 到 了 一 条 大 鱼！',
    questions:[
      { type:'multiple_choice', question:'小猫一开始为什么钓不到鱼？', options:['不专心，一会儿捉蜻蜓一会儿捉蝴蝶','鱼竿坏了','河里没有鱼','妈妈不让它钓'], answer:0, explanation:'小猫一会儿捉蜻蜓，一会儿捉蝴蝶，不专心', stage:'内容理解' },
      { type:'multiple_choice', question:'猫妈妈钓到鱼了吗？', options:['钓到了，而且钓了好几条','没钓到','钓到又跑了','妈妈没去钓'], answer:0, explanation:'妈妈专心钓鱼，已经钓到了鱼', stage:'内容理解' },
      { type:'multiple_choice', question:'猫妈妈告诉小猫什么道理？', options:['钓鱼要专心','钓鱼要用好鱼竿','捉蜻蜓好玩','蝴蝶比鱼好吃'], answer:0, explanation:'妈妈说"钓鱼要专心"', stage:'内容理解' },
      { type:'multiple_choice', question:'后来小猫怎么钓到鱼的？', options:['听了妈妈的话，专心钓鱼','换了一根鱼竿','去了另一个地方','蜻蜓帮了它'], answer:0, explanation:'小猫听了妈妈的话，专心钓鱼，终于钓到了', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事告诉我们什么？', options:['做事情要专心致志，不能三心二意','钓鱼很好玩','蜻蜓和蝴蝶很漂亮','猫爱吃鱼'], answer:0, explanation:'只有专心才能做好事情，三心二意什么也做不好', stage:'道理启示' },
      { type:'multiple_choice', question:'"专心"的反义词是什么？', options:['三心二意','认真','努力','仔细'], answer:0, explanation:'专心就是注意力集中在一件事上，反义词是三心二意', stage:'字词选择' }
    ]
  },
  {
    id: 'r017', title:'龟兔赛跑', week:5, category:'童话寓言', hasPinyin:true,
    passage:'tù zi zǒng shì chuī xū zì jǐ pǎo de kuài，qiáo bù qǐ wū guī。\n兔 子 总 是 吹 嘘 自 己 跑 得 快，瞧 不 起 乌 龟。\n\nyǒu yī tiān，wū guī xiàng tù zi tí chū le bǐ sài：\n有 一 天，乌 龟 向 兔 子 提 出 了 比 赛：\n"wǒ men lái sài pǎo ba！"\n"我 们 来 赛 跑 吧！"\n\ntù zi hā hā dà xiào："nǐ ？gēn wǒ sài pǎo？"\n兔 子 哈 哈 大 笑："你 ？跟 我 赛 跑？"\n\nbǐ sài kāi shǐ le。tù zi yī liù yān jiù pǎo le hěn yuǎn，\n比 赛 开 始 了。兔 子 一 溜 烟 就 跑 了 很 远，\nhuí tóu yī kàn，wū guī cái pá le yī xiǎo duàn。\n回 头 一 看，乌 龟 才 爬 了 一 小 段。\n\ntù zi xiǎng："wǒ shuì yī jiào，wū guī yě zhuī bù shàng wǒ。"\n兔 子 想："我 睡 一 觉，乌 龟 也 追 不 上 我。"\nyú shì，tù zi zài lù biān de dà shù xià shuì zháo le。\n于 是，兔 子 在 路 边 的 大 树 下 睡 着 了。\n\nwū guī ne，tā yī bù yě bù tíng，màn màn de xiàng qián pá。\n乌 龟 呢，它 一 步 也 不 停，慢 慢 地 向 前 爬。\ndāng tù zi xǐng lái shí，wū guī yǐ jīng dào dá le zhōng diǎn！\n当 兔 子 醒 来 时，乌 龟 已 经 到 达 了 终 点！',
    questions:[
      { type:'multiple_choice', question:'兔子为什么瞧不起乌龟？', options:['兔子觉得自己跑得快','乌龟太小了','乌龟不会跑步','兔子比乌龟大'], answer:0, explanation:'兔子总是吹嘘自己跑得快', stage:'内容理解' },
      { type:'multiple_choice', question:'比赛开始后兔子做了什么？', options:['跑了一段就睡觉了','一口气跑到了终点','和乌龟聊天','去喝水了'], answer:0, explanation:'兔子觉得乌龟追不上，就在树下睡着了', stage:'内容理解' },
      { type:'multiple_choice', question:'乌龟是怎么比赛的？', options:['一步一步不停地爬','跑得很快','走走停停','找人帮忙'], answer:0, explanation:'乌龟一步也不停，慢慢向前爬', stage:'内容理解' },
      { type:'multiple_choice', question:'最后谁赢了比赛？', options:['乌龟','兔子','平局','都没到终点'], answer:0, explanation:'乌龟在兔子睡觉时到达了终点', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事告诉我们什么？', options:['坚持不懈才能成功，骄傲自大会失败','乌龟比兔子跑得快','不应该比赛跑步','要多睡觉'], answer:0, explanation:'兔子的骄傲轻敌和乌龟的坚持不懈形成了鲜明对比', stage:'道理启示' },
      { type:'multiple_choice', question:'"瞧不起"是什么意思？', options:['看不起，轻视别人','看不到','认真看','远远地看'], answer:0, explanation:'"瞧不起"就是看不起、轻视别人', stage:'字词选择' },
      { type:'fill_blank', question:'兔子之所以输，是因为太____了。', answer:'骄傲', stage:'道理启示' }
    ]
  },
  {
    id: 'r018', title:'三只小猪', week:5, category:'童话寓言', hasPinyin:true,
    passage:'sān zhī xiǎo zhū zhǎng dà le，zhū mā ma ràng tā men gè zì\n三 只 小 猪 长 大 了，猪 妈 妈 让 它 们 各 自\nqù gài yī jiān fáng zi。\n去 盖 一 间 房 子。\n\nlǎo dà hěn lǎn，yòng dào cǎo gài le yī jiān fáng zi，\n老 大 很 懒，用 稻 草 盖 了 一 间 房 子，\nyī huì ér jiù gài hǎo le。\n一 会 儿 就 盖 好 了。\n\nlǎo èr yǒu diǎn lǎn，yòng mù tou gài le yī jiān fáng zi，\n老 二 有 点 懒，用 木 头 盖 了 一 间 房 子，\ngài le yī tiān。\n盖 了 一 天。\n\nlǎo sān hěn qín kuai，yòng zhuān tou gài fáng zi，\n老 三 很 勤 快，用 砖 头 盖 房 子，\ngài le hǎo jǐ tiān cái gài hǎo。\n盖 了 好 几 天 才 盖 好。\n\ndà huī láng lái le。tā yī kǒu qì jiù bǎ dào cǎo fáng chuī dǎo le，\n大 灰 狼 来 了。它 一 口 气 就 把 稻 草 房 吹 倒 了，\nlǎo dà táo dào lǎo èr jiā。dà huī láng yī zhuàng，\n老 大 逃 到 老 二 家。大 灰 狼 一 撞，\nmù tou fáng yě dǎo le。tā men táo dào lǎo sān jiā。\n木 头 房 也 倒 了。它 们 逃 到 老 三 家。\n\ndà huī láng yòu chuī yòu zhuàng，kě shì zhuān fáng yī diǎn yě\n大 灰 狼 又 吹 又 撞，可 是 砖 房 一 点 也\nbù dòng。zuì hòu，dà huī láng zhǐ hǎo zǒu le。\n不 动。最 后，大 灰 狼 只 好 走 了。',
    questions:[
      { type:'multiple_choice', question:'猪老大用什么盖房子？', options:['稻草','木头','砖头','石头'], answer:0, explanation:'老大很懒，用稻草盖了一间房子', stage:'内容理解' },
      { type:'multiple_choice', question:'猪老二用什么盖房子？', options:['木头','稻草','砖头','泥土'], answer:0, explanation:'老二用木头盖房子', stage:'内容理解' },
      { type:'multiple_choice', question:'猪老三用什么盖房子？', options:['砖头','稻草','木头','石头'], answer:0, explanation:'猪老三很勤快，用砖头盖房子', stage:'内容理解' },
      { type:'multiple_choice', question:'大灰狼怎么弄倒稻草房的？', options:['一口气吹倒了','用脚踢倒了','用手推倒了','用火烧了'], answer:0, explanation:'大灰狼一口气就把稻草房吹倒了', stage:'内容理解' },
      { type:'multiple_choice', question:'哪间房子最坚固？', options:['砖头房','稻草房','木头房','都一样'], answer:0, explanation:'砖头房大灰狼又吹又撞都不动', stage:'内容理解' },
      { type:'multiple_choice', question:'这个故事告诉我们什么？', options:['做事要认真踏实，不能偷懒图省事','要用砖头盖房子','大灰狼很厉害','要听妈妈的话'], answer:0, explanation:'偷懒图省事的后果很严重，认真努力才能经得起考验', stage:'道理启示' },
      { type:'multiple_choice', question:'文中"勤快"的反义词是？', options:['懒惰','聪明','勇敢','善良'], answer:0, explanation:'勤快就是爱劳动、不偷懒，反义词是懒惰', stage:'字词选择' }
    ]
  }
];
