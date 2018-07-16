import * as React from 'react'
import * as Rivet from "../Rivet"
import { StatelessAlertProps } from "./common"

/**
 * Generate the style for this alert.
 * @param attrs This alert's properties
 */
const alertStyle = (props: StatelessAlertProps) => {
    return `${alertClass}--${props.variant}`;
}

const alertClass = "rvt-alert";
const alertDecorators = [ alertStyle ];

export const Alert : React.SFC<StatelessAlertProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const {title, onDismiss, children, isOpen=true, id=Rivet.shortuid(), ...attrs} = props; 
    const titleId = Rivet.shortuid();

    const headerFragment = () => 
        title 
        ? <h1 className='rvt-alert__title' id={titleId}>{title}</h1>
        : null;

    const dismissFragment = () =>
        onDismiss 
        ? <button className="rvt-alert__dismiss" onClick={ onDismiss }>
            <span className="rvt-sr-only">Dismiss this alert</span>
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
          </button>
        : null

    return isOpen 
        ? <div id={id} className={Rivet.classify(attrs, alertClass, alertDecorators)} 
                    role='alertdialog' aria-labelledby={titleId} {...attrs} >
                {headerFragment()}
                <p className='rvt-alert__message'>{children}</p>
                {dismissFragment()}
          </div>
        : null
};

export default Alert