import * as classnames from 'classnames'
import * as React from 'react'
import * as Rivet from '../common'
import * as util from '../util'

export interface AlertProps extends Rivet.Props {
    type: Rivet.Notification,
    title?: string,
    dismissible?: boolean, 
    clickDismiss?: Rivet.Action,
}

export interface AlertState {
    visible: boolean
}

class Alert extends React.Component<AlertProps, AlertState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    public render() {
        const { id, title, type, dismissible, clickDismiss, className, children } = this.props;
        const componentId = id || util.shortuid();
        const titleId = util.shortuid();
        const classNames = classnames("rvt-alert", className, this.alertClass(type));

        return (
            this.state.visible &&
            <div className={classNames} id={componentId} role='alertdialog' aria-labelledby={titleId}>
                {title && this.headerFragment(titleId, title)}
                <p className='rvt-alert__message'>{children}</p>
                {dismissible && this.dismissFragment(clickDismiss)}
            </div>
        );
    }

    private alertClass = (type: Rivet.Notification) => {
        switch(type){
            case Rivet.Notification.Message: return "rvt-alert--message";
            case Rivet.Notification.Error: return "rvt-alert--error";
            case Rivet.Notification.Success: return "rvt-alert--success";
            default: return "rvt-alert--info";
        }
    }

    private dismissFragment = (onDismissed = () => {;}) =>
        <button className="rvt-alert__dismiss" onClick={()=>{ onDismissed(); this.hideAlert(); }}>
            <span className="rvt-sr-only">Dismiss this alert</span>
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
        </button>

    private headerFragment = (titleId: string, title?: string) => 
        <h1 className='rvt-alert__title' id={titleId}>{title}</h1>

    private hideAlert = () => {
        this.setState({ visible: false });
    };
}

export default Alert