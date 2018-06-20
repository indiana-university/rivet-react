import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from './util'
import classNames from 'classnames'

export class Section extends Component {
    render() {
        var props = copy(this.props)

        return  <section className={classNames(getRivetClasses(props))} {...props} />
    }
}