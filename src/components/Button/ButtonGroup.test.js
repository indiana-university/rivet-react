/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from './Button';

describe('<ButtonGroup />', () => {
    describe('Rendering and styling', () => {
        it('should render without throwing an error', () => {
            const cut = mount(
                <ButtonGroup>
                    <Button>One</Button>
                    <Button>Two</Button>
                </ButtonGroup>
            );
            expect(cut.find('div')).toHaveLength(1);
            expect(cut.find('button')).toHaveLength(2);
        });
        it('should pass attributes through', () => {
            const cut = mount(<ButtonGroup id="the_id" />);
            expect(cut.find('div').prop('id')).toEqual('the_id');
        });
        it('should apply Rivet styling class', () => {
            const cut = mount(<ButtonGroup />);
            expect(cut.find('div').hasClass('rvt-button-group')).toEqual(true);
        });
        it('should apply custom classes', () => {
            const cut = mount(<ButtonGroup className="foo" />);
            expect(cut.find('div').hasClass('rvt-button-group')).toEqual(true);
            expect(cut.find('div').hasClass('foo')).toBe(true);
        });
        it('should add width CSS classes', () => {
            const cut = mount(<ButtonGroup right />);
            expect(cut.find('div').hasClass('rvt-button-group')).toBe(true);
            expect(cut.find('div').hasClass('rvt-button-group--right')).toBe(true);
        });
    });
});
