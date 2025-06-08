export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
    size: 'full',
    aspectMode: 'cover',
    aspectRatio: '320:213'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    paddingAll: '13px',
    contents: [
      {
        type: 'text',
        text: '標題',
        weight: 'bold',
        size: 'sm',
        wrap: true
      },
      {
        type: 'text',
        text: '日期：YYYY-MM-DD',
        size: 'xs',
        color: '#8c8c8c',
        wrap: true
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: '閱讀詳情',
          uri: 'https://wildrift.leagueoflegends.com'
        }
      }
    ],
    flex: 0
  }
}
