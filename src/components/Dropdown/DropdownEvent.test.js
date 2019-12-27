/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import DropdownEvent from './DropdownEvent';

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
