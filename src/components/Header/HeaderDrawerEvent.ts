/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import AbstractUserActionEvent from '../util/AbstractUserActionEvent';

export default class HeaderDrawerEvent extends AbstractUserActionEvent  {

    public static handler = (callback) => {
        return AbstractUserActionEvent.handler(callback, HeaderDrawerEvent);
    }

    public isUnhandledKeyPress() : boolean {
        return this.isKeyEvent() && !this.isEscapeKeyPress();
    }

}
