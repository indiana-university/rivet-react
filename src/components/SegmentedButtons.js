import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

export class SegmentedButtons extends Component {
    render() {
        var props = copy(this.props)

        if (props.label) {
            props['aria-label'] = props.label
            delete props.label
        }

        var c = []
        if(props.fitted || props.fit) {
            c.push('rvt-button-segmented--fitted')
            delete props.fit
            delete props.fitted
        }

        return <div role="group" className={classNames(getRivetClasses(props, ['rvt-button-segmented']), c)} {...props} />
    }
}