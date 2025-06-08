import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/news/')
    const $ = cheerio.load(data)
    const news = []

    $('a[data-testid="card-link"]').each(function (i) {
      if (i >= 6) return false

      const $card = $(this)
      const imageSrc = $card.find('img').attr('src')
      const image = imageSrc && imageSrc.startsWith('http') ? imageSrc : 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png' // 預設圖片

      const title = $card.find('[data-testid="card-title"]').text().trim()
      const date = $card.find('[data-testid="card-date"] time').text().trim()
      const href = $card.attr('href')
      const category = $card.find('[data-testid="card-category"]').text().trim()
      const description = $card.find('[data-testid="card-description"] [data-testid="rich-text-html"]').text().trim()

      console.log({ image, title, date, href, category, description })

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

    await event.reply(reply)
    writejson(reply, 'news')
  } catch (error) {
    console.error(error)
  }
}
