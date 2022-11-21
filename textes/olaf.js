import templates from '../templates/olaf.js'
import writejson from '../utils/writejson.js'

export default async (event) => {
  try {
    const bubble = JSON.parse(JSON.stringify(templates))
    const reply = {
      type: 'flex',
      altText: '英雄查詢',
      contents: {
        type: 'carousel',
        contents: [bubble]
      }
    }
    event.reply(reply)
    writejson(reply, 'olaf')
  } catch (error) {
    console.error(error)
  }
}
