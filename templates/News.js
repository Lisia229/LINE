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
        text: '分類標籤',
        size: 'xs',
        color: '#aaaaaa',
        wrap: true
      },
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
      },
      {
        type: 'text',
        text: '這是文章的摘要或說明文字，最多建議寫兩行',
        size: 'xs',
        color: '#666666',
        wrap: true,
        maxLines: 2
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
