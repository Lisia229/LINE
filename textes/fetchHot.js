import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/character.js'
import writejson from '../utils/writejson.js'
import championMap from '../data/championMap.js'

export default async event => {
  try {
    const { data } = await axios.get('https://www.leagueofgraphs.com/zh/champions/builds')
    const $ = cheerio.load(data)
    const character = []

    $('.data_table tr').each(function (i) {
      if (i >= 12) return false
      if (i !== 0) {
        const bubble = JSON.parse(JSON.stringify(templates))
        const className = $(this).find('img').attr('class') || ''
        const champId = className.split('-')[1]
        const engName = championMap[champId]

        // 英雄圖片
        bubble.hero.url = `https://ddragon.leagueoflegends.com/cdn/14.10.1/img/champion/${engName}.png`

        // 中文名稱
        bubble.body.contents[0].text = $(this).find('td').eq(1).find('.name').text().trim()

        // 使用率
        bubble.body.contents[1].contents[0].contents[0].text =
          '使用率：' + (parseFloat($(this).find('td').eq(2).find('progressbar').attr('data-value')) * 100).toFixed(1) + '%'

        // 對應英雄網址
        bubble.footer.contents[0].action.uri = `https://wildrift.leagueoflegends.com/zh-tw/champions/${engName.toLowerCase()}/`

        character.push(bubble)
      }
    })

    const reply = {
      type: 'flex',
      altText: '熱門英雄查詢結果',
      contents: {
        type: 'carousel',
        contents: character
      }
    }

    await event.reply(reply)
    writejson(reply, 'character')
  } catch (error) {
    console.error(error)
  }
}
