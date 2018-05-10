import React, {Component} from 'react'

export class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown() {
        console.log("toggle")
        this.setState({
            visible: !this.state.visible
        })
    }


    render() {
        return(
            <div className='dropdown'>
                <button className='rvt-dropdown__toggle' data-dropdown-toggle={this.props.id} onClick={this.toggleDropdown}>
                    <span className="rvt-dropdown__toggle-text">{this.props.title}</span>
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <title>Dropdown icon</title>
                        <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
                    </svg>

                </button>
                { this.state.visible &&
                <DropdownMenu id={this.props.id} toggleDropdown={this.toggleDropdown}>
                    { this.props.children }
                </DropdownMenu>
                }
            </div>
        )
    }
}

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
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
        console.log("shown")
        document.addEventListener("keydown", this.escFunction, false);
        document.addEventListener('mousedown', this.clickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
        document.removeEventListener('mousedown', this.clickOutside);
    }

    render() {
        return(
            <div className='rvt-dropdown__menu' id={this.props.id}>
                { this.props.children }
            </div>
        )
    }
}