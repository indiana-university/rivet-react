/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';

import InlineAlert from '../Alert/InlineAlert';
import * as Rivet from '../util/Rivet';

export interface TextProps {
    /** The label for the input */
    label: string;
    /** Visibility modifier for the input's label */
    labelVisibility?: Rivet.LabelVisibility;
    /** An optional note that will be displayed below the input */
    note?: React.ReactNode;
    /** Rivet style for inline validation */
    variant?: 'danger' | 'info' | 'success' | 'warning';
}

const inputClassName = (variant) => 
    variant
    ? `rvt-validation-${variant}`
    : '';

const noteFragment = (id : string, variant, note? : React.ReactNode) => 
    variant
    ? <InlineAlert id={id} variant={variant}>{note}</InlineAlert>
    : <small id={id} className="rvt-display-block">{note}</small>

export const renderInput = 
    <T extends React.HTMLAttributes<HTMLElement>>(elementName: string) :  React.SFC<TextProps & T> => 
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
                {React.createElement(elementName, inputProps)}
                {note && noteFragment(noteId, variant, note)}
            </div>
        );
}
