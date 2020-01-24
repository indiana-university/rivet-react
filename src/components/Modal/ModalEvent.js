/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import AbstractUserActionEvent from '../util/AbstractUserActionEvent';

export default class ModalEvent extends AbstractUserActionEvent  {

    static handler = (callback) => {
        return AbstractUserActionEvent.handler(callback, ModalEvent);
    }

    isUnhandledKeyPress() {
        return this.isKeyEvent() && !this.isEscapeKeyPress();
    }
}
