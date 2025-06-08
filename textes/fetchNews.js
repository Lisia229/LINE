import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/news/')
    const $ = cheerio.load(data)
    const news = []

    $('.sc-362cdf8e-0.hSAVYW a.action').each(function (i) {
      if (i >= 12) return false

      const $card = $(this)
      const image = $card.find('img').attr('src')
      const title = $card.find('[data-testid="card-title"]').text().trim()
      const date = $card.find('[data-testid="card-date"] time').text().trim()
      const href = $card.attr('href')
      const category = $card.find('[data-testid="card-category"]').text().trim()
      const description = $card.find('[data-testid="card-description"] [data-testid="rich-text-html"]').text().trim()

      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.hero.url = image
      bubble.body.contents[0].text = category || '最新消息'
      bubble.body.contents[1].text = title
      bubble.body.contents[2].text = '日期：' + date
      bubble.body.contents[3].text = description || '詳情請點擊閱讀詳情。'
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

    event.reply(reply)
    writejson(reply, 'news')
  } catch (error) {
    console.error(error)
  }
}
