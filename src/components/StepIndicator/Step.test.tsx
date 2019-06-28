/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';

import Step from './Step'

describe('<Table />', () => {
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
    });
});
