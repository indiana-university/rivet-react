import * as classNames from 'classnames';
import * as React from 'react';

import InlineAlert from '../Alert/InlineAlert';
import * as Rivet from '../util/Rivet';

import { alertClass, Variant } from '../Alert/inlineAlertVariantDisplayOptions';

type InputVariant = Variant | 'default';
export interface TextProps {
    label: string;
    note?: React.ReactNode;
    /**
     * Optional Rivet style for inline validation.
     * See: https://rivet.uits.iu.edu/components/forms/text-input/#inline-validation-states
     */
    variant?: InputVariant;
}

const isInlineAlert = (variant : InputVariant) => variant && variant !== 'default';

const standardNote = (id : string, note : React.ReactNode) => <small id={id} className="rvt-display-block rvt-m-bottom-md">{note}</small>

const inputClassName = (variant : InputVariant) => isInlineAlert(variant)
    ? `rvt-${alertClass(variant as Variant)}`
    : '';

const labelFragment = (inputId : string, props : TextProps) => <label htmlFor={inputId}>{props.label}</label>

const noteFragment = (id : string, variant: InputVariant, note? : React.ReactNode) => note
    ? isInlineAlert(variant)
        ? <InlineAlert id={id} variant={variant as Variant}>{note}</InlineAlert>
        : standardNote(id, note)
    : null;

type TextComponentGenerator = <T>(id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs: T) => JSX.Element; 
export const renderInput =
    <T extends React.HTMLAttributes<HTMLElement>>( props: TextProps & T, inputGenerator: TextComponentGenerator ) => {
        const inputId = props.id || Rivet.shortuid();
        const variant = props.variant || 'default';
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
