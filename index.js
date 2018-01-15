// import getPureText from './getPureText'
var getPureText = require('./getPureText')
var themeConfig = require('./config')

module.exports = {
  routes: {
    path: '/',
    component: './Layout',
    indexRoute: {
      component: './Archive',
    },
    childRoutes: [
      {
        path: 'posts/:page',
        component: './Archive'
      },
      {
        path: 'about',
        component: './About'
      },
      {
        path: '*',
        component: './Post'
      }
    ]
  },
  notFound: './NotFound',
  root: './template',
  config: themeConfig,
  picker: function(metaData, gift, require) {
    var content = gift.content,
      filename = gift.filename,
      getMarkdownData = gift.getMarkdownData,
      path = gift.path;
      content = getPureText(content);

    // autoKeyword(metaData, gift, {name: 'keywords'})

    return Object.assign(metaData, {desc: content.slice(0, 200)})
  },
}