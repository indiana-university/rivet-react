/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import { mount } from 'enzyme';
import React from 'react';
import { RadioButton } from '../RadioButton';
import Form from './Form';

describe('<Form />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Form label="Foo Group" name="foo-1" />);
            expect(cut.find('form')).toHaveLength(1);
        });
        it('should apply an id to the form', () => {
            const cut = mount(<Form id="the_id" label="Foo Group" name="foo-1" />);
            expect(cut.find('form').prop('id')).toEqual("the_id");
        });
        it('should apply component class to the form', () => {
            const cut = mount(<Form label="Foo Group" name="foo-1" />);
            expect(cut.find('form').hasClass('rvt-form')).toEqual(true);
        });
        it('should apply custom class to the form', () => {
            const cut = mount(<Form className="rvt-foo" label="Foo Group" name="foo-1" />);
            expect(cut.find('form').hasClass('rvt-foo')).toBe(true);
        });

    });
    describe('Labeling', () => {
        it ('should create a legend', () => {
            const cut = mount(<Form label="Foo" name="foo-1" />);
            expect(cut.find('legend').text()).toEqual("Foo");
        });
        it ('should not create a screen-reader-only legend', () => {
            const cut = mount(<Form label="Foo" name="foo-1" />);
            expect(cut.find('legend').hasClass("rvt-sr-only")).toEqual(false);
        });
        it ('should create a screen-reader-only legend', () => {
            const cut = mount(<Form labelVisibility="screen-reader-only" label="Foo" name="foo-1" />);
            expect(cut.find('legend').text()).toEqual("Foo");
            expect(cut.find('legend').hasClass("rvt-sr-only")).toEqual(true);
        });
    });
    describe('Radio button list', () => {
        it('should create a list of radio buttons', () => {
            const cut = mount(
            <Form label="Foo" >
                <RadioButton name="radio" label="foo" />
                <RadioButton name="radio" label="bar"/>
            </Form>);
            expect(cut.find('RadioButton')).toHaveLength(2);
        });
    });
});
