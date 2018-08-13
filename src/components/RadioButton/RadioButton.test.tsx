import { mount } from 'enzyme';
import * as React from 'react';
import * as Rivet from '../util/Rivet';
import RadioButton from './RadioButton';

describe('<RadioButton />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<RadioButton label="Foo" name="name"/>);
            expect(cut.find('input[type="radio"]')).toHaveLength(1);
        });
        it('should have radio input type', () => {
            const cut = mount(<RadioButton label="Foo" name="name"/>);
            expect(cut.find('input').prop('type')).toEqual("radio");
        });
        it('should apply component class to input', () => {
            const cut = mount(<RadioButton label="Foo" name="name" />);
            expect(cut.find('input').hasClass("rvt-radio")).toEqual(true);
        });
        it('should apply custom class to input', () => {
            const cut = mount(<RadioButton label="Foo" name="name" className="rvt-radio-foo" />);
            // The class names should be merged and contain both the component and custom classes
            expect(cut.find('input').hasClass("rvt-radio")).toEqual(true);
            expect(cut.find('input').hasClass("rvt-radio-foo")).toEqual(true);
        });
    });
    describe('Labeling', () => {
        it ('should create a label', () => {
            const cut = mount(<RadioButton label="Foo" name="name"/>);
            expect(cut.find('label').text()).toEqual("Foo");
        });
        it ('should associate the label with the input', () => {
            const cut = mount(<RadioButton id="the_id" label="Foo" name="name"/>);
            expect(cut.find('input').prop('id')).toEqual("the_id");
            expect(cut.find('label').prop('htmlFor')).toEqual("the_id");
        });
    });
});
