import * as React from 'react'
import * as Rivet from '../Rivet'

/**
 * Optional Rivet alert stylings. 
 * If no style is specified, the component will apply the 'info' alert style.
 * These styles are mutually exclusive: only one will be honored.
 * 
 * @see https://rivet.uits.iu.edu/components/overlays/alerts
 * 
 * @property info: an informational alert
 * @property error: an error alert
 * @property success: a success alert
 * @property message: a message/warning alert
 */
interface RivetAlertHTMLAttributes {
    info?: boolean
    message?: boolean
    error?: boolean
    success?: boolean
}

interface ComponentProps extends Rivet.Props {
    title?: string,
    dismissible?: boolean, 
    clickDismiss?: Rivet.Action,
}

export type AlertProps = 
    ComponentProps 
    & RivetAlertHTMLAttributes

export interface AlertState {
    visible: boolean
}

/**
 * Generate the style for this alert.
 * @param attrs This alert's properties
 */
const alertStyle = (attrs: RivetAlertHTMLAttributes) =>
    attrs.info ? "rvt-alert--info"
    : attrs.error ? "rvt-alert--error"
    : attrs.success ? "rvt-alert--success"
    : attrs.message ?  "rvt-alert--message"
    : "rvt-alert--info";

const alertClass = "rvt-alert";
const alertDecorators = [alertStyle];

class Alert extends React.Component<AlertProps, AlertState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    public render() {
        const { id, title, dismissible, clickDismiss, children, ...attrs } = this.props;
        const componentId = id || Rivet.shortuid();
        const titleId = Rivet.shortuid();
        const classNames = Rivet.rivetize<AlertProps>(attrs, alertClass, alertDecorators);

        return (
            this.state.visible &&
            <div className={classNames} id={componentId} role='alertdialog' aria-labelledby={titleId}>
                {title && this.headerFragment(titleId, title)}
                <p className='rvt-alert__message'>{children}</p>
                {dismissible && this.dismissFragment(clickDismiss)}
            </div>
        );
    }

    private headerFragment = (titleId: string, title?: string) => 
        <h1 className='rvt-alert__title' id={titleId}>{title}</h1>

    private dismissFragment = (onDismissed = () => {;}) =>
        <button className="rvt-alert__dismiss" onClick={()=>{ onDismissed(); this.hideAlert(); }}>
            <span className="rvt-sr-only">Dismiss this alert</span>
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
        </button>

    private hideAlert = () => {
        this.setState({ visible: false });
    };
}

export default Alert