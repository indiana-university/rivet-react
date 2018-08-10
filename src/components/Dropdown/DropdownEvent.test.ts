import { mount } from 'enzyme';
import DropdownEvent, { keys } from './DropdownEvent';

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
        it('determines if the event is a keyboard event', () => {
            expect(new DropdownEvent(createKeyboardEvent(keys.escape)).isKeyEvent()).toBe(true);
            expect(new DropdownEvent(createKeyboardEvent(keys.tab)).isKeyEvent()).toBe(true);
            expect(new DropdownEvent(createKeyboardEvent('a'.charCodeAt(0))).isKeyEvent()).toBe(true);
            expect(new DropdownEvent(createMouseEvent(1)).isKeyEvent()).toBe(false);
            expect(new DropdownEvent(createTouchEvent()).isKeyEvent()).toBe(false);
        });
        it('detects if the event is an escape key press', () => {
            expect(new DropdownEvent(createKeyboardEvent(keys.escape)).isEscapeKeyPress()).toBe(true);
            expect(new DropdownEvent(createKeyboardEvent(keys.tab)).isEscapeKeyPress()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent('a'.charCodeAt(0))).isEscapeKeyPress()).toBe(false);
            expect(new DropdownEvent(createMouseEvent(1)).isEscapeKeyPress()).toBe(false);
            expect(new DropdownEvent(createTouchEvent()).isEscapeKeyPress()).toBe(false);
        });
        it('detects if the event is a tab key press', () => {
            expect(new DropdownEvent(createKeyboardEvent(keys.escape)).isTabKeyPress()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent(keys.tab)).isTabKeyPress()).toBe(true);
            expect(new DropdownEvent(createKeyboardEvent('a'.charCodeAt(0))).isTabKeyPress()).toBe(false);
            expect(new DropdownEvent(createMouseEvent(1)).isTabKeyPress()).toBe(false);
            expect(new DropdownEvent(createTouchEvent()).isTabKeyPress()).toBe(false);
        });
        it('detects if the event is an unhandled key press', () => {
            expect(new DropdownEvent(createKeyboardEvent(keys.escape)).isUnhandledKeyPress()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent(keys.tab)).isUnhandledKeyPress()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent('a'.charCodeAt(0))).isUnhandledKeyPress()).toBe(true);
            expect(new DropdownEvent(createMouseEvent(1)).isUnhandledKeyPress()).toBe(false);
            expect(new DropdownEvent(createTouchEvent()).isUnhandledKeyPress()).toBe(false);
        });
    });

    describe('Mouse Events', () =>{
        it('determines if the event is a mouse event', () => {
            expect(new DropdownEvent(createKeyboardEvent(keys.escape)).isMouseEvent()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent(keys.tab)).isMouseEvent()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent('a'.charCodeAt(0))).isMouseEvent()).toBe(false);
            expect(new DropdownEvent(createMouseEvent(1)).isMouseEvent()).toBe(true);
            expect(new DropdownEvent(createMouseEvent(3)).isMouseEvent()).toBe(true);
            expect(new DropdownEvent(createTouchEvent()).isMouseEvent()).toBe(false);
        });
        it('detects if the event is a right mouse click', () => {
            expect(new DropdownEvent(createKeyboardEvent(keys.escape)).isRightMouseClick()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent(keys.tab)).isRightMouseClick()).toBe(false);
            expect(new DropdownEvent(createKeyboardEvent('a'.charCodeAt(0))).isRightMouseClick()).toBe(false);
            expect(new DropdownEvent(createMouseEvent(1)).isRightMouseClick()).toBe(false);
            expect(new DropdownEvent(createMouseEvent(3)).isRightMouseClick()).toBe(true);
            expect(new DropdownEvent(createTouchEvent()).isEscapeKeyPress()).toBe(false);
        });
    });
});
