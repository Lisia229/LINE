export default (event) => {
  event.reply({
    type: 'text',
    text: '您想要搜尋哪條路線英雄呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/06/IreliaSquare.png',
          action: {
            type: 'message',
            label: '上路 Top',
            text: 'Top'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Orianna_wild_rift.png',
          action: {
            type: 'message',
            label: '中路 AP',
            text: 'Ap'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/05/KhaZixSquare.png',
          action: {
            type: 'message',
            label: '打野 Jg',
            text: 'Jg'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Kaisa_wild_rift.png',
          action: {
            type: 'message',
            label: '射手 Ad',
            text: 'Ad'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/02/Yuumi.png',
          action: {
            type: 'message',
            label: '輔助 sup',
            text: 'Sup'
          }
        }
      ]
    }
  })
}
