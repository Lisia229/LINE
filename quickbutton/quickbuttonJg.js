export default (event) => {
  event.reply({
    type: 'text',
    text: '您想要搜尋哪位Jg英雄呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/05/KhaZixSquare.png',
          action: {
            type: 'message',
            label: '卡力斯',
            text: '查符文 卡力斯'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/12/MonkeyKing.png',
          action: {
            type: 'message',
            label: '悟空',
            text: '查符文 悟空'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Gragas_wild_rift.png',
          action: {
            type: 'message',
            label: '古拉格斯',
            text: '查符文 古拉格斯'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Shyvana_wild_rift.png',
          action: {
            type: 'message',
            label: '希瓦娜',
            text: '查符文 希瓦娜'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Olaf_wild_rift.png',
          action: {
            type: 'message',
            label: '歐拉夫',
            text: '查符文 歐拉夫'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/LeeSin_wild_rift.png',
          action: {
            type: 'message',
            label: '李星',
            text: '查符文 李星'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Evelynn_wild_rift.png',
          action: {
            type: 'message',
            label: '伊芙琳',
            text: '查符文 伊芙琳'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/09/Warwick-icon.jpg',
          action: {
            type: 'message',
            label: '雷葛爾',
            text: '查符文 雷葛爾'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/XinZhao_wild_rift.png',
          action: {
            type: 'message',
            label: '趙信',
            text: '查符文 趙信'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Vi_wild_rift.png',
          action: {
            type: 'message',
            label: '菲艾',
            text: '查符文 菲艾'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/JarvanIV_wild_rift.png',
          action: {
            type: 'message',
            label: '嘉文四世',
            text: '查符文 嘉文四世'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/04/RammusSquare.png',
          action: {
            type: 'message',
            label: '拉姆斯',
            text: '查符文 拉姆斯'
          }
        }
      ]
    }

  })
}
