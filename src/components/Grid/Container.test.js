/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import { mount } from 'enzyme';
import React from 'react';
import Container from './Container';

describe('<Container />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Container />);
            expect(cut.find('div')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Container id="the_id" />);
            expect(cut.find('div').prop('id')).toEqual('the_id');
        });
        it('should apply Rivet styling class', () => {
            const cut = mount(<Container />);
            expect(cut.find('div').hasClass('rvt-container')).toEqual(true);
        });
        it('should apply custom classes', () => {
            const cut = mount(<Container className="foo" />);
            expect(cut.find('div').hasClass('rvt-container')).toEqual(true);
            expect(cut.find('div').hasClass('foo')).toBe(true);
        });
        it('should add width CSS classes', () => {
            const cut = mount(<Container width="freshman" />);
            expect(cut.find('div').hasClass('rvt-container--freshman')).toBe(true);
        });
        it('should center the container', () => {
            const cut = mount(<Container width="freshman" center />);
            expect(cut.find('div').hasClass('rvt-container--center')).toBe(true);
        });
    });
});
