import { mount } from 'enzyme';
import * as React from 'react';
import Header from './Header';

describe('<HeaderNavigation />', () => {
    let cut;
    
    beforeEach(() => {
        cut = mount(
            <Header title="Testing">
                <Header.Navigation>
                    <a href="#">Foo</a>
                    <button>Bar</button>
                </Header.Navigation>
            </Header>
        );
    })

    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            expect(cut.find('nav.rvt-header__main-nav')).toHaveLength(1);
        });
        it('should include the list items', () => {
            expect(cut.find('nav.rvt-header__main-nav > ul > HeaderNavigation > li')).toHaveLength(2);
        });
    });
});
