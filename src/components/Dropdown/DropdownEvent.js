/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import AbstractUserActionEvent from '../util/AbstractUserActionEvent';

export default class DropdownEvent extends AbstractUserActionEvent  {

    static handler = (callback) => {
        const eventHandler = (event) => {
            callback(new DropdownEvent(event));
        };
        return ({
            register: () => {
                ['click'].forEach(event =>
                    document.addEventListener(event, eventHandler, false)
                );
                ['touchstart', 'keyup'].forEach(event =>
                    document.addEventListener(event, eventHandler, true)
                );
            },
            deregister: () => {
                ['click'].forEach(event =>
                    document.removeEventListener(event, eventHandler, false)
                );
                ['touchstart', 'keyup'].forEach(event =>
                    document.removeEventListener(event, eventHandler, true)
                );
            }
        });
    }

    isUnhandledKeyPress() {
        return this.isKeyEvent() && !this.isTabKeyPress() && !this.isEscapeKeyPress();
    }

}
