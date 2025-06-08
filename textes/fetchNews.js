import axios from 'axios'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/page-data/zh-tw/news/page-data.json')

    const newsItems = data.result.data.allContentstackNewsArticle.nodes
    const news = []

    for (let i = 0; i < Math.min(newsItems.length, 12); i++) {
      const item = newsItems[i]
      const bubble = JSON.parse(JSON.stringify(templates))

      bubble.hero.url = item.heroImage.url
      bubble.body.contents[0].text = item.title
      bubble.body.contents[1].contents[0].contents[0].text = '日期：' + item.publishDate
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + item.url.alias

      news.push(bubble)
    }

    const reply = {
      type: 'flex',
      altText: '最新消息',
      contents: {
        type: 'carousel',
        contents: News
      }
    }

    await event.reply(reply)
    writejson(reply, 'News')
  } catch (error) {
    console.error(error)
  }
}
