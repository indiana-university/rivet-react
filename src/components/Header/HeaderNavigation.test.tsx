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

    describe('Drawer rendering', () => {
        
        beforeEach(() => {
            cut = mount(
                <Header.Navigation className="rvt-drawer-navigation">
                    <a href="#">Foo</a>
                    <Header.Menu label="Example">
                        <button>Bar</button>
                    </Header.Menu>
                </Header.Navigation>
            );
        });

        it('should render the navigation in the drawer', () => {
            expect(cut.find('HeaderNavigation > li')).toHaveLength(2);
        });
        it('should use the has-children class for wrapping header menus', () => {
           expect(cut.find('HeaderNavigation > li.has-children > HeaderMenu')).toHaveLength(1);
        });
    });
});
