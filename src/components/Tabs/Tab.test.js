/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import Tab from './Tab';

describe('<Tab />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = mount(<Tab />);
            expect(cut.find('div.rvt-tabs__panel')).toHaveLength(1);
        });
        it('should take an id', () => {
            const cut = mount(<Tab id="the_id"/>);
            expect(cut.find('div.rvt-tabs__panel#the_id')).toHaveLength(1);
        });
        it('should show text children', () => {
            const cut = mount(<Tab title="Tab">The text</Tab>);
            expect(cut.find('div.rvt-tabs__panel').text()).toEqual('The text');
        });
        it('should set aria-labeledby', () => {
            const cut = mount(<Tab id="the_id" title="Tab">The text</Tab>);
            expect(cut.find('div.rvt-tabs__panel').prop('aria-labelledby')).toEqual('the_id-tab');
        });
    });

});
