import * as React from 'react'
import * as Rivet from "../Rivet"

export const headerFragment = (titleId: string, title?: string) => 
    title 
    ? <h1 className='rvt-alert__title' id={titleId}>{title}</h1>
    : ""

export interface AlertProps extends Rivet.Props {
        /**
         * Rivet alert styling. 
         * @see https://rivet.uits.iu.edu/components/overlays/alerts
         * @memberof AlertProps
         */ 
        rvtStyle: "info" | "message" | "error" | "success",
        /**
         * Optional alert title
         */
        rvtTitle?: string,
    }
        
/**
 * Generate the style for this alert.
 * @param attrs This alert's properties
 */
const alertStyle = (props: AlertProps) => 
    `${alertClass}--${props.rvtStyle}`;

export const alertClass = "rvt-alert";
export const alertDecorators = [ alertStyle ];

export const renderAlert = <T extends AlertProps>(props: T, guts: React.ReactNode) => {
    const componentId = props.id || Rivet.shortuid();
    const titleId = Rivet.shortuid();
    return (
        <div className={Rivet.classify(props, alertClass, alertDecorators)} id={componentId} role='alertdialog' aria-labelledby={titleId}>
            {headerFragment(titleId, props.rvtTitle)}
            <p className='rvt-alert__message'>{props.children}</p>
            {guts}
        </div>
    );
}
