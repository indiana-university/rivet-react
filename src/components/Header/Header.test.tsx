import { shallow } from 'enzyme';
import * as React from 'react';
import Header from './Header';

describe('<Header />', () => {
    let cut;
    
    beforeEach(() => {
        cut = shallow(<Header title="foo"/>);
    })

    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            expect(cut.find('header')).toHaveLength(1);
        });
        it('should include the title', () => {
            expect(cut.find('span.rvt-header__title > a').text()).toEqual("foo");
        });
    });
});
