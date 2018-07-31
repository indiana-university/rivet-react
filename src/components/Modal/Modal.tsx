import * as PropTypes from 'prop-types';
import * as React from 'react'

import * as Rivet from "../Rivet"

import Button, { ButtonProps } from '../Button/Button';

interface ModalProps {
    /**
     * Determines whether the modal is shown or not
     */
    isOpen?: boolean;
    /**
     * Optional event to raise when the alert is dismissed
     */
    onDismiss?: Rivet.Action
    /**
     * The content of the modal's header
     */
    title: React.ReactNode;
    /**
     * Button or buttons which will appear in the footer of the modal
     */
    controls: React.ReactElement<ButtonProps> | Array<React.ReactElement<ButtonProps>>
}

const Modal : React.SFC<ModalProps & React.HTMLAttributes<HTMLDivElement>> = 
    ({ children, controls, isOpen, onDismiss, title, id = Rivet.shortuid() }) => {
        return (
            <div
                className="rvt-modal"
                id={id}
                role="dialog"
                aria-labelledby={`${id}-title`}
                aria-hidden={!isOpen}
                tabIndex={-1}
            >
                <div className="rvt-modal__inner">
                    <header className="rvt-modal__header">
                        <h1 className="rvt-modal__title" id={`${id}-title`}>{title}</h1>
                    </header>
                    <div className="rvt-modal__body">
                        {children}
                    </div>
                    { controls && 
                        <div className="rvt-modal__controls">
                            {controls}
                        </div>
                    }
                    { onDismiss &&
                        <button className="rvt-button rvt-modal__close" data-modal-close="close" onClick={onDismiss}>
                            <span className="rvt-sr-only">Close</span>
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
                            </svg>
                        </button>
                    }
                </div>
            </div>
        );
    };
Modal.displayName = 'Modal';
Modal.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    controls: PropTypes.oneOf([PropTypes.instanceOf(Button), PropTypes.arrayOf(PropTypes.instanceOf(Button))]).isRequired,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    onDismiss: PropTypes.function,
    title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Modal;
