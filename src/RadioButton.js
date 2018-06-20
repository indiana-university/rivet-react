import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from './util'
import classNames from 'classnames'

export class RadioButton extends Component {
    render() {
        var props = copy(this.props)

        var label = props.label ? props.label : ''
        delete props.label

        if (!props.id) {
            props.id = shortuid()
        }

        var c = classNames(getRivetClasses(props))

        return <nobr>
            <input type="radio" key='i' {...props} />
            <label key='l' className={c} htmlFor={props.id}>{label}</label>
        </nobr>
    }
}