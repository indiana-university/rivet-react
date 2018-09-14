import { mount } from 'enzyme';
import * as React from 'react';
import Collapse from './Collapse';

describe('<Collapse />', () => {

    describe('Rendering and text', () => {
        it('should render without throwing an error', () => {
            const cut = mount(<Collapse />);
            expect(cut.find('div.rvt-collapsible')).toHaveLength(1);
        });
        it('should take an id', () => {
            const cut = mount(<Collapse id="the_id"/>);
            expect(cut.find('div.rvt-collapsible#the_id')).toHaveLength(1);
        });
        it('should allow you to set if it is closed by default', () => {
          const cut = mount(<Collapse defaultClosed={false} />);
          expect(cut.find('div.rvt-collapsible > div.rvt-collapsible__title > button').prop('aria-expanded')).toBe(true);
        });
    });

    describe('Styling', () => {
      it('should have a panel variant', () => {
        const cut = mount(<Collapse variant="panel" />);
        expect(cut.find('div.rvt-collapsible').hasClass('rvt-collapsible--panel')).toBe(true);
      });
    });

    describe('Toggling', () => {
      it('should toggle the presence of the collapse content', () => {
        const cut = mount(<Collapse variant="panel"><p>Testing</p></Collapse>);
        expect(cut.find('div.rvt-collapsible__content').length).toBe(0);
        cut.find('div.rvt-collapsible > div.rvt-collapsible__title > button').simulate('click');
        expect(cut.find('div.rvt-collapsible__content').length).toBe(1);
      });
    });

});
