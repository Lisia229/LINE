import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/news/')
    const $ = cheerio.load(data)
    const news = []

    $('.sc-362cdf8e-0.hSAVYW a').each(function (i) {
      if (i >= 3) return false

      const $card = $(this)
      const image = $card.find('img').attr('src')
      const title = $card.find('[data-testid="card-title"]').text().trim()
      const date = $card.find('[data-testid="card-date"] time').text().trim()
      const href = $card.attr('href')
      const category = $card.find('[data-testid="card-category"]').text().trim()
      const description = $card.find('[data-testid="card-description"] [data-testid="rich-text-html"]').text().trim()

      console.log({ image, title, date, href, category, description })

      // 如果關鍵資料缺失，就跳過這筆
      if (!image || !title || !href) {
        console.warn(`第${i + 1}筆資料不完整，跳過`)
        return
      }

      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.hero.url = image
      bubble.body.contents[0].text = category || '最新消息'
      bubble.body.contents[1].text = title
      bubble.body.contents[2].text = '日期：' + date
      bubble.body.contents[3].text = description || '詳情請點擊閱讀詳情。'

      // 確保href是完整URL
      bubble.footer.contents[0].action.uri = href.startsWith('http') ? href : 'https://wildrift.leagueoflegends.com' + href

      news.push(bubble)
    })

    if (news.length === 0) {
      await event.reply('沒有抓到任何有效的新聞資料。')
      return
    }

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
