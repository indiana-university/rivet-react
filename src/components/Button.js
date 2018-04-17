import React, {Component} from 'react'
import classNames from 'classnames'
import {copy, getRivetClasses} from '../util'

export class Button extends Component {
    render() {

        var props = copy(this.props)
        var c = []
        if (props.className) {
            c.push(props.className)
            delete props.className
        }
        c.push('rvt-button')

        if (props.secondary) {
            if (props.success) {
                c.push('rvt-button--success-secondary')
            } else if (props.danger) {
                c.push('rvt-button--danger-secondary')
            } else {
                c.push('rvt-button--secondary')
            }
        } else if (props.success) {
            c.push('rvt-button--success')
        } else if (props.danger) {
            c.push('rvt-button--danger')
        } else if (props.plain) {
            c.push('rvt-button--plain')
        }

        if (props.small) {
            c.push('rvt-button--small')
        }

        getRivetClasses(props, c)

        if (!props.disabled && typeof props.onClick !== 'function') {
            props.disabled = true
        }

        delete props.success
        delete props.plain
        delete props.danger
        delete props.secondary
        delete props.danger
        delete props.small

        return (
            <button className={classNames(c)}  {...props} />
        )

    }
}