export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/37c89a1fb057ce41bb3ab533d1461d3e0ea14a3d-1280x720.jpg',
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
        text: '艾希',
        weight: 'bold',
        size: '20px',
        wrap: true
      },
      {
        type: 'text',
        text: '角色定位：射手 / 輔助',
        weight: 'bold',
        size: '16px',
        wrap: true
      },
      {
        type: 'text',
        text: '操作難易度：低',
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
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Long_Sword.jpg',
                size: 'xxs',
                position: 'absolute',
                align: 'start',
                offsetStart: '0px'
              },
              {
                type: 'image',
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Boots_of_Swiftness.jpg',
                size: 'xxs',
                position: 'absolute',
                offsetStart: '50px'
              },
              {
                type: 'image',
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Quicksilver_Enchant.jpg',
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
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Blade_of_the_RuinedKing.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'start',
                    offsetStart: '0px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Boots_of_Swiftness.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '40px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Runaan_sHurricane.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'end',
                    gravity: 'top',
                    margin: 'xs',
                    offsetStart: '80px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Infinity_Edge.jpg',
                    position: 'absolute',
                    size: 'xxs',
                    offsetStart: '120px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Mortal_Reminder.jpg',
                    position: 'absolute',
                    size: 'xxs',
                    offsetStart: '160px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Guardian_Angel.jpg',
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
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/conqueror_wild_rift.png',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'start',
                    offsetStart: '0px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/weakness_wild_rift.png',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '50px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/loyalty_wild_royalty.png',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'end',
                    gravity: 'top',
                    margin: 'xs',
                    offsetStart: '100px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/11/sweettooth_wild_rift.png',
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
    backgroundColor: '#e6f5ff'
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
          uri: 'https://wildrift.leagueoflegends.com/zh-tw/champions/ashe/'
        },
        color: '#007acc'
      },
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: '出裝＆符文攻略',
          uri: 'https://lolwildriftbuild.com/champion/ashe/'
        },
        color: '#007acc'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        margin: 'sm'
      }
    ],
    backgroundColor: '#e6f5ff'
  }
}
