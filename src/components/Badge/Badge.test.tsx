import { mount } from 'enzyme';
import * as React from 'react';
import Badge from './Badge';

describe('<Badge />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Badge />);
            expect(cut.find('span')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Badge id="the_id" />);
            expect(cut.find('span').prop('id')).toEqual('the_id');
        });
        it('should apply custom classes', () => {
            const cut = mount(<Badge className="foo" />);
            expect(cut.find('span').hasClass('foo')).toBe(true);
        });
        it('should apply variant class', () => {
            const cut = mount(<Badge variant="action" />);
            expect(cut.find('span').hasClass('rvt-badge--action')).toBe(true);
        });
        it('should apply secondary role', () => {
            const cut = mount(<Badge role="secondary" />);
            expect(cut.find('span').hasClass('rvt-badge--secondary')).toBe(true);
        });
        it('should apply secondary variant class appropriately', () => {
            const cut = mount(<Badge variant="action" role="secondary" />);
            expect(cut.find('span').hasClass('rvt-badge--action')).toBe(false);
            expect(cut.find('span').hasClass('rvt-badge--secondary')).toBe(false);
            expect(cut.find('span').hasClass('rvt-badge--action-secondary')).toBe(true);
        });
    });
});
