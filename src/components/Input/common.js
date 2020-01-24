/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';

import InlineAlert from '../Alert/InlineAlert';
import * as Rivet from '../util/Rivet';

const inputClassName = (variant) => 
    variant
    ? `rvt-validation-${variant}`
    : '';

const noteFragment = (id, variant, note) => 
    variant
    ? <InlineAlert id={id} variant={variant}>{note}</InlineAlert>
    : <small id={id} className="rvt-display-block">{note}</small>

export const InputTag = ({ Tag, id=Rivet.shortuid(), label, labelVisibility, note, variant, className, ...attrs}) => {
    const noteId = `${id}_note`;
    const inputProps = {
        id,
        className: inputClassName(variant),
        "aria-describedby": note ? noteId : '',
        "aria-invalid": variant === 'danger',
        ...attrs
    };
    return (
        <div className={classNames('rvt-input', className)}>
            <label htmlFor={id} className={Rivet.labelVisiblityClass(labelVisibility)}>{label}</label>
            <Tag {...attrs} {...inputProps} />
            {note && noteFragment(noteId, variant, note)}
        </div>
    );
};
