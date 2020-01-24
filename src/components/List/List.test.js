/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import List from './List';

describe('<List />', () => {
    describe("Rendering", () => {
        it('should render without throwing an error', () => {
            const cut = mount(<List />);
            expect(cut.find('ul')).toHaveLength(1);
        });
        it('should render an ordered list', () =>{
            const cut = mount(<List variant="ordered" />)
            expect(cut.find('ol')).toHaveLength(1);
        });
        it('should render a plain list', () =>{
            const cut = mount(<List variant="plain" />)
            expect(cut.find('ul').hasClass('rvt-plain-list')).toEqual(true);
        });
        it('should render an in-line list', () =>{
            const cut = mount(<List orientation="inline" />)
            expect(cut.find('ul').hasClass('rvt-inline-list')).toEqual(true);
        });
        it('should apply a custom class to the list', () => {
            const cut = mount(<List className='rvt-list-foo'/>);
            // The class names should be merged and contain both the component and custom classes
            expect(cut.find('ul').hasClass('rvt-list')).toEqual(true);
            expect(cut.find('ul').hasClass('rvt-list-foo')).toEqual(true);
        });
    });
    describe("List items", () => {
        it('should render <li> children', () => {
            const cut = mount(<List><li>Foo</li><li>Bar</li></List>)
            expect(cut.find('li')).toHaveLength(2);
            expect(cut.find('li').first().text()).toEqual("Foo");
            expect(cut.find('li').last().text()).toEqual("Bar");
        });
        it('should render list of children primitives', () => {
            const cut = mount(<List>{["hurf durf", 123]}</List>)
            expect(cut.find('li')).toHaveLength(2);
            expect(cut.find('li').first().text()).toEqual("hurf durf");
            expect(cut.find('li').last().text()).toEqual("123");
        });
        it('should render list of children primitives (via attribute)', () => {
            const cut = mount(<List children={["hurf durf", 123]}/>)
            expect(cut.find('li')).toHaveLength(2);
            expect(cut.find('li').first().text()).toEqual("hurf durf");
            expect(cut.find('li').last().text()).toEqual("123");
        });
    });
});
