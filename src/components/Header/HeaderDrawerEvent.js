/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import AbstractUserActionEvent from '../util/AbstractUserActionEvent';

export default class HeaderDrawerEvent extends AbstractUserActionEvent  {

    static handler = (callback) => {
        return AbstractUserActionEvent.handler(callback, HeaderDrawerEvent);
    }

    isUnhandledKeyPress() {
        return this.isKeyEvent() && !this.isEscapeKeyPress();
    }

}
