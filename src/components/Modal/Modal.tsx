import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from '../Button/Button';
import * as Rivet from '../util/Rivet';
import ModalBody from './ModalBody';
import ModalControls from './ModalControls';
import ModalEvent from './ModalEvent';

export interface ModalProps {
    /**
     * Determines whether the modal is shown or not
     */
    isOpen?: boolean;
    /**
     * Optional function to call to raise when the alert is dismissed. If undefined, the modal will act as a dialog (i.e., no close button, 
     * will not close on outside click or escape key)
     */
    onDismiss?: Rivet.Action;
    /**
     * The content of the modal's header
     */
    title: React.ReactNode | string;
}

const ModalCloseButton = ({ onDismiss }) => (
    <Button className="rvt-modal__close" data-modal-close="close" onClick={onDismiss}>
        <span className="rvt-sr-only">Close</span>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
        </svg>
    </Button>
);

class Modal extends React.PureComponent<ModalProps & React.HTMLAttributes<HTMLDivElement>> {

    public static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        className: PropTypes.string,
        id: PropTypes.string,
        isOpen: PropTypes.bool,
        onDismiss: PropTypes.func,
        title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired
    };

    public static Body = ModalBody;
    public static Controls = ModalControls;

    private eventHandler;

    constructor(props) {
        super(props);
        this.eventHandler = ModalEvent.handler(this.handleClickOutside);
        this.handleEventRegistration = this.handleEventRegistration.bind(this);
    }

    public componentDidMount() {
        if (this.props.onDismiss) {
            this.handleEventRegistration();
        }
    }

    public componentDidUpdate(prevProps) {
        if(this.props.onDismiss !== prevProps.onDismiss || this.props.isOpen !== prevProps.isOpen) {
            this.handleEventRegistration();
        }
    }

    public componentWillUnmount() {
        this.eventHandler.deregister();
    }    
    
    public render() {
        const { children, className, id = Rivet.shortuid(), isOpen, onDismiss, title, ...attrs } = this.props;
        return (
            <div
                className={classNames(["rvt-modal", className])}
                id={id}
                role="dialog"
                aria-labelledby={`${id}-title`}
                aria-hidden={!isOpen}
                tabIndex={-1}
                {...attrs}
            >
                <div className="rvt-modal__inner">
                    <header className="rvt-modal__header">
                        <h1 className="rvt-modal__title" id={`${id}-title`}>{title}</h1>
                        { onDismiss && <ModalCloseButton onDismiss={onDismiss} /> }
                    </header>
                    { children }
                </div>
            </div>
        ); 
    }


    private closeModal = (event) => {
        this.props.onDismiss && this.props.onDismiss();        
    }

    private shouldToggleModal = (event: ModalEvent) => {
        if (event.isRightMouseClick() || event.isUnhandledKeyPress()) {
            // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
            return false;
        }

        if (event.targets(ReactDOM.findDOMNode(this)) && !event.isKeyEvent()) {
            // If the user clicks or touches inside the modal do not close the menu
            return false;
        }

        return true;
    }

    private handleClickOutside = (event: ModalEvent) => {
        if(event && this.shouldToggleModal(event)) {
            this.closeModal(event);
        }
    }    

    protected handleEventRegistration() {
        if(this.props.onDismiss && this.props.isOpen) {
            this.eventHandler.register();
        } else {
            this.eventHandler.deregister();
        }
    }    

}

export default Modal;
