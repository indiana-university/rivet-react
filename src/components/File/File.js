/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';
import PropTypes from 'prop-types';

const propTypes = {
    /** The text for the file button */
    label: PropTypes.string,
    /** Handle on DOM file input field */
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
    ]),
}

class File extends React.PureComponent {
    
    fileInput;
    
    constructor(props) {
        super(props);
        this.fileInput = props.innerRef ? props.innerRef : React.createRef();
    }   

    componentDidMount() {
        const form = this.fileInput.current && this.fileInput.current.form;
        if (form) {
            form.onreset = (e) => {
                this.forceUpdate();
            };
        }
    }

    render() {
        const { className, id = Rivet.shortuid(), innerRef, label = 'Upload a file', ...attrs } = this.props;

        let description = 'No file selected';
        if (this.fileInput.current && this.fileInput.current.files && this.fileInput.current.files.length) {
            description = Array.from(this.fileInput.current.files).map(file => file.name).join(', ');
        }

        return (
            <div className={classNames('rvt-file', className)}>
                <input onInput={this.handleFileChange} {...attrs} ref={this.fileInput} type="file" id={id} aria-describedby={id + "-file-description"} />
                <label htmlFor={id} className="rvt-button">
                    <span>{label}</span>
                    <Icon name="file" />
                </label>
                <div className="rvt-file__preview" id={id + "-file-description"}>
                    { description }
                </div>
            </div>
        )
    }

    handleFileChange = (changeEvent) => {
        if (this.props.onChange){
            this.props.onChange(changeEvent);
        }
        this.forceUpdate();
    }

}

File.propTypes = propTypes;

export default Rivet.rivetize(File);
export { File as UnwrappedFile };
