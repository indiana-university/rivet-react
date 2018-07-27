import { mount } from 'enzyme';
import * as React from 'react';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Dropdown />);
            expect(cut.find('div')).toHaveLength(1);
        });
    });
});
