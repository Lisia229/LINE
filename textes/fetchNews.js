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
      const bubble = JSON.parse(JSON.stringify(templates)) // 深拷貝

      // 正確填入資料
      bubble.hero.url = item.heroImage.url
      bubble.body.contents[0].text = item.title
      bubble.body.contents[1].text = '日期：' + item.publishDate
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + item.url.alias

      news.push(bubble)
    }

    const reply = {
      type: 'flex',
      altText: '最新消息',
      contents: {
        type: 'carousel',
        contents: news // <== 修正這裡
      }
    }

    await event.reply(reply)
    writejson(reply, 'news')
  } catch (error) {
    console.error(error)
    await event.reply('取得最新消息失敗，請稍後再試。')
  }
}
