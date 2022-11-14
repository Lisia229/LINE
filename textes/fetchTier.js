import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/search.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://lolwildriftbuild.com/tier-list/')
    // const { data: data2 } = await axios.get('https://lolwildriftbuild.com/tier-list/')
    // const $$ = cheerio.load(data2)
    const $ = cheerio.load(data)
    const bubble = JSON.parse(JSON.stringify(templates))
    $('.characters-list').each(function () {
      const heroname = $(this).find('.character-icon').attr('alt')
      console.log(heroname)
      if (heroname.includes(event.message.text.substr(4))) {
        bubble.footer.contents[0].action.uri = $(this).find('.characters-item').attr('href')
      }
    })
    const reply = {
      type: 'flex',
      altText: '英雄查詢',
      contents: {
        type: 'carousel',
        contents: [bubble]
      }
    }
    event.reply(reply)
    writejson(reply, 'search')
  } catch (error) {
    console.error(error)
  }
}
