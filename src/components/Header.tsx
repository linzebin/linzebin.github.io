import * as React from 'react'
import './Header.scss'
import { changeSideBarVisible } from './SideBar'

export default class Header extends React.Component<any, any> {
  _onClick = () => {
    changeSideBarVisible()
  }

  render() {
    return (
      <header className="site-header">
        <div className="header-wrapper">
          <a href="/" className="site-header__logo">
            <span className="site-header__title">剑与魔法</span>
            <span className="site-header__desc">次元壁垒即将打破</span>
          </a>
          <button className="site-nav-switch" onClick={this._onClick}>
            <i className="iconfont icon-menu" />
          </button>
        </div>
      </header>
    )
  }
}