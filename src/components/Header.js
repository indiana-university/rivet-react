import React, {Component} from 'react'
import { Dropdown } from "./Dropdown"

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.escFunction = this.escFunction.bind(this)
        this.clickOutside = this.clickOutside.bind(this)
    }

    escFunction(event){
        if(event.keyCode === 27) {
            this.props.toggleDrawer();
        }
    }

    clickOutside(event){
        var drawerTrigger = document.querySelector('[data-drawer-toggle]');
        var drawerId = drawerTrigger ? drawerTrigger.getAttribute('data-drawer-toggle') : null;
        var drawerEl = document.querySelector('#' + drawerId);
        if(event.target != drawerEl && !drawerEl.contains(event.target) && !drawerTrigger.contains(event.target)) {
            this.props.toggleDrawer();
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
        document.removeEventListener('mousedown', this.clickOutside);
    }

    render() {
        return (
            <div className="rvt-drawer" id="mobile-drawer">
                { this.props.children }
                <button onClick={this.props.toggleDrawer} className='rvt-drawer__bottom-close'>Close nav</button>
            </div>
        )
    }
}

export class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this)
    }

    /**
     * The username, if provided
     */
    username() {
        return this.props.user
            ? <span className="rvt-header-id__user">{this.props.user}</span>
            : ''

    }

    /**
     * The user avatar, if provided
     */
    avatar() {
        return this.props.avatar 
            ? <span className="rvt-header-id__avatar">{this.props.avatar}</span>
            : ''
    }

    /**
     * A logout action, if provided
     */
    logout(className) {
        return this.props.logout
            ? <a href="javascript:void(0)" onClick={this.props.logout} className={className || ''}>Log out</a>
            : ''        
    }

    toggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    /**
     * The drawer button ("hamburger")
     */
    drawerButton(){
        return <button className={`rvt-drawer-button ${this.state.drawerOpen ? 'is-open' : ''}`} aria-haspopup="true" aria-expanded={this.state.drawerOpen} onClick={this.toggleDrawer} data-drawer-toggle="mobile-drawer">
            <span className="sr-only">Toggle menu</span>
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
    }

    /**
     * An HREF element
     * @param {*} nav The navigation element for which to create the HREF
     * @param {*} key The element key, if any
     */
    href(nav, key){
        return key
            ? <a href="javascript:void(0)" key={key} onClick={nav.click}>{nav.label}</a>
            : <a href="javascript:void(0)" onClick={nav.click}>{nav.label}</a>
    }

    /**
     * A dropdown for a Rivet header drawer
     * @param {*} title The display name for the drawer element
     * @param {*} key The drawer element key
     * @param {*} items The drawer contents (as list items)
     */
    dropdownDrawer(title, key, items){
        return <li key={key} className='has-children'>
            <button data-subnav-toggle={"dropdown-drawer-"+key} aria-haspopup='true'
                    aria-expanded='false'>
                {title}
            </button>
            <ul id={"dropdown-drawer-"+key}>
                {items}
            </ul>
        </li>        
    }

    /**
     * Application navigation elements for the standard view.
     */
    applicationNav() {
        if (!this.props.nav) return '';
        var nav = this.props.nav.map((n, i) => {
            var nk = 'nav-'+i
            var item = n.subnav 
                ? <Dropdown id={"dropdown"+nk} title={n.label}>{n.subnav.map((sn,j) => this.href(sn, nk+"-"+j))}</Dropdown>
                : this.href(n);
            return <li key={nk}>{item}</li>
        });
        return <nav className='rvt-header__main-nav' role='navigation'><ul>{nav}</ul></nav>
    }

    /**
     * Application navigation elements for the drawer view.
     */
    applicationNavDrawer() {
        if (!this.props.nav) return '';
        return this.props.nav.map((n,i) => {
            var nk = 'dnav-'+i
            return n.subnav
                ? this.dropdownDrawer(n.label, nk, n.subnav.map((sn,j) => <li key={nk+"-"+j}>{this.href(sn)}</li>))
                : <li key={nk}>{this.href(n)}</li>;
        });
    }

    /**
     * An identity menu with the username, avatar, and user task navigation elements
     */
    identityMenuWithNav() {
        return <div className="rvt-dropdown">
                <button className="rvt-header-id__profile rvt-header-id__profile--has-dropdown rvt-dropdown__toggle" data-dropdown-toggle="id-dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.avatar()}
                    {this.username()}
                    <svg role="img" alt="" className="rvt-m-left-xs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
                    </svg>
                </button>
                {this.userNavFull()}
                <div className="rvt-dropdown__menu rvt-header-id__menu" id="id-dropdown">
                    {this.props.userNav.map(this.href)};
                    <div role="group" aria-label="User actions">
                        {this.logout()}
                    </div>
                </div>
            </div> 
    }

    /**
     * An identity menu with the username and avatar only
     */
    identityMenuWithoutNav() {
        return [
            <div key="0" href="#0" className="rvt-header-id__profile">
                {this.avatar()}
                {this.username()}
            </div>,
            <div key="1">
                {this.logout('rvt-header-id__log-out')}
            </div>
        ];
    }

    /**
     * A Rivet identity menu for the standard view. Identity navigation elements will be included if present.
     */
    identityMenu() {
        if (!this.props.user) return ''

        var identityMenuElements = this.props.userNav 
            ? this.identityMenuWithNav()
            : this.identityMenuWithoutNav();

            return <div className="rvt-header-id">
                {identityMenuElements}
            </div>
    }

    /**
     * A drawer identity menu with the username, avatar, and user task navigation elements
     */
    identityMenuDrawerWithNav() {
        return <li className="has-children">
            <button className="rvt-header-id__profile rvt-header-id__profile--drawer" data-subnav-toggle="subnav-id" aria-haspopup="true" aria-expanded="false">
                {this.avatar()}
                {this.username()}
            </button>
            <div id="subnav-id" role="menu">
                <ul>
                    {this.props.userNav.map((n,i)=><li>{this.href(n, i)}</li>)}
                    <li>{this.logout()}</li>
                </ul>
            </div>
        </li>
    }

    /**
     * A drawer identity menu with the username and avatar only
     */
    identityMenuDrawerWithoutNav() {
        return <div className="rvt-header-id__profile rvt-header-id__profile--drawer p-all-sm">
            {this.avatar()}
            {this.username()}
            {this.logout()}
        </div>
    }

    /**
     * An Rivet identity menu for the drawer view. Identity navigation elements will be included if present.
     */
    identityMenuDrawer() {
        if (!this.props.user) return ''

        return this.props.userNav
            ? this.identityMenuDrawerWithNav()
            : this.identityMenuDrawerWithoutNav()
    }

    /**
     * Header with Navigation
     * https://rivet.uits.iu.edu/components/navigation/header/#header-with-main-navigation
     */
    headerWithIdentityAndNavigation() {
        return [
            <div key={1} className="rvt-header__controls">
                {this.applicationNav()}
                {this.identityMenu()}
                {this.drawerButton()}
            </div>,
            <div key={2}>
                { this.state.drawerOpen && 
                  <Drawer toggleDrawer={this.toggleDrawer} >
                    <nav className='rvt-drawer__nav' role='navigation'>
                        <ul>
                            {this.identityMenuDrawer()}
                            {this.applicationNavDrawer()}
                        </ul>
                    </nav>
                  </Drawer> }
            </div>
        ]
    } 

    /**
     * Header with Identity
     * https://rivet.uits.iu.edu/components/navigation/header/#header-with-identity-menu
     */
    headerWithIdentity() {
        return [
            <div key={1} className="rvt-header__controls">
                {this.identityMenu()}
                {this.drawerButton()}
            </div>,
            <div key={2}>
                { this.state.drawerOpen && 
                  <Drawer toggleDrawer={this.toggleDrawer} >
                    <div className="rvt-header-id rvt-header-id--drawer">
                        {this.identityMenuDrawer()}
                    </div>
                  </Drawer> }
            </div>
        ]
    };

    /**
     * The header user and navigation elements. The appropriate markup will be selected based on the presence of the 'user' and 'nav' elements.
     */
    headerContent() {
        if (this.props.nav) return this.headerWithIdentityAndNavigation();
        if (this.props.user) return this.headerWithIdentity();
        return ''
    }

    render() {
        var title = this.props.title ? this.props.title : document.querySelector('head>title').innerText
        var url = this.props.url ? this.props.url : '/';
        var headerClass = this.props.light ? 'rvt-header--light rvt-header' : 'rvt-header'
        var headerContent = this.headerContent();

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
            {headerContent}
        </header>
    }
}