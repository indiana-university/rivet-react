import React, {Component} from 'react'
import { Dropdown } from "./Dropdown"
import { Link } from 'react-router-dom'

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
            drawerOpen: false,
            drawerDropdownVisibility: {},
            desktopActiveDropdown: null
        };

        this.toggleDrawer = this.toggleDrawer.bind(this)
        this.toggleDrawerDropdown = this.toggleDrawerDropdown.bind(this)
        this.toggleDesktopDropdown = this.toggleDesktopDropdown.bind(this)
    }

    /**
     * The username, if provided
     */
    username(className) {
        return this.props.user
            ? <span className={className}>{this.props.user}</span>
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
            ? <a href="javascript:void(0)" onClick={this.props.logout} className={className}>Log out</a>
            : ''        
    }

    toggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    toggleDesktopDropdown(key) {
        this.setState({
            desktopActiveDropdown: key == this.state.desktopActiveDropdown ? null : key
        })
    }

    toggleDrawerDropdown(key) {
        let drawerDropdownVisibility = Object.assign({}, this.state.drawerDropdownVisibility);
        drawerDropdownVisibility[key] = !drawerDropdownVisibility[key];
        this.setState({
            drawerDropdownVisibility: drawerDropdownVisibility
        })
    }

    hasItems(a) {
        return a && a.length > 0;
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
        if (!nav.label) {
            throw new Error("Rivet Header navigation elements must have a 'label'.")
        }

        if(nav.to) {
            return <Link to={nav.to} key={key || nav.label}>{nav.label}</Link>
        } else if (nav.href) {
            return <a href={nav.href} key={key || nav.label}>{nav.label}</a>
        } else {
            throw new Error("Rivet Header navigation elements must have a 'to' (for internal routes) or an 'href' (for external URLs).");
        }
    }

    /**
     * A dropdown for a Rivet header drawer
     * @param {*} anchorHtml The content (inner html) of the drawer anchor
     * @param {*} key The drawer element key
     * @param {*} items The drawer contents (as list items)
     * @param {*} className The anchor class (optional)
     */
    dropdownDrawer(anchorHtml, key, items, className){
        return <li key={key} className='has-children'>
            <a href="javascript:void(0)" 
               className={className}
               onClick={ () => { this.toggleDrawerDropdown(key) }}
               data-subnav-toggle={"dropdown-drawer-"+key} 
               aria-haspopup='true'
               aria-expanded={this.state.drawerDropdownVisibility[key]}>
                {anchorHtml}
            </a>
            { this.state.drawerDropdownVisibility[key] && 
                <ul id={"dropdown-drawer-"+key}>
                    {items}
                </ul>
            }
        </li>        
    }

    /**
     * Application navigation elements for the standard view.
     */
    applicationNav() {
        if (!this.hasItems(this.props.nav)) return <nav className='rvt-header__main-nav' role='navigation'>{this.props.nav}</nav>;
        var nav = this.props.nav.map((n, i) => {
            var nk = 'nav-'+i
            var item = n.subnav 
                ? <Dropdown toggleDesktopDropdown={this.toggleDesktopDropdown} desktopActiveDropdown={this.state.desktopActiveDropdown} id={"dropdown"+nk} title={n.label}> {n.subnav.map((sn,j) => this.href(sn, nk+"-"+j))} </Dropdown>
                : this.href(n);
            return <li key={nk}>{item}</li>
        });
        return <nav className='rvt-header__main-nav' role='navigation'><ul>{nav}</ul></nav>
    }

    /**
     * Application navigation elements for the drawer view.
     */
    applicationNavDrawer() {
        if (!this.hasItems(this.props.nav)) return null;
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
    identityMenuDesktopWithNav() {
        const key = "id-desktop-nav"
        const anchorHtml =  <React.Fragment>
                                {this.avatar()}
                                {this.username()}
                            </React.Fragment>
        const className = "rvt-header-id__profile rvt-header-id__profile--has-dropdown"

        return <Dropdown toggleDesktopDropdown={this.toggleDesktopDropdown} desktopActiveDropdown={this.state.desktopActiveDropdown} id={key} title={anchorHtml} className={className} isIdentityMenu={true}>
                    {this.props.userNav.map((n,i)=>this.href(n,i))}
                    <div role="group" aria-label="User actions">
                        {this.logout()}
                    </div>
            </Dropdown>
    }

    /**
     * An identity menu with the username and avatar only
     */
    identityMenuDesktopWithoutNav() {
        return [
            <div key={1} href="#0" className="rvt-header-id__profile">
                {this.avatar()}
                {this.username("rvt-header-id__user")}
            </div>,
            <div key={2}>
                {this.logout('rvt-header-id__log-out')}
            </div>
        ];
        
    }

    /**
     * A Rivet identity menu for the standard view. Identity navigation elements will be included if present.
     */
    identityMenu() {
        if (!this.props.user) return null

        var identityMenuElements = this.hasItems(this.props.userNav)
            ? this.identityMenuDesktopWithNav()
            : this.identityMenuDesktopWithoutNav();

            return <div className="rvt-header-id">
                {identityMenuElements}
            </div>
    }

    /**
     * A drawer identity menu with the username, avatar, and user task navigation elements
     */
    identityMenuDrawerWithNav() {
        const key = "id-drawer-nav";
        const anchorHtml =  <React.Fragment>
                                {this.avatar()}
                                {this.username()}
                            </React.Fragment>
        const items =   <React.Fragment>
                            {this.props.userNav.map((n,i)=><li key={i}>{this.href(n, i)}</li>)}
                            <li>{this.logout()}</li>
                        </React.Fragment>
        const className="rvt-header-id__profile rvt-header-id__profile--drawer" 
        return this.dropdownDrawer(anchorHtml, key, items, className);
    }

    /**
     * A drawer identity menu with the username and avatar only
     */
    identityMenuDrawerWithoutNav() {
        return <div className="rvt-header-id__profile rvt-header-id__profile--drawer p-all-sm rvt-m-bottom-sm">
            {this.avatar()}
            {this.username("rvt-header-id__user")}
            {this.logout('rvt-header-id__log-out')}
        </div>
    }

    /**
     * An Rivet identity menu for the drawer view. Identity navigation elements will be included if present.
     */
    identityMenuDrawer() {
        if (!this.props.user) return null

        return this.hasItems(this.props.userNav)
            ? this.identityMenuDrawerWithNav()
            : this.identityMenuDrawerWithoutNav()
    }

    /**
     * The header user and navigation elements. The appropriate markup will be selected based on the presence of the 'user' and 'nav' elements.
     */
    headerContent() {
        if (!this.props.user && !this.hasItems(this.props.nav)) return null;

        const drawerContents = 
            this.hasItems(this.props.nav) || this.hasItems(this.props.userNav)
            ? <nav className='rvt-drawer__nav' role='navigation'>
                {!this.hasItems(this.props.userNav) && this.identityMenuDrawerWithoutNav()}
                <ul>
                    {this.hasItems(this.props.userNav) && this.identityMenuDrawerWithNav()}
                    {this.applicationNavDrawer()}
                </ul>
              </nav>
            : this.identityMenuDrawer()
            
        return [
            <div key={1} className="rvt-header__controls">
                {this.applicationNav()}
                {this.identityMenu()}
                {this.drawerButton()}
            </div>,
            <div key={2}>
                { this.state.drawerOpen && 
                  <Drawer identityDropdownOpen={this.state.identityDropdownOpen} 
                          toggleIdentityDropdown={this.toggleIdentityDropdown} 
                          toggleDrawer={this.toggleDrawer} >
                    { drawerContents }
                  </Drawer> }
            </div>
        ]
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