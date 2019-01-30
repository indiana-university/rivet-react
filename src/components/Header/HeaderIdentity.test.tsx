/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import Header from './Header';
import HeaderIdentity from './HeaderIdentity'
import HeaderNavigation from './HeaderNavigation'

describe('<Navigation />', () => {
    let cut;

    describe('Rendering and styling without navigation', () =>{

        const logoutSpy = jest.fn();
        beforeEach(() => {
            cut = shallow(
                <HeaderIdentity avatar="RS" username="rswanson" onLogout={logoutSpy} />
            );
        });

        it('should render without throwing an error', () => {
            expect(cut.find('div.rvt-header-id')).toHaveLength(1);
        });
        it('should render an avatar when provided', () => {
            expect(cut.find('span.rvt-header-id__avatar')).toHaveLength(1);
            expect(cut.find('span.rvt-header-id__avatar').text()).toBe('RS');
        });
        it('should not render an avatar if it is not provided', () => {
            cut = shallow(
                <HeaderIdentity username="rswanson" />
            );
            expect(cut.find('span.rvt-header-id__avatar')).toHaveLength(0);
        });
        it('should render the username', () => {
            expect(cut.find('span.rvt-header-id__user')).toHaveLength(1);
            expect(cut.find('span.rvt-header-id__user').text()).toBe('rswanson');
        });
        it('should render the logout link', () => {
            expect(cut.find('a.rvt-header-id__log-out')).toHaveLength(1);
        });
        it('should not render the logout link if no action provided', () => {
            cut = shallow(
                <HeaderIdentity username="rswanson" />
            );
            expect(cut.find('a.rvt-header-id__log-out')).toHaveLength(0);
        });
        it('should pass the logout handler to the logout link', () => {
            cut.find('a.rvt-header-id__log-out').simulate('click');
            expect(logoutSpy).toHaveBeenCalled();
        });      
    });

    describe('Rendering and styling with navigation', () =>{

        const logoutSpy = jest.fn();
        beforeEach(() => {
            cut = mount(
                <HeaderIdentity avatar="RS" username="rswanson" onLogout={logoutSpy}>
                    <a href="#">Example</a>
                </HeaderIdentity>
            );
        });

        it('should render an avatar when provided', () => {
            expect(cut.find('span.rvt-header-id__avatar')).toHaveLength(1);
            expect(cut.find('span.rvt-header-id__avatar').text()).toBe('RS');
        });
        it('should render the username', () => {
            expect(cut.find('span.rvt-header-id__user')).toHaveLength(1);
            expect(cut.find('span.rvt-header-id__user').text()).toBe('rswanson');
        });
        it('should not display the menu by default', () => {
            expect(cut.find('div.rvt-header-id__menu')).toHaveLength(0);
            cut.find('button').simulate('click');
            expect(cut.find('div.rvt-header-id__menu')).toHaveLength(1);
        });
        it('should render the children and logout links', () => {
            cut.find('button').simulate('click');
            expect(cut.find('div.rvt-header-id__menu').find('a')).toHaveLength(2);
        });
        it('should pass the logout handler to the logout link', () => {
            cut.find('button').simulate('click');
            cut.find('a').last().simulate('click');
            expect(logoutSpy).toHaveBeenCalled();
        });      
    });

    describe('Drawer rendering', () => {
        it('should render the identity menu with no navigation in the drawer view', () => {
            cut = mount(
                <HeaderIdentity avatar="RS" username="rswanson" className="rvt-header-id--drawer" />
            );
            expect(cut.find('div.rvt-header-id__profile').hasClass('rvt-header-id__profile--drawer')).toBe(true);
        });
        it('should render the identity menu with navigation in the drawer view', () => {
            cut = mount(
                <HeaderIdentity avatar="RS" username="rswanson" className="rvt-header-id--drawer">
                    <a href="#" id="example-one">Example</a>
                </HeaderIdentity>
            );
            cut.find('HeaderCollapse > button').simulate('click');
            expect(cut.find('HeaderCollapse').find('a#example-one')).toHaveLength(1);
        });
    });
});
