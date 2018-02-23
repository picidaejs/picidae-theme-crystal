import React, { Component } from 'react'

const thisYear = new Date().getFullYear();

export default ({publicPath, avatarUrl}) => 
  <footer>
    <div className="footer-avatar">
      <img src={`${publicPath}${avatarUrl}`} alt="avatar" />
    </div>
    <div className="copyright">
      © <time>{thisYear}</time>. Powered By&nbsp;<a href="https://github.com/picidaejs/picidae"> Picidae </a>&nbsp; |&nbsp; <a href="https://github.com/picidaejs/picidae-theme-crystal"> theme-crystal</a> 
    </div>
    <div id="busuanzi-count">
      <span id="busuanzi_container_site_uv">
        <span className="icon-font">&#xe642;</span><span id="busuanzi_value_site_uv"></span>
      </span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <span id="busuanzi_container_site_pv">
       <span className="icon-font">&#xe680;</span>&nbsp;<span id="busuanzi_value_site_pv"></span>
      </span>
    </div>
  </footer>
