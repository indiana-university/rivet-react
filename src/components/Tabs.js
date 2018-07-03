import React, {Component} from 'react'
import {copy, getRivetClasses} from './util'
import classNames from 'classnames'

// For easy reference
var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    enter: 13,
    space: 32
}

// Add or subtract depending on key pressed
var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
}

export default class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            focusedTab: 0,
        };

        this.switchTabs = this.switchTabs.bind(this)
        this.renderTabs = this.renderTabs.bind(this)
        this.arrowKeys = this.arrowKeys.bind(this)
        this.tabFocused = this.tabFocused.bind(this)
        this.tabBlurred = this.tabBlurred.bind(this)
    }

    switchTabs(index) {
        this.setState({activeTab: index})
    }


    arrowKeys(event){
        let pressed = event.keyCode
        let tabs = this.props.tabs
        let vertical = this.props.vertical

        let active = this.state.focusedTab
        let next = active + direction[pressed]

        switch (pressed) {
            case keys.end:
                event.preventDefault();
                // Activate last tab
                this[tabs.length - 1].focus()
                break;
            case keys.home:
                event.preventDefault();
                // Activate first tab
                this[0].focus()
                break;
            case keys.left:
            case keys.right:
                if(!vertical) {
                    if(tabs[next]) {
                        this[next].focus()
                    } else if (pressed === keys.left) {
                        this[tabs.length - 1].focus()
                    } else if (pressed === keys.right) {
                        this[0].focus()
                    }
                }

                break;
            case keys.enter:
            case keys.space:
                this.setState({activeTab:this.state.focusedTab})
                break;
            // Up and down
            case keys.up:
            case keys.down:
                event.preventDefault();

                if(vertical) {
                    if(tabs[next]) {
                        this[next].focus()
                    } else if (pressed === keys.up) {
                        this[tabs.length - 1].focus()
                    } else if (pressed === keys.down) {
                        this[0].focus()
                    }
                }
                break;
        }
    }

    tabFocused(index) {
        this.setState({focusedTab: index})
        document.addEventListener("keydown", this.arrowKeys, false);
    }

    tabBlurred() {
        document.removeEventListener("keydown", this.arrowKeys, false);
    }

    renderTabs(props) {
        return <React.Fragment>
            <div className="rvt-tabs__tablist" role="tablist" aria-label={props.title || 'Tabs'}>
                { props.tabs.map((tab,index) =>
                    <button onFocus={()=>this.tabFocused(index)} onBlur={this.tabBlurred} ref={(button) => { this[index] = button; }} onClick={(event)=>this.switchTabs(index)} className="rvt-tabs__tab" role="tab" aria-selected={index === this.state.activeTab} tabIndex={index !== this.state.activeTab ? -1 : null} aria-controls={`tab-${index}`} id={`t-${index}`} key={index}>
                        {tab.label}
                    </button>
                )}
            </div>
            { props.tabs.map((tab,index) =>
                <div key={index} className="rvt-tabs__panel" tabIndex="0" role="tabpanel" id={`tab-${index}`} aria-labelledby={`t-${index}`} hidden={index !== this.state.activeTab}>
                    {tab.content}
                </div>
            )}
        </React.Fragment>
    }

    render() {
        var props = copy(this.props)

        var c = []

        c.push('rvt-tabs')

        if (props.fitted) {
            c.push('rvt-tabs--fitted')
            delete props.fitted
        } else if (props.vertical) {
            c.push('rvt-tabs--vertical')
            delete props.vertical
        }

        getRivetClasses(props, c)

        var tabs = props.tabs

        if(!Array.isArray(tabs)) return

        return <div className={classNames(c)} {...props}>
            {this.renderTabs(props)}
        </div>
    }
}