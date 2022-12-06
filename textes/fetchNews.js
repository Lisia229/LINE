import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/news/')
    const $ = cheerio.load(data)
    const news = []
    $('.ArticleCard-module--articleCardWrapper--0Y3jo').each(function () {
      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.hero.url = $(this).find('img').attr('src')
      bubble.body.contents[0].text = $(this).find('img').attr('alt')
      bubble.body.contents[1].contents[0].contents[0].text = '日期：' + $(this).find('.copy-01').eq(0).text()
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + $(this).attr('href')
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
