import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/News.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/?utm_source=riotbar&utm_medium=productcard%2Baccountmigration.leagueoflegends.com&utm_campaign=wr&utm_content=wr_keyart01')
    const $ = cheerio.load(data)
    const news = []
    $('.News-module--sliderWrapper--YjoDb ul li').each(function () {
      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.hero.url = $(this).find('.NewsCard-module--newsCard--2Puxl').attr('style').split('"')[1]
      bubble.body.contents[0].text = $(this).find('.NewsCard-module--title--Iycg9').text()
      bubble.body.contents[1].contents[0].contents[0].text = '日期：' + $(this).find('.heading-03').eq(0).text()
      if (bubble.footer.contents[0].action.uri !== 'http') {
        bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + $(this).find('.NewsCard-module--cardWrapper--jTMMa').find('.undefined').attr('href')
      } else {
        bubble.footer.contents[0].action.uri = $(this).find('.NewsCard-module--cardWrapper--jTMMa').find('.undefined').attr('href')
      }
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
