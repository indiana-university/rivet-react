import { mount } from 'enzyme';
import ModalEvent from './ModalEvent';

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
