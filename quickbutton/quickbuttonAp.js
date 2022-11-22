export default (event) => {
  event.reply({
    type: 'text',
    text: '您想要搜尋哪位Ap英雄呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Yasuo_wild_rift.png',
          action: {
            type: 'message',
            label: '犽宿',
            text: '查符文 犽宿'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-conthttps://lolwildriftbuild.com/wp-content/uploads/2020/10/Ahri_wild_rift.png',
          action: {
            type: 'message',
            label: '阿璃',
            text: '查符文 阿璃'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/07/kassadin-small-icon.jpg',
          action: {
            type: 'message',
            label: '卡薩丁',
            text: '查符文 卡薩丁'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Zed_wild_rift.png',
          action: {
            type: 'message',
            label: '劫',
            text: '查符文 劫'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Orianna_wild_rift.png',
          action: {
            type: 'message',
            label: '奧莉安娜',
            text: '查符文 奧莉安娜'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/TwistedFate_wild_rift.png',
          action: {
            type: 'message',
            label: '逆命',
            text: '查符文 逆命'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Akali_wild_rift.png',
          action: {
            type: 'message',
            label: '阿卡莉',
            text: '查符文 阿卡莉'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/03/KatarinaSquare.png',
          action: {
            type: 'message',
            label: '卡特蓮娜',
            text: '查符文 卡特蓮娜'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/06/IreliaSquare.png',
          action: {
            type: 'message',
            label: '伊瑞莉雅',
            text: '查符文 伊瑞莉雅'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/10/VeigarSquare.png',
          action: {
            type: 'message',
            label: '維迦',
            text: '查符文 維迦'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/04/GalioSquare.png',
          action: {
            type: 'message',
            label: '加里歐',
            text: '查符文 加里歐'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-contehttps://lolwildriftbuild.com/wp-content/uploads/2020/10/Fizz_wild_rift.png',
          action: {
            type: 'message',
            label: '飛斯',
            text: '查符文 飛斯'
          }
        }
      ]
    }

  })
}
