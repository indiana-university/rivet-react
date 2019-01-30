/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

import { mount } from 'enzyme';
import * as React from 'react';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {

  it('should render without throwing an error', () => {
      const cut = mount(<Checkbox label="the_label"/>);
      expect(cut.find('input')).toHaveLength(1);
      expect(cut.find('label')).toHaveLength(1);
  });

  it('should apply the id to the input', () => {
    const cut = mount(<Checkbox id="the_id" label="the_label" />);
    expect(cut.find('input').prop('id')).toEqual("the_id");
    expect(cut.find('label').prop('htmlFor')).toEqual("the_id");
  });

  it('should autogenerate an id when none is provided', () => {
    const cut = mount(<Checkbox label="the_label" />);
    expect(cut.find('input').prop('id')).toContain("id_");
    expect(cut.find('label').prop('htmlFor')).toContain("id_");
  });

  it('should apply standard html attribute', () => {
    const cut = mount(<Checkbox label="the_label" checked readOnly />);
    expect(cut.find('input').prop('checked')).toBe(true);
  });

  it('should apply aria attribute to input', () => {
    const cut = mount(<Checkbox label="the_label" aria-required="true" />);
    expect(cut.find('input').prop('aria-required')).toEqual("true");
  });

  it('should apply the label text', () => {
    const cut = mount(<Checkbox label="the_label" />);
    expect(cut.find('label').text()).toEqual("the_label");
  });

  it('should apply the custom class name', () => {
    const cut = mount(<Checkbox label="the_label" className="foo" />);
    expect(cut.find('input').hasClass("foo")).toBe(true);
  });

  it('should apply the Rivet class name', () => {
    const cut = mount(<Checkbox label="the_label" margin="xs" />);
    expect(cut.find('input').hasClass("rvt-m-all-xs")).toBe(true);
  });

  it('should gracefully ignore the lack of class name', () => {
    const cut = mount(<Checkbox label="the_label" />);
    expect(cut.find('input').hasClass("foo")).toBe(false);
  });

  it('should hide the label for sighted displays', () => {
    const cut = mount(<Checkbox label="the_label" labelVisibility="screen-reader-only" />);
    expect(cut.find('label > span').hasClass("rvt-sr-only")).toBe(true);
    expect(cut.find('label').hasClass("rvt-sr-only")).toBe(false);
  });

});
