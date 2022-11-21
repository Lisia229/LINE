// 引用 dotenv 讀取 .env 檔的設定
import 'dotenv/config'
import linebot from 'linebot'
import fetchHot from './textes/fetchHot.js'
import fetchNews from './textes/fetchNews.js'
import fetchHero from './textes/fetchHero.js'
import fetchsearch from './textes/fetchsearch.js'
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
      if (event.message.text === '查英雄') {
        event.reply('若想快速查詢英雄，請打關鍵字，例如:查英雄 娜米; 若想查詢符文，請打關鍵字，例如:查符文 拉克絲')
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
      } else {
        event.reply('搜哩哪 我不太懂你的意思qaq')
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
