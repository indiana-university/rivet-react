/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header'
import HeaderIdentity from './HeaderIdentity'
import HeaderNavigation from './HeaderNavigation'

describe('<Header />', () => {
    let cut;
    
    beforeEach(() => {
        cut = shallow(<Header title="foo"/>);
    })

    describe('Rendering and styling with no children', () =>{
        it('should render without throwing an error', () => {
            expect(cut.find('header')).toHaveLength(1);
        });
        it('should include the title', () => {
            expect(cut.find('span.rvt-header__title > a').text()).toEqual("foo");
        });
        it('should not render the header controls when no children are provided', () => {
            expect(cut.find('div.rvt-header__controls')).toHaveLength(0);
        });
        it('should not render the header identity menu when it is not provided', () => {
            expect(cut.find('HeaderIdentity')).toHaveLength(0);
        });
        it('should not render the header navigation when it is not provided', () => {
            expect(cut.find('HeaderNavigation')).toHaveLength(0);
        });
        it('should render the skip to content link with the full URL', () => {
            const skipLink = cut.find('.rvt-skip-link')
            expect(skipLink).toHaveLength(1);
            expect(skipLink.props().href).toEqual(`${document.URL}#main-content`);
        });
    });

    describe('Including header navigation', () => {

        beforeEach(() => {
            cut = shallow(
                <Header title="foo">
                    <HeaderNavigation>
                        <a href="#" id="example-one">Example One</a>
                        <button id="example-two">Example Two</button>
                    </HeaderNavigation>
                </Header>
            )
        });
        
        it('should render the header controls div when navigation is present', () => {
            expect(cut.find('div.rvt-header__controls')).toHaveLength(1);
        });
        it('should render the header navigation', () => {
            expect(cut.find('nav.rvt-header__main-nav')).toHaveLength(1);
        });
        it('should render the children nested inside the header navigation', () => {
            const headerNavigation = cut.find('div.rvt-header__controls > nav.rvt-header__main-nav > ul > HeaderNavigation');
            expect(headerNavigation.find('a#example-one')).toHaveLength(1);
            expect(headerNavigation.find('button#example-two')).toHaveLength(1);
        });
        it('should pass the navigation to the header drawer', () => {
            expect(cut.find('HeaderDrawer').props().navigation).toBeDefined();
        });
    });

    describe('Including header identity menu', () => {

        beforeEach(() => {
            cut = shallow(
                <Header title="foo">
                    <HeaderIdentity avatar="RS" username="rswanson">
                        <a href="#" id="example-one">Example One</a>
                        <button id="example-two">Example Two</button>
                    </HeaderIdentity>
                </Header>
            )
        });
        
        it('should render the header controls div when identity menu is present', () => {
            expect(cut.find('div.rvt-header__controls')).toHaveLength(1);
        });
        it('should render the header identity menu', () => {
            expect(cut.find('HeaderIdentity')).toHaveLength(1);
        });
        it('should render the children nested inside the header identity menu', () => {
            const headerIdentityMenu = cut.find('div.rvt-header__controls > HeaderIdentity');
            expect(headerIdentityMenu.find('a#example-one')).toHaveLength(1);
            expect(headerIdentityMenu.find('button#example-two')).toHaveLength(1);
        });
        it('should pass the identity menu to the header drawer', () => {
            expect(cut.find('HeaderDrawer').props().identity).toBeDefined();
        });
    });
});
