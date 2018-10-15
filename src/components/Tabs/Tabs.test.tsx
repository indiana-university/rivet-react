import { mount } from 'enzyme';
import * as React from 'react';
import Tab from './Tab';
import Tabs from './Tabs';

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

  describe('Tab keyboard interactions', () => {
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
      cut
        .find('button#t-one-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));

      cut
        .find('button#t-one-tab')
        .simulate('keydown', { keyCode: 84 }) // "t" key

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));
    });

    it('Should focus the next tab when the right arrow key is pressed', () => {
      cut
        .find('button#t-one-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));

      cut.find('button#t-one-tab').simulate('keydown', {keyCode: 39});

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-two-tab')
        .matchesElement(focusedElement));
    });

    it('Should focus the next tab when the down arrow key is pressed', () => {
      cut
        .find('button#t-one-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));

      cut.find('button#t-one-tab').simulate('keydown', { keyCode: 40 });

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-two-tab')
        .matchesElement(focusedElement));
    });

    it('Should focus the previous tab when the left arrow key is pressed', () => {
      cut
        .find('button#t-two-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-two-tab')
        .matchesElement(focusedElement));

      cut
        .find('button#t-two-tab')
        .simulate('keydown', { keyCode: 37 });

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));
    });

    it('Should focus the previous tab when the up arrow key is pressed', () => {
      cut.find('button#t-two-tab').simulate('click');

      let focusedElement = document.activeElement;

      expect(cut.find('button#t-two-tab').matchesElement(focusedElement));

      cut.find('button#t-one-tab').simulate('keydown', { keyCode: 38 });

      let focusedElement = document.activeElement;

      expect(cut.find('button#t-one-tab').matchesElement(focusedElement));
    });

    it('Should focus the last tab when the End key is pressed', () => {
      cut
        .find('button#t-one-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));

      cut
        .find('button#t-one-tab')
        .simulate('keydown', { keyCode: 35 });

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-three-tab')
        .matchesElement(focusedElement));
    });

    it('Should focus the first tab when the Home key is pressed', () => {
      cut
        .find('button#t-three-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-three-tab')
        .matchesElement(focusedElement));

      cut
        .find('button#t-three-tab')
        .simulate('keydown', { keyCode: 36 });

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-three-tab')
        .matchesElement(focusedElement));
    });

    // Right arrow key should focus first tab if last tab has focus
    it('Should focus the first tab when last tab has focus and the right key is pressed', () => {
      cut
        .find('button#t-three-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-three-tab')
        .matchesElement(focusedElement));

      cut
        .find('button#t-three-tab')
        .simulate('keydown', { keyCode: 39 });

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));
    });

    // Left arrow key should focus last tab if first tab has focus
    it('Should focus the last tab when first tab has focus and the left key is pressed', () => {
      cut
        .find('button#t-one-tab')
        .simulate('click');

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-one-tab')
        .matchesElement(focusedElement));

      cut
        .find('button#t-one-tab')
        .simulate('keydown', { keyCode: 37 });

      let focusedElement = document.activeElement;

      expect(cut
        .find('button#t-three-tab')
        .matchesElement(focusedElement));
    });
  });
});
