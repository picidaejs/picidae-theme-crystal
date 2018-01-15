import React from 'react'
import {Link} from 'react-router'

export default ({publicPath, blogName}) =>
<header>
    <div className="blog-name">
        <Link to={'/'}>{blogName ? blogName : "Claiyre's Blog"}</Link>
    </div>
    <ul className="nav nav-list">
        <li className="nav-list-item">
            <Link className="nav-list-link" activeClassName={"active"} to={'/posts/1'}>Posts</Link>
        </li>
        <li className="nav-list-item">
            <Link className="nav-list-link" activeClassName={"active"} to={'/tags'}>Tags</Link>
        </li>
        <li className="nav-list-item">
            <Link className="nav-list-link" activeClassName={"active"} to={'/about'}>About</Link>
        </li>
    </ul>
</header>