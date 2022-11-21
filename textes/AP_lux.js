// import axios from 'axios'
// import * as cheerio from 'cheerio'
import templates from '../templates/AP_lux.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    // const { data } = await axios.get('https://wildrift.leagueoflegends.com/zh-tw/champions/')
    // https://lolwildriftbuild.com/champion/yuumi/
    // const { data2 } = await axios.get('https://lolwildriftbuild.com/champion/')
    // const $ = cheerio.load(data)
    // const $$ = cheerio.load(data2)
    const bubble = JSON.parse(JSON.stringify(templates))
    // $('.ChampionList-module--championList---KkLH li').each(function () {
    //   const heroname = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('alt')
    //   console.log(heroname)
    //   if (heroname.includes(event.message.text.substr(4))) {
    //     bubble.hero.url = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('src')
    //     // body區
    //     // role name
    //     bubble.body.contents[0].text = $(this).find('.ChampionListCard-module--championImage--8pKNw').attr('alt')
    //     // first img
    //     // bubble.body.contents[0].contents[0].contents[0].url = $$('.items-list').find('.build-item').eq(0).find('img').attr('src')
    //     // footer區
    //     bubble.footer.contents[0].action.uri = 'https://wildrift.leagueoflegends.com' + $(this).find('.ChampionListCard-module--championListCardWrapper--BJ2LG').attr('href')
    //     bubble.footer.contents[1].action.uri = 'https://lolwildriftbuild.com/champion/' + $(this).find('.ChampionListCard-module--championListCardWrapper--BJ2LG').attr('href').split('/')[3] + '/'
    //   }
    // })
    const reply = {
      type: 'flex',
      altText: '英雄查詢',
      contents: {
        type: 'carousel',
        contents: [bubble]
      }
    }
    event.reply(reply)
    writejson(reply, 'APlux')
  } catch (error) {
    console.error(error)
  }
}
