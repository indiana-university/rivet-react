import { shallow } from 'enzyme';
import * as React from 'react';
import Header from './Header';

describe('<Navigation />', () => {
    let cut;
    
    beforeEach(() => {
        cut = shallow(
            <Header.Navigation>
                <a href="#">Foo</a>
                <button>Bar</button>
            </Header.Navigation>
        );
    })

    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            expect(cut.find('nav')).toHaveLength(1);
        });
        it('should include the list items', () => {
            expect(cut.find('nav > ul > li')).toHaveLength(2);
        });
    });
});
