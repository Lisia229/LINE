// 引用 dotenv 讀取 .env 檔的設定
import 'dotenv/config'
// 引用 linebot
import linebot from 'linebot'
import fetchHot from './textes/fetchHot.js'
import fetchNews from './textes/fetchNews.js'
import fetchHero from './textes/fetchHero.js'
import fetchsearch from './textes/fetchsearch.js'

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
  if (event.message.text === '熱門英雄') {
    fetchHot(event)
  }
  if (event.message.text === '最新消息') {
    fetchNews(event)
  }
  if (event.message.text === '所有英雄') {
    fetchHero(event)
  }
  if (event.message.text.startsWith('查英雄 ')) {
    fetchsearch(event)
  }
})

// linebot 偵測指定 port 的指定路徑請求
bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
