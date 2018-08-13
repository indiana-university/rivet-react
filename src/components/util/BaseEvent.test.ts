import { mount } from 'enzyme';
import BaseEvent from './BaseEvent';

class TestEvent extends BaseEvent {
    public isUnhandledKeyPress() : boolean {
        return true;
    }
}

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
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.escape)).isKeyEvent()).toBe(true);
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.tab)).isKeyEvent()).toBe(true);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isKeyEvent()).toBe(true);
            expect(new TestEvent(createMouseEvent(1)).isKeyEvent()).toBe(false);
            expect(new TestEvent(createTouchEvent()).isKeyEvent()).toBe(false);
        });
        it('detects if the event is an escape key press', () => {
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.escape)).isEscapeKeyPress()).toBe(true);
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.tab)).isEscapeKeyPress()).toBe(false);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isEscapeKeyPress()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isEscapeKeyPress()).toBe(false);
            expect(new TestEvent(createTouchEvent()).isEscapeKeyPress()).toBe(false);
        });
        it('detects if the event is a tab key press', () => {
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.escape)).isTabKeyPress()).toBe(false);
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.tab)).isTabKeyPress()).toBe(true);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isTabKeyPress()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isTabKeyPress()).toBe(false);
            expect(new TestEvent(createTouchEvent()).isTabKeyPress()).toBe(false);
        });
    });

    describe('Mouse Events', () =>{
        it('determines if the event is a mouse event', () => {
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.escape)).isMouseEvent()).toBe(false);
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.tab)).isMouseEvent()).toBe(false);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isMouseEvent()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isMouseEvent()).toBe(true);
            expect(new TestEvent(createMouseEvent(3)).isMouseEvent()).toBe(true);
            expect(new TestEvent(createTouchEvent()).isMouseEvent()).toBe(false);
        });
        it('detects if the event is a right mouse click', () => {
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.escape)).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createKeyboardEvent(BaseEvent.keys.tab)).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createKeyboardEvent('a'.charCodeAt(0))).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createMouseEvent(1)).isRightMouseClick()).toBe(false);
            expect(new TestEvent(createMouseEvent(3)).isRightMouseClick()).toBe(true);
            expect(new TestEvent(createTouchEvent()).isEscapeKeyPress()).toBe(false);
        });
    });
});
