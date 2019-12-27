/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import HeaderDrawerEvent from './HeaderDrawerEvent';

const createKeyboardEvent = (keyCode) => ({
    type: 'keyup',
    which: keyCode
}) as KeyboardEvent;

const createMouseEvent = (buttonCode) => ({
    type: 'click',
    which: buttonCode
}) as MouseEvent;

const createTouchEvent = () => ({
    type: 'touchstart'
}) as TouchEvent;

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
