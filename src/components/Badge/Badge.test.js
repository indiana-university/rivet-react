/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import Badge from './Badge';

describe('<Badge />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Badge />);
            expect(cut.find('span')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Badge id="the_id" />);
            expect(cut.find('span').prop('id')).toEqual('the_id');
        });
        it('should apply custom classes', () => {
            const cut = mount(<Badge className="foo" />);
            expect(cut.find('span').hasClass('foo')).toBe(true);
        });
        it('should apply variant class', () => {
            const cut = mount(<Badge variant="info" />);
            expect(cut.find('span').hasClass('rvt-badge--info')).toBe(true);
        });
        it('should apply secondary role', () => {
            const cut = mount(<Badge modifier="secondary" />);
            expect(cut.find('span').hasClass('rvt-badge--secondary')).toBe(true);
        });
        it('should apply secondary variant class appropriately', () => {
            const cut = mount(<Badge variant="info" modifier="secondary" />);
            expect(cut.find('span').hasClass('rvt-badge--info')).toBe(false);
            expect(cut.find('span').hasClass('rvt-badge--secondary')).toBe(false);
            expect(cut.find('span').hasClass('rvt-badge--info-secondary')).toBe(true);
        });
    });
});
