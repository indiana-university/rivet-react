import { shallow } from 'enzyme';
import * as React from 'react';
import * as Rivet from '../Rivet';
import RadioButton from './RadioButton';

describe('<RadioButton />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = shallow(<RadioButton label="Foo" name="name"/>);
            expect(cut.find('input[type="radio"]')).toHaveLength(1);
        });
        it('should have radio input type', () => {
            const cut = shallow(<RadioButton label="Foo" name="name"/>);
            expect(cut.find('input').prop('type')).toEqual("radio");
        });
        it('should apply the input name', () => {
            const cut = shallow(<RadioButton label="Foo" name="Name" />);
            expect(cut.find('input').prop('name')).toEqual("Name");
        });
        it('should apply component class to input', () => {
            const cut = shallow(<RadioButton label="Foo" name="name" />);
            expect(cut.find('input').hasClass("rvt-radio")).toEqual(true);
        });
        it('should apply custom class to input', () => {
            const cut = shallow(<RadioButton label="Foo" name="name" className="rvt-radio-foo" />);
            expect(cut.find('input').hasClass("rvt-radio-foo")).toEqual(true);
        });
    });
    describe('Labeling', () => {
        it ('should create a label', () => {
            const cut = shallow(<RadioButton label="Foo" name="name"/>);
            expect(cut.find('label').text()).toEqual("Foo");
        });
        it ('should associate the label with the input', () => {
            const cut = shallow(<RadioButton id="the_id" label="Foo" name="name"/>);
            expect(cut.find('input').prop('id')).toEqual("the_id");
            expect(cut.find('label').prop('htmlFor')).toEqual("the_id");
        });
    });
});