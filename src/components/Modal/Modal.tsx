/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import Button from '../Button/Button';
import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';
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
    onDismiss?: () => void;
    /**
     * The content of the modal's header
     */
    title: React.ReactNode | string;
}

const ModalCloseButton = ({ onDismiss }) => (
    <Button type="button" className="rvt-modal__close" data-modal-close="close" onClick={onDismiss}>
        <span className="rvt-sr-only">Close</span>
        <Icon name="close" />
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

    private eventHandler;
    private modalWrapDiv: React.RefObject<HTMLDivElement>;


    constructor(props) {
        super(props);
        this.modalWrapDiv = React.createRef();
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
            <div ref={this.modalWrapDiv}
                className={classNames.default(["rvt-modal", className])}
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

    protected handleEventRegistration() {
        if(this.props.onDismiss && this.props.isOpen) {
            this.eventHandler.register();
        } else {
            this.eventHandler.deregister();
        }
    }  

    private shouldToggleModal = (event: ModalEvent) => {
        if (event.isRightMouseClick() || event.isUnhandledKeyPress()) {
            // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
            return false;
        }

        if (event.targets(this.modalWrapDiv.current) && !event.isKeyEvent()) {
            // If the user clicks or touches inside the modal do not close the menu
            return false;
        }

        return true;
    }

    private handleClickOutside = (event: ModalEvent) => {
        if(event && this.shouldToggleModal(event) && this.props.onDismiss) {
            this.props.onDismiss();
        }
    }      

}

export default Modal;
