var remark = require('picidae/exports/remark');
var visit = require('picidae/exports/unist-util-visit');
var toString = require('mdast-util-to-string');

/**
 * @param markdown: String  ->  the markdown text
 */
function getPureText(markdown) {
    var ast = remark.parse(markdown)

    visit(ast, function (node, index, parent) {
        if (node.type === 'heading') {
            node.children.push({
                type: 'text',
                value: ' '
            })
        }
    })
    return toString(ast)
}

module.exports = getPureText