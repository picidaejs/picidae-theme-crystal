import React from 'picidae/exports/react'
import ReactDOM from 'picidae/exports/react-dom'
import {Link} from 'picidae/exports/react-router'
import moment from 'picidae/exports/moment'

let loaded = false

export default class GitHubComment extends React.PureComponent {

  static defaultProps = {
    theme: void 0
  }

  // --- life cycle
  componentDidMount() {
    if (typeof document !== 'undefined' && !loaded) {
      let style = document.createElement('link')
      style.rel = 'stylesheet'
      style.type = 'text/css'
      style.href = '//imsun.github.io/gitment/style/default.css'
      document.head.appendChild(style)

      let script = document.createElement('script')
      script.src = '//imsun.github.io/gitment/dist/gitment.browser.js'
      document.head.appendChild(script)

      script.onload = () => {
        this.loadGitMent()
      }

      loaded = true
    }
    else {
      this.loadGitMent()
    }
  }

  componentDidUpdate() {
    this.loadGitMent()
  }

  // --- end life cycle

  loadGitMent() {
    if (typeof Gitment === 'function') {
      const gitment = new Gitment({
        ...this.props,
        theme: this.props.theme || Gitment.defaultTheme
      })
      gitment.render(ReactDOM.findDOMNode(this))
    }
  }

  render() {
    return (
      <div className="gitment-container" />
    )
  }
}