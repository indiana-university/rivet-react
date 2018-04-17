import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

export class Checkbox extends Component {
    render() {
        var props = copy(this.props)

        var label = props.label ? props.label : ''
        delete props.label

        if (!props.id) {
            props.id = shortuid()
        }

        if (!props.type) {
            props.type = 'checkbox'
        }

        var c = classNames(getRivetClasses(props))

        return <nobr>
            <input key='i' {...props} />
            <label key='l' className={c} htmlFor={props.id}>{label}</label>
        </nobr>
    }
}