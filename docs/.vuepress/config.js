module.exports = {
  title: '前端讲师',
  description: '有想法的前端讲义',
  // dest: 'docs',
  // dest: './docs', // 设置输出目录
  themeConfig: {
    // sidebar: [
    //   // '../JavaScript/datatype.md',
    //   // '../JavaScript/datatype.md',
    //   // ['../JavaScript/datatype.md', 'title'],
    //   // {
    //   //   title: 'Group 1', // 必要的
    //   //   path: '/foo/', // 可选的, 应该是一个绝对路径
    //   //   collapsable: false, // 可选的, 默认值是 true,
    //   //   sidebarDepth: 1, // 可选的, 默认值是 1
    //   //   children: [
    //   //     '/',
    //   //   ],
    //   // },
    //   // {
    //   //   title: 'Group 2',
    //   //   children: [],
    //   // },
    // ],

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'JavaScript',
        items: [
          {
            text: '对象初级',
            items: [
              { text: '数据类型', link: '../JavaScript/datatype.md' },
              { text: '函数', link: '../JavaScript/function.md' },
            ],

          },
        ],
      },
      { text: 'External', link: 'https://google.com' },
    ],
  },
};
