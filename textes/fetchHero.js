import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/Hero.js'
import writejson from '../utils/writejson.js'
import _ from 'lodash'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/champions/')
    const $ = cheerio.load(data)
    const heros = []
    $('.ChampionList-module--championList---KkLH li').each(function (i) {
      // if (i >= 12) return false
      const bubble = JSON.parse(JSON.stringify(templates))
      bubble.hero.url = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('src')
      bubble.body.contents[0].text = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('alt')
      bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + $(this).find('.ChampionListCard-module--championListCardWrapper--BJ2LG').attr('href')
      heros.push(bubble)
    })
    const replies = _.chunk(heros, 12).slice(0, 5).map(bubblesss => {
      console.log(bubblesss)
      return {
        type: 'flex',
        altText: '所有英雄查詢結果',
        contents: {
          type: 'carousel',
          contents: bubblesss
        }
      }
    })

    event.reply(replies)
    if (process.env.WRITEJSON) {
      for (const i in replies) {
        writejson(replies[i], `heros${i}`)
      }
    }
    // const reply = {
    //   type: 'flex',
    //   altText: '所有英雄查詢結果',
    //   contents: {
    //     type: 'carousel',
    //     contents: heros
    //   }
    // }
    // event.reply(reply)
    // writejson(reply, 'heros')
  } catch (error) {
    console.error(error)
  }
}
