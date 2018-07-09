import * as React from 'react'
import * as Rivet from '../Rivet'

export interface TextProps extends Rivet.Props {
    label: string
    note?: string
    // validation style
    info?: boolean
    valid?: boolean
    warning?: boolean
    invalid?: boolean
}

const infoClass = "has-info";
const infoIcon = 
    <g fill="currentColor">
        <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
        <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z" />
        <circle cx="8" cy="5" r="1" />
    </g>

const validClass = 'is-valid';
const validIcon = 
    <g fill="currentColor">
        <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z"/>
        <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
    </g>

const warningClass = 'has-warning';
const warningIcon = 
    <g fill="currentColor">
        <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z" />
        <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
    </g>

const invalidClass = "is-invalid";
const invalidIcon = 
    <g fill="currentColor">
        <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
        <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"/>
    </g>    

const alertIcon = (props: TextProps) =>
    props.info ? infoIcon
    : props.valid ? validIcon
    : props.warning ? warningIcon
    : invalidIcon;

const alertClass = (props: TextProps) =>
    props.info ? infoClass
    : props.valid ? validClass
    : props.warning ? warningClass
    : invalidClass;

const isInlineAlert = (props: TextProps) => 
    props.info || props.valid || props.warning || props.invalid;

const inlineAlert = (props: TextProps) =>
    <div className={`rvt-inline-alert rvt-inline-alert--${alertClass(props)}`}>
        <span className="rvt-inline-alert__icon">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                {alertIcon(props)}
            </svg>
        </span>
        <span className="rvt-inline-alert__message" id="description-message">
            {props.note}
        </span>
    </div>

const standardNote = (inputId: string, props: TextProps) =>
    <small id={noteId(inputId)} className="rvt-display-block rvt-m-bottom-md">{props.note}</small>

const noteId = (inputId: string) => 
    `${inputId}_note`;

const inputClassName = (props: TextProps) =>
    isInlineAlert(props) ? `rvt-${alertClass(props)}` : "";

const labelFragment = (inputId: string, props: TextProps) =>
    <label htmlFor={inputId}>{props.label}</label>

const noteFragment = (inputId: string, props: TextProps) =>
    isInlineAlert(props)
        ? inlineAlert(props)
        : standardNote(inputId, props);

type TextComponentGenerator = <T>(id:string, className: string, ariaDescribedBy: string, ariaInvalid:boolean, attrs: T) => JSX.Element; 

export const renderInput = <T extends React.HTMLAttributes<HTMLElement>>(
    props: TextProps & T, 
    inputGenerator: TextComponentGenerator ) => {
        const inputId = props.id || Rivet.shortuid();
        const className = inputClassName(props);
        const ariaDescribedBy = props.note ? noteId(inputId) : ""
        const ariaInvalid = props.invalid || false;
        return (
            <div className={Rivet.classify(props, "rvt-input")} >
                {labelFragment(inputId, props)}
                {inputGenerator<T>(inputId, className, ariaDescribedBy, ariaInvalid, props)}
                {props.note && noteFragment(inputId, props)}
            </div>
        );
}
        