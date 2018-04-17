import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

export class Header extends Component {
    render() {
        var props = this.props

        const IdSection = props => {
            var avatar
            if (props.avatar) {
                avatar = <span className='rvt-header-id__avatar' aria-hidden='true'>{props.avatar}</span>
            } else {
                avatar = ''
            }

            var backdoor
            if (props.backdoor) {
                backdoor = <span className='rvt-header__backdoor'>backdoor</span>
            } else {
                backdoor = ''
            }

            var profile
            if (props.user) {
                profile = <div className='rvt-header-id__profile'>
                    {avatar}
                    <span className='rvt-header-id__user'>{props.user}</span>
                    {backdoor}
                </div>
            } else {
                profile = ''
            }

            var logout
            if (props.logout) {
                logout = <a href="javascript:void(0)" onClick={props.logout} className='rvt-header-id__log-out'>Log out</a>
            } else {
                logout = ''
            }

            return <div className='rvt-header-id'>
                {profile}
                {logout}
            </div>
        }

        const DrawerIdSection = props => {
            var avatar
            if (props.avatar) {
                avatar = <span className='rvt-header-id__avatar' aria-hidden='true'>{props.avatar}</span>
            } else {
                avatar = ''
            }

            var user = <span className='rvt-header-id__user rvt-header-id__user--has-dropdown'>{props.user}</span>

            var backdoor
            if (props.backdoor) {
                backdoor = <span className='rvt-header__backdoor'>backdoor</span>
            } else {
                backdoor = ''
            }

            var logout, liClass
            if (props.logout) {
                logout = <ul id='subnav-id' aria-hidden='true'>
                    <li><a href="javascript:void(0)" onClick={props.logout}>Log out</a></li>
                </ul>
                liClass = 'has-children'
            } else {
                logout = ''
                liClass = ''
            }

            return <li className={liClass}>
                <button className='rvt-header-id__profile rvt-header-id__profile--has-dropdown rvt-dropdown__toggle'
                        data-subnav-toggle='subnav-id' aria-haspopup='true' aria-expanded='false'>
                    {avatar}
                    {user}
                    {backdoor}
                </button>
                {logout}
            </li>
        }

        const NavSection = props => {
            var nav = []
            if (props.nav) {
                for (var i = 0; i < props.nav.length; i++) {
                    var nk = 'nav-' + i
                    var n = props.nav[i]
                    if (!n.subnav) { nav.push(<li key={nk}><a onClick={n.click}>{n.label}</a></li>) } else {
                        var subnav = []
                        for (var j = 0; j < n.subnav.length; j++) {
                            const sn = n.subnav[j]
                            var snk = nk + '-' + j
                            subnav.push(<a href="javascript:void(0)" key={snk} onClick={sn.click}>{sn.label}</a>)
                        }
                        nav.push(<li key={nk}>
                            <div className='dropdown'>
                                <button className='rvt-dropdown__toggle' data-dropdown-toggle={nk}>
                                    <span className="rvt-dropdown__toggle-text">{n.label}</span>
                                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <title>Dropdown icon</title>
                                        <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
                                    </svg>

                                </button>
                                <div className='rvt-dropdown__menu' id={nk} aria-hidden='true'>
                                    {subnav}
                                </div>
                            </div>
                        </li>)
                    }
                }
            }
            return <nav className='rvt-header__main-nav' role='navigation'><ul>{nav}</ul></nav>
        }

        const DrawerNavSection = props => {
            var nav = []
            if (props.user) nav.push(props.user)
            if (props.nav) {
                for (var i = 0; i < props.nav.length; i++) {
                    var nk = 'dsubnav-' + i
                    var n = props.nav[i]
                    if (!n.subnav) { nav.push(<li key={nk}><a onClick={n.click}>{n.label}</a></li>) } else {
                        var subnav = []
                        for (var j = 0; j < n.subnav.length; j++) {
                            var sn = n.subnav[j]
                            var snk = nk + '-' + j
                            subnav.push(<li key={snk}><a onClick={sn.click}>{sn.label}</a></li>)
                        }
                        nav.push(<li key={nk} className='has-children'>
                            <button onClick={n.click} data-subnav-toggle={nk} aria-haspopup='true'
                                    aria-expanded='false'>
                                {n.label}
                            </button>
                            <ul id={nk} aria-hidden='true'>
                                {subnav}
                            </ul>
                        </li>)
                    }
                }
            }
            return <nav className='rvt-drawer__nav' role='navigation'>
                <ul>{nav}</ul>
                <button className='rvt-drawer__bottom-close'>Close nav</button>
            </nav>
        }

        var user, drawerUser
        if (props.user) {
            user = <IdSection user={props.user} backdoor={props.backdoor}
                              avatar={props.avatar} logout={props.logout} />
            drawerUser = <DrawerIdSection key='id' user={props.user} backdoor={props.backdoor}
                                          avatar={props.avatar} logout={props.logout} />
        } else {
            user = ''
            drawerUser = ''
        }

        var title
        if (props.title) {
            title = props.title
        } else {
            title = document.querySelector('head>title').innerText
        }

        var url
        if(props.url) {
            url = props.url
        } else {
            url = "/"
        }

        return <header className='rvt-header' role='banner'>
            <a className='rvt-skip-link' href='#main-content'>Skip to content</a>
            <div className='rvt-header__trident'>
                <svg role="img" alt="" className="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo">
                    <title id="iu-logo">Indiana University Logo</title>
                    <rect width="41" height="48" fill="#900"/>
                    <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff"/>
                </svg>
            </div>
            <span class="rvt-header__title">
                <a href={url}>{title}</a>
            </span>
            <div className='rvt-header__controls'>
                <NavSection nav={props.nav} />
                {user}
            </div>

            <button className={`rvt-drawer-button ${props.persistent ? 'rvt-drawer-button--persistent' : ''}`} aria-haspopup='true' aria-expanded='false' data-drawer-toggle='mobile-drawer'>
                <span className='sr-only'>Toggle menu</span>
                <svg role="img" alt="" className="rvt-drawer-button-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z"/>
                        <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z"/>
                        <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z"/>
                    </g>
                </svg>
                <svg role="img" alt="" className="rvt-drawer-button-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
                </svg>
            </button>
            <div className='rvt-drawer' aria-hidden='true' id='mobile-drawer'>
                <DrawerNavSection user={drawerUser} nav={props.nav} />
            </div>
        </header>
    }
}