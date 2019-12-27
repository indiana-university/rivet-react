/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
import Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';
import ModalEvent from './ModalEvent';

const propTypes = {
    /**
     * Determines whether the modal is shown or not
     */
    isOpen: PropTypes.bool,
    /**
     * Optional function to call to raise when the alert is dismissed. If undefined, the modal will act as a dialog (i.e., no close button, 
     * will not close on outside click or escape key)
     */
    onDismiss: PropTypes.func,
    /**
     * The content of the modal's header
     */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(React.ReactNode)])
}

const ModalCloseButton = ({ onDismiss }) => (
    <Button type="button" className="rvt-modal__close" data-modal-close="close" onClick={onDismiss}>
        <span className="rvt-sr-only">Close</span>
        <Icon name="close" />
    </Button>
);

class Modal extends React.PureComponent {

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        className: PropTypes.string,
        id: PropTypes.string,
        isOpen: PropTypes.bool,
        onDismiss: PropTypes.func,
        title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired
    };

    eventHandler;

    constructor(props) {
        super(props);
        this.eventHandler = ModalEvent.handler(this.handleClickOutside);
        this.handleEventRegistration = this.handleEventRegistration.bind(this);
    }

    componentDidMount() {
        if (this.props.onDismiss) {
            this.handleEventRegistration();
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.onDismiss !== prevProps.onDismiss || this.props.isOpen !== prevProps.isOpen) {
            this.handleEventRegistration();
        }
    }

    componentWillUnmount() {
        this.eventHandler.deregister();
    }    
    
    render() {
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

    handleEventRegistration() {
        if(this.props.onDismiss && this.props.isOpen) {
            this.eventHandler.register();
        } else {
            this.eventHandler.deregister();
        }
    }  

    /**
     * @param {ModalEvent} event
     */
    shouldToggleModal = (event) => {
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

    /**
     * @param {ModalEvent} event
     */
    handleClickOutside = (event) => {
        if(event && this.shouldToggleModal(event) && this.props.onDismiss) {
            this.props.onDismiss();
        }
    }      

}

Modal.propTypes = propTypes;

export default Modal;
