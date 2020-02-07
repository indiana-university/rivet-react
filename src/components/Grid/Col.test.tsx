/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';
import Col from './Col';

describe('<Col />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Col />);
            expect(cut.find('div')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Col id="the_id" />);
            expect(cut.find('div').prop('id')).toEqual('the_id');
        });
        it('should apply Rivet styling class', () => {
            const cut = mount(<Col />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(true);
        });
        it('should apply custom classes', () => {
            const cut = mount(<Col className="foo" />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(true);
            expect(cut.find('div').hasClass('foo')).toBe(true);
        });
        it('should apply responsive auto width classes', () => {
            let cut = mount(<Col sm />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-sm')).toBe(true);
            cut = mount(<Col md />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-md')).toBe(true);
            cut = mount(<Col lg />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-lg')).toBe(true);
            cut = mount(<Col xl />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-xl')).toBe(true);
            cut = mount(<Col xxl />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-xxl')).toBe(true);
        });
        it('should apply responsive specific width classes', () => {
            const cut = mount(<Col sm={8} md={6} lg={4} xl={2} xxl={1} />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(false);

            expect(cut.find('div').hasClass('rvt-grid__item-sm')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-md')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-lg')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-xl')).toEqual(false);
            expect(cut.find('div').hasClass('rvt-grid__item-xxl')).toEqual(false);
            
            expect(cut.find('div').hasClass('rvt-grid__item-8-sm-up')).toBe(true);
            expect(cut.find('div').hasClass('rvt-grid__item-6-md-up')).toBe(true);
            expect(cut.find('div').hasClass('rvt-grid__item-4-lg-up')).toBe(true);
            expect(cut.find('div').hasClass('rvt-grid__item-2-xl-up')).toBe(true);
            expect(cut.find('div').hasClass('rvt-grid__item-1-xxl-up')).toBe(true);
        });
        it('should apply pull classes', () => {
            const cut = mount(<Col pullSm={8} pullMd={6} pullLg={4} pullXl={2} pullXxl={1} />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(true);

            expect(cut.find('div').hasClass('rvt-grid__item-pull-8-sm')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-pull-6-md')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-pull-4-lg')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-pull-2-xl')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-pull-1-xxl')).toEqual(true);
        });
        it('should apply push classes', () => {
            const cut = mount(<Col pushSm={8} pushMd={6} pushLg={4} pushXl={2} pushXxl={1} />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(true);

            expect(cut.find('div').hasClass('rvt-grid__item-push-8-sm')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-push-6-md')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-push-4-lg')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-push-2-xl')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item-push-1-xxl')).toEqual(true);
        });
        it('should apply the last modifier classes', () => {
            const cut = mount(<Col last />);
            expect(cut.find('div').hasClass('rvt-grid__item')).toEqual(true);
            expect(cut.find('div').hasClass('rvt-grid__item--last')).toEqual(true);
        });
    });
});
