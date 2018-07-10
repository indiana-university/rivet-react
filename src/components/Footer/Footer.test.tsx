
import { shallow } from 'enzyme';
import * as React from 'react';
import * as Rivet from '../Rivet';
import Footer from './Footer';

describe('<Footer />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = shallow(<Footer  />);
            expect(cut.find('footer')).toHaveLength(1);
        });
        it('should apply id', () => {
            const cut = shallow(<Footer id="id_foo" />);
            expect(cut.find('#id_foo')).toHaveLength(1);
        });
        it('should include standard class', () => {
            const cut = shallow(<Footer  />);
            expect(cut.find('footer').hasClass("rvt-footer")).toEqual(true);
        });
        it('should include custom class', () => {
            const cut = shallow(<Footer className="rvt-footer--custom" />);
            expect(cut.find('footer').hasClass("rvt-footer--custom")).toEqual(true);
        });    
    });
    describe('Navigation', () => {
        it('should include no links by default', () => {
            const cut = shallow(<Footer  />);
            expect(cut.find('ul.rvt-footer__aux-links')).toHaveLength(0);
        });
        it('should render nav links in list', () => {
            const nav = [ new Rivet.Nav("privacy", "/privacy") ]
            const cut = shallow(<Footer nav={nav} />);
            expect(cut.find('ul.rvt-footer__aux-links')).toHaveLength(1);
            expect(cut.find('li.rvt-footer__aux-item > Link')).toHaveLength(1);
        });
    });

});