// import getPureText from './getPureText'
var getPureText = require('./getPureText')

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
        path: 'tags',
        component: './Tags'
      },
      {
        path: 'tags/:tag',
        component: './TagDetail'
      },
      {
        path: '*',
        component: './Post'
      }
    ]
  },
  notFound: './NotFound',
  root: './template',
  config: {
    pageSize: 6 ,
    title: 'crystal',
    blogName: 'crystal',           // the text in the header of blog pages
    avatarUrl: 'avatar.png',   // put your avatar image under ~./extra/ 
    gitment: {
      owner: 'Claiyre',
      repo: 'Claiyre.github.io',
      oauth: {
        client_id: 'xxx',
        client_secret: 'xxxx'
      }
    }
  },
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