import * as React from 'react'
import * as Rivet from '../Rivet'
import * as alert from "./common"

interface DismissibleAlertProps extends alert.AlertProps {
    /** An action to invoke when the alert is dismissed. */
    clickDismiss: Rivet.Action
}
    
const initialState = { visible: true }
type AlertState = Readonly<typeof initialState>

export class DismissibleAlert extends React.PureComponent<DismissibleAlertProps, AlertState> {
    public readonly state: AlertState = initialState;

    public render() {
        const componentId = this.props.id || Rivet.shortuid();
        const titleId = Rivet.shortuid();
        return ( this.state.visible &&
            <div className={Rivet.classify(this.props, alert.alertClass, alert.alertDecorators)} id={componentId} role='alertdialog' aria-labelledby={titleId}>
                {alert.headerFragment(titleId, this.props.rvtTitle)}
                <p className='rvt-alert__message'>{this.props.children}</p>
                <button className="rvt-alert__dismiss" onClick={()=>{ this.dismissAlert(); }}>
                    <span className="rvt-sr-only">Dismiss this alert</span>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
                    </svg>
                </button>
            </div>
        );
    }

    private dismissAlert = () => {
        this.props.clickDismiss();
        this.setState({ visible: false });
    };
}

export default DismissibleAlert