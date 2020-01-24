/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import ModalEvent from './ModalEvent';

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

describe('ModalEvent', () => {
    describe('Keyboard Events', () =>{
        it('detects if the event is an unhandled key press', () => {
            expect(new ModalEvent(createKeyboardEvent(ModalEvent.keys.escape)).isUnhandledKeyPress()).toBe(false);
            expect(new ModalEvent(createKeyboardEvent(ModalEvent.keys.tab)).isUnhandledKeyPress()).toBe(true);
            expect(new ModalEvent(createKeyboardEvent('a'.charCodeAt(0))).isUnhandledKeyPress()).toBe(true);
            expect(new ModalEvent(createMouseEvent(1)).isUnhandledKeyPress()).toBe(false);
            expect(new ModalEvent(createTouchEvent()).isUnhandledKeyPress()).toBe(false);
        });
    });
});
