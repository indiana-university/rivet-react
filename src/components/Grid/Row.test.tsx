import { mount } from 'enzyme';
import * as React from 'react';
import Row from './Row';

describe('<Row />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Row />);
            expect(cut.find('div')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Row id="the_id" />);
            expect(cut.find('div').prop('id')).toEqual('the_id');
        });
        it('should apply Rivet styling class', () => {
            const cut = mount(<Row />);
            expect(cut.find('div').hasClass('rvt-grid')).toEqual(true);
        });
        it('should apply custom classes', () => {
            const cut = mount(<Row className="foo" />);
            expect(cut.find('div').hasClass('rvt-grid')).toEqual(true);
            expect(cut.find('div').hasClass('foo')).toBe(true);
        });
    });
});
