export default (event) => {
  event.reply({
    type: 'text',
    text: '您想要搜尋哪位sup英雄呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/02/Yuumi.png',
          action: {
            type: 'message',
            label: '悠咪',
            text: '查符文 悠咪'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Nami_wild_rift.png',
          action: {
            type: 'message',
            label: '娜米',
            text: '查符文 娜米'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Lux_wild_rift.png',
          action: {
            type: 'message',
            label: '拉克絲',
            text: '查符文 拉克絲'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Malphite_wild_rift.png',
          action: {
            type: 'message',
            label: '墨菲特',
            text: '查符文 墨菲特'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Blitzcrank_wild_rift.png',
          action: {
            type: 'message',
            label: '布里茨',
            text: '查符文 布里茨'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Soraka_wild_rift.png',
          action: {
            type: 'message',
            label: '索拉卡',
            text: '查符文 索拉卡'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/seraphine_square_wild_rift.png',
          action: {
            type: 'message',
            label: '瑟菈紛',
            text: '查符文 瑟菈紛'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Sona_wild_rift.png',
          action: {
            type: 'message',
            label: '索娜',
            text: '查符文 索娜'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/08/ThreshSquare2.jpg',
          action: {
            type: 'message',
            label: '瑟雷西',
            text: '查符文 瑟雷西'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/12/MorganaSquare.png',
          action: {
            type: 'message',
            label: '魔甘娜',
            text: '查符文 魔甘娜'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Lulu.png',
          action: {
            type: 'message',
            label: '露璐',
            text: '查符文 露璐'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/03/karma-icon.jpg',
          action: {
            type: 'message',
            label: '卡瑪',
            text: '查符文 卡瑪'
          }
        }
      ]
    }

  })
}
