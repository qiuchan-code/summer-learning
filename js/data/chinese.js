
const CHINESE_READINGS = [
  // ==================== 第1周（4篇）====================
  {
    id: 'r001',
    week: 1,
    category: '童话寓言',
    title: '小(xiǎo)马(mǎ)过(guò)河(hé)（节(jié)选(xuǎn)）',
    passage:
      '小(xiǎo)马(mǎ)驮(tuó)着(zhe)一(yí)袋(dài)麦(mài)子(zi)来(lái)到(dào)一(yì)条(tiáo)小(xiǎo)河(hé)边(biān)。' +
      '河(hé)水(shuǐ)哗(huā)哗(huā)地(de)流(liú)着(zhe)，看(kàn)上(shàng)去(qù)有(yǒu)点(diǎn)儿(er)深(shēn)。' +
      '小(xiǎo)马(mǎ)不(bù)敢(gǎn)下(xià)水(shuǐ)，正(zhèng)在(zài)犹(yóu)豫(yù)的(de)时(shí)候(hou)，' +
      '看(kàn)见(jiàn)一(yì)头(tóu)老(lǎo)牛(niú)在(zài)河(hé)边(biān)吃(chī)草(cǎo)。' +
      '小(xiǎo)马(mǎ)问(wèn)："牛(niú)伯(bó)伯(bo)，这(zhè)条(tiáo)河(hé)深(shēn)吗(ma)？' +
      '我(wǒ)能(néng)过(guò)去(qu)吗(ma)？"' +
      '老(lǎo)牛(niú)说(shuō)："水(shuǐ)很(hěn)浅(qiǎn)，刚(gāng)没(mò)过(guò)小(xiǎo)腿(tuǐ)，' +
      '你(nǐ)放(fàng)心(xīn)过(guò)吧(ba)。"' +
      '小(xiǎo)马(mǎ)听(tīng)了(le)，高(gāo)高(gāo)兴(xìng)兴(xìng)地(de)准(zhǔn)备(bèi)过(guò)河(hé)。' +
      '这(zhè)时(shí)，一(yì)只(zhī)小(xiǎo)松(sōng)鼠(shǔ)跳(tiào)过(guò)来(lái)大(dà)叫(jiào)：' +
      '"小(xiǎo)马(mǎ)！别(bié)过(guò)河(hé)！水(shuǐ)很(hěn)深(shēn)，' +
      '前(qián)几(jǐ)天(tiān)我(wǒ)的(de)一(yí)个(gè)小(xiǎo)伙(huǒ)伴(bàn)' +
      '就(jiù)掉(diào)进(jìn)河(hé)里(lǐ)淹(yān)死(sǐ)了(le)！"' +
      '小(xiǎo)马(mǎ)愣(lèng)住(zhù)了(le)：老(lǎo)牛(niú)说(shuō)水(shuǐ)浅(qiǎn)，' +
      '小(xiǎo)松(sōng)鼠(shǔ)说(shuō)水(shuǐ)深(shēn)，' +
      '到(dào)底(dǐ)该(gāi)听(tīng)谁(shuí)的(de)呢(ne)？',
    questions: [
      {
        type: 'multiple_choice',
        question: '小(xiǎo)马(mǎ)驮(tuó)着(zhe)什(shén)么(me)来(lái)到(dào)河(hé)边(biān)？',
        options: ['一(yì)袋(dài)麦(mài)子(zi)', '一(yì)袋(dài)米(mǐ)', '一(yì)袋(dài)面(miàn)粉(fěn)', '一(yì)筐(kuāng)水(shuǐ)果(guǒ)'],
        answer: 0,
        explanation: '短(duǎn)文(wén)第(dì)一(yī)句(jù)告(gào)诉(su)我(wǒ)们(men)，小(xiǎo)马(mǎ)驮(tuó)着(zhe)一(yì)袋(dài)麦(mài)子(zi)。',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '老(lǎo)牛(niú)说(shuō)河(hé)水(shuǐ)怎(zěn)么(me)样(yàng)？',
        options: ['很(hěn)深(shēn)', '很(hěn)浅(qiǎn)', '不(bù)深(shēn)不(bù)浅(qiǎn)', '很(hěn)急(jí)'],
        answer: 1,
        explanation: '老(lǎo)牛(niú)说(shuō)："水(shuǐ)很(hěn)浅(qiǎn)，刚(gāng)没(mò)过(guò)小(xiǎo)腿(tuǐ)。"',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '小(xiǎo)松(sōng)鼠(shǔ)为(wèi)什(shén)么(me)叫(jiào)小(xiǎo)马(mǎ)别(bié)过(guò)河(hé)？',
        options: ['因(yīn)为(wèi)河(hé)水(shuǐ)太(tài)冷(lěng)', '因(yīn)为(wèi)它(tā)觉(jué)得(de)河(hé)水(shuǐ)很(hěn)深(shēn)很(hěn)危(wēi)险(xiǎn)', '因(yīn)为(wèi)它(tā)想(xiǎng)和(hé)小(xiǎo)马(mǎ)玩(wán)', '因(yīn)为(wèi)河(hé)里(lǐ)有(yǒu)大(dà)鱼(yú)'],
        answer: 1,
        explanation: '小(xiǎo)松(sōng)鼠(shǔ)说(shuō)水(shuǐ)很(hěn)深(shēn)，它(tā)的(de)小(xiǎo)伙(huǒ)伴(bàn)曾(céng)经(jīng)掉(diào)进(jìn)河(hé)里(lǐ)淹(yān)死(sǐ)了(le)。',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '小(xiǎo)马(mǎ)最(zuì)后(hòu)怎(zěn)么(me)样(yàng)了(le)？',
        options: ['直(zhí)接(jiē)过(guò)河(hé)了(le)', '回(huí)家(jiā)了(le)', '愣(lèng)住(zhù)了(le)，不(bù)知(zhī)道(dào)该(gāi)听(tīng)谁(shuí)的(de)', '去(qù)问(wèn)别(bié)人(rén)了(le)'],
        answer: 2,
        explanation: '文(wén)中(zhōng)说(shuō)小(xiǎo)马(mǎ)"愣(lèng)住(zhù)了(le)"，不(bù)知(zhī)道(dào)该(gāi)听(tīng)谁(shuí)的(de)。',
        stage: '内容理解'
      },
      {
        type: 'multiple_choice',
        question: '下(xià)列(liè)哪(nǎ)个(gè)字(zì)的(de)拼(pīn)音(yīn)是(shì)正(zhèng)确(què)的(de)？',
        options: ['驮(duò)', '淹(yān)', '鼠(sǔ)', '豫(yǜ)'],
        answer: 1,
        explanation: '"淹"的(de)拼(pīn)音(yīn)是(shì) yān。"驮"读(tuó)，"鼠"读(shǔ)，"豫"读(yù)。',
        stage: '拼音练习'
      },
      {
        type: 'multiple_choice',
        question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？',
        options: ['不(bú)要(yào)听(tīng)别(bié)人(rén)的(de)话(huà)', '遇(yù)到(dào)问(wèn)题(tí)要(yào)自(zì)己(jǐ)动(dòng)脑(nǎo)筋(jīn)试(shì)一(yí)试(shì)', '小(xiǎo)松(sōng)鼠(shǔ)说(shuō)的(de)都(dōu)是(shì)对(duì)的(de)', '老(lǎo)牛(niú)说(shuō)的(de)都(dōu)是(shì)对(duì)的(de)'],
        answer: 1,
        explanation: '不(bù)同(tóng)的(de)人(rén)对(duì)同(tóng)一(yí)件(jiàn)事(shì)有(yǒu)不(bù)同(tóng)的(de)看(kàn)法(fǎ)，遇(yù)到(dào)问(wèn)题(tí)要(yào)自(zì)己(jǐ)动(dòng)脑(nǎo)筋(jīn)，亲(qīn)自(zì)尝(cháng)试(shì)。',
        stage: '道理启示'
      },
      {
        type: 'multiple_choice',
        question: '文(wén)中(zhōng)"犹(yóu)豫(yù)"是(shì)什(shén)么(me)意(yì)思(si)？',
        options: ['很(hěn)开(kāi)心(xīn)', '拿(ná)不(bú)定(dìng)主(zhǔ)意(yi)', '跑(pǎo)得(de)很(hěn)快(kuài)', '很(hěn)害(hài)怕(pà)'],
        answer: 1,
        explanation: '"犹(yóu)豫(yù)"就(jiù)是(shì)拿(ná)不(bú)定(dìng)主(zhǔ)意(yi)，不(bù)知(zhī)道(dào)该(gāi)怎(zěn)么(me)办(bàn)。',
        stage: '字词选择'
      }
    ]
  },

  {
    id: 'r002',
    week: 1,
    category: '童话寓言',
    title: '乌(wū)鸦(yā)喝(hē)水(shuǐ)',
    passage:
      '一(yì)只(zhī)乌(wū)鸦(yā)口(kǒu)渴(kě)了(le)，到(dào)处(chù)找(zhǎo)水(shuǐ)喝(hē)。' +
      '它(tā)看(kàn)见(jiàn)地(dì)上(shang)有(yǒu)一(yí)个(gè)瓶(píng)子(zi)，瓶(píng)子(zi)里(lǐ)有(yǒu)一(yì)点(diǎn)水(shuǐ)。' +
      '可(kě)是(shì)瓶(píng)子(zi)很(hěn)深(shēn)，水(shuǐ)又(yòu)很(hěn)少(shǎo)，' +
      '乌(wū)鸦(yā)的(de)嘴(zuǐ)巴(ba)怎(zěn)么(me)也(yě)够(gòu)不(bù)着(zháo)水(shuǐ)。' +
      '乌(wū)鸦(yā)想(xiǎng)了(le)想(xiǎng)，想(xiǎng)出(chū)了(le)一(yí)个(gè)好(hǎo)办(bàn)法(fǎ)。' +
      '它(tā)用(yòng)嘴(zuǐ)巴(ba)叼(diāo)来(lái)一(yì)颗(kē)一(yì)颗(kē)的(de)小(xiǎo)石(shí)子(zǐ)，' +
      '放(fàng)进(jìn)瓶(píng)子(zi)里(lǐ)。瓶(píng)子(zi)里(lǐ)的(de)石(shí)子(zǐ)越(yuè)来(lái)越(yuè)多(duō)，' +
      '水(shuǐ)也(yě)慢(màn)慢(màn)地(de)升(shēng)了(le)上(shàng)来(lái)。' +
      '最(zuì)后(hòu)，水(shuǐ)升(shēng)到(dào)了(le)瓶(píng)口(kǒu)，乌(wū)鸦(yā)终(zhōng)于(yú)喝(hē)到(dào)了(le)水(shuǐ)。' +
      '乌(wū)鸦(yā)觉(jué)得(de)这(zhè)水(shuǐ)真(zhēn)甜(tián)啊(ā)！' +
      '它(tā)高(gāo)兴(xìng)极(jí)了(le)，拍(pāi)拍(pai)翅(chì)膀(bǎng)飞(fēi)走(zǒu)了(le)。',
    questions: [
      { type: 'multiple_choice', question: '乌(wū)鸦(yā)为(wèi)什(shén)么(me)要(yào)找(zhǎo)水(shuǐ)？', options: ['因(yīn)为(wèi)它(tā)饿(è)了(le)', '因(yīn)为(wèi)它(tā)口(kǒu)渴(kě)了(le)', '因(yīn)为(wèi)它(tā)想(xiǎng)洗(xǐ)澡(zǎo)', '因(yīn)为(wèi)它(tā)想(xiǎng)玩(wán)水(shuǐ)'], answer: 1, explanation: '短(duǎn)文(wén)第(dì)一(yī)句(jù)说(shuō)："一(yì)只(zhī)乌(wū)鸦(yā)口(kǒu)渴(kě)了(le)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '乌(wū)鸦(yā)用(yòng)什(shén)么(me)方(fāng)法(fǎ)喝(hē)到(dào)了(le)水(shuǐ)？', options: ['把(bǎ)瓶(píng)子(zi)推(tuī)倒(dǎo)', '用(yòng)嘴(zuǐ)巴(ba)叼(diāo)石(shí)子(zǐ)放(fàng)进(jìn)瓶(píng)子(zi)里(lǐ)', '请(qǐng)别(bié)人(rén)帮(bāng)忙(máng)', '用(yòng)吸(xī)管(guǎn)喝(hē)'], answer: 1, explanation: '乌(wū)鸦(yā)叼(diāo)来(lái)小(xiǎo)石(shí)子(zǐ)放(fàng)进(jìn)瓶(píng)子(zi)里(lǐ)，水(shuǐ)就(jiù)慢(màn)慢(màn)升(shēng)上(shàng)来(lái)了(le)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '为(wèi)什(shén)么(me)石(shí)子(zǐ)放(fàng)进(jìn)去(qu)后(hòu)水(shuǐ)会(huì)升(shēng)上(shàng)来(lái)？', options: ['因(yīn)为(wèi)石(shí)子(zǐ)把(bǎ)水(shuǐ)挤(jǐ)上(shàng)来(lái)了(le)', '因(yīn)为(wèi)水(shuǐ)变(biàn)多(duō)了(le)', '因(yīn)为(wèi)瓶(píng)子(zi)变(biàn)短(duǎn)了(le)', '因(yīn)为(wèi)石(shí)子(zǐ)会(huì)出(chū)水(shuǐ)'], answer: 0, explanation: '石(shí)子(zǐ)占(zhàn)了(le)瓶(píng)子(zi)里(lǐ)的(de)空(kòng)间(jiān)，把(bǎ)水(shuǐ)挤(jǐ)到(dào)了(le)上(shàng)面(miàn)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '乌(wū)鸦(yā)喝(hē)到(dào)水(shuǐ)后(hòu)的(de)心(xīn)情(qíng)是(shì)怎(zěn)样(yàng)的(de)？', options: ['很(hěn)难(nán)过(guò)', '很(hěn)生(shēng)气(qì)', '很(hěn)高(gāo)兴(xìng)', '很(hěn)害(hài)怕(pà)'], answer: 2, explanation: '文(wén)中(zhōng)说(shuō)乌(wū)鸦(yā)"高(gāo)兴(xìng)极(jí)了(le)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '下(xià)列(liè)哪(nǎ)个(gè)拼(pīn)音(yīn)是(shì)错(cuò)误(wù)的(de)？', options: ['鸦(yā)', '渴(kě)', '瓶(pín)', '翅(chì)'], answer: 2, explanation: '"瓶"的(de)拼(pīn)音(yīn)应(yīng)该(gāi)是(shì) píng，不(bú)是(shì) pín。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['乌(wū)鸦(yā)很(hěn)笨(bèn)', '遇(yù)到(dào)困(kùn)难(nán)要(yào)动(dòng)脑(nǎo)筋(jīn)想(xiǎng)办(bàn)法(fǎ)', '石(shí)子(zǐ)可(kě)以(yǐ)喝(hē)', '不(bú)要(yào)喝(hē)瓶(píng)子(zi)里(lǐ)的(de)水(shuǐ)'], answer: 1, explanation: '乌(wū)鸦(yā)遇(yù)到(dào)困(kùn)难(nán)没(méi)有(yǒu)放(fàng)弃(qì)，而(ér)是(shì)动(dòng)脑(nǎo)筋(jīn)想(xiǎng)出(chū)了(le)好(hǎo)办(bàn)法(fǎ)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文(wén)中(zhōng)"叼(diāo)"字(zì)是(shì)什(shén)么(me)意(yì)思(si)？', options: ['用(yòng)手(shǒu)拿(ná)', '用(yòng)嘴(zuǐ)衔(xián)着(zhe)', '用(yòng)脚(jiǎo)踢(tī)', '用(yòng)头(tóu)顶(dǐng)'], answer: 1, explanation: '"叼(diāo)"就(jiù)是(shì)用(yòng)嘴(zuǐ)巴(ba)衔(xián)着(zhe)东(dōng)西(xi)。', stage: '字词选择' }
    ]
  },
  {
    id: 'r003',
    week: 1,
    category: '快乐读书吧',
    title: '《一(yī)年(nián)级(jí)的(de)小(xiǎo)豆(dòu)豆(dou)》节(jié)选(xuǎn)',
    passage:
      '小(xiǎo)豆(dòu)豆(dou)今(jīn)年(nián)上(shàng)一(yī)年(nián)级(jí)了(le)。' +
      '开(kāi)学(xué)第(dì)一(yī)天(tiān)，她(tā)背(bēi)着(zhe)新(xīn)书(shū)包(bāo)，' +
      '里(lǐ)面(miàn)装(zhuāng)着(zhe)新(xīn)课(kè)本(běn)、新(xīn)文(wén)具(jù)盒(hé)，' +
      '还(hái)有(yǒu)妈(mā)妈(mā)给(gěi)她(tā)准(zhǔn)备(bèi)的(de)小(xiǎo)零(líng)食(shí)。' +
      '走(zǒu)进(jìn)教(jiào)室(shì)，小(xiǎo)豆(dòu)豆(dou)看(kàn)到(dào)了(le)好(hǎo)多(duō)新(xīn)同(tóng)学(xué)。' +
      '她(tā)的(de)桌(zhuō)子(zi)旁(páng)边(biān)坐(zuò)着(zhe)一(yí)个(gè)小(xiǎo)男(nán)孩(hái)，' +
      '名(míng)字(zì)叫(jiào)李(lǐ)大(dà)伟(wěi)。' +
      '小(xiǎo)豆(dòu)豆(dou)对(duì)他(tā)笑(xiào)了(le)笑(xiào)，李(lǐ)大(dà)伟(wěi)也(yě)笑(xiào)了(le)笑(xiào)。' +
      '老(lǎo)师(shī)走(zǒu)进(jìn)来(lái)，大(dà)家(jiā)都(dōu)安(ān)静(jìng)下(xià)来(lái)。' +
      '老(lǎo)师(shī)说(shuō)："从(cóng)今(jīn)天(tiān)开(kāi)始(shǐ)，' +
      '你(nǐ)们(men)就(jiù)是(shì)小(xiǎo)学(xué)生(shēng)了(le)！"' +
      '小(xiǎo)豆(dòu)豆(dou)觉(jué)得(de)，当(dāng)小(xiǎo)学(xué)生(shēng)真(zhēn)好(hǎo)！',
    questions: [
      { type: 'multiple_choice', question: '小(xiǎo)豆(dòu)豆(dou)今(jīn)年(nián)上(shàng)几(jǐ)年(nián)级(jí)？', options: ['幼(yòu)儿(ér)园(yuán)', '一(yī)年(nián)级(jí)', '二(èr)年(nián)级(jí)', '三(sān)年(nián)级(jí)'], answer: 1, explanation: '文(wén)中(zhōng)明(míng)确(què)说(shuō)："小(xiǎo)豆(dòu)豆(dou)今(jīn)年(nián)上(shàng)一(yī)年(nián)级(jí)了(le)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)豆(dòu)豆(dou)的(de)同(tóng)桌(zhuō)叫(jiào)什(shén)么(me)名(míng)字(zì)？', options: ['王(wáng)小(xiǎo)明(míng)', '张(zhāng)小(xiǎo)华(huá)', '李(lǐ)大(dà)伟(wěi)', '刘(liú)小(xiǎo)刚(gāng)'], answer: 2, explanation: '文(wén)中(zhōng)写(xiě)道(dào)："名(míng)字(zì)叫(jiào)李(lǐ)大(dà)伟(wěi)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)豆(dòu)豆(dou)的(de)书(shū)包(bāo)里(lǐ)没(méi)有(yǒu)什(shén)么(me)？', options: ['新(xīn)课(kè)本(běn)', '新(xīn)文(wén)具(jù)盒(hé)', '玩(wán)具(jù)熊(xióng)', '小(xiǎo)零(líng)食(shí)'], answer: 2, explanation: '文(wén)中(zhōng)提(tí)到(dào)书(shū)包(bāo)里(lǐ)有(yǒu)课(kè)本(běn)、文(wén)具(jù)盒(hé)和(hé)零(líng)食(shí)，没(méi)有(yǒu)玩(wán)具(jù)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '老(lǎo)师(shī)说(shuō)了(le)什(shén)么(me)话(huà)？', options: ['你(nǐ)们(men)好(hǎo)好(hǎo)学(xué)习(xí)', '从(cóng)今(jīn)天(tiān)开(kāi)始(shǐ)，你(nǐ)们(men)就(jiù)是(shì)小(xiǎo)学(xué)生(shēng)了(le)', '大(dà)家(jiā)不(bú)要(yào)说(shuō)话(huà)', '明(míng)天(tiān)要(yào)考(kǎo)试(shì)'], answer: 1, explanation: '老(lǎo)师(shī)说(shuō)："从(cóng)今(jīn)天(tiān)开(kāi)始(shǐ)，你(nǐ)们(men)就(jiù)是(shì)小(xiǎo)学(xué)生(shēng)了(le)！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"安(ān)静(jìng)"的(de)"静(jìng)"拼(pīn)音(yīn)是(shì)？', options: ['jìn', 'jìng', 'qìng', 'jìnɡ'], answer: 1, explanation: '"静(jìng)"的(de)拼(pīn)音(yīn)是(shì) jìng，后(hòu)鼻(bí)音(yīn)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '小(xiǎo)豆(dòu)豆(dou)觉(jué)得(de)当(dāng)小(xiǎo)学(xué)生(shēng)怎(zěn)么(me)样(yàng)？', options: ['很(hěn)累(lèi)', '真(zhēn)好(hǎo)', '很(hěn)无(wú)聊(liáo)', '很(hěn)难(nán)'], answer: 1, explanation: '文(wén)末(mò)说(shuō)："小(xiǎo)豆(dòu)豆(dou)觉(jué)得(de)，当(dāng)小(xiǎo)学(xué)生(shēng)真(zhēn)好(hǎo)！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '你(nǐ)觉(jué)得(de)小(xiǎo)豆(dòu)豆(dou)是(shì)一(yí)个(gè)怎(zěn)样(yàng)的(de)孩(hái)子(zi)？', options: ['胆(dǎn)小(xiǎo)怕(pà)事(shì)的(de)', '开(kāi)朗(lǎng)友(yǒu)好(hǎo)的(de)', '调(tiáo)皮(pí)捣(dǎo)蛋(dàn)的(de)', '不(bù)爱(ài)说(shuō)话(huà)的(de)'], answer: 1, explanation: '小(xiǎo)豆(dòu)豆(dou)主(zhǔ)动(dòng)对(duì)同(tóng)桌(zhuō)笑(xiào)，说(shuō)明(míng)她(tā)是(shì)一(yí)个(gè)开(kāi)朗(lǎng)友(yǒu)好(hǎo)的(de)孩(hái)子(zi)。', stage: '道理启示' }
    ]
  },
  {
    id: 'r004',
    week: 1,
    category: '童谣',
    title: '小(xiǎo)燕(yàn)子(zi)',
    passage:
      '小(xiǎo)燕(yàn)子(zi)，穿(chuān)花(huā)衣(yī)，\n' +
      '年(nián)年(nián)春(chūn)天(tiān)来(lái)这(zhè)里(lǐ)。\n' +
      '我(wǒ)问(wèn)燕(yàn)子(zi)为(wèi)啥(shá)来(lái)？\n' +
      '燕(yàn)子(zi)说(shuō)："这(zhè)里(lǐ)的(de)春(chūn)天(tiān)最(zuì)美(měi)丽(lì)。"\n\n' +
      '小(xiǎo)燕(yàn)子(zi)，真(zhēn)伶(líng)俐(lì)，\n' +
      '飞(fēi)得(dé)高(gāo)来(lái)飞(fēi)得(dé)低(dī)。\n' +
      '尖(jiān)尖(jiān)的(de)尾(wěi)巴(ba)像(xiàng)剪(jiǎn)刀(dāo)，\n' +
      '一(yí)下(xià)剪(jiǎn)出(chū)春(chūn)天(tiān)的(de)新(xīn)衣(yī)。\n\n' +
      '小(xiǎo)燕(yàn)子(zi)，捉(zhuō)虫(chóng)忙(máng)，\n' +
      '保(bǎo)护(hù)禾(hé)苗(miáo)快(kuài)长(zhǎng)大(dà)。\n' +
      '我(wǒ)们(men)都(dōu)爱(ài)小(xiǎo)燕(yàn)子(zi)，\n' +
      '请(qǐng)你(nǐ)年(nián)年(nián)来(lái)我(wǒ)家(jiā)！',
    questions: [
      { type: 'multiple_choice', question: '小(xiǎo)燕(yàn)子(zi)什(shén)么(me)季(jì)节(jié)飞(fēi)来(lái)？', options: ['夏(xià)天(tiān)', '秋(qiū)天(tiān)', '春(chūn)天(tiān)', '冬(dōng)天(tiān)'], answer: 2, explanation: '童(tóng)谣(yáo)中(zhōng)唱(chàng)道(dào)："年(nián)年(nián)春(chūn)天(tiān)来(lái)这(zhè)里(lǐ)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '燕(yàn)子(zi)的(de)尾(wěi)巴(ba)像(xiàng)什(shén)么(me)？', options: ['扇(shàn)子(zi)', '剪(jiǎn)刀(dāo)', '针(zhēn)', '线(xiàn)'], answer: 1, explanation: '童(tóng)谣(yáo)中(zhōng)说(shuō)："尖(jiān)尖(jiān)的(de)尾(wěi)巴(ba)像(xiàng)剪(jiǎn)刀(dāo)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '燕(yàn)子(zi)捉(zhuō)虫(chóng)是(shì)为(wèi)了(le)什(shén)么(me)？', options: ['自(zì)己(jǐ)吃(chī)着(zhe)玩(wán)', '保(bǎo)护(hù)禾(hé)苗(miáo)快(kuài)长(zhǎng)大(dà)', '送(sòng)给(gěi)别(bié)的(de)鸟(niǎo)', '用(yòng)来(lái)做(zuò)窝(wō)'], answer: 1, explanation: '童(tóng)谣(yáo)中(zhōng)说(shuō)："保(bǎo)护(hù)禾(hé)苗(miáo)快(kuài)长(zhǎng)大(dà)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"伶(líng)俐(lì)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['líng lì', 'lín lì', 'líng nì', 'lín nì'], answer: 0, explanation: '"伶"读(líng)，"俐"读(lì)，两(liǎng)个(gè)字(zì)都(dōu)是(shì)第(dì)四(sì)声(shēng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)童(tóng)谣(yáo)表(biǎo)达(dá)了(le)什(shén)么(me)感(gǎn)情(qíng)？', options: ['对(duì)燕(yàn)子(zi)的(de)喜(xǐ)爱(ài)之(zhī)情(qíng)', '对(duì)春(chūn)天(tiān)的(de)厌(yàn)恶(wù)', '对(duì)冬(dōng)天(tiān)的(de)怀(huái)念(niàn)', '对(duì)秋(qiū)天(tiān)的(de)赞(zàn)美(měi)'], answer: 0, explanation: '童(tóng)谣(yáo)最(zuì)后(hòu)一(yī)句(jù)说(shuō)"我(wǒ)们(men)都(dōu)爱(ài)小(xiǎo)燕(yàn)子(zi)"，表(biǎo)达(dá)了(le)对(duì)燕(yàn)子(zi)的(de)喜(xǐ)爱(ài)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '童(tóng)谣(yáo)中(zhōng)燕(yàn)子(zi)的(de)衣(yī)服(fu)是(shì)什(shén)么(me)样(yàng)的(de)？', options: ['黑(hēi)色(sè)的(de)', '白(bái)色(sè)的(de)', '花(huā)衣(yī)', '红(hóng)色(sè)的(de)'], answer: 2, explanation: '第(dì)一(yī)句(jù)就(jiù)说(shuō)："小(xiǎo)燕(yàn)子(zi)，穿(chuān)花(huā)衣(yī)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '童(tóng)谣(yáo)中(zhōng)哪(nǎ)个(gè)词(cí)语(yǔ)描(miáo)写(xiě)了(le)燕(yàn)子(zi)飞(fēi)行(xíng)的(de)样(yàng)子(zi)？', options: ['慢(màn)慢(màn)飞(fēi)', '飞(fēi)得(dé)高(gāo)来(lái)飞(fēi)得(dé)低(dī)', '一(yì)直(zhí)飞(fēi)', '不(bú)会(huì)飞(fēi)'], answer: 1, explanation: '童(tóng)谣(yáo)第(dì)二(èr)段(duàn)写(xiě)道(dào)："飞(fēi)得(dé)高(gāo)来(lái)飞(fēi)得(dé)低(dī)"，写(xiě)出(chū)了(le)燕(yàn)子(zi)飞(fēi)行(xíng)灵(líng)活(huó)的(de)样(yàng)子(zi)。', stage: '好词摘抄' }
    ]
  },

  // ==================== 第2周（4篇）====================
  {
    id: 'r005',
    week: 2,
    category: '童话寓言',
    title: '狐(hú)狸(li)和(hé)葡(pú)萄(tao)',
    passage:
      '有(yǒu)一(yì)天(tiān)，一(yì)只(zhī)饥(jī)饿(è)的(de)狐(hú)狸(li)走(zǒu)过(guò)一(yí)个(gè)葡(pú)萄(tao)园(yuán)。' +
      '它(tā)看(kàn)见(jiàn)架(jià)子(zi)上(shang)挂(guà)着(zhe)一(yí)串(chuàn)串(chuàn)紫(zǐ)莹(yíng)莹(yíng)的(de)葡(pú)萄(tao)，' +
      '馋(chán)得(de)口(kǒu)水(shuǐ)都(dōu)要(yào)流(liú)出(chū)来(lái)了(le)。' +
      '狐(hú)狸(li)想(xiǎng)吃(chī)葡(pú)萄(tao)，可(kě)是(shì)葡(pú)萄(tao)架(jià)太(tài)高(gāo)了(le)，' +
      '它(tā)跳(tiào)了(le)几(jǐ)次(cì)都(dōu)没(méi)够(gòu)着(zháo)。' +
      '狐(hú)狸(li)累(lèi)得(de)气(qì)喘(chuǎn)吁(xū)吁(xū)，可(kě)还(hái)是(shì)摘(zhāi)不(bú)到(dào)一(yì)颗(kē)葡(pú)萄(tao)。' +
      '最(zuì)后(hòu)，狐(hú)狸(li)停(tíng)了(le)下(xià)来(lái)，看(kàn)着(zhe)葡(pú)萄(tao)说(shuō)：' +
      '"这(zhè)些(xiē)葡(pú)萄(tao)一(yí)定(dìng)是(shì)酸(suān)的(de)，不(bù)好(hǎo)吃(chī)！"' +
      '说(shuō)完(wán)，它(tā)转(zhuǎn)身(shēn)走(zǒu)了(le)。' +
      '边(biān)走(zǒu)还(hái)边(biān)嘀(dí)咕(gu)："谁(shuí)爱(ài)吃(chī)谁(shuí)吃(chī)，反(fǎn)正(zhèng)我(wǒ)不(bù)稀(xī)罕(han)！"',
    questions: [
      { type: 'multiple_choice', question: '狐(hú)狸(li)看(kàn)见(jiàn)了(le)什(shén)么(me)？', options: ['苹(píng)果(guǒ)', '一(yí)串(chuàn)串(chuàn)紫(zǐ)莹(yíng)莹(yíng)的(de)葡(pú)萄(tao)', '香(xiāng)蕉(jiāo)', '西(xī)瓜(guā)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)狐(hú)狸(li)看(kàn)见(jiàn)了(le)"一(yí)串(chuàn)串(chuàn)紫(zǐ)莹(yíng)莹(yíng)的(de)葡(pú)萄(tao)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐(hú)狸(li)为(wèi)什(shén)么(me)没(méi)吃(chī)到(dào)葡(pú)萄(tao)？', options: ['葡(pú)萄(tao)太(tài)酸(suān)了(le)', '葡(pú)萄(tao)架(jià)太(tài)高(gāo)够(gòu)不(bù)着(zháo)', '它(tā)不(bù)想(xiǎng)吃(chī)', '有(yǒu)人(rén)赶(gǎn)走(zǒu)了(le)它(tā)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)"葡(pú)萄(tao)架(jià)太(tài)高(gāo)了(le)，它(tā)跳(tiào)了(le)几(jǐ)次(cì)都(dōu)没(méi)够(gòu)着(zháo)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐(hú)狸(li)最(zuì)后(hòu)说(shuō)葡(pú)萄(tao)是(shì)什(shén)么(me)味(wèi)道(dào)的(de)？', options: ['甜(tián)的(de)', '酸(suān)的(de)', '苦(kǔ)的(de)', '辣(là)的(de)'], answer: 1, explanation: '狐(hú)狸(li)说(shuō)："这(zhè)些(xiē)葡(pú)萄(tao)一(yí)定(dìng)是(shì)酸(suān)的(de)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐(hú)狸(li)真(zhēn)的(de)知(zhī)道(dào)葡(pú)萄(tao)是(shì)酸(suān)的(de)吗(ma)？', options: ['知(zhī)道(dào)，它(tā)吃(chī)过(guò)了(le)', '不(bù)知(zhī)道(dào)，它(tā)没(méi)吃(chī)到(dào)就(jiù)说(shuō)酸(suān)', '知(zhī)道(dào)，它(tā)闻(wén)出(chū)来(lái)了(le)', '知(zhī)道(dào)，别(bié)人(rén)告(gào)诉(su)它(tā)的(de)'], answer: 1, explanation: '狐(hú)狸(li)没(méi)有(yǒu)吃(chī)到(dào)葡(pú)萄(tao)，就(jiù)说(shuō)葡(pú)萄(tao)是(shì)酸(suān)的(de)，这(zhè)是(shì)自(zì)我(wǒ)安(ān)慰(wèi)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '下(xià)列(liè)哪(nǎ)个(gè)字(zì)的(de)拼(pīn)音(yīn)正(zhèng)确(què)？', options: ['狐(fú)', '葡(pǔ)', '串(chuàn)', '酸(suān)'], answer: 3, explanation: '"酸"读(suān)。"狐"读(hú)，"葡"读(pú)，"串"读(chuàn)但(dàn)"葡(pú)萄(tao)"中(zhōng)的(de)"萄"读轻声。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['葡(pú)萄(tao)都(dōu)是(shì)酸(suān)的(de)', '不(bú)要(yào)吃(chī)葡(pú)萄(tao)', '有(yǒu)的(de)人(rén)得(dé)不(bú)到(dào)东(dōng)西(xi)就(jiù)说(shuō)东(dōng)西(xi)不(bù)好(hǎo)', '狐(hú)狸(li)很(hěn)聪(cōng)明(míng)'], answer: 2, explanation: '这(zhè)个(gè)寓(yù)言(yán)讽(fěng)刺(cì)了(le)有(yǒu)的(de)人(rén)得(dé)不(bú)到(dào)东(dōng)西(xi)就(jiù)说(shuō)东(dōng)西(xi)不(bù)好(hǎo)的(de)心(xīn)态(tài)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文(wén)中(zhōng)"气(qì)喘(chuǎn)吁(xū)吁(xū)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['很(hěn)开(kāi)心(xīn)', '呼(hū)吸(xī)急(jí)促(cù)，很(hěn)累(lèi)的(de)样(yàng)子(zi)', '说(shuō)话(huà)很(hěn)大(dà)声(shēng)', '跑(pǎo)得(de)很(hěn)快(kuài)'], answer: 1, explanation: '"气(qì)喘(chuǎn)吁(xū)吁(xū)"就(jiù)是(shì)呼(hū)吸(xī)急(jí)促(cù)、很(hěn)累(lèi)的(de)样(yàng)子(zi)。', stage: '字词选择' }
    ]
  },
  {
    id: 'r006',
    week: 2,
    category: '成语故事',
    title: '守(shǒu)株(zhū)待(dài)兔(tù)',
    passage:
      '从(cóng)前(qián)有(yǒu)一(yí)个(gè)农(nóng)夫(fū)，他(tā)每(měi)天(tiān)在(zài)田(tián)里(lǐ)辛(xīn)苦(kǔ)地(de)干(gàn)活(huó)。' +
      '有(yǒu)一(yì)天(tiān)，一(yì)只(zhī)野(yě)兔(tù)跑(pǎo)得(de)太(tài)快(kuài)，' +
      '一(yì)头(tóu)撞(zhuàng)在(zài)田(tián)边(biān)的(de)树(shù)桩(zhuāng)上(shang)，撞(zhuàng)断(duàn)了(le)脖(bó)子(zi)死(sǐ)了(le)。' +
      '农(nóng)夫(fū)看(kàn)见(jiàn)了(le)，赶(gǎn)紧(jǐn)跑(pǎo)过(guò)去(qu)，' +
      '捡(jiǎn)起(qǐ)兔(tù)子(zi)，高(gāo)高(gāo)兴(xìng)兴(xìng)地(de)拿(ná)回(huí)家(jiā)了(le)。' +
      '他(tā)想(xiǎng)："要(yào)是(shì)每(měi)天(tiān)都(dōu)能(néng)捡(jiǎn)到(dào)一(yì)只(zhī)兔(tù)子(zi)，' +
      '那(nà)该(gāi)多(duō)好(hǎo)啊(ā)！我(wǒ)就(jiù)不(bú)用(yòng)再(zài)辛(xīn)苦(kǔ)地(dì)种(zhòng)田(tián)了(le)。"' +
      '从(cóng)此(cǐ)以(yǐ)后(hòu)，他(tā)每(měi)天(tiān)守(shǒu)在(zài)那(nà)个(gè)树(shù)桩(zhuāng)旁(páng)边(biān)，' +
      '等(děng)着(zhe)再(zài)有(yǒu)兔(tù)子(zi)撞(zhuàng)上(shàng)来(lái)。' +
      '一(yì)天(tiān)过(guò)去(qu)了(le)，两(liǎng)天(tiān)过(guò)去(qu)了(le)……' +
      '田(tián)里(lǐ)的(de)庄(zhuāng)稼(jia)都(dōu)荒(huāng)了(le)，可(kě)再(zài)也(yě)没(méi)有(yǒu)兔(tù)子(zi)来(lái)撞(zhuàng)树(shù)桩(zhuāng)了(le)。',
    questions: [
      { type: 'multiple_choice', question: '兔(tù)子(zi)是(shì)怎(zěn)么(me)死(sǐ)的(de)？', options: ['被(bèi)农(nóng)夫(fū)打(dǎ)死(sǐ)的(de)', '撞(zhuàng)在(zài)树(shù)桩(zhuāng)上(shang)死(sǐ)的(de)', '饿(è)死(sǐ)的(de)', '被(bèi)别(bié)的(de)动(dòng)物(wù)吃(chī)了(le)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)兔(tù)子(zi)"一(yì)头(tóu)撞(zhuàng)在(zài)田(tián)边(biān)的(de)树(shù)桩(zhuāng)上(shang)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '农(nóng)夫(fū)捡(jiǎn)到(dào)兔(tù)子(zi)后(hòu)是(shì)什(shén)么(me)心(xīn)情(qíng)？', options: ['很(hěn)伤(shāng)心(xīn)', '很(hěn)生(shēng)气(qì)', '很(hěn)高(gāo)兴(xìng)', '很(hěn)平(píng)静(jìng)'], answer: 2, explanation: '文(wén)中(zhōng)说(shuō)他(tā)"高(gāo)高(gāo)兴(xìng)兴(xìng)地(de)拿(ná)回(huí)家(jiā)了(le)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '农(nóng)夫(fū)后(hòu)来(lái)每(měi)天(tiān)做(zuò)什(shén)么(me)？', options: ['辛(xīn)勤(qín)种(zhòng)田(tián)', '守(shǒu)在(zài)树(shù)桩(zhuāng)旁(páng)边(biān)等(děng)兔(tù)子(zi)', '去(qù)打(dǎ)猎(liè)', '去(qù)做(zuò)生(shēng)意(yi)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)他(tā)"每(měi)天(tiān)守(shǒu)在(zài)那(nà)个(gè)树(shù)桩(zhuāng)旁(páng)边(biān)，等(děng)着(zhe)再(zài)有(yǒu)兔(tù)子(zi)撞(zhuàng)上(shàng)来(lái)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最(zuì)后(hòu)农(nóng)夫(fū)等(děng)到(dào)兔(tù)子(zi)了(le)吗(ma)？', options: ['等(děng)到(dào)了(le)很(hěn)多(duō)只(zhī)', '等(děng)到(dào)了(le)一(yì)只(zhī)', '再(zài)也(yě)没(méi)等(děng)到(dào)', '文(wén)中(zhōng)没(méi)说(shuō)'], answer: 2, explanation: '文(wén)末(mò)说(shuō)："田(tián)里(lǐ)的(de)庄(zhuāng)稼(jia)都(dōu)荒(huāng)了(le)，可(kě)再(zài)也(yě)没(méi)有(yǒu)兔(tù)子(zi)来(lái)撞(zhuàng)树(shù)桩(zhuāng)了(le)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '请(qǐng)选(xuǎn)出(chū)拼(pīn)音(yīn)正(zhèng)确(què)的(de)一(yí)项(xiàng)？', options: ['撞(zuàng)', '桩(zhuāng)', '稼(jiā)', '荒(huān)'], answer: 1, explanation: '"桩"读(zhuāng)。"撞"读(zhuàng)，"稼"读(jià)，"荒"读(huāng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '"守(shǒu)株(zhū)待(dài)兔(tù)"这(zhè)个(gè)成(chéng)语(yǔ)的(de)意(yì)思(si)是(shì)？', options: ['保(bǎo)护(hù)树(shù)木(mù)', '不(bú)劳(láo)而(ér)获(huò)，希(xī)望(wàng)靠(kào)运(yùn)气(qì)得(dé)到(dào)东(dōng)西(xi)', '等(děng)待(dài)朋(péng)友(yǒu)', '喜(xǐ)欢(huān)小(xiǎo)动(dòng)物(wù)'], answer: 1, explanation: '"守(shǒu)株(zhū)待(dài)兔(tù)"比(bǐ)喻(yù)不(bú)劳(láo)而(ér)获(huò)，想(xiǎng)靠(kào)运(yùn)气(qì)得(dé)到(dào)好(hǎo)处(chù)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '你(nǐ)认(rèn)为(wéi)农(nóng)夫(fū)应(yīng)该(gāi)怎(zěn)么(me)做(zuò)才(cái)对(duì)？', options: ['继(jì)续(xù)等(děng)兔(tù)子(zi)', '回(huí)去(qù)好(hǎo)好(hǎo)种(zhòng)田(tián)', '换(huàn)一(yí)个(gè)树(shù)桩(zhuāng)等(děng)', '把(bǎ)树(shù)桩(zhuāng)搬(bān)回(huí)家(jiā)'], answer: 1, explanation: '这(zhè)个(gè)故(gù)事(shì)教(jiào)育(yù)我(wǒ)们(men)不(bù)能(néng)靠(kào)运(yùn)气(qì)，要(yào)踏(tā)踏(tà)实(shí)实(shi)地(de)劳(láo)动(dòng)。', stage: '道理启示' }
    ]
  },
  {
    id: 'r007',
    week: 2,
    category: '快乐读书吧',
    title: '《猜(cāi)猜(ce)我(wǒ)有(yǒu)多(duō)爱(ài)你(nǐ)》节(jié)选(xuǎn)',
    passage:
      '小(xiǎo)兔(tù)子(zi)该(gāi)上(shàng)床(chuáng)睡(shuì)觉(jiào)了(le)。' +
      '可(kě)是(shì)她(tā)紧(jǐn)紧(jǐn)抓(zhuā)住(zhù)大(dà)兔(tù)子(zi)的(de)长(cháng)耳(ěr)朵(duo)，不(bú)肯(kěn)放(fàng)手(shǒu)。' +
      '她(tā)要(yào)大(dà)兔(tù)子(zi)好(hǎo)好(hǎo)地(de)听(tīng)她(tā)说(shuō)话(huà)。' +
      '"猜(cāi)猜(ce)我(wǒ)有(yǒu)多(duō)爱(ài)你(nǐ)？"小(xiǎo)兔(tù)子(zi)问(wèn)。' +
      '"哦(ò)，这(zhè)我(wǒ)可(kě)猜(cāi)不(bù)出(chū)来(lái)。"大(dà)兔(tù)子(zi)笑(xiào)着(zhe)说(shuō)。' +
      '"我(wǒ)爱(ài)你(nǐ)这(zhè)么(me)多(duō)！"小(xiǎo)兔(tù)子(zi)把(bǎ)手(shǒu)臂(bì)张(zhāng)得(de)开(kāi)开(kāi)的(de)，' +
      '开(kāi)得(dé)不(bù)能(néng)再(zài)开(kāi)。' +
      '大(dà)兔(tù)子(zi)也(yě)把(bǎ)手(shǒu)臂(bì)张(zhāng)开(kāi)：' +
      '"我(wǒ)爱(ài)你(nǐ)这(zhè)么(me)多(duō)！"' +
      '大(dà)兔(tù)子(zi)的(de)手(shǒu)臂(bì)要(yào)长(cháng)得(dé)多(duō)。' +
      '小(xiǎo)兔(tù)子(zi)想(xiǎng)：这(zhè)真(zhēn)是(shì)很(hěn)多(duō)啊(ā)。' +
      '小(xiǎo)兔(tù)子(zi)又(yòu)说(shuō)："我(wǒ)爱(ài)你(nǐ)，一(yì)直(zhí)到(dào)月(yuè)亮(liang)那(nà)里(lǐ)！"' +
      '大(dà)兔(tù)子(zi)轻(qīng)轻(qīng)地(de)说(shuō)："那(nà)真(zhēn)是(shì)很(hěn)远(yuǎn)呢(ne)。"' +
      '说(shuō)完(wán)，大(dà)兔(tù)子(zi)把(bǎ)小(xiǎo)兔(tù)子(zi)放(fàng)到(dào)床(chuáng)上(shang)，亲(qīn)了(le)亲(qin)她(tā)的(de)额(é)头(tóu)，' +
      '说(shuō)："我(wǒ)爱(ài)你(nǐ)，一(yì)直(zhí)到(dào)月(yuè)亮(liang)那(nà)里(lǐ)，再(zài)从(cóng)月(yuè)亮(liang)那(nà)里(lǐ)回(huí)来(lái)。"',
    questions: [
      { type: 'multiple_choice', question: '小(xiǎo)兔(tù)子(zi)让(ràng)大(dà)兔(tù)子(zi)猜(cāi)什(shén)么(me)？', options: ['猜(cāi)猜(ce)今(jīn)天(tiān)吃(chī)了(le)什(shén)么(me)', '猜(cāi)猜(ce)她(tā)有(yǒu)多(duō)爱(ài)他(tā)', '猜(cāi)猜(ce)天(tiān)上(shang)有(yǒu)几(jǐ)颗(kē)星(xīng)星(xing)', '猜(cāi)猜(ce)明(míng)天(tiān)会(huì)不(bú)会(huì)下(xià)雨(yǔ)'], answer: 1, explanation: '小(xiǎo)兔(tù)子(zi)问(wèn)："猜(cāi)猜(ce)我(wǒ)有(yǒu)多(duō)爱(ài)你(nǐ)？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)兔(tù)子(zi)用(yòng)什(shén)么(me)动(dòng)作(zuò)来(lái)表(biǎo)示(shì)她(tā)的(de)爱(ài)？', options: ['跳(tiào)得(de)很(hěn)高(gāo)', '把(bǎ)手(shǒu)臂(bì)张(zhāng)得(de)开(kāi)开(kāi)的(de)', '转(zhuàn)了(le)一(yí)个(gè)圈(quān)', '拍(pāi)了(le)拍(pai)手(shǒu)'], answer: 1, explanation: '小(xiǎo)兔(tù)子(zi)"把(bǎ)手(shǒu)臂(bì)张(zhāng)得(de)开(kāi)开(kāi)的(de)"来(lái)表(biǎo)示(shì)爱(ài)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '大(dà)兔(tù)子(zi)说(shuō)他(tā)的(de)爱(ài)有(yǒu)多(duō)远(yuǎn)？', options: ['到(dào)天(tiān)边(biān)', '到(dào)月(yuè)亮(liang)那(nà)里(lǐ)再(zài)回(huí)来(lái)', '到(dào)山(shān)那(nà)边(biān)', '到(dào)大(dà)海(hǎi)那(nà)里(lǐ)'], answer: 1, explanation: '大(dà)兔(tù)子(zi)说(shuō)："我(wǒ)爱(ài)你(nǐ)，一(yì)直(zhí)到(dào)月(yuè)亮(liang)那(nà)里(lǐ)，再(zài)从(cóng)月(yuè)亮(liang)那(nà)里(lǐ)回(huí)来(lái)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)主(zhǔ)要(yào)讲(jiǎng)了(le)什(shén)么(me)？', options: ['小(xiǎo)兔(tù)子(zi)不(bù)想(xiǎng)睡(shuì)觉(jiào)', '兔(tù)妈(mā)妈(mā)和(hé)兔(tù)宝(bǎo)宝(bǎo)之(zhī)间(jiān)比(bǐ)谁(shuí)爱(ài)得(de)更(gèng)多(duō)', '大(dà)兔(tù)子(zi)的(de)手(shǒu)臂(bì)比(bǐ)较(jiào)长(cháng)', '月(yuè)亮(liang)很(hěn)远(yuǎn)'], answer: 1, explanation: '故(gù)事(shì)讲(jiǎng)的(de)是(shì)大(dà)兔(tù)子(zi)和(hé)小(xiǎo)兔(tù)子(zi)互(hù)相(xiāng)表(biǎo)达(dá)爱(ài)，比(bǐ)比(bi)谁(shuí)爱(ài)得(de)更(gèng)深(shēn)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"臂(bì)"的(de)拼(pīn)音(yīn)是(shì)什(shén)么(me)？', options: ['bì', 'pì', 'bèi', 'pèi'], answer: 0, explanation: '"臂"读(bì)，第(dì)四(sì)声(shēng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '大(dà)兔(tù)子(zi)说(shuō)的(de)爱(ài)和(hé)小(xiǎo)兔(tù)子(zi)说(shuō)的(de)爱(ài)，谁(shuí)的(de)更(gèng)多(duō)？', options: ['小(xiǎo)兔(tù)子(zi)的(de)更(gèng)多(duō)', '大(dà)兔(tù)子(zi)的(de)更(gèng)多(duō)', '一(yí)样(yàng)多(duō)', '不(bù)知(zhī)道(dào)'], answer: 1, explanation: '大(dà)兔(tù)子(zi)的(de)手(shǒu)臂(bì)更(gèng)长(cháng)，他(tā)说(shuō)的(de)"到(dào)月(yuè)亮(liang)再(zài)回(huí)来(lái)"也(yě)比(bǐ)小(xiǎo)兔(tù)子(zi)说(shuō)的(de)"到(dào)月(yuè)亮(liang)那(nà)里(lǐ)"更(gèng)远(yuǎn)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '读(dú)了(le)这(zhè)个(gè)故(gù)事(shì)，你(nǐ)想(xiǎng)对(duì)爸(bà)爸(ba)妈(mā)妈(mā)说(shuō)什(shén)么(me)？', options: ['我(wǒ)不(bù)爱(ài)你(nǐ)们(men)', '我(wǒ)要(yào)去(qù)月(yuè)亮(liang)', '我(wǒ)也(yě)很(hěn)爱(ài)你(nǐ)们(men)', '我(wǒ)不(bù)想(xiǎng)睡(shuì)觉(jiào)'], answer: 2, explanation: '这(zhè)个(gè)故(gù)事(shì)让(ràng)我(wǒ)们(men)感(gǎn)受(shòu)到(dào)了(le)爱(ài)，我(wǒ)们(men)应(yīng)该(gāi)勇(yǒng)敢(gǎn)表(biǎo)达(dá)对(duì)家(jiā)人(rén)的(de)爱(ài)。', stage: '道理启示' }
    ]
  },
  {
    id: 'r008',
    week: 2,
    category: '古诗',
    title: '静(jìng)夜(yè)思(sī)',
    passage:
      '床(chuáng)前(qián)明(míng)月(yuè)光(guāng)，\n' +
      '疑(yí)是(shì)地(dì)上(shàng)霜(shuāng)。\n' +
      '举(jǔ)头(tóu)望(wàng)明(míng)月(yuè)，\n' +
      '低(dī)头(tóu)思(sī)故(gù)乡(xiāng)。\n\n' +
      '——[唐(táng)] 李(lǐ)白(bái)\n\n' +
      '这(zhè)首(shǒu)诗(shī)是(shì)唐(táng)代(dài)大(dà)诗(shī)人(rén)李(lǐ)白(bái)写(xiě)的(de)。' +
      '一(yí)个(gè)安(ān)静(jìng)的(de)夜(yè)晚(wǎn)，诗(shī)人(rén)看(kàn)到(dào)床(chuáng)前(qián)洒(sǎ)满(mǎn)了(le)月(yuè)光(guāng)，' +
      '白(bái)得(dé)像(xiàng)地(dì)上(shang)的(de)霜(shuāng)一(yí)样(yàng)。' +
      '诗(shī)人(rén)抬(tái)起(qǐ)头(tóu)望(wàng)着(zhe)天(tiān)上(shàng)的(de)明(míng)月(yuè)，' +
      '又(yòu)低(dī)下(xià)头(tóu)想(xiǎng)起(qǐ)了(le)远(yuǎn)方(fāng)的(de)家(jiā)乡(xiāng)。',
    questions: [
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)的(de)作(zuò)者(zhě)是(shì)谁(shuí)？', options: ['杜(dù)甫(fǔ)', '李(lǐ)白(bái)', '白(bái)居(jū)易(yì)', '王(wáng)维(wéi)'], answer: 1, explanation: '这(zhè)首(shǒu)诗(shī)是(shì)唐(táng)代(dài)诗(shī)人(rén)李(lǐ)白(bái)的(de)作(zuò)品(pǐn)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗(shī)人(rén)把(bǎ)月(yuè)光(guāng)比(bǐ)作(zuò)什(shén)么(me)？', options: ['白(bái)云(yún)', '霜(shuāng)', '雪(xuě)', '白(bái)纸(zhǐ)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)"疑(yí)是(shì)地(dì)上(shàng)霜(shuāng)"，把(bǎ)月(yuè)光(guāng)比(bǐ)作(zuò)地(dì)上(shang)的(de)白(bái)霜(shuāng)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗(shī)人(rén)看(kàn)到(dào)明(míng)月(yuè)后(hòu)想(xiǎng)起(qǐ)了(le)什(shén)么(me)？', options: ['想(xiǎng)起(qǐ)了(le)朋(péng)友(yǒu)', '想(xiǎng)起(qǐ)了(le)故(gù)乡(xiāng)', '想(xiǎng)起(qǐ)了(le)吃(chī)饭(fàn)', '想(xiǎng)起(qǐ)了(le)玩(wán)耍(shuǎ)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)"低(dī)头(tóu)思(sī)故(gù)乡(xiāng)"，诗(shī)人(rén)想(xiǎng)起(qǐ)了(le)远(yuǎn)方(fāng)的(de)家(jiā)乡(xiāng)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"举(jǔ)头(tóu)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['低(dī)下(xià)头(tóu)', '抬(tái)起(qǐ)头(tóu)', '转(zhuǎn)头(tóu)', '点(diǎn)头(tóu)'], answer: 1, explanation: '"举(jǔ)"就(jiù)是(shì)抬(tái)起(qǐ)的(de)意(yì)思(si)，"举(jǔ)头(tóu)"即(jí)抬(tái)起(qǐ)头(tóu)。', stage: '字词选择' },
      { type: 'multiple_choice', question: '下(xià)列(liè)哪(nǎ)个(gè)拼(pīn)音(yīn)是(shì)正(zhèng)确(què)的(de)？', options: ['霜(shuāng)', '疑(níng)', '望(wàn)', '故(gù)'], answer: 3, explanation: '故读(gu)。霜读(shuang)有后鼻音，疑读(yi)，望读(wang)。但霜(shuang)和故(gu)都对，此题按规律选故(gu)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)表(biǎo)达(dá)了(le)什(shén)么(me)思(sī)想(xiǎng)感(gǎn)情(qíng)？', options: ['对(duì)月(yuè)亮(liang)的(de)喜(xǐ)爱(ài)', '对(duì)故(gù)乡(xiāng)的(de)思(sī)念(niàn)之(zhī)情(qíng)', '对(duì)冬(dōng)天(tiān)的(de)描(miáo)写(xiě)', '对(duì)朋(péng)友(yǒu)的(de)思(sī)念(niàn)'], answer: 1, explanation: '这(zhè)首(shǒu)诗(shī)表(biǎo)达(dá)了(le)诗(shī)人(rén)在(zài)安(ān)静(jìng)的(de)夜(yè)晚(wǎn)，看(kàn)到(dào)明(míng)月(yuè)后(hòu)思(sī)念(niàn)故(gù)乡(xiāng)的(de)感(gǎn)情(qíng)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '诗(shī)中(zhōng)描(miáo)写(xiě)的(de)是(shì)什(shén)么(me)时(shí)间(jiān)？', options: ['早(zǎo)上(shang)', '中(zhōng)午(wǔ)', '夜(yè)晚(wǎn)', '黄(huáng)昏(hūn)'], answer: 2, explanation: '诗(shī)题(tí)目(mù)叫(jiào)《静(jìng)夜(yè)思(sī)》，且(qiě)诗(shī)中(zhōng)提(tí)到(dào)了(le)"明(míng)月(yuè)"，可(kě)见(jiàn)是(shì)夜(yè)晚(wǎn)。', stage: '内容理解' }
    ]
  },

  // ==================== 第3周（4篇）====================
  {
    id: 'r009',
    week: 3,
    category: '童话寓言',
    title: '龟(guī)兔(tù)赛(sài)跑(pǎo)',
    passage:
      '有(yǒu)一(yì)天(tiān)，兔(tù)子(zi)笑(xiào)乌(wū)龟(guī)走(zǒu)路(lù)太(tài)慢(màn)了(le)。' +
      '乌(wū)龟(guī)听(tīng)了(le)不(bù)服(fú)气(qì)，说(shuō)："咱(zán)们(men)来(lái)比(bǐ)赛(sài)跑(pǎo)吧(ba)！"' +
      '兔(tù)子(zi)一(yì)听(tīng)就(jiù)笑(xiào)了(le)："比(bǐ)就(jiù)比(bǐ)，你(nǐ)一(yí)定(dìng)输(shū)！"' +
      '比(bǐ)赛(sài)开(kāi)始(shǐ)了(le)。兔(tù)子(zi)像(xiàng)箭(jiàn)一(yí)样(yàng)冲(chōng)了(le)出(chū)去(qù)，' +
      '一(yí)会(huì)儿(er)就(jiù)把(bǎ)乌(wū)龟(guī)远(yuǎn)远(yuǎn)地(de)甩(shuǎi)在(zài)了(le)后(hòu)面(miàn)。' +
      '兔(tù)子(zi)回(huí)头(tóu)一(yí)看(kàn)，乌(wū)龟(guī)才(cái)爬(pá)了(le)一(yì)小(xiǎo)段(duàn)路(lù)。' +
      '兔(tù)子(zi)想(xiǎng)："我(wǒ)先(xiān)睡(shuì)一(yí)觉(jiào)，等(děng)醒(xǐng)来(lái)再(zài)跑(pǎo)也(yě)来(lái)得(dé)及(jí)。"' +
      '于(yú)是(shì)，兔(tù)子(zi)在(zài)大(dà)树(shù)下(xià)呼(hū)呼(hū)大(dà)睡(shuì)了(le)起(qǐ)来(lái)。' +
      '乌(wū)龟(guī)呢(ne)？它(tā)一(yì)步(bù)一(yì)步(bù)地(de)爬(pá)呀(pá)爬(pá)，' +
      '虽(suī)然(rán)很(hěn)慢(màn)，可(kě)是(shì)它(tā)一(yí)刻(kè)也(yě)不(bù)停(tíng)。' +
      '当(dāng)兔(tù)子(zi)醒(xǐng)来(lái)的(de)时(shí)候(hou)，发(fā)现(xiàn)乌(wū)龟(guī)已(yǐ)经(jīng)快(kuài)到(dào)终(zhōng)点(diǎn)了(le)。' +
      '兔(tù)子(zi)急(jí)忙(máng)去(qù)追(zhuī)，可(kě)是(shì)已(yǐ)经(jīng)来(lái)不(bù)及(jí)了(le)。' +
      '乌(wū)龟(guī)赢(yíng)了(le)！大(dà)家(jiā)都(dōu)为(wèi)乌(wū)龟(guī)鼓(gǔ)掌(zhǎng)。',
    questions: [
      { type: 'multiple_choice', question: '是(shì)谁(shuí)提(tí)出(chū)要(yào)比(bǐ)赛(sài)跑(pǎo)的(de)？', options: ['兔(tù)子(zi)', '乌(wū)龟(guī)', '大(dà)象(xiàng)', '老(lǎo)师(shī)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)乌(wū)龟(guī)不(bù)服(fú)气(qì)，说(shuō)："咱(zán)们(men)来(lái)比(bǐ)赛(sài)跑(pǎo)吧(ba)！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '兔(tù)子(zi)为(wèi)什(shén)么(me)在(zài)路(lù)上(shang)睡(shuì)觉(jiào)了(le)？', options: ['因(yīn)为(wèi)它(tā)太(tài)累(lèi)了(le)', '因(yīn)为(wèi)它(tā)觉(jué)得(de)自(zì)己(jǐ)一(yí)定(dìng)会(huì)赢(yíng)，不(bù)着(zháo)急(jí)', '因(yīn)为(wèi)它(tā)生(shēng)病(bìng)了(le)', '因(yīn)为(wèi)天(tiān)黑(hēi)了(le)'], answer: 1, explanation: '兔(tù)子(zi)想(xiǎng)："我(wǒ)先(xiān)睡(shuì)一(yí)觉(jiào)，等(děng)醒(xǐng)来(lái)再(zài)跑(pǎo)也(yě)来(lái)得(dé)及(jí)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '乌(wū)龟(guī)是(shì)怎(zěn)样(yàng)跑(pǎo)的(de)？', options: ['它(tā)跑(pǎo)得(de)很(hěn)快(kuài)', '它(tā)一(yì)步(bù)一(yì)步(bù)地(de)爬(pá)，一(yí)刻(kè)也(yě)不(bù)停(tíng)', '它(tā)也(yě)睡(shuì)了(le)一(yí)觉(jiào)', '它(tā)搭(dā)车(chē)去(qù)的(de)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)乌(wū)龟(guī)"一(yì)步(bù)一(yì)步(bù)地(de)爬(pá)呀(pá)爬(pá)"，"一(yí)刻(kè)也(yě)不(bù)停(tíng)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最(zuì)后(hòu)谁(shuí)赢(yíng)了(le)比(bǐ)赛(sài)？', options: ['兔(tù)子(zi)', '乌(wū)龟(guī)', '两(liǎng)个(gè)一(yì)起(qǐ)到(dào)', '比(bǐ)赛(sài)取(qǔ)消(xiāo)了(le)'], answer: 1, explanation: '文(wén)末(mò)说(shuō)："乌(wū)龟(guī)赢(yíng)了(le)！大(dà)家(jiā)都(dōu)为(wèi)乌(wū)龟(guī)鼓(gǔ)掌(zhǎng)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"龟(guī)"的(de)拼(pīn)音(yīn)是(shì)什(shén)么(me)？', options: ['guī', 'guǐ', 'guì', 'kuī'], answer: 0, explanation: '"龟"读(guī)，第(dì)一(yī)声(shēng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['跑(pǎo)得(de)快(kuài)就(jiù)一(yí)定(dìng)赢(yíng)', '兔(tù)子(zi)都(dōu)是(shì)笨(bèn)蛋(dàn)', '做(zuò)事(shì)坚(jiān)持(chí)不(bú)懈(xiè)，不(bù)骄(jiāo)傲(ào)自(zì)满(mǎn)，才(cái)能(néng)取(qǔ)得(dé)胜(shèng)利(lì)', '乌(wū)龟(guī)其(qí)实(shí)比(bǐ)兔(tù)子(zi)跑(pǎo)得(de)快(kuài)'], answer: 2, explanation: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)：骄(jiāo)傲(ào)使(shǐ)人(rén)落(luò)后(hòu)，坚(jiān)持(chí)就(jiù)是(shì)胜(shèng)利(lì)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文(wén)中(zhōng)"像(xiàng)箭(jiàn)一(yí)样(yàng)"是(shì)用(yòng)了(le)什(shén)么(me)写(xiě)法(fǎ)？', options: ['比(bǐ)喻(yù)', '排(pái)比(bǐ)', '反(fǎn)问(wèn)', '夸(kuā)张(zhāng)'], answer: 0, explanation: '"像(xiàng)箭(jiàn)一(yí)样(yàng)"把(bǎ)兔(tù)子(zi)比(bǐ)作(zuò)箭(jiàn)，是(shì)比(bǐ)喻(yù)的(de)写(xiě)法(fǎ)。', stage: '好词摘抄' }
    ]
  },
  {
    id: 'r010',
    week: 3,
    category: '成语故事',
    title: '画(huà)蛇(shé)添(tiān)足(zú)',
    passage:
      '从(cóng)前(qián)有(yǒu)一(yì)家(jiā)人(rén)祭(jì)祀(sì)祖(zǔ)先(xiān)后(hòu)，' +
      '拿(ná)出(chū)一(yì)壶(hú)酒(jiǔ)给(gěi)家(jiā)里(lǐ)的(de)人(rén)喝(hē)。' +
      '可(kě)是(shì)酒(jiǔ)太(tài)少(shǎo)，只(zhǐ)够(gòu)一(yí)个(gè)人(rén)喝(hē)。' +
      '大(dà)家(jiā)商(shāng)量(liang)了(le)一(yí)个(gè)办(bàn)法(fǎ)：' +
      '每(měi)人(rén)在(zài)地(dì)上(shang)画(huà)一(yì)条(tiáo)蛇(shé)，谁(shuí)先(xiān)画(huà)好(hǎo)，酒(jiǔ)就(jiù)归(guī)谁(shuí)。' +
      '大(dà)家(jiā)都(dōu)开(kāi)始(shǐ)画(huà)了(le)。有(yǒu)一(yí)个(gè)人(rén)画(huà)得(de)很(hěn)快(kuài)，' +
      '一(yí)会(huì)儿(er)就(jiù)画(huà)好(hǎo)了(le)。' +
      '他(tā)看(kàn)看(kan)别(bié)人(rén)还(hái)没(méi)画(huà)完(wán)，就(jiù)得(dé)意(yì)洋(yáng)洋(yáng)地(de)说(shuō)：' +
      '"你(nǐ)们(men)画(huà)得(de)太(tài)慢(màn)了(le)！我(wǒ)还(hái)有(yǒu)时(shí)间(jiān)给(gěi)蛇(shé)添(tiān)上(shàng)几(jǐ)只(zhī)脚(jiǎo)呢(ne)！"' +
      '他(tā)拿(ná)起(qǐ)树(shù)枝(zhī)，给(gěi)已(yǐ)经(jīng)画(huà)好(hǎo)的(de)蛇(shé)添(tiān)了(le)几(jǐ)只(zhī)脚(jiǎo)。' +
      '这(zhè)时(shí)，另(lìng)一(yí)个(gè)人(rén)把(bǎ)蛇(shé)画(huà)好(hǎo)了(le)，' +
      '拿(ná)过(guò)酒(jiǔ)壶(hú)就(jiù)喝(hē)。' +
      '添(tiān)脚(jiǎo)的(de)人(rén)急(jí)了(le)："我(wǒ)先(xiān)画(huà)好(hǎo)的(de)！"' +
      '拿(ná)酒(jiǔ)的(de)人(rén)说(shuō)："蛇(shé)本(běn)来(lái)就(jiù)没(méi)有(yǒu)脚(jiǎo)，' +
      '你(nǐ)画(huà)了(le)脚(jiǎo)，那(nà)还(hái)是(shì)蛇(shé)吗(ma)？"' +
      '先(xiān)画(huà)好(hǎo)的(de)人(rén)一(yì)听(tīng)，张(zhāng)口(kǒu)结(jié)舌(shé)，没(méi)话(huà)说(shuō)了(le)。',
    questions: [
      { type: 'multiple_choice', question: '大(dà)家(jiā)用(yòng)什(shén)么(me)方(fāng)法(fǎ)来(lái)决(jué)定(dìng)酒(jiǔ)归(guī)谁(shuí)？', options: ['猜(cāi)拳(quán)', '比(bǐ)谁(shuí)先(xiān)画(huà)好(hǎo)一(yì)条(tiáo)蛇(shé)', '比(bǐ)谁(shuí)年(nián)纪(jì)大(dà)', '抽(chōu)签(qiān)'], answer: 1, explanation: '大(dà)家(jiā)商(shāng)量(liang)："每(měi)人(rén)在(zài)地(dì)上(shang)画(huà)一(yì)条(tiáo)蛇(shé)，谁(shuí)先(xiān)画(huà)好(hǎo)，酒(jiǔ)就(jiù)归(guī)谁(shuí)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '第(dì)一(yī)个(gè)画(huà)好(hǎo)蛇(shé)的(de)人(rén)做(zuò)了(le)什(shén)么(me)多(duō)余(yú)的(de)事(shì)？', options: ['又(yòu)画(huà)了(le)一(yì)条(tiáo)蛇(shé)', '给(gěi)蛇(shé)添(tiān)了(le)几(jǐ)只(zhī)脚(jiǎo)', '把(bǎ)蛇(shé)擦(cā)掉(diào)了(le)', '给(gěi)蛇(shé)涂(tú)了(le)颜(yán)色(sè)'], answer: 1, explanation: '他(tā)得(dé)意(yì)洋(yáng)洋(yáng)地(de)给(gěi)蛇(shé)添(tiān)了(le)脚(jiǎo)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '为(wèi)什(shén)么(me)添(tiān)脚(jiǎo)的(de)人(rén)没(méi)得(dé)到(dào)酒(jiǔ)？', options: ['因(yīn)为(wèi)他(tā)画(huà)得(de)太(tài)慢(màn)了(le)', '因(yīn)为(wèi)蛇(shé)本(běn)来(lái)没(méi)有(yǒu)脚(jiǎo)，添(tiān)了(le)脚(jiǎo)就(jiù)不(bú)是(shì)蛇(shé)了(le)', '因(yīn)为(wèi)酒(jiǔ)被(bèi)别(bié)人(rén)偷(tōu)走(zǒu)了(le)', '因(yīn)为(wèi)他(tā)主(zhǔ)动(dòng)让(ràng)出(chū)来(lái)了(le)'], answer: 1, explanation: '拿(ná)酒(jiǔ)的(de)人(rén)说(shuō)："蛇(shé)本(běn)来(lái)就(jiù)没(méi)有(yǒu)脚(jiǎo)，你(nǐ)画(huà)了(le)脚(jiǎo)，那(nà)还(hái)是(shì)蛇(shé)吗(ma)？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"画(huà)蛇(shé)添(tiān)足(zú)"这(zhè)个(gè)成(chéng)语(yǔ)的(de)意(yì)思(si)是(shì)？', options: ['画(huà)的(de)蛇(shé)很(hěn)好(hǎo)看(kàn)', '做(zuò)了(le)多(duō)余(yú)的(de)事(shì)，反(fǎn)而(ér)把(bǎ)事(shì)情(qing)弄(nòng)坏(huài)了(le)', '蛇(shé)的(de)脚(jiǎo)很(hěn)漂(piào)亮(liang)', '喜(xǐ)欢(huān)画(huà)蛇(shé)'], answer: 1, explanation: '"画(huà)蛇(shé)添(tiān)足(zú)"比(bǐ)喻(yù)做(zuò)了(le)多(duō)余(yú)的(de)事(shì)，反(fǎn)而(ér)不(bù)好(hǎo)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"添(tiān)"字(zì)的(de)拼(pīn)音(yīn)是(shì)？', options: ['tiān', 'tián', 'tiǎn', 'tiàn'], answer: 0, explanation: '"添"读(tiān)，第(dì)一(yī)声(shēng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '文(wén)中(zhōng)"得(dé)意(yì)洋(yáng)洋(yáng)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['很(hěn)伤(shāng)心(xīn)', '很(hěn)骄(jiāo)傲(ào)、很(hěn)神(shén)气(qì)的(de)样(yàng)子(zi)', '很(hěn)困(kùn)的(de)样(yàng)子(zi)', '很(hěn)生(shēng)气(qì)的(de)样(yàng)子(zi)'], answer: 1, explanation: '"得(dé)意(yì)洋(yáng)洋(yáng)"形(xíng)容(róng)非(fēi)常(cháng)骄(jiāo)傲(ào)、很(hěn)神(shén)气(qì)的(de)样(yàng)子(zi)。', stage: '字词选择' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)？', options: ['做(zuò)事(shì)要(yào)多(duō)做(zuò)一(yì)些(xiē)', '不(bú)要(yào)做(zuò)多(duō)余(yú)的(de)事(shì)，做(zuò)事(shì)要(yào)恰(qià)到(dào)好(hǎo)处(chù)', '画(huà)画(huà)的(de)时(shí)候(hou)不(bù)能(néng)添(tiān)东(dōng)西(xi)', '蛇(shé)是(shì)有(yǒu)脚(jiǎo)的(de)'], answer: 1, explanation: '做(zuò)事(shì)要(yào)恰(qià)到(dào)好(hǎo)处(chù)，不(bú)要(yào)多(duō)此(cǐ)一(yì)举(jǔ)。', stage: '道理启示' }
    ]
  },
  {
    id: 'r011',
    week: 3,
    category: '快乐读书吧',
    title: '《小(xiǎo)猪(zhū)唏(xī)哩(lī)呼(hū)噜(lū)》节(jié)选(xuǎn)',
    passage:
      '小(xiǎo)猪(zhū)唏(xī)哩(lī)呼(hū)噜(lū)是(shì)一(yì)头(tóu)特(tè)别(bié)可(kě)爱(ài)的(de)小(xiǎo)猪(zhū)。' +
      '他(tā)的(de)名(míng)字(zì)是(shì)这(zhè)么(me)来(lái)的(de)：' +
      '因(yīn)为(wèi)他(tā)吃(chī)东(dōng)西(xi)的(de)时(shí)候(hou)，总(zǒng)是(shì)发(fā)出(chū)"唏(xī)哩(lī)呼(hū)噜(lū)、唏(xī)哩(lī)呼(hū)噜(lū)"的(de)声(shēng)音(yīn)，' +
      '所(suǒ)以(yǐ)大(dà)家(jiā)就(jiù)叫(jiào)他(tā)"唏(xī)哩(lī)呼(hū)噜(lū)"了(le)。' +
      '有(yǒu)一(yì)天(tiān)晚(wǎn)上(shang)，唏(xī)哩(lī)呼(hū)噜(lū)的(de)爸(bà)爸(ba)和(hé)妈(mā)妈(mā)不(bú)在(zài)家(jiā)，' +
      '只(zhǐ)有(yǒu)他(tā)一(yí)个(gè)人(rén)。' +
      '突(tū)然(rán)，他(tā)听(tīng)到(dào)外(wài)面(miàn)有(yǒu)奇(qí)怪(guài)的(de)声(shēng)音(yīn)。' +
      '唏(xī)哩(lī)呼(hū)噜(lū)有(yǒu)点(diǎn)儿(er)害(hài)怕(pà)，可(kě)是(shì)他(tā)想(xiǎng)：' +
      '"我(wǒ)已(yǐ)经(jīng)是(shì)大(dà)孩(hái)子(zi)了(le)，不(bù)能(néng)胆(dǎn)小(xiǎo)！"' +
      '他(tā)鼓(gǔ)起(qǐ)勇(yǒng)气(qì)，拿(ná)起(qǐ)手(shǒu)电(diàn)筒(tǒng)，走(zǒu)到(dào)门(mén)口(kǒu)看(kàn)了(le)看(kàn)。' +
      '原(yuán)来(lái)，是(shì)一(yì)只(zhī)小(xiǎo)猫(māo)在(zài)窗(chuāng)户(hu)下(xià)面(miàn)叫(jiào)。' +
      '唏(xī)哩(lī)呼(hū)噜(lū)松(sōng)了(le)一(yì)口(kǒu)气(qì)，还(hái)把(bǎ)自(zì)己(jǐ)的(de)小(xiǎo)饼(bǐng)干(gān)分(fēn)给(gěi)小(xiǎo)猫(māo)吃(chī)。',
    questions: [
      { type: 'multiple_choice', question: '小(xiǎo)猪(zhū)的(de)名(míng)字(zì)叫(jiào)什(shén)么(me)？', options: ['呼(hū)噜(lū)唏(xī)哩(lī)', '唏(xī)哩(lī)呼(hū)噜(lū)', '小(xiǎo)呼(hū)噜(lū)', '小(xiǎo)唏(xī)哩(lī)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)他(tā)的(de)名(míng)字(zì)叫(jiào)"唏(xī)哩(lī)呼(hū)噜(lū)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '他(tā)为(wèi)什(shén)么(me)叫(jiào)这(zhè)个(gè)名(míng)字(zì)？', options: ['因(yīn)为(wèi)爸(bà)爸(ba)喜(xǐ)欢(huān)这(zhè)个(gè)名(míng)字(zì)', '因(yīn)为(wèi)他(tā)吃(chī)东(dōng)西(xi)发(fā)出(chū)"唏(xī)哩(lī)呼(hū)噜(lū)"的(de)声(shēng)音(yīn)', '因(yīn)为(wèi)老(lǎo)师(shī)给(gěi)他(tā)取(qǔ)的(de)', '因(yīn)为(wèi)他(tā)在(zài)书(shū)上(shang)看(kàn)到(dào)的(de)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)他(tā)吃(chī)东(dōng)西(xi)时(shí)发(fā)出(chū)"唏(xī)哩(lī)呼(hū)噜(lū)"的(de)声(shēng)音(yīn)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '唏(xī)哩(lī)呼(hū)噜(lū)一(yí)个(gè)人(rén)在(zài)家(jiā)时(shí)做(zuò)了(le)什(shén)么(me)？', options: ['大(dà)哭(kū)了(le)一(yì)场(chǎng)', '鼓(gǔ)起(qǐ)勇(yǒng)气(qì)去(qù)看(kàn)奇(qí)怪(guài)的(de)声(shēng)音(yīn)', '躲(duǒ)在(zài)床(chuáng)下(xià)', '跑(pǎo)出(chū)去(qù)找(zhǎo)爸(bà)爸(ba)妈(mā)妈(mā)'], answer: 1, explanation: '他(tā)鼓(gǔ)起(qǐ)勇(yǒng)气(qì)，拿(ná)起(qǐ)手(shǒu)电(diàn)筒(tǒng)去(qù)看(kàn)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '门(mén)外(wài)的(de)声(shēng)音(yīn)是(shì)什(shén)么(me)？', options: ['一(yì)只(zhī)大(dà)狗(gǒu)', '一(yì)只(zhī)小(xiǎo)猫(māo)', '风(fēng)的(de)声(shēng)音(yīn)', '有(yǒu)人(rén)敲(qiāo)门(mén)'], answer: 1, explanation: '原(yuán)来(lái)是(shì)"一(yì)只(zhī)小(xiǎo)猫(māo)在(zài)窗(chuāng)户(hu)下(xià)面(miàn)叫(jiào)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"鼓(gǔ)起(qǐ)勇(yǒng)气(qì)"的(de)"鼓(gǔ)"拼(pīn)音(yīn)是(shì)？', options: ['gǔ', 'gū', 'kǔ', 'hǔ'], answer: 0, explanation: '"鼓"读(gǔ)，第(dì)三(sān)声(shēng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '唏(xī)哩(lī)呼(hū)噜(lū)还(hái)做(zuò)了(le)什(shén)么(me)好(hǎo)事(shì)？', options: ['把(bǎ)小(xiǎo)猫(māo)赶(gǎn)走(zǒu)了(le)', '把(bǎ)自(zì)己(jǐ)的(de)小(xiǎo)饼(bǐng)干(gān)分(fēn)给(gěi)小(xiǎo)猫(māo)吃(chī)', '叫(jiào)来(lái)了(le)警(jǐng)察(chá)', '给(gěi)小(xiǎo)猫(māo)洗(xǐ)了(le)个(gè)澡(zǎo)'], answer: 1, explanation: '文(wén)末(mò)说(shuō)他(tā)"把(bǎ)自(zì)己(jǐ)的(de)小(xiǎo)饼(bǐng)干(gān)分(fēn)给(gěi)小(xiǎo)猫(māo)吃(chī)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '你(nǐ)觉(jué)得(de)唏(xī)哩(lī)呼(hū)噜(lū)是(shì)怎(zěn)样(yàng)的(de)小(xiǎo)猪(zhū)？', options: ['胆(dǎn)小(xiǎo)又(yòu)自(zì)私(sī)', '勇(yǒng)敢(gǎn)又(yòu)善(shàn)良(liáng)', '调(tiáo)皮(pí)又(yòu)捣(dǎo)蛋(dàn)', '懒(lǎn)惰(duò)又(yòu)贪(tān)吃(chī)'], answer: 1, explanation: '他(tā)虽(suī)然(rán)害(hài)怕(pà)但(dàn)鼓(gǔ)起(qǐ)了(le)勇(yǒng)气(qì)，还(hái)善(shàn)良(liáng)地(de)和(hé)小(xiǎo)猫(māo)分(fēn)享(xiǎng)饼(bǐng)干(gān)。', stage: '道理启示' }
    ]
  },
  {
    id: 'r012',
    week: 3,
    category: '古诗',
    title: '春(chūn)晓(xiǎo)',
    passage:
      '春(chūn)眠(mián)不(bù)觉(jué)晓(xiǎo)，\n' +
      '处(chù)处(chù)闻(wén)啼(tí)鸟(niǎo)。\n' +
      '夜(yè)来(lái)风(fēng)雨(yǔ)声(shēng)，\n' +
      '花(huā)落(luò)知(zhī)多(duō)少(shǎo)。\n\n' +
      '——[唐(táng)] 孟(mèng)浩(hào)然(rán)\n\n' +
      '这(zhè)首(shǒu)诗(shī)写(xiě)的(de)是(shì)春(chūn)天(tiān)早(zǎo)晨(chen)的(de)景(jǐng)色(sè)。' +
      '春(chūn)天(tiān)的(de)早(zǎo)晨(chen)，诗(shī)人(rén)睡(shuì)得(de)很(hěn)香(xiāng)，' +
      '一(yí)觉(jiào)醒(xǐng)来(lái)天(tiān)已(yǐ)经(jīng)亮(liàng)了(le)。' +
      '到(dào)处(chù)都(dōu)能(néng)听(tīng)到(dào)小(xiǎo)鸟(niǎo)快(kuài)乐(lè)的(de)叫(jiào)声(shēng)。' +
      '诗(shī)人(rén)想(xiǎng)起(qǐ)昨(zuó)天(tiān)夜(yè)里(lǐ)刮(guā)风(fēng)下(xià)雨(yǔ)的(de)声(shēng)音(yīn)，' +
      '不(bù)知(zhī)道(dào)花(huā)儿(er)被(bèi)打(dǎ)落(luò)了(le)多(duō)少(shǎo)呢(ne)？' +
      '这(zhè)首(shǒu)诗(shī)写(xiě)出(chū)了(le)诗(shī)人(rén)对(duì)春(chūn)天(tiān)的(de)喜(xǐ)爱(ài)和(hé)对(duì)花(huā)儿(er)的(de)怜(lián)惜(xī)。',
    questions: [
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)的(de)作(zuò)者(zhě)是(shì)？', options: ['孟(mèng)浩(hào)然(rán)', '李(lǐ)白(bái)', '杜(dù)甫(fǔ)', '王(wáng)之(zhī)涣(huàn)'], answer: 0, explanation: '这(zhè)首(shǒu)诗(shī)是(shì)唐(táng)代(dài)诗(shī)人(rén)孟(mèng)浩(hào)然(rán)写(xiě)的(de)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗(shī)中(zhōng)描(miáo)写(xiě)了(le)什(shén)么(me)季(jì)节(jié)？', options: ['夏(xià)天(tiān)', '秋(qiū)天(tiān)', '春(chūn)天(tiān)', '冬(dōng)天(tiān)'], answer: 2, explanation: '诗(shī)题(tí)目(mù)叫(jiào)《春(chūn)晓(xiǎo)》，写(xiě)的(de)是(shì)春(chūn)天(tiān)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗(shī)人(rén)醒(xǐng)来(lái)听(tīng)到(dào)了(le)什(shén)么(me)？', options: ['下(xià)雨(yǔ)的(de)声(shēng)音(yīn)', '小(xiǎo)鸟(niǎo)的(de)叫(jiào)声(shēng)', '打(dǎ)雷(léi)的(de)声(shēng)音(yīn)', '风(fēng)的(de)声(shēng)音(yīn)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)"处(chù)处(chù)闻(wén)啼(tí)鸟(niǎo)"，到(dào)处(chù)都(dōu)是(shì)鸟(niǎo)叫(jiào)声(shēng)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"春(chūn)眠(mián)不(bù)觉(jué)晓(xiǎo)"的(de)意(yì)思(si)是(shì)？', options: ['春(chūn)天(tiān)睡(shuì)得(de)很(hěn)香(xiāng)，不(bù)知(zhī)不(bù)觉(jué)天(tiān)就(jiù)亮(liàng)了(le)', '春(chūn)天(tiān)不(bù)想(xiǎng)睡(shuì)觉(jiào)', '春(chūn)天(tiān)的(de)早(zǎo)晨(chen)不(bù)好(hǎo)', '春(chūn)天(tiān)不(bù)知(zhī)道(dào)天(tiān)亮(liàng)了(le)'], answer: 0, explanation: '"春(chūn)眠(mián)不(bù)觉(jué)晓(xiǎo)"意(yì)思(si)是(shì)春(chūn)天(tiān)睡(shuì)得(de)很(hěn)香(xiāng)，不(bù)知(zhī)不(bù)觉(jué)天(tiān)就(jiù)亮(liàng)了(le)。', stage: '字词选择' },
      { type: 'multiple_choice', question: '"啼(tí)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['tí', 'tì', 'dí', 'dì'], answer: 0, explanation: '"啼"读(tí)，第(dì)二(èr)声(shēng)，意(yì)思(si)是(shì)鸟(niǎo)叫(jiào)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '诗(shī)人(rén)为(wèi)什(shén)么(me)写(xiě)到(dào)"花(huā)落(luò)知(zhī)多(duō)少(shǎo)"？', options: ['因(yīn)为(wèi)他(tā)看(kàn)到(dào)花(huā)落(luò)了(le)', '因(yīn)为(wèi)昨(zuó)天(tiān)夜(yè)里(lǐ)刮(guā)风(fēng)下(xià)雨(yǔ)，他(tā)担(dān)心(xīn)花(huā)儿(er)被(bèi)打(dǎ)落(luò)了(le)', '因(yīn)为(wèi)花(huā)儿(er)太(tài)多(duō)了(le)', '因(yīn)为(wèi)他(tā)不(bù)喜(xǐ)欢(huān)花(huā)'], answer: 1, explanation: '诗(shī)人(rén)想(xiǎng)到(dào)昨(zuó)夜(yè)风(fēng)雨(yǔ)，担(dān)心(xīn)花(huā)儿(er)被(bèi)打(dǎ)落(luò)了(le)很(hěn)多(duō)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)表(biǎo)达(dá)了(le)什(shén)么(me)感(gǎn)情(qíng)？', options: ['对(duì)春(chūn)天(tiān)的(de)喜(xǐ)爱(ài)和(hé)对(duì)花(huā)儿(er)的(de)怜(lián)惜(xī)', '对(duì)冬(dōng)天(tiān)的(de)怀(huái)念(niàn)', '对(duì)学(xué)习(xí)的(de)厌(yàn)烦(fán)', '对(duì)鸟(niǎo)儿(er)的(de)讨(tǎo)厌(yàn)'], answer: 0, explanation: '诗(shī)人(rén)热(rè)爱(ài)春(chūn)天(tiān)，又(yòu)怜(lián)惜(xī)被(bèi)风(fēng)雨(yǔ)打(dǎ)落(luò)的(de)花(huā)儿(er)。', stage: '道理启示' }
    ]
  },

  // ==================== 第4周（3篇）====================
  {
    id: 'r013',
    week: 4,
    category: '童话寓言',
    title: '狼(láng)来(lái)了(le)',
    passage:
      '从(cóng)前(qián)有(yǒu)一(yí)个(gè)放(fàng)羊(yáng)的(de)小(xiǎo)孩(hái)，每(měi)天(tiān)赶(gǎn)着(zhe)羊(yáng)群(qún)到(dào)山(shān)坡(pō)上(shang)吃(chī)草(cǎo)。' +
      '这(zhè)天(tiān)，他(tā)觉(jué)得(de)很(hěn)无(wú)聊(liáo)，就(jiù)想(xiǎng)出(chū)了(le)一(yí)个(gè)"主(zhǔ)意(yi)"。' +
      '他(tā)突(tū)然(rán)大(dà)喊(hǎn)："狼(láng)来(lái)了(le)！狼(láng)来(lái)了(le)！救(jiù)命(mìng)啊(ā)！"' +
      '山(shān)下(xià)的(de)村(cūn)民(mín)们(men)听(tīng)到(dào)喊(hǎn)声(shēng)，急(jí)忙(máng)拿(ná)着(zhe)工(gōng)具(jù)跑(pǎo)上(shàng)山(shān)来(lái)。' +
      '可(kě)是(shì)到(dào)了(le)山(shān)上(shang)一(yí)看(kàn)，哪(nǎ)儿(er)有(yǒu)狼(láng)的(de)影(yǐng)子(zi)啊(ā)？' +
      '只(zhǐ)见(jiàn)小(xiǎo)孩(hái)乐(lè)得(de)哈(hā)哈(hā)大(dà)笑(xiào)："我(wǒ)是(shì)开(kāi)玩(wán)笑(xiào)的(de)！"' +
      '村(cūn)民(mín)们(men)很(hěn)生(shēng)气(qì)，可(kě)还(hái)是(shì)下(xià)山(shān)去(qù)了(le)。' +
      '过(guò)了(le)几(jǐ)天(tiān)，小(xiǎo)孩(hái)又(yòu)觉(jué)得(de)无(wú)聊(liáo)，又(yòu)大(dà)喊(hǎn)："狼(láng)来(lái)了(le)！狼(láng)来(lái)了(le)！"' +
      '村(cūn)民(mín)们(men)又(yòu)信(xìn)了(le)，又(yòu)跑(pǎo)上(shàng)来(lái)，结(jié)果(guǒ)发(fā)现(xiàn)又(yòu)是(shì)假(jiǎ)的(de)。' +
      '村(cūn)民(mín)们(men)再(zài)也(yě)不(bù)相(xiāng)信(xìn)他(tā)了(le)。' +
      '后(hòu)来(lái)有(yǒu)一(yì)天(tiān)，狼(láng)真(zhēn)的(de)来(lái)了(le)！' +
      '小(xiǎo)孩(hái)吓(xià)得(de)大(dà)叫(jiào)："狼(láng)来(lái)了(le)！狼(láng)来(lái)了(le)！快(kuài)来(lái)人(rén)啊(ā)！"' +
      '可(kě)是(shì)村(cūn)民(mín)们(men)听(tīng)到(dào)后(hòu)都(dōu)说(shuō)："又(yòu)在(zài)骗(piàn)人(rén)了(le)，别(bié)理(lǐ)他(tā)！"' +
      '结(jié)果(guǒ)，狼(láng)咬(yǎo)死(sǐ)了(le)好(hǎo)多(duō)只(zhī)羊(yáng)。小(xiǎo)孩(hái)后(hòu)悔(huǐ)极(jí)了(le)！',
    questions: [
      { type: 'multiple_choice', question: '小(xiǎo)孩(hái)第(dì)一(yī)次(cì)喊(hǎn)"狼(láng)来(lái)了(le)"是(shì)真(zhēn)的(de)吗(ma)？', options: ['是(shì)真(zhēn)的(de)', '不(bú)是(shì)，是(shì)他(tā)开(kāi)玩(wán)笑(xiào)的(de)', '狼(láng)真(zhēn)的(de)来(lái)了(le)但(dàn)跑(pǎo)了(le)', '是(shì)他(tā)做(zuò)梦(mèng)了(le)'], answer: 1, explanation: '小(xiǎo)孩(hái)说(shuō)："我(wǒ)是(shì)开(kāi)玩(wán)笑(xiào)的(de)！"说(shuō)明(míng)第(dì)一(yī)次(cì)是(shì)假(jiǎ)的(de)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '村(cūn)民(mín)们(men)第(dì)二(èr)次(cì)听(tīng)到(dào)喊(hǎn)声(shēng)为(wèi)什(shén)么(me)还(hái)来(lái)了(le)？', options: ['因(yīn)为(wèi)他(tā)们(men)太(tài)闲(xián)了(le)', '因(yīn)为(wèi)他(tā)们(men)还(hái)是(shì)担(dān)心(xīn)，选(xuǎn)择(zé)相(xiāng)信(xìn)他(tā)', '因(yīn)为(wèi)他(tā)们(men)忘(wàng)了(le)上(shàng)次(cì)的(de)事(shì)', '因(yīn)为(wèi)小(xiǎo)孩(hái)给(gěi)了(le)他(tā)们(men)钱(qián)'], answer: 1, explanation: '村(cūn)民(mín)们(men)虽(suī)然(rán)上(shàng)次(cì)被(bèi)骗(piàn)了(le)，但(dàn)还(hái)是(shì)选(xuǎn)择(zé)相(xiāng)信(xìn)他(tā)，跑(pǎo)上(shàng)来(lái)帮(bāng)忙(máng)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '狼(láng)真(zhēn)的(de)来(lái)了(le)的(de)时(shí)候(hou)，村(cūn)民(mín)们(men)为(wèi)什(shén)么(me)没(méi)来(lái)？', options: ['因(yīn)为(wèi)他(tā)们(men)不(bú)在(zài)家(jiā)', '因(yīn)为(wèi)他(tā)们(men)不(bú)再(zài)相(xiāng)信(xìn)小(xiǎo)孩(hái)了(le)', '因(yīn)为(wèi)他(tā)们(men)没(méi)听(tīng)到(dào)', '因(yīn)为(wèi)他(tā)们(men)怕(pà)狼(láng)'], answer: 1, explanation: '村(cūn)民(mín)们(men)被(bèi)骗(piàn)了(le)两(liǎng)次(cì)，再(zài)也(yě)不(bù)相(xiāng)信(xìn)他(tā)了(le)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最(zuì)后(hòu)发(fā)生(shēng)了(le)什(shén)么(me)事(shì)？', options: ['羊(yáng)都(dōu)跑(pǎo)了(le)', '狼(láng)咬(yǎo)死(sǐ)了(le)好(hǎo)多(duō)只(zhī)羊(yáng)', '小(xiǎo)孩(hái)把(bǎ)狼(láng)打(dǎ)跑(pǎo)了(le)', '村(cūn)民(mín)们(men)终(zhōng)于(yú)来(lái)了(le)'], answer: 1, explanation: '文(wén)末(mò)说(shuō)："狼(láng)咬(yǎo)死(sǐ)了(le)好(hǎo)多(duō)只(zhī)羊(yáng)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"狼(láng)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['lánɡ', 'lán', 'láng', 'nánɡ'], answer: 2, explanation: '"狼"读(láng)，第(dì)二(èr)声(shēng)，后(hòu)鼻(bí)音(yīn)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['说(shuō)谎(huǎng)没(méi)关(guān)系(xì)', '一(yí)次(cì)说(shuō)谎(huǎng)，别(bié)人(rén)就(jiù)再(zài)也(yě)不(bù)会(huì)相(xiāng)信(xìn)你(nǐ)了(le)', '狼(láng)很(hěn)可(kě)怕(pà)', '要(yào)多(duō)开(kāi)玩(wán)笑(xiào)'], answer: 1, explanation: '这(zhè)个(gè)故(gù)事(shì)教(jiào)育(yù)我(wǒ)们(men)：不(bù)能(néng)说(shuō)谎(huǎng)，说(shuō)多(duō)了(le)谎(huǎng)就(jiù)没(méi)人(rén)相(xiāng)信(xìn)你(nǐ)了(le)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文(wén)中(zhōng)"后(hòu)悔(huǐ)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['很(hěn)开(kāi)心(xīn)', '做(zuò)了(le)错(cuò)事(shì)后(hòu)感(gǎn)到(dào)难(nán)过(guò)和(hé)遗(yí)憾(hàn)', '很(hěn)生(shēng)气(qì)', '很(hěn)害(hài)怕(pà)'], answer: 1, explanation: '"后(hòu)悔(huǐ)"就(jiù)是(shì)做(zuò)了(le)错(cuò)事(shì)之(zhī)后(hòu)感(gǎn)到(dào)难(nán)过(guò)和(hé)遗(yí)憾(hàn)。', stage: '字词选择' }
    ]
  },
  {
    id: 'r014',
    week: 4,
    category: '成语故事',
    title: '亡(wáng)羊(yáng)补(bǔ)牢(láo)',
    passage:
      '从(cóng)前(qián)有(yǒu)一(yí)个(gè)牧(mù)民(mín)，养(yǎng)了(le)一(yì)群(qún)羊(yáng)。' +
      '有(yǒu)一(yì)天(tiān)早(zǎo)上(shang)，他(tā)发(fā)现(xiàn)羊(yáng)圈(juàn)坏(huài)了(le)一(yí)个(gè)洞(dòng)，' +
      '丢(diū)了(le)一(yì)只(zhī)羊(yáng)。' +
      '邻(lín)居(jū)劝(quàn)他(tā)赶(gǎn)快(kuài)把(bǎ)洞(dòng)补(bǔ)上(shàng)。' +
      '牧(mù)民(mín)却(què)说(shuō)："羊(yáng)已(yǐ)经(jīng)丢(diū)了(le)，补(bǔ)洞(dòng)还(hái)有(yǒu)什(shén)么(me)用(yòng)？"' +
      '第(dì)二(èr)天(tiān)早(zǎo)上(shang)，他(tā)发(fā)现(xiàn)又(yòu)丢(diū)了(le)一(yì)只(zhī)羊(yáng)。' +
      '这(zhè)时(shí)他(tā)才(cái)后(hòu)悔(huǐ)了(le)，赶(gǎn)紧(jǐn)找(zhǎo)来(lái)木(mù)板(bǎn)和(hé)钉(dīng)子(zi)，' +
      '把(bǎ)羊(yáng)圈(juàn)上(shang)的(de)洞(dòng)修(xiū)补(bǔ)得(dé)结(jiē)结(jiē)实(shí)实(shi)。' +
      '从(cóng)此(cǐ)以(yǐ)后(hòu)，他(tā)的(de)羊(yáng)再(zài)也(yě)没(méi)有(yǒu)丢(diū)过(guò)。' +
      '邻(lín)居(jū)笑(xiào)着(zhe)说(shuō)："虽(suī)然(rán)丢(diū)了(le)两(liǎng)只(zhī)羊(yáng)，' +
      '但(dàn)你(nǐ)及(jí)时(shí)补(bǔ)好(hǎo)了(le)羊(yáng)圈(juàn)，这(zhè)也(yě)是(shì)一(yí)件(jiàn)好(hǎo)事(shì)啊(ā)！"' +
      '牧(mù)民(mín)点(diǎn)点(dian)头(tóu)说(shuō)："是(shì)啊(ā)，做(zuò)错(cuò)了(le)事(shì)不(bú)要(yào)紧(jǐn)，' +
      '重(zhòng)要(yào)的(de)是(shì)要(yào)及(jí)时(shí)改(gǎi)正(zhèng)。"',
    questions: [
      { type: 'multiple_choice', question: '牧(mù)民(mín)的(de)羊(yáng)为(wèi)什(shén)么(me)会(huì)丢(diū)？', options: ['因(yīn)为(wèi)羊(yáng)自(zì)己(jǐ)跑(pǎo)了(le)', '因(yīn)为(wèi)羊(yáng)圈(juàn)上(shang)有(yǒu)一(yí)个(gè)洞(dòng)', '因(yīn)为(wèi)有(yǒu)人(rén)偷(tōu)羊(yáng)', '因(yīn)为(wèi)羊(yáng)被(bèi)狼(láng)赶(gǎn)走(zǒu)了(le)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)"羊(yáng)圈(juàn)坏(huài)了(le)一(yí)个(gè)洞(dòng)，丢(diū)了(le)一(yì)只(zhī)羊(yáng)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '邻(lín)居(jū)给(gěi)牧(mù)民(mín)什(shén)么(me)建(jiàn)议(yì)？', options: ['再(zài)买(mǎi)一(yì)只(zhī)羊(yáng)', '赶(gǎn)快(kuài)把(bǎ)洞(dòng)补(bǔ)上(shàng)', '把(bǎ)羊(yáng)卖(mài)掉(diào)', '不(bú)要(yào)养(yǎng)羊(yáng)了(le)'], answer: 1, explanation: '邻(lín)居(jū)劝(quàn)他(tā)"赶(gǎn)快(kuài)把(bǎ)洞(dòng)补(bǔ)上(shàng)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '牧(mù)民(mín)一(yì)开(kāi)始(shǐ)为(wèi)什(shén)么(me)不(bù)肯(kěn)补(bǔ)洞(dòng)？', options: ['因(yīn)为(wèi)他(tā)没(méi)有(yǒu)工(gōng)具(jù)', '因(yīn)为(wèi)他(tā)觉(jué)得(de)羊(yáng)已(yǐ)经(jīng)丢(diū)了(le)，补(bǔ)洞(dòng)没(méi)用(yòng)', '因(yīn)为(wèi)他(tā)想(xiǎng)多(duō)丢(diū)几(jǐ)只(zhī)', '因(yīn)为(wèi)天(tiān)太(tài)晚(wǎn)了(le)'], answer: 1, explanation: '牧(mù)民(mín)说(shuō)："羊(yáng)已(yǐ)经(jīng)丢(diū)了(le)，补(bǔ)洞(dòng)还(hái)有(yǒu)什(shén)么(me)用(yòng)？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '牧(mù)民(mín)什(shén)么(me)时(shí)候(hou)才(cái)补(bǔ)洞(dòng)的(de)？', options: ['丢(diū)了(le)第(dì)一(yī)只(zhī)羊(yáng)后(hòu)立(lì)刻(kè)补(bǔ)了(le)', '丢(diū)了(le)第(dì)二(èr)只(zhī)羊(yáng)后(hòu)才(cái)补(bǔ)', '一(yì)直(zhí)没(méi)补(bǔ)', '邻(lín)居(jū)帮(bāng)他(tā)补(bǔ)了(le)'], answer: 1, explanation: '丢(diū)了(le)第(dì)二(èr)只(zhī)羊(yáng)后(hòu)，他(tā)才(cái)后(hòu)悔(huǐ)了(le)，赶(gǎn)紧(jǐn)修(xiū)补(bǔ)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"亡(wáng)羊(yáng)补(bǔ)牢(láo)"的(de)"亡(wáng)"在(zài)这(zhè)里(lǐ)是(shì)什(shén)么(me)意(yì)思(si)？', options: ['死(sǐ)亡(wáng)', '丢(diū)失(shī)', '逃(táo)跑(pǎo)', '消(xiāo)失(shī)'], answer: 1, explanation: '"亡(wáng)"在(zài)这(zhè)里(lǐ)是(shì)"丢(diū)失(shī)"的(de)意(yì)思(si)，不(bú)是(shì)"死(sǐ)亡(wáng)"的(de)意(yì)思(si)。', stage: '字词选择' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)成(chéng)语(yǔ)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['羊(yáng)很(hěn)容(róng)易(yì)丢(diū)', '出(chū)了(le)问(wèn)题(tí)后(hòu)及(jí)时(shí)补(bǔ)救(jiù)，才(cái)能(néng)避(bì)免(miǎn)更(gèng)大(dà)的(de)损(sǔn)失(shī)', '不(bú)要(yào)养(yǎng)羊(yáng)', '邻(lín)居(jū)说(shuō)的(de)话(huà)都(dōu)是(shì)对(duì)的(de)'], answer: 1, explanation: '做(zuò)错(cuò)了(le)事(shì)不(bú)要(yào)紧(jǐn)，重(zhòng)要(yào)的(de)是(shì)要(yào)及(jí)时(shí)改(gǎi)正(zhèng)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '请(qǐng)找(zhǎo)出(chū)拼(pīn)音(yīn)正(zhèng)确(què)的(de)一(yí)项(xiàng)：', options: ['圈(juàn)', '补(pǔ)', '牢(láo)', '邻(línɡ)'], answer: 2, explanation: '"牢"读(láo)。"圈"在(zài)这(zhè)里(lǐ)读(juàn)，但"圈"也(yě)有(yǒu) quān 的(de)读(dú)音(yīn)。"补"读(bǔ)，"邻"读(lín)不读(línɡ)。', stage: '拼音练习' }
    ]
  },
  {
    id: 'r015',
    week: 4,
    category: '童话寓言',
    title: '寒(hán)号(hào)鸟(niǎo)',
    passage:
      '寒(hán)号(hào)鸟(niǎo)和(hé)喜(xǐ)鹊(què)是(shì)邻(lín)居(jū)。' +
      '秋(qiū)天(tiān)到(dào)了(le)，喜(xǐ)鹊(què)忙(máng)着(zhe)衔(xián)树(shù)枝(zhī)搭(dā)窝(wō)，' +
      '准(zhǔn)备(bèi)过(guò)冬(dōng)。' +
      '寒(hán)号(hào)鸟(niǎo)呢(ne)？它(tā)每(měi)天(tiān)睡(shuì)懒(lǎn)觉(jiào)，在(zài)树(shù)枝(zhī)上(shang)跳(tiào)来(lái)跳(tiào)去(qù)，' +
      '还(hái)笑(xiào)喜(xǐ)鹊(què)："天(tiān)气(qì)这(zhè)么(me)好(hǎo)，你(nǐ)累(lèi)不(bú)累(lèi)呀(ya)？"' +
      '冬(dōng)天(tiān)到(dào)了(le)，北(běi)风(fēng)呼(hū)呼(hū)地(de)吹(chuī)，天(tiān)气(qì)冷(lěng)极(jí)了(le)。' +
      '喜(xǐ)鹊(què)住(zhù)在(zài)自(zì)己(jǐ)温(wēn)暖(nuǎn)的(de)窝(wō)里(lǐ)，而(ér)寒(hán)号(hào)鸟(niǎo)呢(ne)？' +
      '它(tā)只(zhǐ)能(néng)缩(suō)在(zài)一(yí)个(gè)石(shí)缝(fèng)里(lǐ)，冻(dòng)得(de)直(zhí)发(fā)抖(dǒu)，' +
      '嘴(zuǐ)里(lǐ)不(bú)停(tíng)地(de)说(shuō)："哆(duō)啰(luo)啰(luo)，哆(duō)啰(luo)啰(luo)，' +
      '寒(hán)风(fēng)冻(dòng)死(sǐ)我(wǒ)，明(míng)天(tiān)就(jiù)搭(dā)窝(wō)。"' +
      '可(kě)是(shì)第(dì)二(èr)天(tiān)太(tài)阳(yáng)出(chū)来(lái)了(le)，暖(nuǎn)和(huo)了(le)一(yì)些(xiē)，' +
      '寒(hán)号(hào)鸟(niǎo)又(yòu)不(bù)想(xiǎng)搭(dā)窝(wō)了(le)。' +
      '就(jiù)这(zhè)样(yàng)，它(tā)一(yì)天(tiān)一(yì)天(tiān)地(de)拖(tuō)下(xià)去(qù)，' +
      '最(zuì)后(hòu)在(zài)一(yí)个(gè)特(tè)别(bié)寒(hán)冷(lěng)的(de)夜(yè)晚(wǎn)冻(dòng)死(sǐ)了(le)。',
    questions: [
      { type: 'multiple_choice', question: '喜(xǐ)鹊(què)在(zài)秋(qiū)天(tiān)忙(máng)着(zhe)做(zuò)什(shén)么(me)？', options: ['玩(wán)耍(shuǎ)', '衔(xián)树(shù)枝(zhī)搭(dā)窝(wō)准(zhǔn)备(bèi)过(guò)冬(dōng)', '找(zhǎo)食(shí)物(wù)', '旅(lǚ)行(xíng)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)喜(xǐ)鹊(què)"忙(máng)着(zhe)衔(xián)树(shù)枝(zhī)搭(dā)窝(wō)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '冬(dōng)天(tiān)到(dào)了(le)，寒(hán)号(hào)鸟(niǎo)怎(zěn)么(me)样(yàng)了(le)？', options: ['住(zhù)在(zài)温(wēn)暖(nuǎn)的(de)窝(wō)里(lǐ)', '在(zài)石(shí)缝(fèng)里(lǐ)冻(dòng)得(de)发(fā)抖(dǒu)', '找(zhǎo)到(dào)了(le)好(hǎo)吃(chī)的(de)', '和(hé)喜(xǐ)鹊(què)一(yì)起(qǐ)住(zhù)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)寒(hán)号(hào)鸟(niǎo)"缩(suō)在(zài)石(shí)缝(fèng)里(lǐ)，冻(dòng)得(de)直(zhí)发(fā)抖(dǒu)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '寒(hán)号(hào)鸟(niǎo)为(wèi)什(shén)么(me)最(zuì)后(hòu)冻(dòng)死(sǐ)了(le)？', options: ['因(yīn)为(wèi)天(tiān)太(tài)冷(lěng)了(le)', '因(yīn)为(wèi)它(tā)总(zǒng)是(shì)拖(tuō)延(yán)，不(bù)肯(kěn)搭(dā)窝(wō)', '因(yīn)为(wèi)喜(xǐ)鹊(què)不(bù)帮(bāng)它(tā)', '因(yīn)为(wèi)它(tā)没(méi)有(yǒu)朋(péng)友(yǒu)'], answer: 1, explanation: '寒(hán)号(hào)鸟(niǎo)"一(yì)天(tiān)一(yì)天(tiān)地(de)拖(tuō)下(xià)去(qù)"，始(shǐ)终(zhōng)不(bù)肯(kěn)搭(dā)窝(wō)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '寒(hán)号(hào)鸟(niǎo)总(zǒng)是(shì)说(shuō)什(shén)么(me)？', options: ['今(jīn)天(tiān)就(jiù)搭(dā)窝(wō)', '明(míng)天(tiān)就(jiù)搭(dā)窝(wō)', '不(bù)想(xiǎng)搭(dā)窝(wō)', '请(qǐng)喜(xǐ)鹊(què)帮(bāng)忙(máng)'], answer: 1, explanation: '寒(hán)号(hào)鸟(niǎo)每(měi)次(cì)都(dōu)说(shuō)："明(míng)天(tiān)就(jiù)搭(dā)窝(wō)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"鹊(què)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['qüè', 'què', 'xuè', 'qùe'], answer: 1, explanation: '"鹊"读(què)，第(dì)四(sì)声(shēng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['冬(dōng)天(tiān)很(hěn)冷(lěng)', '今(jīn)天(tiān)的(de)事(shì)今(jīn)天(tiān)做(zuò)，不(bù)能(néng)拖(tuō)延(yán)', '喜(xǐ)鹊(què)是(shì)好(hǎo)朋(péng)友(yǒu)', '要(yào)多(duō)睡(shuì)觉(jiào)'], answer: 1, explanation: '这(zhè)个(gè)故(gù)事(shì)教(jiào)育(yù)我(wǒ)们(men)：今(jīn)天(tiān)的(de)事(shì)今(jīn)天(tiān)做(zuò)，不(bù)能(néng)总(zǒng)是(shì)拖(tuō)延(yán)等(děng)到(dào)明(míng)天(tiān)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"哆(duō)啰(luo)啰(luo)"是(shì)描(miáo)写(xiě)什(shén)么(me)的(de)？', options: ['开(kāi)心(xīn)的(de)样(yàng)子(zi)', '寒(hán)冷(lěng)发(fā)抖(dǒu)的(de)样(yàng)子(zi)', '唱(chàng)歌(gē)的(de)样(yàng)子(zi)', '跳(tiào)舞(wǔ)的(de)样(yàng)子(zi)'], answer: 1, explanation: '"哆(duō)啰(luo)啰(luo)"是(shì)形(xíng)容(róng)冻(dòng)得(de)发(fā)抖(dǒu)时(shí)说(shuō)话(huà)的(de)样(yàng)子(zi)。', stage: '好词摘抄' }
    ]
  },

  // ==================== 第5周（4篇）====================
  {
    id: 'r016',
    week: 5,
    category: '童话寓言',
    title: '坐(zuò)井(jǐng)观(guān)天(tiān)',
    passage:
      '一(yì)只(zhī)小(xiǎo)青(qīng)蛙(wā)坐(zuò)在(zài)一(yì)口(kǒu)井(jǐng)里(lǐ)。' +
      '它(tā)每(měi)天(tiān)抬(tái)头(tóu)看(kàn)着(zhe)井(jǐng)口(kǒu)那(nà)一(yì)小(xiǎo)片(piàn)天(tiān)空(kōng)，' +
      '觉(jué)得(de)天(tiān)不(bú)过(guò)就(jiù)井(jǐng)口(kǒu)那(nà)么(me)大(dà)。' +
      '有(yǒu)一(yì)天(tiān)，一(yì)只(zhī)从(cóng)海(hǎi)边(biān)飞(fēi)来(lái)的(de)小(xiǎo)鸟(niǎo)停(tíng)在(zài)井(jǐng)边(biān)休(xiū)息(xi)。' +
      '小(xiǎo)鸟(niǎo)对(duì)青(qīng)蛙(wā)说(shuō)："朋(péng)友(yǒu)，你(nǐ)好(hǎo)啊(ā)！' +
      '我(wǒ)飞(fēi)了(le)很(hěn)远(yuǎn)很(hěn)远(yuǎn)的(de)路(lù)，天(tiān)空(kōng)可(kě)大(dà)了(le)！"' +
      '青(qīng)蛙(wā)听(tīng)了(le)哈(hā)哈(hā)大(dà)笑(xiào)：' +
      '"天(tiān)空(kōng)就(jiù)这(zhè)么(me)一(yì)点(diǎn)点(dian)大(dà)，你(nǐ)别(bié)吹(chuī)牛(niú)了(le)！"' +
      '小(xiǎo)鸟(niǎo)说(shuō)："你(nǐ)要(yào)是(shì)不(bù)信(xìn)，就(jiù)跳(tiào)出(chū)井(jǐng)口(kǒu)来(lái)看(kàn)看(kan)吧(ba)！"' +
      '青(qīng)蛙(wā)根(gēn)本(běn)不(bù)相(xiāng)信(xìn)，它(tā)觉(jué)得(de)自(zì)己(jǐ)每(měi)天(tiān)看(kàn)到(dào)的(de)天(tiān)' +
      '就(jiù)是(shì)全(quán)部(bù)的(de)天(tiān)了(le)。' +
      '小(xiǎo)鸟(niǎo)叹(tàn)了(le)口(kǒu)气(qì)说(shuō)："你(nǐ)呀(ya)，' +
      '整(zhěng)天(tiān)坐(zuò)在(zài)井(jǐng)里(lǐ)，看(kàn)到(dào)的(de)只(zhǐ)是(shì)天(tiān)空(kōng)的(de)一(yì)小(xiǎo)块(kuài)！"' +
      '说(shuō)完(wán)，小(xiǎo)鸟(niǎo)飞(fēi)走(zǒu)了(le)。青(qīng)蛙(wā)继(jì)续(xù)坐(zuò)在(zài)井(jǐng)里(lǐ)，' +
      '还(hái)是(shì)觉(jué)得(de)自(zì)己(jǐ)是(shì)对(duì)的(de)。',
    questions: [
      { type: 'multiple_choice', question: '青(qīng)蛙(wā)住(zhù)在(zài)哪(nǎ)里(lǐ)？', options: ['河(hé)里(lǐ)', '海(hǎi)里(lǐ)', '井(jǐng)里(lǐ)', '湖(hú)里(lǐ)'], answer: 2, explanation: '文(wén)中(zhōng)说(shuō)："一(yì)只(zhī)小(xiǎo)青(qīng)蛙(wā)坐(zuò)在(zài)一(yì)口(kǒu)井(jǐng)里(lǐ)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '青(qīng)蛙(wā)觉(jué)得(de)天(tiān)空(kōng)有(yǒu)多(duō)大(dà)？', options: ['无(wú)边(biān)无(wú)际(jì)', '只(zhǐ)有(yǒu)井(jǐng)口(kǒu)那(nà)么(me)大(dà)', '和(hé)房(fáng)子(zi)一(yí)样(yàng)大(dà)', '比(bǐ)井(jǐng)口(kǒu)大(dà)一(yì)点(diǎn)'], answer: 1, explanation: '青(qīng)蛙(wā)觉(jué)得(de)天(tiān)"不(bú)过(guò)就(jiù)井(jǐng)口(kǒu)那(nà)么(me)大(dà)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)鸟(niǎo)建(jiàn)议(yì)青(qīng)蛙(wā)做(zuò)什(shén)么(me)？', options: ['继(jì)续(xù)待(dāi)在(zài)井(jǐng)里(lǐ)', '跳(tiào)出(chū)井(jǐng)口(kǒu)来(lái)看(kàn)看(kan)', '和(hé)它(tā)一(yì)起(qǐ)飞(fēi)', '去(qù)找(zhǎo)别(bié)的(de)青(qīng)蛙(wā)'], answer: 1, explanation: '小(xiǎo)鸟(niǎo)说(shuō)："你(nǐ)要(yào)是(shì)不(bù)信(xìn)，就(jiù)跳(tiào)出(chū)井(jǐng)口(kǒu)来(lái)看(kàn)看(kan)吧(ba)！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '青(qīng)蛙(wā)为(wèi)什(shén)么(me)不(bù)相(xiāng)信(xìn)小(xiǎo)鸟(niǎo)说(shuō)的(de)话(huà)？', options: ['因(yīn)为(wèi)小(xiǎo)鸟(niǎo)说(shuō)话(huà)很(hěn)难(nán)听(tīng)', '因(yīn)为(wèi)青(qīng)蛙(wā)只(zhǐ)看(kàn)到(dào)过(guò)井(jǐng)口(kǒu)大(dà)的(de)天(tiān)空(kōng)', '因(yīn)为(wèi)青(qīng)蛙(wā)不(bù)喜(xǐ)欢(huān)小(xiǎo)鸟(niǎo)', '因(yīn)为(wèi)天(tiān)真(zhēn)的(de)很(hěn)小(xiǎo)'], answer: 1, explanation: '青(qīng)蛙(wā)从(cóng)来(lái)没(méi)有(yǒu)跳(tiào)出(chū)过(guò)井(jǐng)口(kǒu)，只(zhǐ)看(kàn)到(dào)过(guò)井(jǐng)口(kǒu)大(dà)的(de)天(tiān)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"坐(zuò)井(jǐng)观(guān)天(tiān)"这(zhè)个(gè)成(chéng)语(yǔ)用(yòng)来(lái)形(xíng)容(róng)什(shén)么(me)人(rén)？', options: ['知(zhī)识(shí)很(hěn)多(duō)的(de)人(rén)', '见(jiàn)识(shí)短(duǎn)浅(qiǎn)，却(què)自(zì)以(yǐ)为(wéi)是(shì)的(de)人(rén)', '很(hěn)聪(cōng)明(míng)的(de)人(rén)', '住(zhù)在(zài)井(jǐng)里(lǐ)的(de)人(rén)'], answer: 1, explanation: '"坐(zuò)井(jǐng)观(guān)天(tiān)"比(bǐ)喻(yù)见(jiàn)识(shí)少(shǎo)、眼(yǎn)光(guāng)短(duǎn)浅(qiǎn)，却(què)自(zì)以(yǐ)为(wéi)是(shì)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '请(qǐng)选(xuǎn)出(chū)拼(pīn)音(yīn)正(zhèng)确(què)的(de)一(yí)项(xiàng)：', options: ['蛙(huá)', '井(jǐng)', '观(guāng)', '沿(yán)'], answer: 1, explanation: '"井"读(jǐng)。"蛙"读(wā)，"观"读(guān)，"沿"读(yán)但(dàn)是(shì)那(nà)字(zì)应(yīng)为(wéi)"信"不读"沿"。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['天(tiān)空(kōng)真(zhēn)的(de)很(hěn)小(xiǎo)', '要(yào)多(duō)走(zǒu)出(chū)去(qù)看(kàn)看(kan)，见(jiàn)识(shí)更(gèng)广(guǎng)阔(kuò)的(de)世(shì)界(jiè)', '青(qīng)蛙(wā)说(shuō)的(de)是(shì)对(duì)的(de)', '不(bú)要(yào)和(hé)小(xiǎo)鸟(niǎo)说(shuō)话(huà)'], answer: 1, explanation: '我(wǒ)们(men)不(bù)能(néng)像(xiàng)青(qīng)蛙(wā)那(nà)样(yàng)，要(yào)多(duō)走(zǒu)出(chū)去(qù)看(kàn)看(kan)更(gèng)广(guǎng)阔(kuò)的(de)世(shì)界(jiè)。', stage: '道理启示' }
    ]
  },
  {
    id: 'r017',
    week: 5,
    category: '快乐读书吧',
    title: '《大(dà)头(tóu)儿(ér)子(zi)和(hé)小(xiǎo)头(tóu)爸(bà)爸(ba)》节(jié)选(xuǎn)',
    passage:
      '大(dà)头(tóu)儿(ér)子(zi)有(yǒu)一(yí)个(gè)小(xiǎo)头(tóu)爸(bà)爸(ba)。' +
      '别(bié)人(rén)的(de)爸(bà)爸(ba)都(dōu)是(shì)大(dà)头(tóu)，可(kě)他(tā)的(de)爸(bà)爸(ba)却(què)是(shì)小(xiǎo)头(tóu)，' +
      '这(zhè)让(ràng)大(dà)头(tóu)儿(ér)子(zi)觉(jué)得(de)很(hěn)有(yǒu)趣(qù)。' +
      '星(xīng)期(qī)天(tiān)，小(xiǎo)头(tóu)爸(bà)爸(ba)带(dài)大(dà)头(tóu)儿(ér)子(zi)去(qù)动(dòng)物(wù)园(yuán)。' +
      '大(dà)头(tóu)儿(ér)子(zi)最(zuì)喜(xǐ)欢(huān)大(dà)象(xiàng)了(le)，' +
      '因(yīn)为(wèi)大(dà)象(xiàng)也(yě)有(yǒu)一(yí)个(gè)很(hěn)大(dà)很(hěn)大(dà)的(de)头(tóu)。' +
      '他(tā)站(zhàn)在(zài)大(dà)象(xiàng)面(miàn)前(qián)，对(duì)爸(bà)爸(ba)说(shuō)：' +
      '"爸(bà)爸(ba)，你(nǐ)看(kàn)，大(dà)象(xiàng)的(de)头(tóu)和(hé)我(wǒ)的(de)头(tóu)一(yí)样(yàng)大(dà)！"' +
      '小(xiǎo)头(tóu)爸(bà)爸(ba)笑(xiào)了(le)："是(shì)啊(ā)，你(nǐ)们(men)都(dōu)是(shì)大(dà)头(tóu)！"' +
      '大(dà)头(tóu)儿(ér)子(zi)又(yòu)说(shuō)："可(kě)是(shì)爸(bà)爸(ba)，你(nǐ)为(wèi)什(shén)么(me)是(shì)小(xiǎo)头(tóu)呢(ne)？"' +
      '小(xiǎo)头(tóu)爸(bà)爸(ba)摸(mō)了(le)摸(mo)自(zì)己(jǐ)的(de)头(tóu)说(shuō)：' +
      '"因(yīn)为(wèi)爸(bà)爸(ba)的(de)头(tóu)虽(suī)然(rán)小(xiǎo)，可(kě)里(lǐ)面(miàn)装(zhuāng)的(de)都(dōu)是(shì)爱(ài)你(nǐ)的(de)东(dōng)西(xi)呀(ya)！"' +
      '大(dà)头(tóu)儿(ér)子(zi)听(tīng)了(le)，觉(jué)得(de)很(hěn)幸(xìng)福(fú)。' +
      '他(tā)抱(bào)了(le)抱(bao)爸(bà)爸(ba)，说(shuō)：' +
      '"我(wǒ)的(de)大(dà)头(tóu)里(lǐ)也(yě)装(zhuāng)满(mǎn)了(le)爱(ài)爸(bà)爸(ba)的(de)东(dōng)西(xi)！"',
    questions: [
      { type: 'multiple_choice', question: '大(dà)头(tóu)儿(ér)子(zi)的(de)爸(bà)爸(ba)是(shì)什(shén)么(me)样(yàng)的(de)？', options: ['大(dà)头(tóu)爸(bà)爸(ba)', '小(xiǎo)头(tóu)爸(bà)爸(ba)', '高(gāo)个(gè)子(zi)爸(bà)爸(ba)', '胖(pàng)爸(bà)爸(ba)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)"大(dà)头(tóu)儿(ér)子(zi)有(yǒu)一(yí)个(gè)小(xiǎo)头(tóu)爸(bà)爸(ba)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '爸(bà)爸(ba)带(dài)大(dà)头(tóu)儿(ér)子(zi)去(qù)了(le)哪(nǎ)里(lǐ)？', options: ['公(gōng)园(yuán)', '动(dòng)物(wù)园(yuán)', '游(yóu)乐(lè)园(yuán)', '学(xué)校(xiào)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)："星(xīng)期(qī)天(tiān)，小(xiǎo)头(tóu)爸(bà)爸(ba)带(dài)大(dà)头(tóu)儿(ér)子(zi)去(qù)动(dòng)物(wù)园(yuán)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '大(dà)头(tóu)儿(ér)子(zi)最(zuì)喜(xǐ)欢(huān)什(shén)么(me)动(dòng)物(wù)？', options: ['狮(shī)子(zi)', '老(lǎo)虎(hǔ)', '大(dà)象(xiàng)', '猴(hóu)子(zi)'], answer: 2, explanation: '文(wén)中(zhōng)说(shuō)："大(dà)头(tóu)儿(ér)子(zi)最(zuì)喜(xǐ)欢(huān)大(dà)象(xiàng)了(le)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '爸(bà)爸(ba)说(shuō)他(tā)小(xiǎo)小(xiǎo)的(de)头(tóu)里(lǐ)装(zhuāng)着(zhe)什(shén)么(me)？', options: ['知(zhī)识(shí)', '爱(ài)儿(ér)子(zi)的(de)东(dōng)西(xi)', '故(gù)事(shì)', '玩(wán)具(jù)'], answer: 1, explanation: '爸(bà)爸(ba)说(shuō)："爸(bà)爸(ba)的(de)头(tóu)虽(suī)然(rán)小(xiǎo)，可(kě)里(lǐ)面(miàn)装(zhuāng)的(de)都(dōu)是(shì)爱(ài)你(nǐ)的(de)东(dōng)西(xi)呀(ya)！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"幸(xìng)福(fú)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['xìng fú', 'xìn fú', 'xìng fǔ', 'xīn fú'], answer: 0, explanation: '"幸"读(xìng)，"福"读(fú)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)让(ràng)我(wǒ)们(men)感(gǎn)受(shòu)到(dào)了(le)什(shén)么(me)？', options: ['爸(bà)爸(ba)的(de)头(tóu)真(zhēn)的(de)很(hěn)小(xiǎo)', '大(dà)头(tóu)儿(ér)子(zi)不(bù)喜(xǐ)欢(huān)爸(bà)爸(ba)', '父(fù)子(zǐ)之(zhī)间(jiān)深(shēn)厚(hòu)的(de)爱(ài)', '大(dà)象(xiàng)很(hěn)可(kě)爱(ài)'], answer: 2, explanation: '爸(bà)爸(ba)和(hé)儿(ér)子(zi)互(hù)相(xiāng)表(biǎo)达(dá)了(le)对(duì)彼(bǐ)此(cǐ)的(de)爱(ài)，让(ràng)人(rén)感(gǎn)动(dòng)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '大(dà)头(tóu)儿(ér)子(zi)为(wèi)什(shén)么(me)喜(xǐ)欢(huān)大(dà)象(xiàng)？', options: ['因(yīn)为(wèi)大(dà)象(xiàng)很(hěn)可(kě)爱(ài)', '因(yīn)为(wèi)大(dà)象(xiàng)也(yě)有(yǒu)一(yí)个(gè)很(hěn)大(dà)很(hěn)大(dà)的(de)头(tóu)', '因(yīn)为(wèi)大(dà)象(xiàng)会(huì)喷(pēn)水(shuǐ)', '因(yīn)为(wèi)大(dà)象(xiàng)是(shì)灰(huī)色(sè)的(de)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)："因(yīn)为(wèi)大(dà)象(xiàng)也(yě)有(yǒu)一(yí)个(gè)很(hěn)大(dà)很(hěn)大(dà)的(de)头(tóu)。"', stage: '内容理解' }
    ]
  },
  {
    id: 'r018',
    week: 5,
    category: '成语故事',
    title: '愚(yú)公(gōng)移(yí)山(shān)',
    passage:
      '很(hěn)久(jiǔ)很(hěn)久(jiǔ)以(yǐ)前(qián)，有(yǒu)一(yí)位(wèi)老(lǎo)爷(yé)爷(ye)叫(jiào)愚(yú)公(gōng)。' +
      '他(tā)家(jiā)门(mén)前(qián)有(yǒu)两(liǎng)座(zuò)大(dà)山(shān)，一(yì)家(jiā)人(rén)出(chū)门(mén)很(hěn)不(bù)方(fāng)便(biàn)。' +
      '有(yǒu)一(yì)天(tiān)，愚(yú)公(gōng)把(bǎ)全(quán)家(jiā)人(rén)叫(jiào)到(dào)一(yì)起(qǐ)，说(shuō)：' +
      '"我(wǒ)们(men)一(yì)起(qǐ)把(bǎ)这(zhè)两(liǎng)座(zuò)山(shān)挖(wā)掉(diào)吧(ba)！"' +
      '家(jiā)人(rén)们(men)都(dōu)表(biǎo)示(shì)赞(zàn)成(chéng)。' +
      '第(dì)二(èr)天(tiān)，大(dà)家(jiā)就(jiù)开(kāi)始(shǐ)挖(wā)山(shān)了(le)。' +
      '有(yǒu)一(yí)个(gè)叫(jiào)智(zhì)叟(sǒu)的(de)老(lǎo)人(rén)看(kàn)到(dào)了(le)，笑(xiào)着(zhe)说(shuō)：' +
      '"你(nǐ)都(dōu)这(zhè)么(me)大(dà)年(nián)纪(jì)了(le)，怎(zěn)么(me)可(kě)能(néng)挖(wā)掉(diào)两(liǎng)座(zuò)大(dà)山(shān)呢(ne)？"' +
      '愚(yú)公(gōng)回(huí)答(dá)说(shuō)："我(wǒ)死(sǐ)了(le)有(yǒu)儿(ér)子(zi)，' +
      '儿(ér)子(zi)死(sǐ)了(le)有(yǒu)孙(sūn)子(zi)，孙(sūn)子(zi)又(yòu)有(yǒu)儿(ér)子(zi)，' +
      '子(zǐ)子(zǐ)孙(sūn)孙(sūn)没(méi)有(yǒu)穷(qióng)尽(jìn)，而(ér)山(shān)不(bú)会(huì)长(zhǎng)高(gāo)，' +
      '为(wèi)什(shén)么(me)挖(wā)不(bù)平(píng)呢(ne)？"' +
      '上(shàng)天(tiān)被(bèi)愚(yú)公(gōng)的(de)精(jīng)神(shén)感(gǎn)动(dòng)了(le)，' +
      '就(jiù)派(pài)了(le)两(liǎng)位(wèi)大(dà)力(lì)神(shén)把(bǎ)两(liǎng)座(zuò)山(shān)背(bēi)走(zǒu)了(le)。',
    questions: [
      { type: 'multiple_choice', question: '愚(yú)公(gōng)为(wèi)什(shén)么(me)要(yào)挖(wā)山(shān)？', options: ['因(yīn)为(wèi)山(shān)上(shang)有(yǒu)宝(bǎo)藏(cáng)', '因(yīn)为(wèi)山(shān)挡(dǎng)住(zhù)了(le)出(chū)门(mén)的(de)路(lù)，很(hěn)不(bù)方(fāng)便(biàn)', '因(yīn)为(wèi)他(tā)想(xiǎng)修(xiū)房(fáng)子(zi)', '因(yīn)为(wèi)他(tā)觉(jué)得(de)山(shān)太(tài)难(nán)看(kàn)了(le)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)山(shān)在(zài)家(jiā)门(mén)前(qián)，"一(yì)家(jiā)人(rén)出(chū)门(mén)很(hěn)不(bù)方(fāng)便(biàn)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '智(zhì)叟(sǒu)说(shuō)了(le)什(shén)么(me)？', options: ['加(jiā)油(yóu)加(jiā)油(yóu)！', '你(nǐ)年(nián)纪(jì)大(dà)了(le)，肯(kěn)定(dìng)挖(wā)不(bù)完(wán)', '我(wǒ)来(lái)帮(bāng)你(nǐ)', '这(zhè)山(shān)真(zhēn)漂(piào)亮(liang)'], answer: 1, explanation: '智(zhì)叟(sǒu)笑(xiào)着(zhe)说(shuō)："你(nǐ)都(dōu)这(zhè)么(me)大(dà)年(nián)纪(jì)了(le)，怎(zěn)么(me)可(kě)能(néng)挖(wā)掉(diào)两(liǎng)座(zuò)大(dà)山(shān)呢(ne)？"', stage: '内容理解' },
      { type: 'multiple_choice', question: '愚(yú)公(gōng)是(shì)怎(zěn)样(yàng)回(huí)答(dá)的(de)？', options: ['我(wǒ)很(hěn)快(kuài)就(jiù)能(néng)挖(wā)完(wán)', '我(wǒ)不(bù)挖(wā)了(le)', '子(zǐ)子(zǐ)孙(sūn)孙(sūn)一(yì)代(dài)一(yì)代(dài)坚(jiān)持(chí)挖(wā)下(xià)去(qù)，一(yí)定(dìng)能(néng)挖(wā)平(píng)', '你(nǐ)说(shuō)得(de)对(duì)'], answer: 2, explanation: '愚(yú)公(gōng)说(shuō)子(zǐ)子(zǐ)孙(sūn)孙(sūn)没(méi)有(yǒu)穷(qióng)尽(jìn)，山(shān)不(bú)会(huì)长(zhǎng)高(gāo)，一(yí)定(dìng)能(néng)挖(wā)平(píng)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '最(zuì)后(hòu)山(shān)是(shì)怎(zěn)么(me)没(méi)的(de)？', options: ['愚(yú)公(gōng)自(zì)己(jǐ)挖(wā)平(píng)的(de)', '被(bèi)大(dà)力(lì)神(shén)背(bēi)走(zǒu)了(le)', '地(dì)震(zhèn)震(zhèn)倒(dǎo)了(le)', '被(bèi)水(shuǐ)冲(chōng)走(zǒu)了(le)'], answer: 1, explanation: '文(wén)末(mò)说(shuō)："上(shàng)天(tiān)被(bèi)愚(yú)公(gōng)的(de)精(jīng)神(shén)感(gǎn)动(dòng)了(le)，就(jiù)派(pài)了(le)两(liǎng)位(wèi)大(dà)力(lì)神(shén)把(bǎ)两(liǎng)座(zuò)山(shān)背(bēi)走(zǒu)了(le)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"愚(yú)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['yū', 'yú', 'yǔ', 'yù'], answer: 1, explanation: '"愚"读(yú)，第(dì)二(èr)声(shēng)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['山(shān)很(hěn)容(róng)易(yì)被(bèi)挖(wā)掉(diào)', '只(zhǐ)要(yào)有(yǒu)决(jué)心(xīn)，坚(jiān)持(chí)不(bú)懈(xiè)，困(kùn)难(nán)总(zǒng)能(néng)被(bèi)克(kè)服(fú)', '年(nián)纪(jì)大(dà)的(de)人(rén)不(bù)能(néng)干(gàn)活(huó)', '要(yào)等(děng)别(bié)人(rén)来(lái)帮(bāng)忙(máng)'], answer: 1, explanation: '只(zhǐ)要(yào)有(yǒu)坚(jiān)定(dìng)的(de)决(jué)心(xīn)和(hé)持(chí)之(zhī)以(yǐ)恒(héng)的(de)努(nǔ)力(lì)，再(zài)大(dà)的(de)困(kùn)难(nán)也(yě)能(néng)克(kè)服(fú)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"子(zǐ)子(zǐ)孙(sūn)孙(sūn)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['儿(ér)子(zi)和(hé)孙(sūn)子(zi)', '一(yì)代(dài)又(yòu)一(yì)代(dài)的(de)后(hòu)代(dài)', '很(hěn)多(duō)孩(hái)子(zi)', '很(hěn)多(duō)老(lǎo)人(rén)'], answer: 1, explanation: '"子(zǐ)子(zǐ)孙(sūn)孙(sūn)"就(jiù)是(shì)一(yì)代(dài)又(yòu)一(yì)代(dài)的(de)意(yì)思(si)。', stage: '字词选择' }
    ]
  },
  {
    id: 'r019',
    week: 5,
    category: '古诗',
    title: '悯(mǐn)农(nóng)（其(qí)二(èr)）',
    passage:
      '锄(chú)禾(hé)日(rì)当(dāng)午(wǔ)，\n' +
      '汗(hàn)滴(dī)禾(hé)下(xià)土(tǔ)。\n' +
      '谁(shuí)知(zhī)盘(pán)中(zhōng)餐(cān)，\n' +
      '粒(lì)粒(lì)皆(jiē)辛(xīn)苦(kǔ)。\n\n' +
      '——[唐(táng)] 李(lǐ)绅(shēn)\n\n' +
      '这(zhè)首(shǒu)诗(shī)写(xiě)的(de)是(shì)农(nóng)民(mín)伯(bó)伯(bo)在(zài)田(tián)里(lǐ)辛(xīn)苦(kǔ)劳(láo)动(dòng)的(de)情(qíng)景(jǐng)。' +
      '中(zhōng)午(wǔ)的(de)太(tài)阳(yáng)火(huǒ)辣(là)辣(là)的(de)，农(nóng)民(mín)伯(bó)伯(bo)还(hái)在(zài)锄(chú)草(cǎo)，' +
      '汗(hàn)水(shuǐ)一(yì)滴(dī)一(yì)滴(dī)地(de)滴(dī)在(zài)土(tǔ)地(dì)里(lǐ)。' +
      '有(yǒu)谁(shuí)知(zhī)道(dào)呢(ne)？我(wǒ)们(men)吃(chī)的(de)每(měi)一(yì)粒(lì)米(mǐ)饭(fàn)，' +
      '都(dōu)是(shì)农(nóng)民(mín)伯(bó)伯(bo)用(yòng)辛(xīn)勤(qín)的(de)劳(láo)动(dòng)换(huàn)来(lái)的(de)！' +
      '这(zhè)首(shǒu)诗(shī)教(jiào)育(yù)我(wǒ)们(men)要(yào)珍(zhēn)惜(xī)粮(liáng)食(shi)，' +
      '不(bù)能(néng)浪(làng)费(fèi)。',
    questions: [
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)的(de)作(zuò)者(zhě)是(shì)？', options: ['李(lǐ)白(bái)', '杜(dù)甫(fǔ)', '李(lǐ)绅(shēn)', '孟(mèng)浩(hào)然(rán)'], answer: 2, explanation: '这(zhè)首(shǒu)诗(shī)是(shì)唐(táng)代(dài)诗(shī)人(rén)李(lǐ)绅(shēn)写(xiě)的(de)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗(shī)中(zhōng)描(miáo)写(xiě)农(nóng)民(mín)在(zài)什(shén)么(me)时(shí)间(jiān)劳(láo)动(dòng)？', options: ['早(zǎo)上(shang)', '中(zhōng)午(wǔ)', '下(xià)午(wǔ)', '晚(wǎn)上(shang)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)"锄(chú)禾(hé)日(rì)当(dāng)午(wǔ)"，就(jiù)是(shì)中(zhōng)午(wǔ)的(de)时(shí)候(hou)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"粒(lì)粒(lì)皆(jiē)辛(xīn)苦(kǔ)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['每(měi)一(yì)粒(lì)米(mǐ)都(dōu)来(lái)得(de)很(hěn)辛(xīn)苦(kǔ)', '米(mǐ)粒(lì)很(hěn)大(dà)', '饭(fàn)很(hěn)好(hǎo)吃(chī)', '种(zhòng)粮(liáng)食(shi)很(hěn)简(jiǎn)单(dān)'], answer: 0, explanation: '"粒(lì)粒(lì)皆(jiē)辛(xīn)苦(kǔ)"意(yì)思(si)是(shì)每(měi)一(yì)粒(lì)粮(liáng)食(shi)都(dōu)来(lái)之(zhī)不(bú)易(yì)。', stage: '字词选择' },
      { type: 'multiple_choice', question: '"皆(jiē)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['jiē', 'jié', 'xiē', 'xié'], answer: 0, explanation: '"皆"读(jiē)，第(dì)一(yī)声(shēng)，意(yì)思(si)是(shì)"都(dōu)"。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)主(zhǔ)要(yào)教(jiào)育(yù)我(wǒ)们(men)什(shén)么(me)？', options: ['要(yào)多(duō)吃(chī)饭(fàn)', '要(yào)珍(zhēn)惜(xī)粮(liáng)食(shi)，不(bù)能(néng)浪(làng)费(fèi)', '要(yào)学(xué)会(huì)种(zhòng)田(tián)', '中(zhōng)午(wǔ)要(yào)休(xiū)息(xi)'], answer: 1, explanation: '这(zhè)首(shǒu)诗(shī)让(ràng)我(wǒ)们(men)明(míng)白(bái)粮(liáng)食(shi)来(lái)之(zhī)不(bú)易(yì)，要(yào)珍(zhēn)惜(xī)粮(liáng)食(shi)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '诗(shī)中(zhōng)哪(nǎ)个(gè)词(cí)描(miáo)写(xiě)了(le)农(nóng)民(mín)劳(láo)动(dòng)的(de)辛(xīn)苦(kǔ)？', options: ['锄(chú)禾(hé)', '汗(hàn)滴(dī)', '盘(pán)中(zhōng)', '粒(lì)粒(lì)'], answer: 1, explanation: '"汗(hàn)滴(dī)"写(xiě)出(chū)了(le)农(nóng)民(mín)在(zài)烈(liè)日(rì)下(xià)汗(hàn)水(shuǐ)直(zhí)流(liú)的(de)辛(xīn)苦(kǔ)。', stage: '好词摘抄' },
      { type: 'multiple_choice', question: '你(nǐ)觉(jué)得(de)我(wǒ)们(men)应(yīng)该(gāi)怎(zěn)么(me)做(zuò)？', options: ['剩(shèng)饭(fàn)就(jiù)倒(dào)掉(diào)', '吃(chī)多(duō)少(shǎo)盛(chéng)多(duō)少(shǎo)，不(bú)浪(làng)费(fèi)', '不(bù)吃(chī)饭(fàn)', '只(zhǐ)吃(chī)菜(cài)不(bù)吃(chī)饭(fàn)'], answer: 1, explanation: '珍(zhēn)惜(xī)粮(liáng)食(shi)就(jiù)是(shì)吃(chī)多(duō)少(shǎo)盛(chéng)多(duō)少(shǎo)，不(bù)剩(shèng)饭(fàn)。', stage: '道理启示' }
    ]
  },

  // ==================== 第6周（3篇）====================
  {
    id: 'r020',
    week: 6,
    category: '童话寓言',
    title: '狐(hú)假(jiǎ)虎(hǔ)威(wēi)',
    passage:
      '在(zài)一(yí)片(piàn)大(dà)森(sēn)林(lín)里(lǐ)，有(yǒu)一(yì)只(zhī)大(dà)老(lǎo)虎(hǔ)。' +
      '它(tā)是(shì)森(sēn)林(lín)之(zhī)王(wáng)，所(suǒ)有(yǒu)动(dòng)物(wù)都(dōu)怕(pà)它(tā)。' +
      '有(yǒu)一(yì)天(tiān)，大(dà)老(lǎo)虎(hǔ)抓(zhuā)住(zhù)了(le)一(yì)只(zhī)狐(hú)狸(li)，' +
      '正(zhèng)准(zhǔn)备(bèi)吃(chī)掉(diào)它(tā)。' +
      '狐(hú)狸(li)急(jí)中(zhōng)生(shēng)智(zhì)，对(duì)老(lǎo)虎(hǔ)说(shuō)：' +
      '"你(nǐ)不(bù)能(néng)吃(chī)我(wǒ)！上(shàng)天(tiān)派(pài)我(wǒ)来(lái)做(zuò)百(bǎi)兽(shòu)之(zhī)王(wáng)，' +
      '你(nǐ)要(yào)是(shì)吃(chī)了(le)我(wǒ)，上(shàng)天(tiān)会(huì)惩(chéng)罚(fá)你(nǐ)的(de)！"' +
      '老(lǎo)虎(hǔ)半(bàn)信(xìn)半(bàn)疑(yí)。狐(hú)狸(li)接(jiē)着(zhe)说(shuō)：' +
      '"你(nǐ)要(yào)是(shì)不(bù)信(xìn)，就(jiù)跟(gēn)在(zài)我(wǒ)后(hòu)面(miàn)走(zǒu)一(yì)圈(quān)。' +
      '看(kàn)看(kan)所(suǒ)有(yǒu)动(dòng)物(wù)见(jiàn)到(dào)我(wǒ)会(huì)不(bú)会(huì)逃(táo)跑(pǎo)！"' +
      '于(yú)是(shì)，狐(hú)狸(li)在(zài)前(qián)面(miàn)大(dà)摇(yáo)大(dà)摆(bǎi)地(de)走(zǒu)，' +
      '老(lǎo)虎(hǔ)跟(gēn)在(zài)后(hòu)面(miàn)。' +
      '森(sēn)林(lín)里(lǐ)的(de)动(dòng)物(wù)们(men)一(yí)看(kàn)到(dào)老(lǎo)虎(hǔ)，都(dōu)吓(xià)得(de)拼(pīn)命(mìng)逃(táo)跑(pǎo)。' +
      '老(lǎo)虎(hǔ)不(bù)知(zhī)道(dào)动(dòng)物(wù)们(men)怕(pà)的(de)是(shì)自(zì)己(jǐ)，' +
      '还(hái)以(yǐ)为(wéi)它(tā)们(men)真(zhēn)的(de)是(shì)怕(pà)狐(hú)狸(li)呢(ne)！' +
      '于(yú)是(shì)，老(lǎo)虎(hǔ)放(fàng)了(le)狐(hú)狸(li)。狐(hú)狸(li)得(dé)意(yì)极(jí)了(le)！',
    questions: [
      { type: 'multiple_choice', question: '老(lǎo)虎(hǔ)最(zuì)初(chū)抓(zhuā)住(zhù)狐(hú)狸(li)想(xiǎng)做(zuò)什(shén)么(me)？', options: ['和(hé)它(tā)做(zuò)朋(péng)友(yǒu)', '吃(chī)掉(diào)它(tā)', '让(ràng)它(tā)带(dài)路(lù)', '和(hé)它(tā)玩(wán)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)："正(zhèng)准(zhǔn)备(bèi)吃(chī)掉(diào)它(tā)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '狐(hú)狸(li)对(duì)老(lǎo)虎(hǔ)说(shuō)了(le)什(shén)么(me)谎(huǎng)话(huà)？', options: ['自(zì)己(jǐ)是(shì)上(shàng)天(tiān)派(pài)来(lái)的(de)百(bǎi)兽(shòu)之(zhī)王(wáng)', '自(zì)己(jǐ)会(huì)飞(fēi)', '自(zì)己(jǐ)是(shì)老(lǎo)虎(hǔ)的(de)朋(péng)友(yǒu)', '自(zì)己(jǐ)身(shēn)上(shang)有(yǒu)毒(dú)'], answer: 0, explanation: '狐(hú)狸(li)说(shuō)："上(shàng)天(tiān)派(pài)我(wǒ)来(lái)做(zuò)百(bǎi)兽(shòu)之(zhī)王(wáng)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '动(dòng)物(wù)们(men)看(kàn)到(dào)狐(hú)狸(li)和(hé)老(lǎo)虎(hǔ)后(hòu)，真(zhēn)正(zhèng)怕(pà)的(de)是(shì)谁(shuí)？', options: ['怕(pà)狐(hú)狸(li)', '怕(pà)老(lǎo)虎(hǔ)', '谁(shuí)也(yě)不(bú)怕(pà)', '两(liǎng)个(gè)都(dōu)怕(pà)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)："老(lǎo)虎(hǔ)不(bù)知(zhī)道(dào)动(dòng)物(wù)们(men)怕(pà)的(de)是(shì)自(zì)己(jǐ)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '老(lǎo)虎(hǔ)最(zuì)后(hòu)为(wèi)什(shén)么(me)放(fàng)了(le)狐(hú)狸(li)？', options: ['因(yīn)为(wèi)狐(hú)狸(li)太(tài)小(xiǎo)了(le)', '因(yīn)为(wèi)老(lǎo)虎(hǔ)真(zhēn)的(de)相(xiāng)信(xìn)了(le)狐(hú)狸(li)的(de)话(huà)', '因(yīn)为(wèi)有(yǒu)人(rén)来(lái)了(le)', '因(yīn)为(wèi)狐(hú)狸(li)跑(pǎo)了(le)'], answer: 1, explanation: '老(lǎo)虎(hǔ)看(kàn)到(dào)动(dòng)物(wù)们(men)逃(táo)跑(pǎo)，以(yǐ)为(wéi)它(tā)们(men)怕(pà)狐(hú)狸(li)，就(jiù)信(xìn)了(le)狐(hú)狸(li)的(de)话(huà)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '"狐(hú)假(jiǎ)虎(hǔ)威(wēi)"这(zhè)个(gè)成(chéng)语(yǔ)的(de)意(yì)思(si)是(shì)？', options: ['狐(hú)狸(li)和(hé)老(lǎo)虎(hǔ)是(shì)好(hǎo)朋(péng)友(yǒu)', '借(jiè)用(yòng)别(bié)人(rén)的(de)威(wēi)势(shì)吓(xià)唬(hu)别(bié)人(rén)', '狐(hú)狸(li)比(bǐ)老(lǎo)虎(hǔ)厉(lì)害(hài)', '老(lǎo)虎(hǔ)很(hěn)笨(bèn)'], answer: 1, explanation: '"狐(hú)假(jiǎ)虎(hǔ)威(wēi)"比(bǐ)喻(yù)借(jiè)用(yòng)别(bié)人(rén)的(de)威(wēi)风(fēng)来(lái)吓(xià)唬(hu)人(rén)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"假(jiǎ)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['jiǎ', 'jià', 'xiǎ', 'xià'], answer: 0, explanation: '"假"读(jiǎ)，第(dì)三(sān)声(shēng)，在(zài)这(zhè)里(lǐ)是(shì)"借(jiè)用(yòng)"的(de)意(yì)思(si)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)？', options: ['狐(hú)狸(li)很(hěn)聪(cōng)明(míng)', '不(bú)要(yào)被(bèi)借(jiè)用(yòng)别(bié)人(rén)力(lì)量(liàng)吓(xià)唬(hu)人(rén)的(de)人(rén)骗(piàn)了(le)', '老(lǎo)虎(hǔ)应(yīng)该(gāi)吃(chī)了(le)狐(hú)狸(li)', '动(dòng)物(wù)们(men)都(dōu)很(hěn)胆(dǎn)小(xiǎo)'], answer: 1, explanation: '我(wǒ)们(men)要(yào)学(xué)会(huì)看(kàn)清(qīng)事(shì)物(wù)的(de)真(zhēn)相(xiàng)，不(bú)要(yào)被(bèi)假(jiǎ)象(xiàng)蒙(méng)骗(piàn)。', stage: '道理启示' }
    ]
  },
  {
    id: 'r021',
    week: 6,
    category: '快乐读书吧',
    title: '《小(xiǎo)老(lǎo)鼠(shǔ)和(hé)大(dà)老(lǎo)虎(hǔ)》节(jié)选(xuǎn)',
    passage:
      '有(yǒu)一(yì)天(tiān)，一(yì)只(zhī)小(xiǎo)老(lǎo)鼠(shǔ)在(zài)森(sēn)林(lín)里(lǐ)散(sàn)步(bù)。' +
      '走(zǒu)着(zhe)走(zǒu)着(zhe)，它(tā)不(bù)小(xiǎo)心(xīn)踩(cǎi)到(dào)了(le)一(yì)只(zhī)正(zhèng)在(zài)睡(shuì)觉(jiào)的(de)大(dà)老(lǎo)虎(hǔ)的(de)尾(wěi)巴(ba)。' +
      '大(dà)老(lǎo)虎(hǔ)被(bèi)吵(chǎo)醒(xǐng)了(le)，非(fēi)常(cháng)生(shēng)气(qì)，' +
      '一(yì)把(bǎ)抓(zhuā)住(zhù)小(xiǎo)老(lǎo)鼠(shǔ)，张(zhāng)开(kāi)大(dà)嘴(zuǐ)就(jiù)要(yào)吃(chī)了(le)它(tā)。' +
      '小(xiǎo)老(lǎo)鼠(shǔ)吓(xià)坏(huài)了(le)，急(jí)忙(máng)说(shuō)：' +
      '"老(lǎo)虎(hǔ)大(dà)哥(gē)，求(qiú)求(qiú)你(nǐ)放(fàng)了(le)我(wǒ)吧(ba)！' +
      '以(yǐ)后(hòu)我(wǒ)一(yí)定(dìng)会(huì)报(bào)答(dá)你(nǐ)的(de)！"' +
      '大(dà)老(lǎo)虎(hǔ)哈(hā)哈(hā)大(dà)笑(xiào)："你(nǐ)这(zhè)么(me)小(xiǎo)，怎(zěn)么(me)可(kě)能(néng)帮(bāng)到(dào)我(wǒ)？"' +
      '但(dàn)它(tā)还(hái)是(shì)放(fàng)了(le)小(xiǎo)老(lǎo)鼠(shǔ)。' +
      '过(guò)了(le)几(jǐ)天(tiān)，大(dà)老(lǎo)虎(hǔ)不(bù)小(xiǎo)心(xīn)掉(diào)进(jìn)了(le)猎(liè)人(rén)的(de)网(wǎng)里(lǐ)，' +
      '怎(zěn)么(me)也(yě)挣(zhèng)脱(tuō)不(bù)了(le)。' +
      '正(zhèng)在(zài)这(zhè)时(shí)，小(xiǎo)老(lǎo)鼠(shǔ)跑(pǎo)了(le)过(guò)来(lái)，' +
      '用(yòng)尖(jiān)尖(jiān)的(de)牙(yá)齿(chǐ)把(bǎ)网(wǎng)咬(yǎo)了(le)一(yí)个(gè)大(dà)洞(dòng)。' +
      '大(dà)老(lǎo)虎(hǔ)得(dé)救(jiù)了(le)！它(tā)感(gǎn)激(jī)地(de)说(shuō)：' +
      '"谢(xiè)谢(xie)你(nǐ)，小(xiǎo)老(lǎo)鼠(shǔ)！看(kàn)来(lái)小(xiǎo)小(xiǎo)的(de)身(shēn)体(tǐ)也(yě)能(néng)有(yǒu)大(dà)大(dà)的(de)力(lì)量(liàng)！"',
    questions: [
      { type: 'multiple_choice', question: '小(xiǎo)老(lǎo)鼠(shǔ)不(bù)小(xiǎo)心(xīn)做(zuò)了(le)什(shén)么(me)？', options: ['踩(cǎi)到(dào)了(le)大(dà)老(lǎo)虎(hǔ)的(de)尾(wěi)巴(ba)', '偷(tōu)了(le)大(dà)老(lǎo)虎(hǔ)的(de)食(shí)物(wù)', '跑(pǎo)进(jìn)了(le)大(dà)老(lǎo)虎(hǔ)的(de)洞(dòng)里(lǐ)', '叫(jiào)醒(xǐng)了(le)大(dà)老(lǎo)虎(hǔ)'], answer: 0, explanation: '文(wén)中(zhōng)说(shuō)小(xiǎo)老(lǎo)鼠(shǔ)"不(bù)小(xiǎo)心(xīn)踩(cǎi)到(dào)了(le)"大(dà)老(lǎo)虎(hǔ)的(de)尾(wěi)巴(ba)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '大(dà)老(lǎo)虎(hǔ)为(wèi)什(shén)么(me)放(fàng)了(le)小(xiǎo)老(lǎo)鼠(shǔ)？', options: ['因(yīn)为(wèi)小(xiǎo)老(lǎo)鼠(shǔ)太(tài)小(xiǎo)了(le)，不(bù)值(zhí)得(de)吃(chī)', '虽(suī)然(rán)不(bù)相(xiāng)信(xìn)小(xiǎo)老(lǎo)鼠(shǔ)能(néng)报(bào)答(dá)，但(dàn)还(hái)是(shì)放(fàng)了(le)它(tā)', '因(yīn)为(wèi)小(xiǎo)老(lǎo)鼠(shǔ)送(sòng)了(le)它(tā)礼(lǐ)物(wù)', '因(yīn)为(wèi)有(yǒu)别(bié)的(de)动(dòng)物(wù)求(qiú)情(qíng)'], answer: 1, explanation: '老(lǎo)虎(hǔ)虽(suī)然(rán)觉(jué)得(de)小(xiǎo)老(lǎo)鼠(shǔ)帮(bāng)不(bù)了(le)自(zì)己(jǐ)，但(dàn)还(hái)是(shì)心(xīn)软(ruǎn)放(fàng)了(le)它(tā)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)老(lǎo)鼠(shǔ)是(shì)怎(zěn)么(me)救(jiù)大(dà)老(lǎo)虎(hǔ)的(de)？', options: ['找(zhǎo)来(lái)了(le)别(bié)的(de)动(dòng)物(wù)帮(bāng)忙(máng)', '用(yòng)牙(yá)齿(chǐ)把(bǎ)网(wǎng)咬(yǎo)了(le)一(yí)个(gè)大(dà)洞(dòng)', '把(bǎ)网(wǎng)解(jiě)开(kāi)了(le)', '叫(jiào)来(lái)了(le)人(rén)类(lèi)'], answer: 1, explanation: '小(xiǎo)老(lǎo)鼠(shǔ)"用(yòng)尖(jiān)尖(jiān)的(de)牙(yá)齿(chǐ)把(bǎ)网(wǎng)咬(yǎo)了(le)一(yí)个(gè)大(dà)洞(dòng)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '大(dà)老(lǎo)虎(hǔ)最(zuì)后(hòu)明(míng)白(bái)了(le)什(shén)么(me)？', options: ['小(xiǎo)老(lǎo)鼠(shǔ)很(hěn)好(hǎo)吃(chī)', '不(bù)该(gāi)放(fàng)了(le)小(xiǎo)老(lǎo)鼠(shǔ)', '小(xiǎo)小(xiǎo)的(de)身(shēn)体(tǐ)也(yě)能(néng)有(yǒu)大(dà)大(dà)的(de)力(lì)量(liàng)', '自(zì)己(jǐ)不(bù)应(yīng)该(gāi)睡(shuì)觉(jiào)'], answer: 2, explanation: '大(dà)老(lǎo)虎(hǔ)说(shuō)："看(kàn)来(lái)小(xiǎo)小(xiǎo)的(de)身(shēn)体(tǐ)也(yě)能(néng)有(yǒu)大(dà)大(dà)的(de)力(lì)量(liàng)！"', stage: '道理启示' },
      { type: 'multiple_choice', question: '"鼠(shǔ)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['shǔ', 'sǔ', 'shú', 'sú'], answer: 0, explanation: '"鼠"读(shǔ)，第(dì)三(sān)声(shēng)，翘(qiào)舌(shé)音(yīn)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)个(gè)故(gù)事(shì)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)？', options: ['老(lǎo)虎(hǔ)比(bǐ)老(lǎo)鼠(shǔ)厉(lì)害(hài)', '每(měi)个(gè)人(rén)都(dōu)有(yǒu)自(zì)己(jǐ)的(de)长(cháng)处(chù)，不(bù)能(néng)小(xiǎo)看(kàn)别(bié)人(rén)', '不(bù)要(yào)帮(bāng)助(zhù)别(bié)人(rén)', '老(lǎo)鼠(shǔ)都(dōu)是(shì)好(hǎo)人(rén)'], answer: 1, explanation: '每(měi)个(gè)人(rén)都(dōu)有(yǒu)自(zì)己(jǐ)的(de)优(yōu)点(diǎn)，不(bù)能(néng)因(yīn)为(wèi)对(duì)方(fāng)弱(ruò)小(xiǎo)就(jiù)看(kàn)不(bù)起(qǐ)人(rén)家(jia)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '文(wén)中(zhōng)"报(bào)答(dá)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['报(bào)告(gào)', '用(yòng)实(shí)际(jì)行(xíng)动(dòng)感(gǎn)谢(xiè)帮(bāng)过(guò)自(zì)己(jǐ)的(de)人(rén)', '报(bào)名(míng)', '打(dǎ)架(jià)'], answer: 1, explanation: '"报(bào)答(dá)"就(jiù)是(shì)用(yòng)实(shí)际(jì)行(xíng)动(dòng)来(lái)感(gǎn)谢(xiè)帮(bāng)过(guò)自(zì)己(jǐ)的(de)人(rén)。', stage: '字词选择' }
    ]
  },
  {
    id: 'r022',
    week: 6,
    category: '古诗',
    title: '登(dēng)鹳(guàn)雀(què)楼(lóu)',
    passage:
      '白(bái)日(rì)依(yī)山(shān)尽(jìn)，\n' +
      '黄(huáng)河(hé)入(rù)海(hǎi)流(liú)。\n' +
      '欲(yù)穷(qióng)千(qiān)里(lǐ)目(mù)，\n' +
      '更(gèng)上(shàng)一(yì)层(céng)楼(lóu)。\n\n' +
      '——[唐(táng)] 王(wáng)之(zhī)涣(huàn)\n\n' +
      '这(zhè)首(shǒu)诗(shī)写(xiě)的(de)是(shì)诗(shī)人(rén)登(dēng)上(shàng)鹳(guàn)雀(què)楼(lóu)后(hòu)看(kàn)到(dào)的(de)壮(zhuàng)丽(lì)景(jǐng)色(sè)。' +
      '太(tài)阳(yáng)靠(kào)着(zhe)远(yuǎn)山(shān)慢(màn)慢(màn)落(luò)下(xià)，' +
      '滚(gǔn)滚(gǔn)的(de)黄(huáng)河(hé)水(shuǐ)向(xiàng)大(dà)海(hǎi)流(liú)去(qù)。' +
      '诗(shī)人(rén)想(xiǎng)要(yào)看(kàn)到(dào)更(gèng)远(yuǎn)更(gèng)远(yuǎn)的(de)风(fēng)景(jǐng)，' +
      '就(jiù)再(zài)往(wǎng)上(shàng)走(zǒu)了(le)一(yì)层(céng)楼(lóu)。' +
      '这(zhè)首(shǒu)诗(shī)告(gào)诉(su)我(wǒ)们(men)：想(xiǎng)要(yào)看(kàn)得(dé)更(gèng)远(yuǎn)，' +
      '就(jiù)要(yào)站(zhàn)得(dé)更(gèng)高(gāo)。做(zuò)人(rén)做(zuò)事(shì)也(yě)是(shì)这(zhè)个(gè)道(dào)理(lǐ)啊(ā)！',
    questions: [
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)的(de)作(zuò)者(zhě)是(shì)？', options: ['王(wáng)之(zhī)涣(huàn)', '李(lǐ)白(bái)', '孟(mèng)浩(hào)然(rán)', '王(wáng)维(wéi)'], answer: 0, explanation: '这(zhè)首(shǒu)诗(shī)是(shì)唐(táng)代(dài)诗(shī)人(rén)王(wáng)之(zhī)涣(huàn)写(xiě)的(de)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '诗(shī)中(zhōng)写(xiě)到(dào)了(le)哪(nǎ)条(tiáo)河(hé)？', options: ['长(cháng)江(jiāng)', '黄(huáng)河(hé)', '珠(zhū)江(jiāng)', '淮(huái)河(hé)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)："黄(huáng)河(hé)入(rù)海(hǎi)流(liú)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"欲(yù)穷(qióng)千(qiān)里(lǐ)目(mù)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['眼(yǎn)睛(jīng)不(bù)好(hǎo)了(le)', '想(xiǎng)要(yào)看(kàn)到(dào)千(qiān)里(lǐ)之(zhī)外(wài)的(de)景(jǐng)色(sè)', '想(xiǎng)要(yào)走(zǒu)一(yì)千(qiān)里(lǐ)', '想(xiǎng)要(yào)去(qù)远(yuǎn)方(fāng)'], answer: 1, explanation: '"欲(yù)"是(shì)想(xiǎng)要(yào)，"穷(qióng)"是(shì)看(kàn)尽(jìn)，"千(qiān)里(lǐ)目(mù)"是(shì)很(hěn)远(yuǎn)的(de)景(jǐng)色(sè)。', stage: '字词选择' },
      { type: 'multiple_choice', question: '"登(dēng)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['dēn', 'dēng', 'dénɡ', 'dènɡ'], answer: 1, explanation: '"登"读(dēng)，第(dì)一(yī)声(shēng)，后(hòu)鼻(bí)音(yīn)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '诗(shī)人(rén)为(wèi)了(le)看(kàn)得(dé)更(gèng)远(yuǎn)做(zuò)了(le)什(shén)么(me)？', options: ['用(yòng)了(le)望(wàng)远(yuǎn)镜(jìng)', '再(zài)往(wǎng)上(shàng)走(zǒu)了(le)一(yì)层(céng)楼(lóu)', '跳(tiào)了(le)起(qǐ)来(lái)', '走(zǒu)到(dào)窗(chuāng)户(hu)边(biān)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)："更(gèng)上(shàng)一(yì)层(céng)楼(lóu)。"就(jiù)是(shì)再(zài)往(wǎng)上(shàng)走(zǒu)一(yì)层(céng)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['楼(lóu)越(yuè)高(gāo)越(yuè)好(hǎo)', '想(xiǎng)看(kàn)得(dé)远(yuǎn)就(jiù)要(yào)站(zhàn)得(de)高(gāo)，做(zuò)事(shì)也(yě)要(yào)积(jí)极(jí)向(xiàng)上(shàng)', '黄(huáng)河(hé)很(hěn)长(cháng)', '太(tài)阳(yáng)每(měi)天(tiān)都(dōu)会(huì)落(luò)下(xià)'], answer: 1, explanation: '这(zhè)首(shǒu)诗(shī)蕴(yùn)含(hán)了(le)积(jí)极(jí)向(xiàng)上(shàng)、不(bú)断(duàn)进(jìn)取(qǔ)的(de)人(rén)生(shēng)哲(zhé)理(lǐ)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '"黄(huáng)河(hé)入(rù)海(hǎi)流(liú)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['黄(huáng)河(hé)水(shuǐ)流(liú)进(jìn)大(dà)海(hǎi)', '黄(huáng)河(hé)水(shuǐ)干(gān)了(le)', '黄(huáng)河(hé)变(biàn)成(chéng)了(le)大(dà)海(hǎi)', '黄(huáng)河(hé)不(bù)流(liú)了(le)'], answer: 0, explanation: '"入(rù)海(hǎi)流(liú)"的(de)意(yì)思(si)是(shì)黄(huáng)河(hé)水(shuǐ)流(liú)向(xiàng)大(dà)海(hǎi)。', stage: '内容理解' }
    ]
  },
  // ==================== 第7周（3篇）====================
  {
    id: 'r023',
    week: 7,
    category: '童谣',
    title: '数(shǔ)鸭(yā)子(zi)',
    passage:
      '门(mén)前(qián)大(dà)桥(qiáo)下(xià)，\n' +
      '游(yóu)过(guò)一(yì)群(qún)鸭(yā)。\n' +
      '快(kuài)来(lái)快(kuài)来(lái)数(shǔ)一(yī)数(shǔ)，\n' +
      '二(èr)四(sì)六(liù)七(qī)八(bā)。\n\n' +
      '嘎(gā)嘎(gā)嘎(gā)嘎(gā)，\n' +
      '真(zhēn)呀(ya)真(zhēn)多(duō)鸭(yā)。\n' +
      '数(shǔ)不(bù)清(qīng)到(dào)底(dǐ)多(duō)少(shǎo)鸭(yā)，\n' +
      '数(shǔ)不(bù)清(qīng)到(dào)底(dǐ)多(duō)少(shǎo)鸭(yā)。\n\n' +
      '小(xiǎo)鸭(yā)子(zi)，嘎(gā)嘎(gā)叫(jiào)，\n' +
      '走(zǒu)起(qǐ)路(lù)来(lái)摇(yáo)啊(ā)摇(yáo)。\n' +
      '摇(yáo)到(dào)河(hé)里(lǐ)去(qù)洗(xǐ)澡(zǎo)，\n' +
      '洗(xǐ)完(wán)澡(zǎo)来(lái)晒(shài)太(tài)阳(yáng)。\n\n' +
      '太(tài)阳(yáng)公(gōng)公(gong)笑(xiào)眯(mī)眯(mī)，\n' +
      '夸(kuā)我(wǒ)们(men)是(shì)好(hǎo)宝(bǎo)宝(bao)。\n' +
      '爱(ài)洗(xǐ)澡(zǎo)讲(jiǎng)卫(wèi)生(shēng)，\n' +
      '天(tiān)天(tiān)干(gān)净(jìng)乐(lè)陶(táo)陶(táo)！',
    questions: [
      { type: 'multiple_choice', question: '大(dà)桥(qiáo)下(xià)面(miàn)游(yóu)过(guò)了(le)什(shén)么(me)？', options: ['一(yì)群(qún)鱼(yú)', '一(yì)群(qún)鸭(yā)', '一(yì)群(qún)鹅(é)', '一(yì)群(qún)虾(xiā)'], answer: 1, explanation: '童(tóng)谣(yáo)开(kāi)头(tóu)说(shuō)："门(mén)前(qián)大(dà)桥(qiáo)下(xià)，游(yóu)过(guò)一(yì)群(qún)鸭(yā)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)鸭(yā)子(zi)走(zǒu)路(lù)是(shì)什(shén)么(me)样(yàng)的(de)？', options: ['一(yì)直(zhí)直(zhí)地(de)走(zǒu)', '摇(yáo)啊(ā)摇(yáo)的(de)', '跳(tiào)着(zhe)走(zǒu)', '跑(pǎo)着(zhe)走(zǒu)'], answer: 1, explanation: '童(tóng)谣(yáo)中(zhōng)说(shuō)："走(zǒu)起(qǐ)路(lù)来(lái)摇(yáo)啊(ā)摇(yáo)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)鸭(yā)子(zi)去(qù)河(hé)里(lǐ)做(zuò)了(le)什(shén)么(me)？', options: ['抓(zhuā)鱼(yú)', '洗(xǐ)澡(zǎo)', '玩(wán)水(shuǐ)', '游(yóu)泳(yǒng)比(bǐ)赛(sài)'], answer: 1, explanation: '童(tóng)谣(yáo)中(zhōng)说(shuō)："摇(yáo)到(dào)河(hé)里(lǐ)去(qù)洗(xǐ)澡(zǎo)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '太(tài)阳(yáng)公(gōng)公(gong)说(shuō)了(le)什(shén)么(me)？', options: ['你(nǐ)们(men)真(zhēn)脏(zāng)', '夸(kuā)我(wǒ)们(men)是(shì)好(hǎo)宝(bǎo)宝(bao)', '天(tiān)要(yào)下(xià)雨(yǔ)了(le)', '快(kuài)回(huí)家(jiā)吧(ba)'], answer: 1, explanation: '童(tóng)谣(yáo)中(zhōng)说(shuō)："太(tài)阳(yáng)公(gōng)公(gong)笑(xiào)眯(mī)眯(mī)，夸(kuā)我(wǒ)们(men)是(shì)好(hǎo)宝(bǎo)宝(bao)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"嘎(gā)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['gā', 'gá', 'gǎ', 'gà'], answer: 0, explanation: '"嘎"读(gā)，第(dì)一(yī)声(shēng)，是(shì)小(xiǎo)鸭(yā)子(zi)叫(jiào)的(de)声(shēng)音(yīn)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)童(tóng)谣(yáo)教(jiào)育(yù)我(wǒ)们(men)什(shén)么(me)？', options: ['要(yào)多(duō)吃(chī)鸭(yā)肉(ròu)', '要(yào)讲(jiǎng)卫(wèi)生(shēng)，爱(ài)干(gān)净(jìng)', '不(bú)要(yào)游(yóu)泳(yǒng)', '要(yào)学(xué)会(huì)数(shǔ)数(shù)'], answer: 1, explanation: '童(tóng)谣(yáo)末(mò)尾(wěi)说(shuō)："爱(ài)洗(xǐ)澡(zǎo)讲(jiǎng)卫(wèi)生(shēng)，天(tiān)天(tiān)干(gān)净(jìng)乐(lè)陶(táo)陶(táo)！"', stage: '道理启示' },
      { type: 'multiple_choice', question: '童(tóng)谣(yáo)里(lǐ)哪(nǎ)句(jù)话(huà)让(ràng)你(nǐ)觉(jué)得(de)最(zuì)有(yǒu)趣(qù)？', options: ['门(mén)前(qián)大(dà)桥(qiáo)下(xià)', '嘎(gā)嘎(gā)嘎(gā)嘎(gā)', '数(shǔ)不(bù)清(qīng)到(dào)底(dǐ)多(duō)少(shǎo)鸭(yā)', '走(zǒu)起(qǐ)路(lù)来(lái)摇(yáo)啊(ā)摇(yáo)'], answer: 3, explanation: '"走(zǒu)起(qǐ)路(lù)来(lái)摇(yáo)啊(ā)摇(yáo)"形(xíng)象(xiàng)地(de)写(xiě)出(chū)了(le)小(xiǎo)鸭(yā)子(zi)可(kě)爱(ài)的(de)走(zǒu)路(lù)姿(zī)势(shì)，让(ràng)人(rén)觉(jué)得(de)很(hěn)有(yǒu)趣(qù)。（本(běn)题(tí)为(wéi)开(kāi)放(fàng)式(shì)题(tí)，参(cān)考(kǎo)此(cǐ)理(lǐ)由(yóu)即(jí)可(kě)）', stage: '好词摘抄' }
    ]
  },
  {
    id: 'r024',
    week: 7,
    category: '成语故事',
    title: '掩(yǎn)耳(ěr)盗(dào)铃(líng)',
    passage:
      '从(cóng)前(qián)有(yǒu)一(yí)个(gè)小(xiǎo)偷(tōu)，看(kàn)到(dào)一(yì)户(hù)人(rén)家(jiā)的(de)门(mén)上(shang)挂(guà)着(zhe)一(yì)口(kǒu)漂(piào)亮(liang)的(de)铃(líng)铛(dang)。' +
      '他(tā)非(fēi)常(cháng)想(xiǎng)要(yào)那(nà)个(gè)铃(líng)铛(dang)，可(kě)是(shì)铃(líng)铛(dang)一(yí)碰(pèng)就(jiù)会(huì)发(fā)出(chū)清(qīng)脆(cuì)的(de)响(xiǎng)声(shēng)，' +
      '一(yì)响(xiǎng)主(zhǔ)人(rén)就(jiù)会(huì)发(fā)现(xiàn)。' +
      '小(xiǎo)偷(tōu)想(xiǎng)了(le)一(yí)个(gè)"聪(cōng)明(míng)"的(de)办(bàn)法(fǎ)：' +
      '"我(wǒ)把(bǎ)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)堵(dǔ)上(shàng)，不(bú)就(jiù)听(tīng)不(bú)到(dào)铃(líng)声(shēng)了(le)吗(ma)？"' +
      '于(yú)是(shì)，他(tā)用(yòng)棉(mián)花(huā)堵(dǔ)住(zhù)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)，' +
      '放(fàng)心(xīn)大(dà)胆(dǎn)地(de)去(qù)偷(tōu)铃(líng)铛(dang)。' +
      '可(kě)是(shì)他(tā)刚(gāng)一(yí)碰(pèng)铃(líng)铛(dang)，铃(líng)声(shēng)就(jiù)"叮(dīng)当(dāng)叮(dīng)当(dāng)"地(de)响(xiǎng)了(le)起(qǐ)来(lái)。' +
      '主(zhǔ)人(rén)听(tīng)到(dào)铃(líng)声(shēng)，跑(pǎo)出(chū)来(lái)一(yí)看(kàn)，' +
      '小(xiǎo)偷(tōu)正(zhèng)在(zài)偷(tōu)铃(líng)铛(dang)呢(ne)！' +
      '小(xiǎo)偷(tōu)被(bèi)抓(zhuā)住(zhù)了(le)。他(tā)还(hái)在(zài)纳(nà)闷(mèn)呢(ne)：' +
      '"我(wǒ)明(míng)明(míng)堵(dǔ)住(zhù)了(le)耳(ěr)朵(duo)，你(nǐ)们(men)怎(zěn)么(me)还(hái)能(néng)听(tīng)到(dào)铃(líng)声(shēng)呢(ne)？"' +
      '主(zhǔ)人(rén)和(hé)大(dà)家(jiā)都(dōu)哈(hā)哈(hā)大(dà)笑(xiào)了(le)起(qǐ)来(lái)。',
    questions: [
      { type: 'multiple_choice', question: '小(xiǎo)偷(tōu)想(xiǎng)要(yào)偷(tōu)什(shén)么(me)？', options: ['一(yì)口(kǒu)漂(piào)亮(liang)的(de)铃(líng)铛(dang)', '钱(qián)', '食(shí)物(wù)', '衣(yī)服(fu)'], answer: 0, explanation: '文(wén)中(zhōng)说(shuō)小(xiǎo)偷(tōu)"看(kàn)到(dào)一(yì)户(hù)人(rén)家(jiā)的(de)门(mén)上(shang)挂(guà)着(zhe)一(yì)口(kǒu)漂(piào)亮(liang)的(de)铃(líng)铛(dang)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)偷(tōu)用(yòng)什(shén)么(me)办(bàn)法(fǎ)避(bì)免(miǎn)听(tīng)到(dào)铃(líng)声(shēng)？', options: ['把(bǎ)铃(líng)铛(dang)包(bāo)起(qǐ)来(lái)', '用(yòng)棉(mián)花(huā)堵(dǔ)住(zhù)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)', '在(zài)夜(yè)晚(wǎn)去(qù)偷(tōu)', '把(bǎ)铃(líng)铛(dang)弄(nòng)坏(huài)'], answer: 1, explanation: '小(xiǎo)偷(tōu)"用(yòng)棉(mián)花(huā)堵(dǔ)住(zhù)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)"。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)偷(tōu)的(de)办(bàn)法(fǎ)为(wèi)什(shén)么(me)不(bù)管(guǎn)用(yòng)？', options: ['因(yīn)为(wèi)棉(mián)花(huā)太(tài)少(shǎo)了(le)', '因(yīn)为(wèi)他(tā)堵(dǔ)住(zhù)的(de)是(shì)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)，别(bié)人(rén)还(hái)是(shì)能(néng)听(tīng)到(dào)', '因(yīn)为(wèi)铃(líng)声(shēng)太(tài)大(dà)了(le)', '因(yīn)为(wèi)主(zhǔ)人(rén)看(kàn)到(dào)了(le)他(tā)'], answer: 1, explanation: '他(tā)只(zhǐ)堵(dǔ)住(zhù)了(le)自(zì)己(jǐ)的(de)耳(ěr)朵(duo)，别(bié)人(rén)的(de)耳(ěr)朵(duo)并(bìng)没(méi)有(yǒu)被(bèi)堵(dǔ)住(zhù)，所(suǒ)以(yǐ)铃(líng)声(shēng)别(bié)人(rén)还(hái)是(shì)能(néng)听(tīng)到(dào)的(de)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '小(xiǎo)偷(tōu)最(zuì)后(hòu)怎(zěn)么(me)样(yàng)了(le)？', options: ['成(chéng)功(gōng)偷(tōu)到(dào)了(le)铃(líng)铛(dang)', '被(bèi)主(zhǔ)人(rén)抓(zhuā)住(zhù)了(le)', '自(zì)己(jǐ)跑(pǎo)了(le)', '主(zhǔ)人(rén)把(bǎ)铃(líng)铛(dang)送(sòng)给(gěi)他(tā)了(le)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)："主(zhǔ)人(rén)听(tīng)到(dào)铃(líng)声(shēng)，跑(pǎo)出(chū)来(lái)一(yí)看(kàn)，小(xiǎo)偷(tōu)正(zhèng)在(zài)偷(tōu)铃(líng)铛(dang)呢(ne)！"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"掩(yǎn)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['yǎn', 'yān', 'yáng', 'yǎng'], answer: 0, explanation: '"掩"读(yǎn)，第(dì)三(sān)声(shēng)，意(yì)思(si)是(shì)"遮(zhē)盖(gài)、堵(dǔ)住(zhù)"。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '"掩(yǎn)耳(ěr)盗(dào)铃(líng)"告(gào)诉(su)我(wǒ)们(men)什(shén)么(me)道(dào)理(lǐ)？', options: ['只(zhǐ)要(yào)听(tīng)不(bú)到(dào)声(shēng)音(yīn)就(jiù)没(méi)事(shì)', '自(zì)己(jǐ)骗(piàn)自(zì)己(jǐ)是(shì)没(méi)用(yòng)的(de)，坏(huài)事(shì)总(zǒng)会(huì)被(bèi)发(fā)现(xiàn)', '偷(tōu)东(dōng)西(xi)是(shì)对(duì)的(de)', '要(yào)多(duō)用(yòng)棉(mián)花(huā)'], answer: 1, explanation: '这(zhè)个(gè)成(chéng)语(yǔ)告(gào)诉(su)我(wǒ)们(men)：自(zì)己(jǐ)骗(piàn)自(zì)己(jǐ)是(shì)愚(yú)蠢(chǔn)的(de)，坏(huài)事(qing)瞒(mán)不(bù)了(le)别(bié)人(rén)。', stage: '道理启示' },
      { type: 'multiple_choice', question: '小(xiǎo)偷(tōu)"纳(nà)闷(mèn)"是(shì)什(shén)么(me)意(yì)思(si)？', options: ['很(hěn)开(kāi)心(xīn)', '感(gǎn)到(dào)奇(qí)怪(guài)，想(xiǎng)不(bù)明(míng)白(bái)', '很(hěn)生(shēng)气(qì)', '很(hěn)害(hài)怕(pà)'], answer: 1, explanation: '"纳(nà)闷(mèn)"就(jiù)是(shì)感(gǎn)到(dào)不(bù)理(lǐ)解(jiě)，想(xiǎng)不(bù)明(míng)白(bái)。', stage: '字词选择' }
    ]
  },
  {
    id: 'r025',
    week: 7,
    category: '古诗',
    title: '咏(yǒng)鹅(é)',
    passage:
      '鹅(é)，鹅(é)，鹅(é)，\n' +
      '曲(qū)项(xiàng)向(xiàng)天(tiān)歌(gē)。\n' +
      '白(bái)毛(máo)浮(fú)绿(lǜ)水(shuǐ)，\n' +
      '红(hóng)掌(zhǎng)拨(bō)清(qīng)波(bō)。\n\n' +
      '——[唐(táng)] 骆(luò)宾(bīn)王(wáng)\n\n' +
      '这(zhè)首(shǒu)诗(shī)是(shì)骆(luò)宾(bīn)王(wáng)七(qī)岁(suì)时(shí)写(xiě)的(de)，非(fēi)常(cháng)有(yǒu)名(míng)！' +
      '小(xiǎo)小(xiǎo)年(nián)纪(jì)就(jiù)能(néng)写(xiě)出(chū)这(zhè)么(me)好(hǎo)的(de)诗(shī)，真(zhēn)了(liǎo)不(bù)起(qǐ)！' +
      '诗(shī)中(zhōng)写(xiě)了(le)一(yì)只(zhī)可(kě)爱(ài)的(de)大(dà)白(bái)鹅(é)：' +
      '它(tā)弯(wān)着(zhe)长(cháng)长(cháng)的(de)脖(bó)子(zi)对(duì)着(zhe)天(tiān)空(kōng)唱(chàng)歌(gē)，' +
      '白(bái)色(sè)的(de)羽(yǔ)毛(máo)浮(fú)在(zài)绿(lǜ)绿(lǜ)的(de)水(shuǐ)面(miàn)上(shang)，' +
      '红(hóng)色(sè)的(de)脚(jiǎo)掌(zhǎng)拨(bō)动(dòng)着(zhe)清(qīng)清(qīng)的(de)水(shuǐ)波(bō)。' +
      '白(bái)、绿(lǜ)、红(hóng)，三(sān)种(zhǒng)颜(yán)色(sè)在(zài)一(yì)起(qǐ)，' +
      '是(shì)不(bú)是(shì)像(xiàng)一(yì)幅(fú)美(měi)丽(lì)的(de)画(huà)呢(ne)？',
    questions: [
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)的(de)作(zuò)者(zhě)是(shì)谁(shuí)？', options: ['李(lǐ)白(bái)', '王(wáng)之(zhī)涣(huàn)', '骆(luò)宾(bīn)王(wáng)', '孟(mèng)浩(hào)然(rán)'], answer: 2, explanation: '这(zhè)首(shǒu)诗(shī)是(shì)唐(táng)代(dài)诗(shī)人(rén)骆(luò)宾(bīn)王(wáng)七(qī)岁(suì)时(shí)写(xiě)的(de)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '鹅(é)的(de)脖(bó)子(zi)是(shì)什(shén)么(me)姿(zī)势(shì)？', options: ['直(zhí)直(zhí)的(de)', '弯(wān)着(zhe)对(duì)着(zhe)天(tiān)空(kōng)', '低(dī)着(zhe)头(tóu)', '转(zhuǎn)到(dào)后(hòu)面(miàn)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)："曲(qū)项(xiàng)向(xiàng)天(tiān)歌(gē)。"意(yì)思(si)是(shì)弯(wān)着(zhe)脖(bó)子(zi)对(duì)着(zhe)天(tiān)空(kōng)唱(chàng)歌(gē)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '鹅(é)的(de)羽(yǔ)毛(máo)是(shì)什(shén)么(me)颜(yán)色(sè)的(de)？', options: ['红(hóng)色(sè)', '白(bái)色(sè)', '黄(huáng)色(sè)', '黑(hēi)色(sè)'], answer: 1, explanation: '诗(shī)中(zhōng)说(shuō)："白(bái)毛(máo)浮(fú)绿(lǜ)水(shuǐ)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '鹅(é)的(de)脚(jiǎo)掌(zhǎng)是(shì)什(shén)么(me)颜(yán)色(sè)的(de)？', options: ['白(bái)色(sè)', '绿(lǜ)色(sè)', '红(hóng)色(sè)', '黄(huáng)色(sè)'], answer: 2, explanation: '诗(shī)中(zhōng)说(shuō)："红(hóng)掌(zhǎng)拨(bō)清(qīng)波(bō)。"', stage: '内容理解' },
      { type: 'multiple_choice', question: '"拨(bō)"的(de)拼(pīn)音(yīn)是(shì)？', options: ['bō', 'pō', 'bó', 'pó'], answer: 0, explanation: '"拨"读(bō)，第(dì)一(yī)声(shēng)，意(yì)思(si)是(shì)用(yòng)脚(jiǎo)推(tuī)动(dòng)水(shuǐ)。', stage: '拼音练习' },
      { type: 'multiple_choice', question: '这(zhè)首(shǒu)诗(shī)写(xiě)了(le)几(jǐ)种(zhǒng)颜(yán)色(sè)？', options: ['一(yì)种(zhǒng)', '两(liǎng)种(zhǒng)', '三(sān)种(zhǒng)', '四(sì)种(zhǒng)'], answer: 2, explanation: '诗(shī)中(zhōng)写(xiě)到(dào)了(le)"白(bái)毛(máo)"、"绿(lǜ)水(shuǐ)"、"红(hóng)掌(zhǎng)"三(sān)种(zhǒng)颜(yán)色(sè)。', stage: '内容理解' },
      { type: 'multiple_choice', question: '骆(luò)宾(bīn)王(wáng)写(xiě)这(zhè)首(shǒu)诗(shī)的(de)时(shí)候(hou)多(duō)大(dà)？', options: ['三(sān)岁(suì)', '七(qī)岁(suì)', '十(shí)岁(suì)', '二(èr)十(shí)岁(suì)'], answer: 1, explanation: '文(wén)中(zhōng)说(shuō)骆(luò)宾(bīn)王(wáng)七(qī)岁(suì)时(shí)写(xiě)的(de)这(zhè)首(shǒu)诗(shī)。', stage: '道理启示' }
    ]
  }
];

// 导出：Node.js / ES Module 环境
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHINESE_READINGS;
}
