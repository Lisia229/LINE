import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/news/')
    const $ = cheerio.load(data)
    const news = []

    $('.news-card').each(function (i) {
      if (i >= 12) return false

      const bubble = JSON.parse(JSON.stringify(templates))

      const imgSrc = $(this).find('img').attr('src') || ''
      const imgAlt = $(this).find('img').attr('alt') || ''
      const dateText = $(this).find('.date').text().trim() || ''
      const href = $(this).attr('href') || ''

      bubble.hero.url = imgSrc
      bubble.body.contents[0].text = imgAlt
      // 這裡對應你的模板，改成正確的路徑設定日期文字
      bubble.body.contents[1].contents[0].contents[0].text = '日期：' + dateText
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + href

      news.push(bubble)
    })

    const reply = {
      type: 'flex',
      altText: '最新消息',
      contents: {
        type: 'carousel',
        contents: news
      }
    }

    await event.reply(reply)
    writejson(reply, 'news')
  } catch (error) {
    console.error(error)
  }
}
