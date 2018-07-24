import * as classNames from 'classnames';
import * as React from 'react';

import * as Rivet from '../Rivet';

type Variant = 'info' | 'invalid' | 'valid' | 'warning' | 'default';
export interface TextProps {
    label: string;
    note?: React.ReactNode;
    /**
     * Optional Rivet style for inline validation.
     * See: https://rivet.uits.iu.edu/components/forms/text-input/#inline-validation-states
     */
    variant?: Variant;
}

const variantDisplayOptions : object = {
    info: {
        className: 'has-info',
        icon: (
            <>
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
                <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z"/>
                <circle cx="8" cy="5" r="1"/>
            </>
        )
    },
    valid: {
        className: 'is-valid',
        icon: (
            <>
                <path
                    d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z"/>
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z"/>
            </>
        )
    },
    warning: {
        className: 'has-warning',
        icon: (
            <>
                <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z"/>
                <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
            </>
        )
    },
    invalid: {
        className: 'is-invalid',
        icon: (
            <>
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z"/>
                <path
                    d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"/>
            </>
        )
    },
    // For an inline alert, the variant should never be 'default' (if it were, it would be a standard note)
    default: {
        className: '',
        icon: null
    }
}

const alertIcon = (variant : Variant) => variantDisplayOptions[variant].icon;
const alertClass = (variant : Variant) => variantDisplayOptions[variant].className;
const isInlineAlert = (variant : Variant) => variant && variant !== 'default';

const inlineAlert = (id : string, note : React.ReactNode, variant : Variant) => (
    <div className={`rvt-inline-alert rvt-inline-alert--${alertClass(variant)}`}>
        <span className="rvt-inline-alert__icon">
            <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16">
                <g fill="currentColor">
                    {alertIcon(variant)}
                </g>
            </svg>
        </span>
        <span className="rvt-inline-alert__message" role="alert" id={id}>
            {note}
        </span>
    </div>
);

const standardNote = (id : string, note : React.ReactNode) => <small id={id} className="rvt-display-block rvt-m-bottom-md">{note}</small>


const inputClassName = (variant : Variant) => isInlineAlert(variant)
    ? `rvt-${alertClass(variant)}`
    : '';

const labelFragment = (inputId : string, props : TextProps) => <label htmlFor={inputId}>{props.label}</label>

const noteFragment = (id : string, variant: Variant, note? : React.ReactNode) => note
    ? isInlineAlert(variant)
        ? inlineAlert(id, note, variant)
        : standardNote(id, note)
    : null;

type TextComponentGenerator = <T>(id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs: T) => JSX.Element; 
export const renderInput =
    <T extends React.HTMLAttributes<HTMLElement>>( props: TextProps & T, inputGenerator: TextComponentGenerator ) => {
        const inputId = props.id || Rivet.shortuid();
        const variant: Variant = props.variant || 'default';
        const note = props.note;
        const noteId = `${inputId}_note`;
        const inputClass = inputClassName(variant);
        const ariaDescribedBy = note
            ? noteId
            : '';
        const ariaInvalid = variant === 'invalid';
        return (
            <div className={classNames('rvt-input', props.className)}>
                {labelFragment(inputId, props)}
                {inputGenerator <T> (inputId, inputClass, ariaDescribedBy, ariaInvalid, props)}
                {noteFragment(noteId, variant, note)}
            </div>
        );
}
