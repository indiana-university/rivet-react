import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

export class Input extends Component {
    render() {
        var rv = []
        var props = copy(this.props)

        if (props.label) {
            var label = props.label
            delete props.label
            if (!props.id) {
                props.id = shortuid()
            }
            rv.push(<label key='l' htmlFor={props.id}>{label}</label>)
        }

        if (!props.value) {
            props.value = ''
        }

        var note
        if (props.note) {
            var noteid
            if (props.id) {
                noteid = props.id + '-note'
            } else {
                noteid = shortuid()
            }

            props['aria-described-by'] = noteid
            note = <small key='n' id={noteid} className='rvt-display-block rvt-m-bottom-md'>{props.note}</small>
            delete props.note
        }

        if (!props.type) {
            props.type = 'text'
        }

        var margin
        if (props.margin) {
            margin = props.margin
            delete props.margin
        }

        rv.push(<input key='i' className={classNames(getRivetClasses(props))} {...props} />)
        if (note) rv.push(note)

        var wrapperClass = []
        if (props.error) {
            var errorMessage = props.error
            delete props.error

            wrapperClass.push('rvt-input-error')
            rv.push(<div key='a' className='rvt-alert-inline rvt-m-top-xs' role='alert'>
                <p className='rvt-alert-inline__message'>{errorMessage}</p>
            </div>)
        } else {
            rv.push(<div key='a' />)
        }

        return <div className={classNames(getRivetClasses({margin}, wrapperClass))}>{rv}</div>
    }
}