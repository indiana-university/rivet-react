/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import AbstractUserActionEvent from '../util/AbstractUserActionEvent';

export default class DropdownEvent extends AbstractUserActionEvent  {

    public static handler = (callback) => {
        return AbstractUserActionEvent.handler(callback, DropdownEvent);
    }

    public isUnhandledKeyPress() : boolean {
        return this.isKeyEvent() && !this.isTabKeyPress() && !this.isEscapeKeyPress();
    }

}
