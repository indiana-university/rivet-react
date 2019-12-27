/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import File, { UnwrappedFile } from './File';

const simulatedChangeEvent = {
    target: {
        files: [
            { name: 'foo.txt' },
            { name: 'bar.txt' }
        ]
    }
};

describe('<File />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<File />);
            expect(cut.find('input')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<File id="the_id" />);
            expect(cut.find('input').prop('id')).toEqual('the_id');
        });
        it('should generate an ID if one is not provided', () => {
            const cut = mount(<File />);
            expect(cut.find('input').prop('id')).toBeDefined();
        });
        it('should apply custom classes to the wrapper div', () => {
            const cut = mount(<File className="foo" />);
            expect(cut.find('div.rvt-file').length).toBe(1);
            expect(cut.find('div.foo').length).toBe(1);
        });
        it('should allow for a custom label', () => {
            const cut = mount(<File label="Attach File" />);
            expect(cut.find('label').text()).toBe('Attach File');
        });
    });

    describe('Component behavior', () => {
        it('should invoke a provided onChange handler', () => {
            const spy = jest.fn();
            const cut = mount(<UnwrappedFile onChange={spy} />);
            cut.find('input').simulate('change', simulatedChangeEvent);
            expect(spy).toBeCalled();
        });
    });
});
