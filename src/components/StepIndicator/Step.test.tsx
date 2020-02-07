/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';

import Step from './Step'

describe('<Step />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Step indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} />);
            expect(cut.find('li')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Step id="the_id" indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} />);
            expect(cut.find('li').prop('id')).toEqual('the_id');
        });
        it('should apply custom classes', () => {
            const cut = mount(<Step className="foo" indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} />);
            expect(cut.find('li').hasClass('foo')).toBe(true);
        });

        it('should set aria-current when current is set', () => {
            const cut = mount(<Step current indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} />);
            expect(cut.find('span[aria-current]')).toHaveLength(1);
        });

        it('should set aria-current when current is set in an href', () => {
            const cut = mount(<Step current href="https://foo.com" indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} />);
            expect(cut.find('[aria-current="step"]')).toHaveLength(1);
        });

        it('should not set aria-current when current is not set', () => {
            const cut = mount(<Step indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} />);
            expect(cut.find('span[aria-current]')).toHaveLength(0);
        });

        it('should provide a link when href is set', () => {
            const cut = mount(<Step indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} href="https://foo.com" />);
            expect(cut.find('a')).toHaveLength(1);
        });

        it('should set a variant if the variant property is set', () => {
            const cut = mount(<Step indicator={<span>1</span>} screenReaderIndicator="1" label={<span>Step</span>} variant="warning"/>);
            expect(cut.find('span .rvt-steps__indicator--warning')).toHaveLength(1)
        });
    });
});
