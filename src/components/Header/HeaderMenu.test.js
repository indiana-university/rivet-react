/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import HeaderMenu from './HeaderMenu';

describe('<HeaderMenu />', () => {
    let cut;
    
    beforeEach(() => {
        cut = mount(
            <HeaderMenu label="Testing">
                <a href="#">Foo</a>
                <button>Bar</button>
            </HeaderMenu>
        );
    })

    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            expect(cut.find('button')).toHaveLength(1);
        });
        it('should apply custom classes', () => {
            cut = mount(<HeaderMenu label="Testing" className="foo" />);
            expect(cut.find('button').hasClass('foo')).toBe(true);
        });
        it('should apply custom classes', () => {
            cut = mount(<HeaderMenu label="Testing" id="the_id" />);
            expect(cut.find('button#the_id')).toHaveLength(1);
        });
        it('should render a Dropdown when not in the header drawer', () => {
            expect(cut.find('Dropdown')).toHaveLength(1);
            expect(cut.find('HeaderCollapse')).toHaveLength(0);
        });
        it('should render a HeaderCollapse when in the header drawer', () => {
            cut = mount(<HeaderMenu label="Testing" className="rvt-drawer-menu" />);
            expect(cut.find('Dropdown')).toHaveLength(0);
            expect(cut.find('HeaderCollapse')).toHaveLength(1);
        });
    });
});
