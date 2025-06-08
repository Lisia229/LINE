import axios from 'axios'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async event => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/page-data/zh-tw/news/game-updates/page-data.json')

    // 根據該 JSON，節點路徑為
    // data.result.data.allContentstackNewsArticle.nodes（或 props.pageProps.data...）
    const items = data.result?.data?.allContentstackNewsArticle?.nodes || data.props?.pageProps?.data?.allContentstackNewsArticle?.nodes

    if (!items) {
      console.error('❌ JSON 結構改變或取不到 nodes')
      return event.reply('目前無法抓取最新更新，請稍後再試。')
    }

    const news = items
      .slice(0, 12)
      .map(item => {
        if (!item.title || !item.heroImage?.url || !item.url?.alias) return null
        const bubble = JSON.parse(JSON.stringify(templates))
        bubble.hero.url = item.heroImage.url
        bubble.body.contents[0].text = item.title
        bubble.body.contents[1].text = '日期：' + item.publishDate
        bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + item.url.alias
        return bubble
      })
      .filter(b => b)

    if (news.length === 0) {
      await event.reply('目前沒有可顯示的最新更新。')
      return
    }

    const reply = {
      type: 'flex',
      altText: '最新更新資訊',
      contents: {
        type: 'carousel',
        contents: news
      }
    }

    await event.reply(reply)
    writejson(reply, 'news-game-updates')
  } catch (err) {
    console.error('取得 game-updates JSON 錯誤', err)
    await event.reply('取得最新更新失敗，請稍後再試。')
  }
}
