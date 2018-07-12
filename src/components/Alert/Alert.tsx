import * as React from 'react'
import * as Rivet from "../Rivet"
import * as alert from "./common"

export class Alert extends React.Component<alert.AlertProps> {
    public render() {
        const componentId = this.props.id || Rivet.shortuid();
        const titleId = Rivet.shortuid();
        return (
            <div className={Rivet.classify(this.props, alert.alertClass, alert.alertDecorators)} id={componentId} role='alertdialog' aria-labelledby={titleId}>
                {alert.headerFragment(titleId, this.props.rvtTitle)}
                <p className='rvt-alert__message'>{this.props.children}</p>
            </div>
        );
    }
}

export default Alert