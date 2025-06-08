import axios from 'axios'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/page-data/zh-tw/news/page-data.json')

    console.log('原始資料：', JSON.stringify(data, null, 2))

    const newsItems = data.props.pageProps.data.allContentstackNewsArticle.nodes
    const news = []

    for (let i = 0; i < Math.min(newsItems.length, 12); i++) {
      const item = newsItems[i]

      // 檢查必要欄位
      if (!item.heroImage?.url || !item.url?.alias) continue

      const bubble = JSON.parse(JSON.stringify(templates))

      bubble.hero.url = item.heroImage.url
      bubble.body.contents[0].text = item.title
      bubble.body.contents[1].text = '日期：' + item.publishDate
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + item.url.alias

      news.push(bubble)
    }

    if (news.length === 0) {
      await event.reply('目前查無最新消息。')
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
    console.error('錯誤詳情：', JSON.stringify(error, null, 2))
    await event.reply('取得最新消息失敗，請稍後再試。')
  }
}
