import * as React from 'react';
import { default as Modal, ModalProps } from './Modal';

const initialState = { open: false };
type ModalState = Readonly<typeof initialState>;

/*
 * I'm not sure how this is going to work.  Modals are generally opened based on something outside the component, 
 * so you can't close it from within -- no way to notify parent
 */

export default class StatefulModal extends React.PureComponent<ModalProps & React.HTMLAttributes<HTMLDivElement>, ModalState>  {
    
    public state: ModalState = initialState;
    
    constructor(props) {
        super(props);

        this.state = {
            open: props.isOpen
        };
    }

    public componentDidUpdate(prevProps, prevState) {
        if(this.props.isOpen !== prevProps.isOpen) {
            console.log('state.open is changing', this.props.isOpen);
            this.setState({
                open: !!this.props.isOpen
            });
        }
    }

    public render() {
        const {title, controls} = this.props;
        return (
            <Modal title={title} controls={controls} isOpen={this.state.open} onDismiss={this.onDismiss} />
        );
    }

    private onDismiss = () => {
        this.setState({
            open: false
        });
    }    
}