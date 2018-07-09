import { shallow } from 'enzyme';
import * as React from 'react';
import * as Rivet from '../Rivet';
import RadioButton from './RadioButton';

describe('<RadioButton />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = shallow(<RadioButton label="Foo" />);
            expect(cut.find('input[type="radio"]')).toHaveLength(1);
        });
        it('should have radio input type', () => {
            const cut = shallow(<RadioButton label="Foo" />);
            expect(cut.find('input').prop('type')).toEqual("radio");
        });
        it('should apply the input name', () => {
            const cut = shallow(<RadioButton label="Foo" name="Name" />);
            expect(cut.find('input').prop('name')).toEqual("Name");
        });
        it('should wrap the button in an <li>', () => {
            const cut = shallow(<RadioButton label="Foo" name="Name" />);
            expect(cut.find('li > input')).toHaveLength(1);
        });
        it('should apply classes to <li>', () => {
            const cut = shallow(<RadioButton label="Foo" className="rvt-radio-foo" />);
            expect(cut.find('li').hasClass("rvt-radio")).toEqual(true);
            expect(cut.find('li').hasClass("rvt-radio-foo")).toEqual(true);
        });
    });
    describe('Labeling', () => {
        it ('should create a label', () => {
            const cut = shallow(<RadioButton label="Foo" />);
            expect(cut.find('label').text()).toEqual("Foo");
        });
        it ('should associate the label with the input', () => {
            const cut = shallow(<RadioButton id="the_id" label="Foo" />);
            expect(cut.find('input').prop('id')).toEqual("the_id");
            expect(cut.find('label').prop('htmlFor')).toEqual("the_id");
        });
    });
    describe('Hidden Input', () => {
        it ('should create a hidden input', () => {
            const cut = shallow(<RadioButton label="Foo" withHiddenInput/>);
            expect(cut.find('input[type="radio"]')).toHaveLength(1);
            expect(cut.find('input[type="hidden"]')).toHaveLength(1);
        });
        it ('should apply the wrapper class to <li>', () => {
            const cut = shallow(<RadioButton label="Foo" withHiddenInput/>);
            expect(cut.find('li').hasClass("rvt-radio-wrapper")).toEqual(true);
        });
    });
});