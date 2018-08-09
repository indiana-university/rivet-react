import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dropdown, { Dropdown as UnwrappedDropdown } from './Dropdown';
import { keys } from './DropdownEvent';

describe('<Dropdown />', () => {

    let root;

    beforeEach(() => {
        root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.appendChild(root);
    });

    afterEach(() => {
        if(jest.isMockFunction(document.addEventListener)) {
            document.addEventListener.mockRestore();
        }
        if(jest.isMockFunction(document.removeEventListener)) {
            document.removeEventListener.mockRestore();
        }
        if(jest.isMockFunction(UnwrappedDropdown.prototype.handleClickOutside)) {
            UnwrappedDropdown.prototype.handleClickOutside.mockRestore();
        }
        if(jest.isMockFunction(UnwrappedDropdown.prototype.toggleDropdown)) {
            UnwrappedDropdown.prototype.toggleDropdown.mockRestore();
        }
        if(jest.isMockFunction(UnwrappedDropdown.prototype.componentDidUpdate)) {
            UnwrappedDropdown.prototype.componentDidUpdate.mockRestore();
        }
        document.body.removeChild(root);
        document.body.innerHTML = '';
        root = null;
    })

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

        it('should not toggle the menu when clicking inside the menu', () => {
            const cut = mount(<Dropdown>
                <a href="#">Hello, world!</a>
            </Dropdown>);
            cut.find('button').simulate("click");
            expect(cut.find('div.rvt-dropdown__menu')).toHaveLength(1);
            cut.find('a').simulate("click");
            expect(cut.find('div.rvt-dropdown__menu')).toHaveLength(1);
        });
        it('should toggle the menu when clicking the button', () => {
            const cut = mount(<Dropdown>
                <a href="#">Hello, world!</a>
            </Dropdown>);
            cut.find('button').simulate("click");
            expect(cut.find('div.rvt-dropdown__menu')).toHaveLength(1);
            cut.find('button').simulate("click");
            expect(cut.find('div.rvt-dropdown__menu')).toHaveLength(0);
        });
        it('should toggle the menu when clicking outside of the menu', () => {
            ReactDOM.render(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                </Dropdown>, root
            );
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
            document.getElementsByTagName('button')[0].click();
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
            document.body.click();
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
        });

        it('should toggle the menu when escape is pressed', () => {
            ReactDOM.render(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                </Dropdown>, root
            );
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
            document.getElementsByTagName('button')[0].click();
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: keys.escape }));
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
        });

        it('should not toggle the menu when the tab key is pressed', () => {
            ReactDOM.render(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                </Dropdown>, root
            );
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
            document.getElementsByTagName('button')[0].click();
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
            document.getElementsByClassName('rvt-dropdown__menu')[0].dispatchEvent(new KeyboardEvent('keyup', { which: keys.tab }));
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
        });

        it('should not toggle the menu when an unhandled key is pressed', () => {
            ReactDOM.render(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                </Dropdown>, root
            );
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(0);
            document.getElementsByTagName('button')[0].click();
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: 'a'.charCodeAt(0) }));
            expect(document.getElementsByClassName('rvt-dropdown__menu')).toHaveLength(1);
        });

        it('Should register event handlers when it is mounted', () => {
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            expect(document.addEventListener).toHaveBeenCalled();
        });
        it('Should de-register event handlers when the dropdown menu is unmounted', () => {
            jest.spyOn(document, 'removeEventListener');
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            document.removeEventListener.mockClear();
            // On the second click the event listeners are removed since the dropdown is closed
            cut.find('button').simulate("click");
            expect(document.removeEventListener).toHaveBeenCalled();
        });
        it('Should de-register event handlers when the dropdown unmounted', () => {
            jest.spyOn(document, 'removeEventListener');
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            document.removeEventListener.mockClear();
            // On the second click the event listeners are removed since the dropdown is closed
            cut.unmount();
            expect(document.removeEventListener).toHaveBeenCalled();
        });

        it('Should close when the body is clicked', () => {
            jest.spyOn(UnwrappedDropdown.prototype, 'handleClickOutside');
            jest.spyOn(UnwrappedDropdown.prototype, 'toggleDropdown');

            const cut = mount(<Dropdown>
                <a href="#">Hello, world!</a>
            </Dropdown>);

            expect(UnwrappedDropdown.prototype.handleClickOutside.mock.calls.length).toBe(0);
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(0);
            // If the dropdown has not been clicked our event handler should not be invoked
            document.body.click();
            expect(UnwrappedDropdown.prototype.handleClickOutside.mock.calls.length).toBe(0);
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(0);
            cut.find('button').simulate("click");
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(1);
            // When the dropdown is open handleClickOutside should be called when we click on something that is not inside the dropdown
            document.body.click();
            expect(UnwrappedDropdown.prototype.handleClickOutside.mock.calls.length).toBe(1);
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(2);
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

        it('Should close when the body is clicked', () => {
            jest.spyOn(UnwrappedDropdown.prototype, 'handleClickOutside');
            jest.spyOn(UnwrappedDropdown.prototype, 'toggleDropdown');

            const cut = mount(<Dropdown>
                <a href="#">Hello, world!</a>
            </Dropdown>, { attachTo: root });

            expect(UnwrappedDropdown.prototype.handleClickOutside.mock.calls.length).toBe(0);
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(0);
            // If the dropdown has not been clicked our event handler should not be invoked
            document.body.click();
            expect(UnwrappedDropdown.prototype.handleClickOutside.mock.calls.length).toBe(0);
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(0);
            cut.find('button').simulate("click");
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(1);
            // When the dropdown is open handleClickOutside should be called when we click on something that is not inside the dropdown
            document.getElementsByClassName('rvt-dropdown__menu')[0].click();
            expect(UnwrappedDropdown.prototype.handleClickOutside.mock.calls.length).toBe(1);
            expect(UnwrappedDropdown.prototype.toggleDropdown.mock.calls.length).toBe(1);
        });
    });
});
