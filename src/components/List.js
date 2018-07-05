import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from './util'
import classNames from 'classnames'

export default class List extends Component {
    render() {
        var props = copy(this.props)

        var c = []
        if (props.inline) {
            c.push('rvt-inline-list')
            delete props.inline
        } else if (props.plain) {
            c.push('rvt-plain-list')
            delete props.plain
        }

        var ordered = false
        if(props.ordered) {
            ordered = true;
            delete props.ordered;
        }

        if (Array.isArray(props.children)) {
            var items = []
            for (var i = 0; i < props.children.length; i++) {
                var ch = props.children[i]
                if (ch && ch.type === 'li') {
                    items.push(ch)
                } else {
                    items.push(<li key={i}>{props.children[i]}</li>)
                }
            }
            props.children = items
        }

        var className = classNames(getRivetClasses(props, c))
        if (ordered) {
            return <ol className={className} {...props} />
        } else {
            return <ul className={className} {...props} />
        }
    }
}