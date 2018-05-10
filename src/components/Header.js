import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    toggleDrawer() {
        console.log("toggle")
        this.setState({
            visible: !this.state.visible
        })
    }


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
                            <Dropdown id={nk} title={n.label}>
                                {subnav}
                            </Dropdown>
                        </li>)
                    }
                }
            }
            return <nav className='rvt-header__main-nav' role='navigation'><ul>{nav}</ul></nav>
        }

        const DrawerNavSection = props => {
            var nav = []
            //todo: if (props.user) nav.push(props.user)
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
                <button onClick={this.toggleDrawer} className='rvt-drawer__bottom-close'>Close nav</button>
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

        var drawer
        if(props.persistent) {
            drawer = 'rvt-drawer-button rvt-drawer-button--persistent'
        } else {
            drawer = 'rvt-drawer-button'
        }

        var headerClass
        if(props.light) {
            headerClass = 'rvt-header--light rvt-header'
        } else {
            headerClass = 'rvt-header'
        }

        return <header className={headerClass} role='banner'>
            <a className='rvt-skip-link' href='#main-content'>Skip to content</a>
            <div className='rvt-header__trident'>
                <svg role="img" alt="" className="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo">
                    <title id="iu-logo">Indiana University Logo</title>
                    <rect width="41" height="48" fill="#900"/>
                    <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff"/>
                </svg>
            </div>
            <span className="rvt-header__title">
                <a href={url}>{title}</a>
            </span>
            <div className='rvt-header__controls'>
                <NavSection nav={props.nav} />
                {user}
            </div>

            <button className={drawer} aria-haspopup='true' aria-expanded={this.state.visible} data-drawer-toggle='mobile-drawer' onClick={this.toggleDrawer}>
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
            { this.state.visible &&
                <Drawer toggleDrawer={this.toggleDrawer}>
                    <DrawerNavSection user={drawerUser} nav={props.nav}/>
                </Drawer>
            }
        </header>
    }
}

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.escFunction = this.escFunction.bind(this)
        this.clickOutside = this.clickOutside.bind(this)
    }

    escFunction(event){
        if(event.keyCode === 27) {
            this.props.toggleDrawer()
        }
    }

    clickOutside(event){
        var drawerTrigger = document.querySelector('[data-drawer-toggle]');
        var drawerId = drawerTrigger ? drawerTrigger.getAttribute('data-drawer-toggle') : null;
        var drawerEl = document.querySelector('#' + drawerId);
        if(event.target != drawerEl && !drawerEl.contains(event.target) && !drawerTrigger.contains(event.target)) {
            this.props.toggleDrawer()
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
        document.removeEventListener('mousedown', this.clickOutside);
    }

    render() {
        return (
            <div className='rvt-drawer' id='mobile-drawer'>
                { this.props.children }
            </div>
        )
    }
}