/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';
import Switch from './Switch';

describe('<Switch />', () => {

    describe('Rendering and text', () => {
        it('should render without throwing an error', () => {
            const cut = mount(<Switch />);
            expect(cut.find('button.rvt-switch')).toHaveLength(1);
        });
        it('should take an id', () => {
            const cut = mount(<Switch id="the_id"/>);
            expect(cut.find('button.rvt-switch#the_id')).toHaveLength(1);
        });
        it('should toggle the aria-checked attribute', () => {
          const cut = mount(<Switch />);
          expect(cut.find('button.rvt-switch').prop('aria-checked')).toBe(true);
          cut.find('button.rvt-switch').simulate('click');
          expect(cut.find('button.rvt-switch').prop('aria-checked')).toBe(false);
          cut.find('button.rvt-switch').simulate('click');
          expect(cut.find('button.rvt-switch').prop('aria-checked')).toBe(true);
        });
        it('should allow you to set the default value', () => {
          const cut = mount(<Switch defaultValue="off" />);
          expect(cut.find('button.rvt-switch').prop('aria-checked')).toBe(false);
        });
    });

    describe('Styling', () => {
      it('should allow for a small size button', () => {
        const cut = mount(<Switch size="small" />);
        expect(cut.find('button.rvt-switch').hasClass('rvt-switch--small')).toBe(true);
      });
      it('should have a success variant', () => {
        const cut = mount(<Switch variant="success" />);
        expect(cut.find('button.rvt-switch').hasClass('rvt-switch--success')).toBe(true);
      });
      it('should have a danger variant', () => {
        const cut = mount(<Switch variant="danger" />);
        expect(cut.find('button.rvt-switch').hasClass('rvt-switch--danger')).toBe(true);
      });
    });

    describe('Event handling', () => {
      it('', () => {
        const spy = jest.fn();
        const cut = mount(<Switch onClick={spy} />);
        cut.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
      });
    });

});
