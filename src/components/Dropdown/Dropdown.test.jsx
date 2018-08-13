import { mount, render } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dropdown, { Dropdown as UnwrappedDropdown } from './Dropdown';
import DropdownEvent from './DropdownEvent';

describe('<Dropdown />', () => {

    let root;

    beforeEach(() => {
        root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.appendChild(root);
    });

    afterEach(() => {
        document.body.removeChild(root);
        document.body.innerHTML = '';
        root = null;
    });

    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Dropdown />);
            expect(cut.find('div')).toHaveLength(1);
        });
        it('should use a provided ID', () => {
            const cut = mount(<Dropdown id="foo" />);
            cut.simulate('click');
            expect(cut.find('div')).toHaveLength(1);
        });
    });

    describe('Toggle behavior', () => {

        let cut;

        const expectDropdownMenuIsOpen = () => {
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
        }

        const expectDropdownMenuIsClosed = () => {
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
        }

        const clickToggleButton = () => {
            document.getElementsByTagName('button')[0].click();
        }

        beforeEach(() => {
            ReactDOM.render(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                </Dropdown>, root
            );
        });

        it('should toggle the menu when clicking the button', () => {
            expectDropdownMenuIsClosed();
            clickToggleButton();
            expectDropdownMenuIsOpen();
            clickToggleButton();
            expectDropdownMenuIsClosed();
        });
        it('should not toggle the menu when clicking inside the menu', () => {
            expectDropdownMenuIsClosed();
            clickToggleButton();
            expectDropdownMenuIsOpen();
            document.getElementsByTagName('a')[0].click();
            expectDropdownMenuIsOpen();
        });
        it('should toggle the menu when clicking outside of the menu', () => {
            expectDropdownMenuIsClosed();
            clickToggleButton();
            expectDropdownMenuIsOpen();
            document.body.click();
            expectDropdownMenuIsClosed();
        });
        it('should toggle the menu when escape is pressed', () => {
            expectDropdownMenuIsClosed();
            clickToggleButton();
            expectDropdownMenuIsOpen();
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: DropdownEvent.keys.escape }));
            expectDropdownMenuIsClosed();
        });
        it('should not toggle the menu when the tab key is pressed inside the menu', () => {
            expectDropdownMenuIsClosed();
            clickToggleButton();
            expectDropdownMenuIsOpen();
            document.getElementsByClassName('rvt-dropdown__menu')[0].dispatchEvent(new KeyboardEvent('keyup', { which: DropdownEvent.keys.tab }));
            expectDropdownMenuIsOpen();
        });
        it('should toggle the menu when the tab key is pressed outside the menu', () => {
            expectDropdownMenuIsClosed();
            clickToggleButton();
            expectDropdownMenuIsOpen();
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: DropdownEvent.keys.tab }));
            expectDropdownMenuIsClosed();
        });
        it('should not toggle the menu when an unhandled key is pressed', () => {
            expectDropdownMenuIsClosed();
            clickToggleButton();
            expectDropdownMenuIsOpen();
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: 'a'.charCodeAt(0) }));
            expectDropdownMenuIsOpen();
        });
    });

    describe('Event handler registration', () => {
        
        afterEach(() => {
            if(jest.isMockFunction(document.addEventListener)) {
                document.addEventListener.mockRestore();
            }
            if(jest.isMockFunction(document.removeEventListener)) {
                document.removeEventListener.mockRestore();
            }
            if(jest.isMockFunction(UnwrappedDropdown.prototype.componentDidUpdate)) {
                UnwrappedDropdown.prototype.componentDidUpdate.mockRestore();
            }
        });

        it('should register event handlers when it is mounted', () => {
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            expect(document.addEventListener).toHaveBeenCalled();
        });
        it('should de-register event handlers when the dropdown menu is unmounted', () => {
            jest.spyOn(document, 'removeEventListener');
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            document.removeEventListener.mockClear();
            // On the second click the event listeners are removed since the dropdown is closed
            cut.find('button').simulate("click");
            expect(document.removeEventListener).toHaveBeenCalled();
        });
        it('should de-register event handlers when the dropdown unmounted', () => {
            jest.spyOn(document, 'removeEventListener');
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            document.removeEventListener.mockClear();
            // On the second click the event listeners are removed since the dropdown is closed
            cut.unmount();
            expect(document.removeEventListener).toHaveBeenCalled();
        });
        it('should not register event handlers when they are already registered', () => {
            jest.spyOn(UnwrappedDropdown.prototype, 'componentDidUpdate');
            jest.spyOn(document, 'addEventListener');

            const cut = mount(<Dropdown>
                <a href="#">Hello, world!</a>
            </Dropdown>);

            cut.find('button').simulate('click');
            expect(UnwrappedDropdown.prototype.componentDidUpdate.mock.calls.length).toBe(1);
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.setProps({ 'id': 'foo' });
            expect(UnwrappedDropdown.prototype.componentDidUpdate.mock.calls.length).toBe(2);
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
        });
    });

    describe('Event propagation', () => {
        // These tests use the document to trigger events so the test properly sends events through the global event handlers.

        let cut;

        beforeEach(() => {
            jest.spyOn(UnwrappedDropdown.prototype, 'handleClickOutside');
            jest.spyOn(UnwrappedDropdown.prototype, 'toggleDropdown');

            cut = mount(<Dropdown>
                <a href="#">Hello, world!</a>
            </Dropdown>, { attachTo: root });
        });

        afterEach(() => {
            if(jest.isMockFunction(UnwrappedDropdown.prototype.handleClickOutside)) {
                UnwrappedDropdown.prototype.handleClickOutside.mockRestore();
            }
            if(jest.isMockFunction(UnwrappedDropdown.prototype.toggleDropdown)) {
                UnwrappedDropdown.prototype.toggleDropdown.mockRestore();
            }
        });

        it('should close the dialog menu when the user clicks outside of the menu', () => {
            expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
            expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(0);
            // If the dropdown has not been clicked our event handler should not be invoked
            document.body.click();
            expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
            expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(0);
            cut.find('button').simulate('click');
            expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(1);
            // When the dropdown is open handleClickOutside should be called when we click on something that is not inside the dropdown
            document.body.click();
            expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(1);
            expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(2);
        });

        it('should not close the dialog menu when the user clicks inside the menu', () => {
            expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
            expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(0);
            cut.find('button').simulate("click");
            expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(1);
            // When the dropdown is open handleClickOutside should be called when we click on something that is not inside the dropdown, but toggleDropdown should not be called
            document.getElementsByClassName('rvt-dropdown__menu')[0].click();
            expect(UnwrappedDropdown.prototype.handleClickOutside).toHaveBeenCalledTimes(1);
            expect(UnwrappedDropdown.prototype.toggleDropdown).toHaveBeenCalledTimes(1);
        });    
    });
});
