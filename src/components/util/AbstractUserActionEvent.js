/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
export default class AbstractUserActionEvent {
    static keys  = {
        tab: 9,
        escape: 27
    }

    static handler = (callback, InstantiatingClass) => {
        const eventHandler = (event) => {
            callback(new InstantiatingClass(event));
        };
        return ({
            register: () => {
                ['click', 'touchstart', 'keyup'].forEach(event =>
                    document.addEventListener(event, eventHandler, true)
                );
            },
            deregister: () => {
                ['click', 'touchstart', 'keyup'].forEach(event =>
                    document.removeEventListener(event, eventHandler, true)
                );
            }
        });
    };

    type;
    which;
    target;

    /**
     * @param {MouseEvent|KeyboardEvent|TouchEvent} event 
     */
    constructor(event) {
        this.type = event.type;
        this.which = event.which;
        this.target = event.target;
    }

    isUnhandledKeyPress(){
        throw new Error('Not implemented');
    };

    isKeyEvent = () => {
        return this.type === 'keyup';
    }

    isTabKeyPress = () => {
        return this.isKeyEvent() && this.which === AbstractUserActionEvent.keys.tab;
    }

    isEscapeKeyPress = () => {
        return this.isKeyEvent() && this.which === AbstractUserActionEvent.keys.escape;
    }

    isMouseEvent = () => {
        return this.type === 'click';
    }

    isRightMouseClick = () => {
        return this.isMouseEvent && this.which === 3;
    }

    /**
     * @param {Element|Text|null} container
     */
    targets = (container) =>
        container && container.contains(this.target) && container !== this.target;    
}
