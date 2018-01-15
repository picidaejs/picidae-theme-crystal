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
  </footer>
