/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

import { mount } from 'enzyme';
import * as React from 'react';
import Breadcrumbs from './Breadcrumbs';

describe('<Breadcrumbs />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = mount(<Breadcrumbs />);
            expect(cut.find('nav > ol.rvt-breadcrumbs')).toHaveLength(1);
        });
        it('should take an id', () => {
            const cut = mount(<Breadcrumbs id="the_id"/>);
            expect(cut.find('nav#the_id')).toHaveLength(1);
        });
        it('should show text children', () => {
            const cut = mount(<Breadcrumbs>The text</Breadcrumbs>);
            expect(cut.find('nav > ol.rvt-breadcrumbs > li').text()).toEqual("The text");
        });
        it('should wrap multiple children in list items', () => {
            const cut = mount(
              <Breadcrumbs>
                <a href="#">Link One</a>
                Link Two
              </Breadcrumbs>);
            expect(cut.find('nav > ol.rvt-breadcrumbs > li').length).toEqual(2);
        });
        it('should mark the last child as the current page', () => {
            const cut = mount(
              <Breadcrumbs>
                <a href="#">Link One</a>
                Link Two
              </Breadcrumbs>);
            expect(cut.find('nav > ol.rvt-breadcrumbs > li').last().prop('aria-current')).toEqual('page');
        });
    })

    describe('Styling', ()=>{
        it('should have call-out style', () => {
            const cut = mount(<Breadcrumbs variant="call-out" />);
            expect(cut.find('nav > ol.rvt-breadcrumbs').hasClass("rvt-breadcrumbs--call-out")).toEqual(true);
        });
    });

});
