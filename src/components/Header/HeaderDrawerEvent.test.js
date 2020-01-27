/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import HeaderDrawerEvent from './HeaderDrawerEvent';

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

describe('HeaderDrawerEvent', () => {
    describe('Keyboard Events', () =>{
        it('detects if the event is an unhandled key press', () => {
            expect(new HeaderDrawerEvent(createKeyboardEvent(HeaderDrawerEvent.keys.escape)).isUnhandledKeyPress()).toBe(false);
            expect(new HeaderDrawerEvent(createKeyboardEvent(HeaderDrawerEvent.keys.tab)).isUnhandledKeyPress()).toBe(true);
            expect(new HeaderDrawerEvent(createKeyboardEvent('a'.charCodeAt(0))).isUnhandledKeyPress()).toBe(true);
            expect(new HeaderDrawerEvent(createMouseEvent(1)).isUnhandledKeyPress()).toBe(false);
            expect(new HeaderDrawerEvent(createTouchEvent()).isUnhandledKeyPress()).toBe(false);
        });
    });

});
