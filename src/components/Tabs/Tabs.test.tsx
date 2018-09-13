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

});
