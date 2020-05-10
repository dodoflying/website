module.exports = {
  title: 'Don Li',
  description: 'Don Li Website',
  themeConfig: {
    navbar: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Book Notes', link: '/book/' },
    ]
  },
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          // Unique ID of current classification
          id: 'post',
          // Target directory
          dirname: '_posts',
          // Path of the `entry page` (or `list page`)
          path: '/post/',
          itemPermalink: '/post/:year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 5,
          },
        },
        {
          id: 'book',
          dirname: '_book',
          path: '/book/',
          itemPermalink: '/book/:year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 5,
          },
        },
      ],
    }]
  ]
}