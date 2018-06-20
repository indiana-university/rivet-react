
import { shallow } from 'enzyme';
import * as React from 'react';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {

  it('should render without throwing an error', () => {
      const cut = shallow(<Checkbox />);
      expect(cut.find('input')).toHaveLength(1);
      expect(cut.find('label')).toHaveLength(1);
  });

  it('should apply the id to the input', () => {
    const cut = shallow(<Checkbox id="the_id" />);
    expect(cut.find('input').key()).toEqual("the_id");
  });

  it('should apply the label text', () => {
    const cut = shallow(<Checkbox label="the_label" />);
    expect(cut.find('label').text()).toEqual("the_label");
  });

});