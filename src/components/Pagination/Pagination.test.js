/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import Pagination from './Pagination';

describe('<Pagination />', () => {

    describe('Rendering and text', () => {
        it('should render without throwing an error', () => {
            const cut = mount(<Pagination />);
            expect(cut.find('nav > ul.rvt-pagination')).toHaveLength(1);
        });
        it('should take an id', () => {
            const cut = mount(<Pagination id="the_id"/>);
            expect(cut.find('nav#the_id')).toHaveLength(1);
        });
    });

    describe('Styling', () => {
      it('should allow center alignment', () => {
        const cut = mount(<Pagination align="center" />);
        expect(cut.find('nav > ul.rvt-pagination').hasClass('rvt-pagination--center')).toBe(true);
      });
      it('should allow center alignment', () => {
        const cut = mount(<Pagination align="right" />);
        expect(cut.find('nav > ul.rvt-pagination').hasClass('rvt-pagination--right')).toBe(true);
      });
      it('should have a small size', () => {
        const cut = mount(<Pagination size="small" />);
        expect(cut.find('nav > ul.rvt-pagination').hasClass('rvt-pagination--small')).toBe(true);
      });
    });

    describe('Children rendering', () => {
      it('should render children', () => {
        const cut = mount(
          <Pagination>
            <a href="#">Link one</a>
            <a href="#">Link two</a>
          </Pagination>);
        expect(cut.find('nav > ul.rvt-pagination > li.rvt-pagination__item > a').length).toBe(2);
      });
      it('should add class when child is disabled with aria attributes', () => {
        const cut = mount(
          <Pagination>
            <a href="#" id="test" aria-disabled="true">Link one</a>
          </Pagination>);
        expect(cut.find('nav > ul.rvt-pagination > li.rvt-pagination__item.is-disabled > a#test').length).toBe(1);
      });
      it('should add class when child is disabled', () => {
        const cut = mount(
          <Pagination>
            <button id="test" disabled>Link one</button>
          </Pagination>);
        expect(cut.find('nav > ul.rvt-pagination > li.rvt-pagination__item.is-disabled > button#test').length).toBe(1);
      });
      it('should add class when child is the current page', () => {
        const cut = mount(
          <Pagination>
            <a href="#" id="test" aria-current="page">Link one</a>
          </Pagination>);
        expect(cut.find('nav > ul.rvt-pagination > li.rvt-pagination__item.is-active > a#test').length).toBe(1);
      });
    });

});
