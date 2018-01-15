import React from 'react'

import '../assets/style.less'

import Header from './components/Header'
import Footer from './components/Footer'

class Layout extends React.Component {

    render() {
      console.log('layout props:', this.props);
        const {publicPath, pluginData: {utils}, themeConfig} = this.props;
        return (
            <div className="wrap">
                <Header publicPath={publicPath} blogName={themeConfig.blogName}/>
                <main>{this.props.children}</main>
                <Footer publicPath={publicPath} avatarUrl={themeConfig.avatarUrl}/>
            </div>
        )
    }
}


export default Layout