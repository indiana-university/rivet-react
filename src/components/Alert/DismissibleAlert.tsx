import * as React from 'react'
import Alert from './Alert'
import { StatefulAlertProps } from "./common"

const initialState = { visible: true }
type AlertState = Readonly<typeof initialState>

export class DismissibleAlert extends React.Component<StatefulAlertProps & React.HTMLAttributes<HTMLDivElement>, AlertState> {
    public readonly state: AlertState = initialState;

    public render() {
        return <Alert {...this.props} onDismiss={this.dismissAlert} isOpen={this.state.visible} />
    }

    private dismissAlert = () => {
        this.setState({ visible: false });
        if (this.props.onDismiss){
            this.props.onDismiss();
        }
    };
}

export default DismissibleAlert