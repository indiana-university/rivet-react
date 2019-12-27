/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import React from 'react';
import Header from './Header';
import HeaderMenu from './HeaderMenu'
import HeaderNavigation from './HeaderNavigation'

describe('<HeaderNavigation />', () => {
    let cut;
    
    beforeEach(() => {
        cut = mount(
            <Header title="Testing">
                <HeaderNavigation>
                    <a href="#">Foo</a>
                    <button>Bar</button>
                </HeaderNavigation>
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
                <HeaderNavigation className="rvt-drawer-navigation">
                    <a href="#">Foo</a>
                    <HeaderMenu label="Example">
                        <button>Bar</button>
                    </HeaderMenu>
                </HeaderNavigation>
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
