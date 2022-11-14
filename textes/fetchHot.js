import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/character.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.leagueofgraphs.com/zh/champions/builds')
    const $ = cheerio.load(data)
    const character = []
    $('.data_table tr').each(function (i) {
      if (i >= 6) return false
      if (i !== 0) {
        const bubble = JSON.parse(JSON.stringify(templates))
        bubble.hero.url = 'https://lolg-cdn.porofessor.gg/img/d/champion-icons/12.21/64/' + $(this).find('img').attr('class').split('-')[1] + '.png'
        bubble.body.contents[0].text = $(this).find('td').eq(1).find('.name').eq(0).text().split('\n').map(text => text.trim()).filter(text => text.length > 0 && text.length < 6).toString()
        bubble.body.contents[1].contents[0].contents[0].text = '使用率：' + $(this).find('td').eq(2).find('progressBar').attr('data-value') * 100 + '%'
        character.push(bubble)
      }
      return true
    })
    const reply = {
      type: 'flex',
      altText: '熱門英雄查詢結果',
      contents: {
        type: 'carousel',
        contents: character
      }
    }
    event.reply(reply)
    writejson(reply, 'character')
  } catch (error) {
    console.error(error)
  }
}
