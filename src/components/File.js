import React, {Component} from 'react'
import classNames from 'classnames'
import {copy, getRivetClasses, shortuid} from '../util'

export class File extends Component {
    render() {

        var props = copy(this.props)
        if (!props.id) {
            props.id = shortuid()
        }

        var label
        if (props.label) {
            var labelText = props.label
            label = <div>{labelText}</div>
            delete props.label
        }

        var filename
        if (props.file) {
            filename = props.file.name
            delete props.file
        } else {
            filename = 'No file chosen'
        }

        return <div className={classNames(getRivetClasses(props), 'rvt-file')} data-upload={props.id}>
            <input type='file' aria-describedby={props.id + "-file-description"} {...props} />
            <label htmlFor={props.id} className="rvt-button">
                <span>Upload a file</span>
                <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z"/>
                </svg>
            </label>
            <div className="rvt-file__preview" data-file-preview={props.id} id={props.id + "-file-description"}>
                No file selected
            </div>
        </div>

    }
}