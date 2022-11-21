export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt910b75ccb59a5023/602498ee29a02c49ba1f6986/Orianna_Skin04.jpg',
    size: 'full',
    aspectMode: 'cover',
    aspectRatio: '15:13'
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: '奧莉安娜',
        weight: 'bold',
        size: '20px',
        wrap: true
      },
      {
        type: 'text',
        text: '角色定位：法師 / 輔助',
        weight: 'bold',
        size: '16px',
        wrap: true
      },
      {
        type: 'text',
        text: '操作難易度：適中',
        weight: 'bold',
        size: '16px',
        wrap: true
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '起始裝備'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'image',
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/amplifying-tome.jpg',
                size: 'xxs',
                position: 'absolute',
                align: 'start',
                offsetStart: '0px'
              },
              {
                type: 'image',
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Ionian_Boots_of_Lucidity.jpg',
                size: 'xxs',
                position: 'absolute',
                offsetStart: '50px'
              },
              {
                type: 'image',
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Stasis_Enchant.jpg',
                size: 'xxs',
                position: 'absolute',
                align: 'end',
                gravity: 'top',
                margin: 'xs',
                offsetStart: '100px'
              }
            ],
            spacing: 'sm',
            paddingAll: '13px',
            height: '60px'
          }
        ],
        spacing: 'sm',
        paddingAll: '13px'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '出裝'
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Archangel_sstaff.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'start',
                    offsetStart: '0px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Ionian_Boots_of_Lucidity.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '40px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Liandry_sTorment.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'end',
                    gravity: 'top',
                    margin: 'xs',
                    offsetStart: '80px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Rabadon_sDeathcap.jpg',
                    position: 'absolute',
                    size: 'xxs',
                    offsetStart: '120px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Void_Staff.jpg',
                    position: 'absolute',
                    size: 'xxs',
                    offsetStart: '160px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Morellonomicon.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '200px'
                  }
                ],
                spacing: 'sm',
                paddingAll: '13px',
                height: '60px'
              }
            ],
            spacing: 'sm',
            paddingAll: '13px'
          }
        ]
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '符文'
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/electrocute_wild_rift.png',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'start',
                    offsetStart: '0px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/brutal_wild_rift.png',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '50px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/huntertitan_wild_rift.png',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'end',
                    gravity: 'top',
                    margin: 'xs',
                    offsetStart: '100px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/11/huntergenius_wild_rift.png',
                    position: 'absolute',
                    size: 'xxs',
                    offsetStart: '150px'
                  }
                ],
                spacing: 'sm',
                paddingAll: '13px',
                height: '60px'
              }
            ],
            spacing: 'sm',
            paddingAll: '13px'
          }
        ]
      }
    ],
    spacing: 'sm',
    paddingAll: '13px',
    backgroundColor: '#e6f7ff'
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
          label: '英雄介紹',
          uri: 'https://wildrift.leagueoflegends.com/zh-tw/champions/orianna/'
        },
        color: '#004466'
      },
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: '出裝＆符文攻略',
          uri: 'https://lolwildriftbuild.com/champion/orianna/'
        },
        color: '#004466'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        margin: 'sm'
      }
    ],
    backgroundColor: '#e6f7ff'
  }
}
