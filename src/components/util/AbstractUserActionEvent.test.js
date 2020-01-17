/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import AbstractUserActionEvent from './AbstractUserActionEvent';

class TestEvent extends AbstractUserActionEvent {
    isUnhandledKeyPress() {
        return true;
    }
}

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

describe('AbstractUserActionEvent', () => {
    describe('Keyboard Events', () =>{
        it('determines if the event is a keyboard event', () => {
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.escape)).isKeyEvent()).toBe(true);
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.tab)).isKeyEvent()).toBe(true);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isKeyEvent()).toBe(true);
            expect(new TestEvent(createMouseEvent(1)).isKeyEvent()).toBe(false);
            expect(new TestEvent(createTouchEvent()).isKeyEvent()).toBe(false);
        });
        it('detects if the event is an escape key press', () => {
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.escape)).isEscapeKeyPress()).toBe(true);
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.tab)).isEscapeKeyPress()).toBe(false);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isEscapeKeyPress()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isEscapeKeyPress()).toBe(false);
            expect(new TestEvent(createTouchEvent()).isEscapeKeyPress()).toBe(false);
        });
        it('detects if the event is a tab key press', () => {
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.escape)).isTabKeyPress()).toBe(false);
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.tab)).isTabKeyPress()).toBe(true);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isTabKeyPress()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isTabKeyPress()).toBe(false);
            expect(new TestEvent(createTouchEvent()).isTabKeyPress()).toBe(false);
        });
    });

    describe('Mouse Events', () =>{
        it('determines if the event is a mouse event', () => {
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.escape)).isMouseEvent()).toBe(false);
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.tab)).isMouseEvent()).toBe(false);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isMouseEvent()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isMouseEvent()).toBe(true);
            expect(new TestEvent(createMouseEvent(3)).isMouseEvent()).toBe(true);
            expect(new TestEvent(createTouchEvent()).isMouseEvent()).toBe(false);
        });
        it('detects if the event is a right mouse click', () => {
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.escape)).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createKeyboardEvent(AbstractUserActionEvent.keys.tab)).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createMouseEvent(3)).isRightMouseClick()).toBe(true);
            expect(new TestEvent(createTouchEvent()).isEscapeKeyPress()).toBe(false);
        });
    });
});
