/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';
import HeaderCollapse from './HeaderCollapse';

describe('<HeaderCollapse />', () => {
    let cut;
    
    beforeEach(() => {
        cut = mount(
            <HeaderCollapse label="Testing">
                <a href="#">Foo</a>
                <button>Bar</button>
            </HeaderCollapse>
        );
    })

    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            expect(cut.find('button')).toHaveLength(1);
        });
        it('should apply custom classes', () => {
            cut = mount(<HeaderCollapse label="Testing" className="foo" />);
            expect(cut.find('button').hasClass('foo')).toBe(true);
        });
        it('should apply custom classes', () => {
            cut = mount(<HeaderCollapse label="Testing" id="the_id" />);
            expect(cut.find('button#the_id')).toHaveLength(1);
        });
    });

    describe('Toggle behavior', () => {
        it('should show the menu when the toggle button is clicked', () => {
            expect(cut.find('ul[role="menu"]')).toHaveLength(0);
            cut.find('button').simulate('click');
            expect(cut.find('ul[role="menu"]')).toHaveLength(1);
        });
        it('should handle ARIA attributes appropriately', () => {
            const toggleButton = cut.find('button');
            expect(toggleButton.prop('aria-haspopup')).toBe('true');
            expect(toggleButton.prop('aria-expanded')).toBe(false);
            toggleButton.simulate('click');
            expect(cut.find('HeaderCollapse > button').prop('aria-expanded')).toBe(true);
            expect(cut.find('ul[role="menu"]').prop('aria-hidden')).toBe(false);
        });
    });
});
