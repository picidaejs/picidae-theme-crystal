import React from 'react'
import {Link} from 'react-router'
import DocumentTitle from 'react-document-title'

export default function ({data, params}) {
  const meta = data.meta;
  const target_tag = params.tag;
  const posts = [];
  let tags;

  for(let k in meta) {
    tags = meta[k].tags;
    if(!tags) continue;
    if(tags === target_tag || (typeof tags === 'object' && tags.indexOf(target_tag) > -1)) {
      posts.push(k)
    }
  }

  return <DocumentTitle title={`tag-${target_tag}`}>
    <div className="body-width">
      <div className="ov-header">
        <div className="title">Tag ： {target_tag}</div>
        <div className="ov-time">共计 {posts.length} 篇</div>
      </div>
      <ul className="tag-posts">
        {
          posts.map((item) => {
            return <Link to={item} key={item}><li>{item}</li></Link>
          })
        }
      </ul>
    </div>
  </DocumentTitle>
}

