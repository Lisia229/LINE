export default (event) => {
  event.reply({
    type: 'text',
    text: '您想要搜尋哪位Ad英雄呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/08/samira-icon.jpg',
          action: {
            type: 'message',
            label: '煞蜜拉',
            text: '查符文 煞蜜拉'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/10/CaitlynSquare.png',
          action: {
            type: 'message',
            label: '凱特琳',
            text: '查符文 凱特琳'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/07/LucianSquare.png',
          action: {
            type: 'message',
            label: '路西恩',
            text: '查符文 路西恩'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Kaisa_wild_rift.png',
          action: {
            type: 'message',
            label: '凱莎',
            text: '查符文 凱莎'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Vayne_wild_rift.png',
          action: {
            type: 'message',
            label: '汎',
            text: '查符文 汎'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Ezreal_wild_rift.png',
          action: {
            type: 'message',
            label: '伊澤瑞爾',
            text: '查符文 伊澤瑞爾'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/02/XayahSquare.jpg',
          action: {
            type: 'message',
            label: '剎雅',
            text: '查符文 剎雅'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/01/TristanaSquare.png',
          action: {
            type: 'message',
            label: '崔絲塔娜',
            text: '查符文 崔絲塔娜'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Draven_wild_rift.png',
          action: {
            type: 'message',
            label: '達瑞文',
            text: '查符文 達瑞文'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Jhin_wild_rift.png',
          action: {
            type: 'message',
            label: '燼',
            text: '查符文 燼'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Jinx_wild_rift.png',
          action: {
            type: 'message',
            label: '吉茵珂絲',
            text: '查符文 吉茵珂絲'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Ashe_wild_rift.png',
          action: {
            type: 'message',
            label: '艾希',
            text: '查符文 艾希'
          }
        }
      ]
    }
  })
}
