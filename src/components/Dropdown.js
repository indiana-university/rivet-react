import React, {Component} from 'react'

export class Dropdown extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='dropdown'>
                <button className={`rvt-dropdown__toggle ${this.props.className}`} 
                        data-dropdown-toggle={this.props.id} 
                        onClick={() => {this.props.toggleDesktopDropdown(this.props.id)}}
                        aria-haspopup="true"
                        aria-expanded={this.props.desktopActiveDropdown == this.props.id }>
                    <span className="rvt-dropdown__toggle-text">{this.props.title}</span>
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <title>Dropdown icon</title>
                        <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"/>
                    </svg>

                </button>
                { this.props.desktopActiveDropdown == this.props.id &&
                <DropdownMenu id={this.props.id} isIdentityMenu={this.props.isIdentityMenu} toggleDesktopDropdown={this.props.toggleDesktopDropdown}>
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
            this.props.toggleDesktopDropdown(null)
        }
    }

    clickOutside(event){
        var dropdownTrigger = document.querySelector('[data-dropdown-toggle='+this.props.id+']');
        var dropdownEl = document.querySelector('#' + this.props.id);
        if(event.target != dropdownEl && !dropdownEl.contains(event.target) && !dropdownTrigger.contains(event.target)) {
            this.props.toggleDesktopDropdown(null)
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
        return(
            <div className={`rvt-dropdown__menu ${ this.props.isIdentityMenu ? 'rvt-header-id__menu' : '' }`} id={this.props.id}>
                { this.props.children }
            </div>
        )
    }
}