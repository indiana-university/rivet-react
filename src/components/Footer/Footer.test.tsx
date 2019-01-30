/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';
import Footer from './Footer';

describe('<Footer />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Footer  />);
            expect(cut.find('footer')).toHaveLength(1);
        });
        it('should apply id', () => {
            const cut = mount(<Footer id="id_foo" />);
            expect(cut.find('footer#id_foo')).toHaveLength(1);
        });
        it('should include standard class', () => {
            const cut = mount(<Footer  />);
            expect(cut.find('footer').hasClass("rvt-footer")).toEqual(true);
        });
        it('should include custom class', () => {
            const cut = mount(<Footer className="rvt-footer--custom" />);
            expect(cut.find('footer').hasClass("rvt-footer--custom")).toEqual(true);
        });    
    });
    describe('Navigation', () => {
        it('should include no links by default', () => {
            const cut = mount(<Footer />);
            expect(cut.find('ul.rvt-footer__aux-links')).toHaveLength(0);
        });
        it('should render nav links in list', () => {
            const cut = mount(
                <Footer>
                    <a id="privacy" href="/privacy">Privacy Policy</a>
                </Footer>);
            expect(cut.find('ul.rvt-footer__aux-links')).toHaveLength(1);
            expect(cut.find('li.rvt-footer__aux-item > a')).toHaveLength(1);
            expect(cut.find('#privacy')).toHaveLength(1);
        });
    });

});
