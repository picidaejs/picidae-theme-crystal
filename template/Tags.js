import React from 'react'
import {Link} from 'react-router'
import DocumentTitle from 'react-document-title'

const colors = ['#539092', '#2479CC', '#4A4A4A', '#FFCD38', '#227066', '#7CBD1E'];
const len = colors.length;
/**
 * get a int number betweeen min and max
 * 
 * @param {Int} min 
 * @param {Int} max
 * @returns {Int}
 */
function getRandom(min, max) {
  return min + Math.round(Math.random() * (max - min))
}

export default function ({data}) {
  const tags = getTags(data.meta)
  return (
    <DocumentTitle title="标签云">
      <div className="body-width">
        {
          tags.map((tag) => {
            return <Link to={`tags/${tag}`} key={tag}><span className="tag" style={{ color: colors[getRandom(0, len)], fontSize: `${getRandom(20, 40)}px` }}>{tag}</span></Link>
          })
        }
      </div>
    </DocumentTitle>
  )
}

function getTags(meta) {
  const tags = [];
  let tag;
  for (let k in meta) {
    tag = meta[k].tags;
    
    if (typeof tag === 'string' && tags.indexOf(tag) === -1) {
      tags.push(tag);
    } else if (typeof tag === 'object') {
      tag.map((item) => {
        if(tags.indexOf(item) === -1) {
          tags.push(item);
        }
      })
    }
  }
  return tags;
}




