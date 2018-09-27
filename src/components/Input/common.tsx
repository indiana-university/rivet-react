import * as classNames from 'classnames';
import * as React from 'react';

import InlineAlert from '../Alert/InlineAlert';
import * as Rivet from '../util/Rivet';

import { validationClass } from '../util/validation';

export interface TextProps {
    /** The label for the input */
    label: string;
    /** Visibility modifier for the input's label */
    labelVisibility?: Rivet.LabelVisibility;
    /** An optional note that will be displayed below the input */
    note?: React.ReactNode;
    /** Rivet style for inline validation */
    variant?: 'info' | 'invalid' | 'valid' | 'warning';
}

const inputClassName = (variant) => 
    variant
    ? `rvt-validation-${validationClass(variant)}`
    : '';

const noteFragment = (id : string, variant, note? : React.ReactNode) => 
    variant
    ? <InlineAlert id={id} variant={variant}>{note}</InlineAlert>
    : <small id={id} className="rvt-display-block">{note}</small>

export const renderInput =
    <T extends React.HTMLAttributes<HTMLElement>>(inputGenerator: (props) => JSX.Element ) => 
    ({ id=Rivet.shortuid(), label, labelVisibility, note, variant, className, ...attrs}) => {
        const noteId = `${id}_note`;
        const inputProps = {
            id, 
            className: inputClassName(variant), 
            "aria-describedby": note ? noteId : '', 
            "aria-invalid": variant === 'invalid', 
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
