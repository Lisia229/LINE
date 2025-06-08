import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/news/game-updates/')
    const $ = cheerio.load(data)
    const news = []

    $('.NewsList-module--newsList-- a').each(function (i) {
      if (i >= 12) return false

      const bubble = JSON.parse(JSON.stringify(templates))
      const href = $(this).attr('href') || ''
      const imgSrc = $(this).find('img').attr('src') || ''
      const imgAlt = $(this).find('img').attr('alt') || '激鬥峽谷新聞'
      const dateText = $(this).find('time').text().trim() || ''

      bubble.hero.url = imgSrc
      bubble.body.contents[0].text = imgAlt
      bubble.body.contents[1].contents[0].contents[0].text = '日期：' + dateText
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + href

      news.push(bubble)
    })

    if (news.length === 0) {
      console.error('❌ 目前沒有抓到任何新聞，可能是選擇器錯誤或網站改版！')
    }

    const reply = {
      type: 'flex',
      altText: '最新遊戲更新',
      contents: {
        type: 'carousel',
        contents: news
      }
    }

    await event.reply(reply)
    writejson(reply, 'news')
  } catch (error) {
    console.error('取得最新消息失敗：', error)
  }
}
