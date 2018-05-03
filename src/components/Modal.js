import React, {Component} from 'react'
import {copy, shortuid, getRivetClasses} from '../util'
import classNames from 'classnames'
import {Button} from './Button'

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

        return <div className='rvt-modal' id={props.id} role='dialog' aria-labelledby={titleid} tabIndex='-1' aria-hidden={true}
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
                <button className="rvt-button rvt-modal__close" data-modal-close="close">
                    <span className="rvt-sr-only">Close</span>
                    <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
                    </svg>
                </button>
            </div>
        </div>
    }
}