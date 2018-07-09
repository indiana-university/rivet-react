import { shallow } from 'enzyme';
import * as React from 'react';
import RadioButton from '../RadioButton';
import Form from './Form';

describe('<RadioButton />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = shallow(<Form label="Foo Group" name="foo-1" />);
            expect(cut.find('form')).toHaveLength(1);
        });
        it('should apply an id to the form', () => {
            const cut = shallow(<Form id="the_id" label="Foo Group" name="foo-1" />);
            expect(cut.find('form').prop('id')).toEqual("the_id");
        });
        it('should apply component class to the form', () => {
            const cut = shallow(<Form label="Foo Group" name="foo-1" />);
            expect(cut.find('form').hasClass('rvt-form')).toEqual(true);
        });
        it('should apply custom class to the form', () => {
            const cut = shallow(<Form className="rvt-foo" label="Foo Group" name="foo-1" />);
            expect(cut.find('form').hasClass('rvt-foo')).toBe(true);
        });

    });
    describe('Labeling', () => {
        it ('should create a legend', () => {
            const cut = shallow(<Form label="Foo" name="foo-1" />);
            expect(cut.find('legend').text()).toEqual("Foo");
        });
        it ('should create a screen-reader-only legend', () => {
            const cut = shallow(<Form srOnly label="Foo" name="foo-1" />);
            expect(cut.find('legend').text()).toEqual("Foo");
            expect(cut.find('legend').hasClass("sr-only")).toEqual(true);
        });
    });
    describe('Radio button list', () => {
        it('should create a list of radio buttons', () => {
            const cut = shallow(
            <Form label="Foo" >
                <RadioButton name="radio" label="foo" />
                <RadioButton name="radio" label="bar"/>
            </Form>);
            expect(cut.find('RadioButton')).toHaveLength(2);
        });
        it('should optionally create an inline list', () => {
            const cut = shallow(
            <Form inline label="Foo" >
                <RadioButton name="radio" label="foo"/>
            </Form>);
            expect(cut.find('ul').hasClass("rvt-inline-list")).toEqual(true);
        });
    });
});