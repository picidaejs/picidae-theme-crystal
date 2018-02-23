import React from 'react'

import '../assets/style.less'

import Header from './components/Header'
import Footer from './components/Footer'

class Layout extends React.Component {
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = "//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js";
        this.instance.appendChild(s);
    }
    render() {
      console.log('layout props:', this.props);
        const {publicPath, pluginData: {utils}, themeConfig} = this.props;
        return (
            <div className="wrap" ref={el => (this.instance = el)}>
                <Header publicPath={publicPath} blogName={themeConfig.blogName}/>
                <main>{this.props.children}</main>
                <Footer publicPath={publicPath} avatarUrl={themeConfig.avatarUrl}/>
            </div>
        )
    }
}


export default Layout