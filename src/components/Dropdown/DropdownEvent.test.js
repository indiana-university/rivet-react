/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import DropdownEvent from './DropdownEvent';

const createKeyboardEvent = (keyCode) => ({
    type: 'keyup',
    which: keyCode
});

const createMouseEvent = (buttonCode) => ({
    type: 'click',
    which: buttonCode
});

const createTouchEvent = () => ({
    type: 'touchstart'
});

describe('DropdownEvent', () => {
    describe('Keyboard Events', () =>{
        it('detects if the event is an unhandled key press', () => {
            expect(new DropdownEvent(createKeyboardEvent(DropdownEvent.keys.escape)).isUnhandledKeyPress()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent(DropdownEvent.keys.tab)).isUnhandledKeyPress()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent('a'.charCodeAt(0))).isUnhandledKeyPress()).toBe(true);
            expect(new DropdownEvent(createMouseEvent(1)).isUnhandledKeyPress()).toBe(false);
            expect(new DropdownEvent(createTouchEvent()).isUnhandledKeyPress()).toBe(false);
        });
    });

});
