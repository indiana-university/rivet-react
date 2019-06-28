/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';

import StepIndicator from './StepIndicator'

describe('<Table />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<StepIndicator />);
            expect(cut.find('ol')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<StepIndicator id="the_id" />);
            expect(cut.find('ol').prop('id')).toEqual('the_id');
        });
        it('should apply custom classes', () => {
            const cut = mount(<StepIndicator className="foo" />);
            expect(cut.find('ol').hasClass('foo')).toBe(true);
        });
    });
});
