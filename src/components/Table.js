import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

export class Table extends Component {
    render() {
        var props = copy(this.props)

        var c = []
        if (props.plain) {
            c.push('rvt-table-plain')
        } else if (props.stripes) {
            c.push('rvt-table-stripes')
        }
        getRivetClasses(props, c)

        return <div className='iu-table-wrapper'><table className={classNames(c)} {...props} /></div>
    }
}