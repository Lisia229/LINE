export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt80a285e31ef428be/6132b85d4a33fd446132a2ab/Nunu_Skin02.jpg',
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
        text: '努努和威朗普',
        weight: 'bold',
        size: '20px',
        wrap: true
      },
      {
        type: 'text',
        text: '角色定位：坦克 / 法師',
        weight: 'bold',
        size: '16px',
        wrap: true
      },
      {
        type: 'text',
        text: '操作難易度：高',
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
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/RubyCrystal.jpg',
                size: 'xxs',
                position: 'absolute',
                align: 'start',
                offsetStart: '0px'
              },
              {
                type: 'image',
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Mercury_sTreads.jpg',
                size: 'xxs',
                position: 'absolute',
                offsetStart: '50px'
              },
              {
                type: 'image',
                url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Glorious_Enchant.jpg',
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
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Sunfire_Aegis.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'start',
                    offsetStart: '0px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Mercury_sTreads.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    offsetStart: '40px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Deadman_sPlate.jpg',
                    size: 'xxs',
                    position: 'absolute',
                    align: 'end',
                    gravity: 'top',
                    margin: 'xs',
                    offsetStart: '80px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Spirit_Visage.jpg',
                    position: 'absolute',
                    size: 'xxs',
                    offsetStart: '120px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Thornmail.jpg',
                    position: 'absolute',
                    size: 'xxs',
                    offsetStart: '160px'
                  },
                  {
                    type: 'image',
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/Randuin_sOmen.jpg',
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
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/10/aftershock_wild_rift.png',
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
                    url: 'https://lolwildriftbuild.com/wp-content/uploads/2020/11/pathfinder_wild_rift.png',
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
    backgroundColor: '#ffffcc'
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
          uri: 'https://wildrift.leagueoflegends.com/zh-tw/champions/nunu-willump/'
        },
        color: '#290066'
      },
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: '出裝＆符文攻略',
          uri: 'https://lolwildriftbuild.com/champion/nunu-willump/'
        },
        color: '#290066'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [],
        margin: 'sm'
      }
    ],
    backgroundColor: '#ffffcc'
  }
}
