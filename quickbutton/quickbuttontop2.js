export default (event) => {
  event.reply({
    type: 'text',
    text: '您想要搜尋哪位Top英雄呢？',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/05/RenektonSquare.png',
          action: {
            type: 'message',
            label: '雷尼克頓',
            text: '查符文 雷尼克頓'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/09/yone.jpg',
          action: {
            type: 'message',
            label: '犽凝',
            text: '查符文 犽凝'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/06/RivenSquare.png',
          action: {
            type: 'message',
            label: '雷玟',
            text: '查符文 雷玟'
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
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Camille_wild_rift.png',
          action: {
            type: 'message',
            label: '卡蜜兒',
            text: '查符文 卡蜜兒'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Darius_wild_rift.png',
          action: {
            type: 'message',
            label: '達瑞斯',
            text: '查符文 達瑞斯'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Garen_wild_rift.png',
          action: {
            type: 'message',
            label: '蓋倫',
            text: '查符文 蓋倫'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Nasus_wild_rift.png',
          action: {
            type: 'message',
            label: '納瑟斯',
            text: '查符文 納瑟斯'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/12/KayleSquare.png',
          action: {
            type: 'message',
            label: '凱爾',
            text: '查符文 凱爾'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Fiora_wild_rift.png',
          action: {
            type: 'message',
            label: '菲歐拉',
            text: '查符文 菲歐拉'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2021/10/JayceSquare.png',
          action: {
            type: 'message',
            label: '杰西',
            text: '查符文 杰西'
          }
        },
        {
          type: 'action',
          imageUrl: 'https://lolwildriftbuild.com/wp-content/uploads/2022/02/Sett.png',
          action: {
            type: 'message',
            label: '賽特',
            text: '查符文 賽特'
          }
        }
      ]
    }

  })
}
