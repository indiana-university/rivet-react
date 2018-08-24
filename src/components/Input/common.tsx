import * as classNames from 'classnames';
import * as React from 'react';

import InlineAlert from '../Alert/InlineAlert';
import * as Rivet from '../util/Rivet';

import { validationClass, ValidationProps } from '../util/validation';

export interface TextProps extends ValidationProps {
    label: string;
    note?: React.ReactNode;
}

const isInlineAlert = (props: TextProps) => props.variant !== undefined;

const standardNote = (id : string, note : React.ReactNode) => <small id={id} className="rvt-display-block rvt-m-bottom-md">{note}</small>

const inputClassName = (props: TextProps) => 
    isInlineAlert(props)
    ? `rvt-${validationClass(props)}`
    : '';

const labelFragment = (inputId : string, props : TextProps) => <label htmlFor={inputId}>{props.label}</label>

const noteFragment = (id : string, props: TextProps, note? : React.ReactNode) => note
    ? isInlineAlert(props)
        ? <InlineAlert id={id} variant={props.variant}>{note}</InlineAlert>
        : standardNote(id, note)
    : null;

type TextComponentGenerator = <T>(id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs: T) => JSX.Element; 
export const renderInput =
    <T extends React.HTMLAttributes<HTMLElement>>( props: TextProps & T, inputGenerator: TextComponentGenerator ) => {
        const inputId = props.id || Rivet.shortuid();
        const variant = props.variant;
        const note = props.note;
        const noteId = `${inputId}_note`;
        const inputClass = inputClassName(props);
        const ariaDescribedBy = note
            ? noteId
            : '';
        const ariaInvalid = variant === 'invalid';
        return (
            <div className={classNames('rvt-input', props.className)}>
                {labelFragment(inputId, props)}
                {inputGenerator <T> (inputId, inputClass, ariaDescribedBy, ariaInvalid, props)}
                {noteFragment(noteId, props, note)}
            </div>
        );
}
