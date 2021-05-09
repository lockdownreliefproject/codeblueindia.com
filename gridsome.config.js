// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Code Blue' ,
  siteUrl: '',
  siteDescription: 'Code Blue',
  templates: {
    Post: '/blog/:title'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    }
  ],
}
