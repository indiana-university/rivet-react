/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import { mount } from 'enzyme';
import React from 'react';
import Dropdown from './Dropdown';
import DropdownGroup from './DropdownGroup';

describe('<DropdownGroup />', () => {
    describe('Rendering and styling', () => {
        it('should render without throwing an error', () => {
            const cut = mount(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                    <DropdownGroup>
                        <a href="#">Grouped link</a>
                    </DropdownGroup>
                </Dropdown>
            );
            cut.find('button').simulate('click');
            expect(cut.find('div[role="group"]')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                    <DropdownGroup id="the_id">
                        <a href="#">Grouped link</a>
                    </DropdownGroup>
                </Dropdown>
            );
            cut.find('button').simulate('click');
            expect(cut.find('div[role="group"]').prop('id')).toEqual('the_id');
        });
        it('should add aria label when a label is provided', () => {
            const cut = mount(
                <Dropdown>
                    <a href="#">Hello, world!</a>
                    <DropdownGroup label="Links">
                        <a href="#">Grouped link</a>
                    </DropdownGroup>
                </Dropdown>
            );
            cut.find('button').simulate('click');
            expect(cut.find('div.rvt-dropdown__menu-heading').text()).toBe('Links');
            expect(cut.find('div[role="group"]').prop('aria-label')).toBe('Links');
        });
    });
});
