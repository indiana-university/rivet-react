import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

// Longhand
export class Alert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    hideAlert() {
        this.setState({ visible: false })
    }

    render() {
        var props = copy(this.props)
        var c = []
        if (props.className) {
            c.push(props.className)
            delete props.className
        }
        c.push('rvt-alert')

        if (props.success) {
            c.push('rvt-alert--success')
        } else if (props.info) {
            c.push('rvt-alert--info')
        } else if (props.error) {
            c.push('rvt-alert--error')
        } else {
            c.push('rvt-alert--message')
        }

        if (!props.id) {
            props.id = shortuid()
        }

        var titleid, header
        if (props.title) {
            var title = props.title
            titleid = shortuid()
            header = <h1 className='rvt-alert__title' id={titleid}>{title}</h1>
            delete props.title
        }

        getRivetClasses(props, c)

        delete props.success
        delete props.info
        delete props.error

        var dismiss
        if (props.clickDismiss) {
            dismiss =
                <button className="rvt-alert__dismiss" onClick={()=>{ props.clickDismiss(); this.hideAlert(); }}>
                    <span className="rvt-sr-only">Dismiss this alert</span>
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
                    </svg>
                </button>
        }

        let visible = this.state.visible;

        return (
            visible &&
            <div className={classNames(c)} id={props.id} role='alertdialog' aria-labelledby={titleid}>
                {header}
                    <div className='rvt-alert__message'>{props.children}</div>
                {dismiss}
            </div>

        )

    }
}

// Shorthand
// export const Alert = props => <div {...this.props} />