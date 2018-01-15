import React from 'react'
import {Link} from 'react-router'

export default ({prev, next, prevTitle, nextTitle}) =>
    <div className="paginator">
        {prev && <Link to={prev} title={prevTitle} className="prev light-tip"><span className="icon-font">&#xe62d;</span> {prevTitle}</Link>}
        {next && <Link to={next} title={nextTitle} className="next light-tip">{nextTitle} <span className="icon-font">&#xe62e;</span></Link>}
    </div>
    