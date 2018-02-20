var documentTitle = require('react-document-title')

module.exports = function (gift) {
  var title = documentTitle.rewind()

  return {
    title: title
  }
}