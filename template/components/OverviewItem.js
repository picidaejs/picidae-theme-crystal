import React from 'react'
import {Link} from 'react-router'
import moment from 'moment'

export default ({datetime, to, title, desc,author}) => {
  return (<section className="overview-item">
      <div className="ov-header">
        <h2 className="title">
          <Link to={to} title={title}>{title}</Link>
        </h2>
        <div className="ov-time">{author ? author : ''} 发布于 {moment(datetime).format('YYYY-MM-DD')} </div>
      </div>
      <div className="ov-content">{desc} ...</div>
      <div className="ov-footer">
        <Link to={to} className="light-tip">阅读全文 <span className="icon-font">&#xe64b;</span></Link>
      </div>
    </section>)
}