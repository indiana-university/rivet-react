import * as classNames from 'classnames';
import * as React from 'react';

import InlineAlert from '../Alert/InlineAlert';
import * as Rivet from '../util/Rivet';

import { validationClass } from '../util/validation';

export interface TextProps {
    /** The label for the input */
    label: string;
    /** An optional note that will be displayed below the input */
    note?: React.ReactNode;
    /** Rivet style for inline validation */
    variant?: 'info' | 'invalid' | 'valid' | 'warning';
}

const inputClassName = (variant) => 
    variant
    ? `rvt-${validationClass(variant)}`
    : '';

const noteFragment = (id : string, variant, note? : React.ReactNode) => 
    variant
    ? <InlineAlert id={id} variant={variant}>{note}</InlineAlert>
    : <small id={id} className="rvt-display-block rvt-m-bottom-md">{note}</small>

export const renderInput =
    <T extends React.HTMLAttributes<HTMLElement>>(inputGenerator: (props) => JSX.Element ) => 
    ({ id=Rivet.shortuid(), label, note, variant, className, ...attrs}) => {
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
                <label htmlFor={id}>{label}</label>
                {inputGenerator (inputProps)}
                {note && noteFragment(noteId, variant, note)}
            </div>
        );
}
