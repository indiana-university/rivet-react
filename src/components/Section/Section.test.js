/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import Section from './Section';

describe('<Section />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Section />);
            expect(cut.find('section')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Section id="the_id" />);
            expect(cut.find('section').prop('id')).toEqual('the_id');
        });
        it('should apply custom classes', () => {
            const cut = mount(<Section className="foo" />);
            expect(cut.find('section').hasClass('foo')).toBe(true);
        });
    });
});
