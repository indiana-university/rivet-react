import { mount } from 'enzyme';
import * as React from 'react';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Dropdown />);
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

        it('Should register event handlers when it is mounted', () => {
            document.addEventListener = jest.fn();
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            expect(document.addEventListener).toHaveBeenCalled();
        });
        it('Should de-register event handlers when it is unmounted', () => {
            const mockFn = jest.fn();
            document.removeEventListener = mockFn;
            const cut = mount(<Dropdown />);
            cut.find('button').simulate("click");
            mockFn.mockClear();
            // On the second click the event listeners are removed since the dropdown is closed
            cut.find('button').simulate("click");
            expect(document.removeEventListener).toHaveBeenCalled();
        });
    });
});
