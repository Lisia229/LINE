// 引用 dotenv 讀取 .env 檔的設定
import 'dotenv/config'
import linebot from 'linebot'
import fetchHot from './textes/fetchHot.js'
import fetchNews from './textes/fetchNews.js'
import fetchHero from './textes/fetchHero.js'
import fetchsearch from './textes/fetchsearch.js'

import quickReplySup from './quickbutton/quickbuttonsup.js'
import quickReplyAd from './quickbutton/quickbuttonAd.js'
import quickReplyAp from './quickbutton/quickbuttonAp.js'
import quickReplyJg from './quickbutton/quickbuttonJg.js'
import quickReplyTop from './quickbutton/quickbuttontop2.js'
import quickReplyRoad from './quickbutton/quickbuttonRoad.js'

import lux from './textes/AP_lux.js'
import Suplux from './textes/sup_lux.js'
import ahri from './textes/ahri.js'
import akali from './textes/akali.js'
import alistar from './textes/alistar.js'
import amumu from './textes/amumu.js'
import annie from './textes/annie.js'
import ashe from './textes/ashe.js'
import aurelion from './textes/aurelion.js'
import blitzcrank from './textes/blitzcrank.js'
import braum from './textes/braum.js'
import camille from './textes/camille.js'
import kayle from './textes/kayle.js'
import brand from './textes/brand.js'
import draven from './textes/draven.js'
import mundo from './textes/mundo.js'
import darius from './textes/darius.js'
import evelynn from './textes/evelynn.js'
import wukong from './textes/wukong.js'
import ekko from './textes/ekko.js'
import ezreal from './textes/ezreal.js'
import fiora from './textes/fiora.js'
import fizz from './textes/fizz.js'
import garen from './textes/garen.js'
import gragas from './textes/gragas.js'
import graves from './textes/graves.js'
import janna from './textes/janna.js'
import jarvan from './textes/jarvan.js'
import jax from './textes/jax.js'
import morgana from './textes/morgana.js'
import corki from './textes/corki.js'
import kennen from './textes/kennen.js'
import jhin from './textes/jhin.js'
import jinx from './textes/jinx.js'
import kaisa from './textes/kaisa.js'
import lee from './textes/lee.js'
import lulu from './textes/lulu.js'
import malphite from './textes/malphite.js'
import yi from './textes/yi.js'
import fortune from './textes/fortune.js'
import nami from './textes/nami.js'
import nasus from './textes/nasus.js'
import olaf from './textes/olaf.js'
import orianna from './textes/orianna.js'
import rakan from './textes/rakan.js'
import seraphine from './textes/seraphine.js'
import shyvana from './textes/shyvana.js'
import singed from './textes/singed.js'
import nunu from './textes/nunu.js'
import sona from './textes/sona.js'
import soraka from './textes/soraka.js'
import tristana from './textes/tristana.js'
import teemo from './textes/teemo.js'
import tryndamere from './textes/tryndamere.js'
import twisted from './textes/twisted.js'
import varus from './textes/varus.js'
import vayne from './textes/vayne.js'
import vi from './textes/vi.js'
import lucian from './textes/lucian.js'
import xayah from './textes/xayah.js'
import zhao from './textes/zhao.js'
import yasuo from './textes/yasuo.js'
import sett from './textes/sett.js'
import zed from './textes/zed.js'
import ziggs from './textes/ziggs.js'
import senna from './textes/senna.js'
import katarina from './textes/katarina.js'
import kha from './textes/kha.js'
import rengar from './textes/rengar.js'
import rammus from './textes/rammus.js'
import galio from './textes/galio.js'
import pantheon from './textes/pantheon.js'
import veigar from './textes/veigar.js'
import leona from './textes/leona.js'
import diana from './textes/diana.js'
import riven from './textes/riven.js'
import akshan from './textes/akshan.js'
import irelia from './textes/irelia.js'
import renekton from './textes/renekton.js'
import thresh from './textes/thresh.js'
import yuumi from './textes/yuumi.js'
import caitlyn from './textes/caitlyn.js'
import jayce from './textes/jayce.js'
import karma from './textes/karma.js'
import shen from './textes/shen.js'
import nautilus from './textes/nautilus.js'
import pyke from './textes/pyke.js'
import kassadin from './textes/kassadin.js'
import samira from './textes/samira.js'
import sion from './textes/sion.js'
import yone from './textes/yone.js'

// // 引用 axios
// import axios from 'axios'
// // 引用 Flex 模板
// import flex from './flex.js'

// 關閉 https 驗證檢查
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
// 設定 linebot
const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    try {
      if (event.message.text === '熱門英雄') {
        fetchHot(event)
      }
      if (event.message.text === '最新消息') {
        fetchNews(event)
      }
      if (event.message.text === '所有英雄') {
        fetchHero(event)
      }
      if (event.message.text === '路線') {
        quickReplyRoad(event)
      }
      if (event.message.text === 'Sup') {
        quickReplySup(event)
      }
      if (event.message.text === 'Ad') {
        quickReplyAd(event)
      }
      if (event.message.text === 'Ap') {
        quickReplyAp(event)
      }
      if (event.message.text === 'Jg') {
        quickReplyJg(event)
      }
      if (event.message.text === 'Top') {
        quickReplyTop(event)
      }
      if (event.message.text === '查英雄') {
        event.reply('若想快速查詢英雄，請打關鍵字，例如:查英雄 娜米;若想查詢符文，請打關鍵字，例如:查符文 拉克絲; 也可使用關鍵字查詢 Sup / Top / Jg / Ad / Ap')
      }
      if (event.message.text.startsWith('查英雄 ')) {
        fetchsearch(event)
      }
      if (event.message.text.startsWith('查符文 拉克絲')) {
        lux(event)
      }
      if (event.message.text.startsWith('查符文 SUP拉克絲')) {
        Suplux(event)
      }
      if (event.message.text.startsWith('查符文 阿璃')) {
        ahri(event)
      }
      if (event.message.text.startsWith('查符文 賽恩')) {
        sion(event)
      }
      if (event.message.text.startsWith('查符文 阿卡莉')) {
        akali(event)
      }
      if (event.message.text.startsWith('查符文 亞歷斯塔')) {
        alistar(event)
      }
      if (event.message.text.startsWith('查符文 阿姆姆')) {
        amumu(event)
      }
      if (event.message.text.startsWith('查符文 安妮')) {
        annie(event)
      }
      if (event.message.text.startsWith('查符文 艾希')) {
        ashe(event)
      }
      if (event.message.text.startsWith('查符文 悠咪')) {
        yuumi(event)
      }
      if (event.message.text.startsWith('查符文 翱銳龍獸')) {
        aurelion(event)
      }
      if (event.message.text.startsWith('查符文 布里茨')) {
        blitzcrank(event)
      }
      if (event.message.text.startsWith('查符文 布郎姆')) {
        braum(event)
      }
      if (event.message.text.startsWith('查符文 卡蜜兒')) {
        camille(event)
      }
      if (event.message.text.startsWith('查符文 凱爾')) {
        kayle(event)
      }
      if (event.message.text.startsWith('查符文 布蘭德')) {
        brand(event)
      }
      if (event.message.text.startsWith('查符文 達瑞文')) {
        draven(event)
      }
      if (event.message.text.startsWith('查符文 蒙多醫生')) {
        mundo(event)
      }
      if (event.message.text.startsWith('查符文 達瑞斯')) {
        darius(event)
      }
      if (event.message.text.startsWith('查符文 伊芙琳')) {
        evelynn(event)
      }
      if (event.message.text.startsWith('查符文 悟空')) {
        wukong(event)
      }
      if (event.message.text.startsWith('查符文 艾克')) {
        ekko(event)
      }
      if (event.message.text.startsWith('查符文 伊澤瑞爾')) {
        ezreal(event)
      }
      if (event.message.text.startsWith('查符文 菲歐拉')) {
        fiora(event)
      }
      if (event.message.text.startsWith('查符文 飛斯')) {
        fizz(event)
      }
      if (event.message.text.startsWith('查符文 蓋倫')) {
        garen(event)
      }
      if (event.message.text.startsWith('查符文 古拉格斯')) {
        gragas(event)
      }
      if (event.message.text.startsWith('查符文 葛雷夫')) {
        graves(event)
      }
      if (event.message.text.startsWith('查符文 珍娜')) {
        janna(event)
      }
      if (event.message.text.startsWith('查符文 嘉文四世')) {
        jarvan(event)
      }
      if (event.message.text.startsWith('查符文 賈克斯')) {
        jax(event)
      }
      if (event.message.text.startsWith('查符文 魔甘娜')) {
        morgana(event)
      }
      if (event.message.text.startsWith('查符文 庫奇')) {
        corki(event)
      }
      if (event.message.text.startsWith('查符文 凱能')) {
        kennen(event)
      }
      if (event.message.text.startsWith('查符文 燼')) {
        jhin(event)
      }
      if (event.message.text.startsWith('查符文 吉茵珂絲')) {
        jinx(event)
      }
      if (event.message.text.startsWith('查符文 凱莎')) {
        kaisa(event)
      }
      if (event.message.text.startsWith('查符文 李星')) {
        lee(event)
      }
      if (event.message.text.startsWith('查符文 露璐')) {
        lulu(event)
      }
      if (event.message.text.startsWith('查符文 墨菲特')) {
        malphite(event)
      }
      if (event.message.text.startsWith('查符文 易大師')) {
        yi(event)
      }
      if (event.message.text.startsWith('查符文 好運姐')) {
        fortune(event)
      }
      if (event.message.text.startsWith('查符文 娜米')) {
        nami(event)
      }
      if (event.message.text.startsWith('查符文 納瑟斯')) {
        nasus(event)
      }
      if (event.message.text.startsWith('查符文 歐拉夫')) {
        olaf(event)
      }
      if (event.message.text.startsWith('查符文 奧莉安娜')) {
        orianna(event)
      }
      if (event.message.text.startsWith('查符文 銳空')) {
        rakan(event)
      }
      if (event.message.text.startsWith('查符文 瑟菈紛')) {
        seraphine(event)
      }
      if (event.message.text.startsWith('查符文 希瓦娜')) {
        shyvana(event)
      }
      if (event.message.text.startsWith('查符文 辛吉德')) {
        singed(event)
      }
      if (event.message.text.startsWith('查符文 努努和威朗普')) {
        nunu(event)
      }
      if (event.message.text.startsWith('查符文 索娜')) {
        sona(event)
      }
      if (event.message.text.startsWith('查符文 索拉卡')) {
        soraka(event)
      }
      if (event.message.text.startsWith('查符文 崔絲塔娜')) {
        tristana(event)
      }
      if (event.message.text.startsWith('查符文 提摩')) {
        teemo(event)
      }
      if (event.message.text.startsWith('查符文 泰達米爾')) {
        tryndamere(event)
      }
      if (event.message.text.startsWith('查符文 逆命')) {
        twisted(event)
      }
      if (event.message.text.startsWith('查符文 法洛士')) {
        varus(event)
      }
      if (event.message.text.startsWith('查符文 汎')) {
        vayne(event)
      }
      if (event.message.text.startsWith('查符文 菲艾')) {
        vi(event)
      }
      if (event.message.text.startsWith('查符文 路西恩')) {
        lucian(event)
      }
      if (event.message.text.startsWith('查符文 剎雅')) {
        xayah(event)
      }
      if (event.message.text.startsWith('查符文 趙信')) {
        zhao(event)
      }
      if (event.message.text.startsWith('查符文 犽宿')) {
        yasuo(event)
      }
      if (event.message.text.startsWith('查符文 賽特')) {
        sett(event)
      }
      if (event.message.text.startsWith('查符文 劫')) {
        zed(event)
      }
      if (event.message.text.startsWith('查符文 希格斯')) {
        ziggs(event)
      }
      if (event.message.text.startsWith('查符文 姍娜')) {
        senna(event)
      }
      if (event.message.text.startsWith('查符文 卡特蓮娜')) {
        katarina(event)
      }
      if (event.message.text.startsWith('查符文 卡力斯')) {
        kha(event)
      }
      if (event.message.text.startsWith('查符文 雷葛爾')) {
        rengar(event)
      }
      if (event.message.text.startsWith('查符文 拉姆斯')) {
        rammus(event)
      }
      if (event.message.text.startsWith('查符文 加里歐')) {
        galio(event)
      }
      if (event.message.text.startsWith('查符文 潘森')) {
        pantheon(event)
      }
      if (event.message.text.startsWith('查符文 維迦')) {
        veigar(event)
      }
      if (event.message.text.startsWith('查符文 雷歐娜')) {
        leona(event)
      }
      if (event.message.text.startsWith('查符文 黛安娜')) {
        diana(event)
      }
      if (event.message.text.startsWith('查符文 雷玟')) {
        riven(event)
      }
      if (event.message.text.startsWith('查符文 埃可尚')) {
        akshan(event)
      }
      if (event.message.text.startsWith('查符文 伊瑞莉雅')) {
        irelia(event)
      }
      if (event.message.text.startsWith('查符文 雷尼克頓')) {
        renekton(event)
      }
      if (event.message.text.startsWith('查符文 瑟雷西')) {
        thresh(event)
      }
      if (event.message.text.startsWith('查符文 凱特琳')) {
        caitlyn(event)
      }
      if (event.message.text.startsWith('查符文 杰西')) {
        jayce(event)
      }
      if (event.message.text.startsWith('查符文 卡瑪')) {
        karma(event)
      }
      if (event.message.text.startsWith('查符文 慎')) {
        shen(event)
      }
      if (event.message.text.startsWith('查符文 納帝魯斯')) {
        nautilus(event)
      }
      if (event.message.text.startsWith('查符文 派克')) {
        pyke(event)
      }
      if (event.message.text.startsWith('查符文 卡薩丁')) {
        kassadin(event)
      }
      if (event.message.text.startsWith('查符文 煞蜜拉')) {
        samira(event)
      }
      if (event.message.text.startsWith('查符文 犽凝')) {
        yone(event)
      }
    } catch (error) {
      console.log(error)
      event.reply('不好意思啦~請輸入文字唷')
    }
  }
})

// linebot 偵測指定 port 的指定路徑請求
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
