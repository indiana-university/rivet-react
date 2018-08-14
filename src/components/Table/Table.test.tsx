import { mount } from 'enzyme';
import * as React from 'react';
import Table from './Table';

describe('<Table />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Table />);
            expect(cut.find('table')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Table id="the_id" />);
            expect(cut.find('table').prop('id')).toEqual('the_id');
        });
        it('should apply custom classes', () => {
            const cut = mount(<Table className="foo" />);
            expect(cut.find('table').hasClass('foo')).toBe(true);
        });
    });
});
