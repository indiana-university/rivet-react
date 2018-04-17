import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'

export class Modal extends Component {
    render() {
        var props = copy(this.props)
        if (!props.id) {
            props.id = shortuid()
        }

        var titleid, header
        if (props.title) {
            var title = props.title
            titleid = shortuid()
            header = <header className='rvt-modal__header'>
                <h1 className='rvt-modal__title' id={titleid}>{title}</h1>
            </header>
            delete props.title
        }

        var controls
        if (props.clickOk) {
            var okLabel
            if (props.okLabel) {
                okLabel = props.okLabel
                delete props.okLabel
            } else {
                okLabel = 'OK'
            }
            controls = <div className='rvt-modal__controls'>
                <Button margin={{right: 'sm'}} className='close-modal' onClick={props.clickOk}>{okLabel}</Button>
                <Button secondary onClick={props.clickClose}>Cancel</Button>
            </div>
        }

        return <div className='rvt-modal' id={props.id} role='dialog' aria-labelledby={titleid} tabIndex='-1'
                    onKeyDown={e => {
                        if (e.keyCode === 27) {
                            props.clickClose(e)
                        }
                    }}>
            <div className='rvt-modal__inner'>
                {header}
                <div className='rvt-modal__body'>
                    {props.children}
                </div>
                {controls}
                <Button plain className='rvt-modal__close' onClick={props.clickClose}>
                    <span className='v-hide'>Close</span>
                </Button>
            </div>
        </div>
    }
}