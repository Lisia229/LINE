import axios from 'axios'
import * as cheerio from 'cheerio'
import templates from '../templates/search.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/champions/')
    const $ = cheerio.load(data)
    const bubble = JSON.parse(JSON.stringify(templates))
    $('.ChampionList-module--championList---KkLH li').each(function () {
      const heroname = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('alt')
      if (heroname.includes(event.message.text.substr(4))) {
        bubble.hero.url = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('src')
        bubble.body.contents[0].text = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('alt')
        bubble.footer.contents[0].action[0].uri = 'https://wildrift.leagueoflegends.com' + $(this).find('.ChampionListCard-module--championListCardWrapper--BJ2LG').attr('href')
        bubble.footer.contents[0].action[1].uri = 'https://lolwildriftbuild.com/champion/' + $(this).find('.ChampionListCard-module--championListCardWrapper--BJ2LG').attr('href').split('/')[3] + '/'
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
