/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Drawer from './HeaderDrawer';
import HeaderDrawerEvent from './HeaderDrawerEvent';
import HeaderDrawer from './HeaderDrawer';
import HeaderIdentity from './HeaderIdentity';
import HeaderNavigation from './HeaderNavigation';

describe('<Drawer />', () => {

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
            const cut = mount(<Drawer />);
            expect(cut.find('div')).toHaveLength(1);
        });
        it('should use a provided ID', () => {
            const cut = mount(<Drawer id="foo" />);
            cut.simulate('click');
            expect(cut.find('div')).toHaveLength(1);
        });
    });

    describe('identity menu rendering', () =>{
        describe ('It should not render identity menu when not provided', () => {
            const cut = shallow(<HeaderDrawer/>);
            
            // open the drawer
            cut.find('button').simulate('click');
            
            expect(cut.find('div.rvt-drawer > HeaderIdentity')).toHaveLength(0);
            expect(cut.find('div.rvt-drawer > nav.rvt-drawer__nav > ul > li > HeaderIdentity')).toHaveLength(0);
        });
        describe ('It should render identity menu without children', () => {
            const identity = <HeaderIdentity user="foo"/>
            const cut = shallow(<HeaderDrawer identity={identity}/>);
            
            // open the drawer
            cut.find('button').simulate('click');
            
            expect(cut.find('div.rvt-drawer > HeaderIdentity')).toHaveLength(1);
            expect(cut.find('div.rvt-drawer > HeaderIdentity').hasClass('rvt-header-id--drawer')).toBe(true);
            expect(cut.find('div.rvt-drawer > nav.rvt-drawer__nav > ul > li > HeaderIdentity')).toHaveLength(0);
        });
        describe ('It should render identity menu with children', () => {
            const identity = 
                <HeaderIdentity user="foo">
                    <a href="#">Example one</a>
                </HeaderIdentity>
            const cut = shallow(<HeaderDrawer identity={identity}/>);
            
            // open the drawer
            cut.find('button').simulate('click');

            expect(cut.find('div.rvt-drawer > HeaderIdentity')).toHaveLength(0);
            expect(cut.find('div.rvt-drawer > nav.rvt-drawer__nav > ul > li > HeaderIdentity')).toHaveLength(1);
            expect(cut.find('div.rvt-drawer > nav.rvt-drawer__nav > ul > li > HeaderIdentity').hasClass('rvt-header-id--drawer')).toBe(true);
        });
    });

    describe ('nav menu rendering', () => {
        describe ('It should not render navigation menu when not provided', () => {
            const cut = shallow(<HeaderDrawer/>);
            
            // open the drawer
            cut.find('button').simulate('click');
            
            expect(cut.find('div.rvt-drawer > nav.rvt-drawer__nav > ul > HeaderNavigation')).toHaveLength(0);
        });
        describe ('It should render navigation menu', () => {
            const navigation = 
                <HeaderNavigation>
                    <a href="#" id="example-one">Example One</a>
                </HeaderNavigation>
            const cut = shallow(<HeaderDrawer navigation={navigation}/>);
            
            // open the drawer
            cut.find('button').simulate('click');
            
            expect(cut.find('div.rvt-drawer > nav.rvt-drawer__nav > ul > HeaderNavigation')).toHaveLength(1);
            expect(cut.find('div.rvt-drawer > nav.rvt-drawer__nav > ul > HeaderNavigation').hasClass('rvt-drawer-navigation')).toBe(true);
        });
    });

    // TODO: Figure out why enzyme is not working
    describe.skip('Toggle behavior', () => {

        const expectDrawerIsOpen = () => {
            expect(document.getElementsByClassName('rvt-drawer')).toHaveLength(1);
        }

        const expectDrawerIsClosed = () => {
            expect(document.getElementsByClassName('rvt-drawer')).toHaveLength(0);
        }

        const clickToggleButton = () => {
            document.getElementsByTagName('button')[0].click();
        }

        beforeEach(() => {
            ReactDOM.render(
                <Drawer />,
                root
            );
        });

        it('should toggle the drawer when clicking the button', () => {
            expectDrawerIsClosed();
            clickToggleButton();
            expectDrawerIsOpen();
            clickToggleButton();
            expectDrawerIsClosed();
        });
        it('should not toggle the drawer when clicking inside the drawer', () => {
            expectDrawerIsClosed();
            clickToggleButton();
            expectDrawerIsOpen();
            document.getElementsByClassName('rvt-drawer')[0].click();
            expectDrawerIsOpen();
        });
        it('should toggle the drawer when clicking outside of the drawer', () => {
            expectDrawerIsClosed();
            clickToggleButton();
            expectDrawerIsOpen();
            document.body.click();
            expectDrawerIsClosed();
        });
        it('should toggle the drawer when escape is pressed', () => {
            expectDrawerIsClosed();
            clickToggleButton();
            expectDrawerIsOpen();
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: HeaderDrawerEvent.keys.escape }));
            expectDrawerIsClosed();
        });
        it('should not toggle the drawer when an unhandled key is pressed', () => {
            expectDrawerIsClosed();
            clickToggleButton();
            expectDrawerIsOpen();
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: 'a'.charCodeAt(0) }));
            expectDrawerIsOpen();
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
            if(jest.isMockFunction(Drawer.prototype.componentDidUpdate)) {
                Drawer.prototype.componentDidUpdate.mockRestore();
            }
        });

        it('should register event handlers when it is mounted', () => {
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Drawer />);
            cut.find('button').simulate("click");
            expect(document.addEventListener).toHaveBeenCalled();
        });
        it('should de-register event handlers when the drawer is unmounted', () => {
            jest.spyOn(document, 'removeEventListener');
            const cut = mount(<Drawer />);
            cut.find('button').simulate("click");
            document.removeEventListener.mockClear();
            // On the second click the event listeners are removed since the drawer is closed
            cut.find('HeaderDrawer > div > button').simulate("click");
            expect(document.removeEventListener).toHaveBeenCalled();
        });
        it('should de-register event handlers when the drawer unmounted', () => {
            jest.spyOn(document, 'removeEventListener');
            const cut = mount(<Drawer />);
            cut.find('button').simulate("click");
            document.removeEventListener.mockClear();
            // On the second click the event listeners are removed since the drawer is closed
            cut.unmount();
            expect(document.removeEventListener).toHaveBeenCalled();
        });
        it('should not register event handlers when they are already registered', () => {
            jest.spyOn(Drawer.prototype, 'componentDidUpdate');
            jest.spyOn(document, 'addEventListener');

            const cut = mount(<Drawer />);

            cut.find('button').simulate('click');
            expect(Drawer.prototype.componentDidUpdate.mock.calls.length).toBe(1);
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.setProps({ 'id': 'foo' });
            expect(Drawer.prototype.componentDidUpdate.mock.calls.length).toBe(2);
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
        });
    });

    // TODO: Figure out why enzyme is not working
    describe.skip('Event propagation', () => {
        // These tests use the document to trigger events so the test properly sends events through the global event handlers.

        let cut;

        beforeEach(() => {
            jest.spyOn(Drawer.prototype, 'handleClickOutside');
            jest.spyOn(Drawer.prototype, 'toggleDrawer');

            cut = mount(<Drawer />, { attachTo: root });
        });

        afterEach(() => {
            if(jest.isMockFunction(Drawer.prototype.handleClickOutside)) {
                Drawer.prototype.handleClickOutside.mockRestore();
            }
            if(jest.isMockFunction(Drawer.prototype.toggleDrawer)) {
                Drawer.prototype.toggleDrawer.mockRestore();
            }
        });

        it('should close the drawer when the user clicks outside of it', () => {
            expect(Drawer.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
            expect(Drawer.prototype.toggleDrawer).toHaveBeenCalledTimes(0);
            // If the drawer has not been clicked our event handler should not be invoked
            document.body.click();
            expect(Drawer.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
            expect(Drawer.prototype.toggleDrawer).toHaveBeenCalledTimes(0);
            cut.find('button').simulate('click');
            expect(Drawer.prototype.toggleDrawer).toHaveBeenCalledTimes(1);
            // When the drawer is open handleClickOutside should be called when we click on something that is not inside the drawer
            document.body.click();
            expect(Drawer.prototype.handleClickOutside).toHaveBeenCalledTimes(1);
            expect(Drawer.prototype.toggleDrawer).toHaveBeenCalledTimes(2);
        });

        it('should not close the drawer when the user clicks inside it', () => {
            expect(Drawer.prototype.handleClickOutside).toHaveBeenCalledTimes(0);
            expect(Drawer.prototype.toggleDrawer).toHaveBeenCalledTimes(0);
            cut.find('button').simulate("click");
            expect(Drawer.prototype.toggleDrawer).toHaveBeenCalledTimes(1);
            // When the drawer is open handleClickOutside should be called when we click on something that is not inside the drawer, but toggleDrawer should not be called
            document.getElementsByClassName('rvt-drawer')[0].click();
            expect(Drawer.prototype.handleClickOutside).toHaveBeenCalledTimes(1);
            expect(Drawer.prototype.toggleDrawer).toHaveBeenCalledTimes(1);
        });    
    });
});
