import React, {Component} from 'react'
import {copy, getRivetClasses} from '../util'
import classNames from 'classnames'

export class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };

        this.switchTabs = this.switchTabs.bind(this)
        this.renderTabs = this.renderTabs.bind(this)
    }

    switchTabs(index) {
        this.setState({activeTab: index})
    }

    renderTabs(props) {
        return <React.Fragment>
            <div class="rvt-tabs__tablist" role="tablist" aria-label={props.title || 'Tabs'}>
                { props.tabs.map((tab,index) =>
                    <button onClick={(event)=>this.switchTabs(index)} className="rvt-tabs__tab" role="tab" aria-selected={index === this.state.activeTab} aria-controls={`tab-${index}`} id={`t-${index}`} key={index}>
                        {tab.label}
                    </button>
                )}
            </div>
            { props.tabs.map((tab,index) =>
                <div class="rvt-tabs__panel" tabindex="0" role="tabpanel" id={`tab-${index}`} aria-labelledby={`t-${index}`} hidden={index !== this.state.activeTab}>
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