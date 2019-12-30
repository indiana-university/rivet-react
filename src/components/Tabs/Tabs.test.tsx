/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';
import Tab from './Tab';
import Tabs from './Tabs';

const simulateKeyboardInteraction = (options) => {
  options.component
    .find(options.start)
    .simulate('click');

  let focusedElement = document.activeElement;

  expect(options.component
    .find(options.start)
    .matchesElement(focusedElement));

  options.component
    .find(options.start)
    .simulate('keydown', { keyCode: options.key });

  focusedElement = document.activeElement;

  expect(options.component
    .find(options.end)
    .matchesElement(focusedElement));
}

describe('<Tabs />', () => {

  describe('Rendering and text', () => {
    it('should render without throwing an error', () => {
      const cut = mount(<Tabs />);
      expect(cut.find('div.rvt-tabs')).toHaveLength(1);
    });
    it('should take an id', () => {
      const cut = mount(<Tabs id="the_id" />);
      expect(cut.find('div.rvt-tabs#the_id')).toHaveLength(1);
    });
    it('should set aria-orientation', () => {
      const cut = mount(<Tabs />);
      expect(cut.find('div.rvt-tabs__tablist').prop('aria-orientation')).toEqual('horizontal');
    });
  });

  describe('Styling', () => {
    it('should have a fitted variant', () => {
      const cut = mount(<Tabs variant="fitted" />);
      expect(cut.find('div.rvt-tabs').hasClass('rvt-tabs--fitted')).toBe(true);
    });
    it('should have a vertical variant', () => {
      const cut = mount(<Tabs variant="vertical" />);
      expect(cut.find('div.rvt-tabs').hasClass('rvt-tabs--vertical')).toBe(true);
      expect(cut.find('div.rvt-tabs__tablist').prop('aria-orientation')).toEqual('vertical');
    });
  });

  describe('Tab toggling', () => {

    let cut = undefined;
    beforeEach(() => {
      cut = mount(<Tabs>
        <Tab title="Tab one" id="t-one">Tab one content</Tab>
        <Tab title="Tab two" id="t-two">Tab two content</Tab>
      </Tabs>);
    })

    it('should render the first tab by default', () => {
      expect(cut.find('Tab#t-one')).toHaveLength(1);
    });
    it('should show the second tab when clicked', () => {
      expect(cut.find('Tab#t-one')).toHaveLength(1);
      expect(cut.find('Tab#t-two')).toHaveLength(0);
      cut.find('button#t-two-tab').simulate('click');
      expect(cut.find('Tab#t-one')).toHaveLength(0);
      expect(cut.find('Tab#t-two')).toHaveLength(1);
    });
  });

  // TODO: Fix issues with events in Enzyme
  describe.skip('Tab keyboard interactions', () => {
    let cut;

    beforeEach(() => {
      cut = mount(
        <Tabs>
          <Tab title="Tab one" id="t-one">
            Tab one content
          </Tab>
          <Tab title="Tab two" id="t-two">
            Tab two content
          </Tab>
          <Tab title="Tab three" id="t-three">
            Tab two content
          </Tab>
        </Tabs>
      );
    })

    it('Should focus the first tab by default', () => {
      cut
      .find('button#t-one-tab')
      .simulate('click');

      const focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));
    });

    // Test for default switch/fall-through switch statement
    it('Should not do anything if random keys are pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-one-tab',
        end: 'button#t-one-tab',
        key: 84 // "t" key should not do anything
      });
    });

    it('Should focus the next tab when the right arrow key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-one-tab',
        end: 'button#t-two-tab',
        key: 39
      })
    });

    it('Should focus the next tab when the down arrow key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-one-tab',
        end: 'button#t-two-tab',
        key: 40
      });
    });

    it('Should focus the previous tab when the left arrow key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-two-tab',
        end: 'button#t-one-tab',
        key: 37
      });
    });

    it('Should focus the previous tab when the up arrow key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-two-tab',
        end: 'button#t-one-tab',
        key: 38
      });
    });

    it('Should focus the last tab when the End key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-one-tab',
        end: 'button#t-three-tab',
        key: 35
      });
    });

    it('Should focus the first tab when the Home key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-three-tab',
        end: 'button#t-one-tab',
        key: 36
      });
    });

    // Right arrow key should focus first tab if last tab has focus
    it('Should focus the first tab when last tab has focus and the right key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-three-tab',
        end: 'button#t-one-tab',
        key: 39
      });
    });

    // Left arrow key should focus last tab if first tab has focus
    it('Should focus the last tab when first tab has focus and the left key is pressed', () => {
      simulateKeyboardInteraction({
        component: cut,
        start: 'button#t-one-tab',
        end: 'button#t-three-tab',
        key: 37
      });
    });
  });
});
