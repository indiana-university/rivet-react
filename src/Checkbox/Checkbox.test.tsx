
import { shallow } from 'enzyme';
import * as React from 'react';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {

  it('should render without throwing an error', () => {
      const cut = shallow(<Checkbox label="the_label"/>);
      expect(cut.find('input')).toHaveLength(1);
      expect(cut.find('label')).toHaveLength(1);
  });

  it('should apply the id to the input', () => {
    const cut = shallow(<Checkbox id="the_id" label="the_label" />);
    expect(cut.find('input').prop('id')).toEqual("the_id");
  });

  it('should apply the id to the input', () => {
    const cut = shallow(<Checkbox id="the_id" label="the_label" />);
    expect(cut.find('input').prop('id')).toEqual("the_id");
  });

  it('should apply standard html attribute', () => {
    const cut = shallow(<Checkbox id="the_id" label="the_label" checked />);
    expect(cut.find('input').prop('checked')).toBe(true);
  });

  it('should apply aria attribute to input', () => {
    const cut = shallow(<Checkbox id="the_id" label="the_label" aria-required="true" />);
    expect(cut.find('input').prop('aria-required')).toEqual("true");
  });

  it('should apply the label text', () => {
    const cut = shallow(<Checkbox label="the_label" />);
    expect(cut.find('label').text()).toEqual("the_label");
  });

  it('should apply the class name', () => {
    const cut = shallow(<Checkbox label="the_label" className="foo" />);
    expect(cut.find('label').hasClass("foo")).toBe(true);
  });

  it('should gracefully ignore the lack of class name', () => {
    const cut = shallow(<Checkbox label="the_label" />);
    expect(cut.find('label').hasClass("foo")).toBe(false);
  });

});