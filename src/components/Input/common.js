/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';

import InlineAlert from '../Alert/InlineAlert';
import * as Rivet from '../util/Rivet';
import PropTypes from 'prop-types';

const propTypes = {
    /** The label for the input */
    label: PropTypes.string,
    /** Visibility modifier for the input's label */
    labelVisibility: PropTypes.string,
    /** An optional note that will be displayed below the input */
    note: PropTypes.instanceOf(React.ReactNode),
    /** Rivet style for inline validation */
    variant: PropTypes.oneOf(['danger', 'info', 'success', 'warning'])
}

const inputClassName = (variant) => 
    variant
    ? `rvt-validation-${variant}`
    : '';

const noteFragment = (id, variant, note) => 
    variant
    ? <InlineAlert id={id} variant={variant}>{note}</InlineAlert>
    : <small id={id} className="rvt-display-block">{note}</small>

export const renderInput =
    (inputGenerator) => 
    ({ id=Rivet.shortuid(), label, labelVisibility, note, variant, className, ...attrs}) => {
        const noteId = `${id}_note`;
        const inputProps = {
            id, 
            className: inputClassName(variant), 
            "aria-describedby": note ? noteId : '', 
            "aria-invalid": variant === 'danger', 
            ...attrs
        }
        return (
            <div className={classNames('rvt-input', className)}>
                <label htmlFor={id} className={Rivet.labelVisiblityClass(labelVisibility)}>{label}</label>
                {inputGenerator (inputProps)}
                {note && noteFragment(noteId, variant, note)}
            </div>
        );
}
