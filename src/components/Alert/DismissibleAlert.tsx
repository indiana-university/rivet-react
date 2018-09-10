import * as React from 'react'
import * as Rivet from '../util/Rivet';
import Alert from './Alert'
import { StatefulAlertProps, statefulPropTypes } from "./common"

const initialState = { isOpen: true }
type AlertState = Readonly<typeof initialState>

class DismissibleAlert extends React.PureComponent<StatefulAlertProps & React.HTMLAttributes<HTMLDivElement>, AlertState> {
    public static propTypes = statefulPropTypes;
    
    public readonly state: AlertState = initialState;

    public render() {
        return <Alert {...this.props} onDismiss={this.onDismiss} isOpen={this.state.isOpen} />
    }

    private onDismiss = () => {
        this.setState({ isOpen: false });
        if (this.props.onDismiss){
            this.props.onDismiss();
        }
    };
}

export default Rivet.rivetize(DismissibleAlert);
