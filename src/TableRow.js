import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from './util'
import classNames from 'classnames'

export class TableRow extends Component {
    render() {
        var props = copy(this.props)

        var header = props.header
        var className = classNames(getRivetClasses(props))

        if (Array.isArray(props.children)) {
            var items = []
            for (var i = 0; i < props.children.length; i++) {
                const ch = props.children[i]
                if (ch && (ch.type === 'td' || ch.type === 'th')) {
                    items.push(ch)
                } else {
                    const cellClick = (e) => {
                        if (props.cellClick) {
                            props.cellClick(ch, e)
                        }
                    }
                    if (header) {
                        items.push(<th className={className} onClick={cellClick} key={i}>{ch}</th>)
                    } else {
                        items.push(<td className={className} onClick={cellClick} key={i}>{ch}</td>)
                    }
                }
            }
            props.children = items
        }

        delete props.header
        delete props.cellClick

        return <tr {...props} />
    }
}