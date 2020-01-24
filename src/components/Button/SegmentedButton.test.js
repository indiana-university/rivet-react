/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import SegmentedButton from './SegmentedButton';
import Button from './Button';

describe('<SegmentedButton />', () => {
    describe('Rendering and styling', () => {
        it('should render without throwing an error', () => {
            const cut = mount(
                <SegmentedButton>
                    <Button>One</Button>
                    <Button>Two</Button>
                </SegmentedButton>
            );
            expect(cut.find('div')).toHaveLength(1);
            expect(cut.find('button')).toHaveLength(2);
        });
        it('should pass attributes through', () => {
            const cut = mount(<SegmentedButton id="the_id" />);
            expect(cut.find('div').prop('id')).toEqual('the_id');
        });
        it('should apply Rivet styling class', () => {
            const cut = mount(<SegmentedButton />);
            expect(cut.find('div').hasClass('rvt-button-segmented')).toEqual(true);
        });
        it('should apply custom classes', () => {
            const cut = mount(<SegmentedButton className="foo" />);
            expect(cut.find('div').hasClass('rvt-button-segmented')).toEqual(true);
            expect(cut.find('div').hasClass('foo')).toBe(true);
        });
        it('should add width CSS classes', () => {
            const cut = mount(<SegmentedButton fit />);
            expect(cut.find('div').hasClass('rvt-button-segmented')).toBe(true);
            expect(cut.find('div').hasClass('rvt-button-segmented--fitted')).toBe(true);
        });
    });
});
