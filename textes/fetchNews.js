import puppeteer from 'puppeteer'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new', // 避免 warning
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await browser.newPage()
    await page.goto('https://wildrift.leagueoflegends.com/zh-tw/news/', {
      waitUntil: 'networkidle2'
    })

    const news = await page.evaluate(() => {
      const articles = []
      const cards = document.querySelectorAll('a[data-testid="articlefeaturedcard-component"]')
      for (let i = 0; i < Math.min(cards.length, 6); i++) {
        const card = cards[i]
        const title = card.querySelector('[data-testid="card-title"]')?.textContent.trim()
        const date = card.querySelector('[data-testid="card-date"] time')?.textContent.trim()
        const href = card.getAttribute('href')
        const category = card.querySelector('[data-testid="card-category"]')?.textContent.trim()
        const description = card.querySelector('[data-testid="rich-text-html"]')?.textContent.trim()
        const img = card.querySelector('[data-testid="card-image"] img')?.getAttribute('src')

        articles.push({
          title,
          date,
          href,
          category,
          description,
          image: img?.startsWith('http') ? img : 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png'
        })
      }
      return articles
    })

    await browser.close()

    const bubbles = news.map(article => {
      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.hero.url = article.image
      bubble.body.contents[0].text = article.category || '最新消息'
      bubble.body.contents[1].text = article.title
      bubble.body.contents[2].text = '日期：' + article.date
      bubble.body.contents[3].text = article.description || '詳情請點擊閱讀詳情。'
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + article.href
      return bubble
    })

    const reply = {
      type: 'flex',
      altText: '最新消息',
      contents: {
        type: 'carousel',
        contents: bubbles
      }
    }

    await event.reply(reply)
    writejson(reply, 'news')
  } catch (error) {
    console.error(error)
  }
}
