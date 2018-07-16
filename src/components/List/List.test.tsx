import { shallow } from 'enzyme';
import * as React from 'react';
import List from './List';

describe('<List />', () => {
    describe("Rendering", () => {
        it('should render without throwing an error', () => {
            const cut = shallow(<List />);
            expect(cut.find('ul')).toHaveLength(1);
        });
        it('should render an ordered list', () =>{
            const cut = shallow(<List variant="ordered" />)
            expect(cut.find('ol')).toHaveLength(1);
        });
        it('should render a plain list', () =>{
            const cut = shallow(<List variant="plain" />)
            expect(cut.find('ul').hasClass('rvt-plain-list')).toEqual(true);
        });
        it('should render an in-line list', () =>{
            const cut = shallow(<List orientation="inline" />)
            expect(cut.find('ul').hasClass('rvt-inline-list')).toEqual(true);
        });
    });
    describe("List items", () => {
        it('should render <li> children', () => {
            const cut = shallow(<List><li>Foo</li><li>Bar</li></List>)
            expect(cut.find('li')).toHaveLength(2);
            expect(cut.find('li').first().text()).toEqual("Foo");
            expect(cut.find('li').last().text()).toEqual("Bar");
        });
        it('should render list of children primitives', () => {
            const cut = shallow(<List>{["hurf durf", 123]}</List>)
            expect(cut.find('li')).toHaveLength(2);
            expect(cut.find('li').first().text()).toEqual("hurf durf");
            expect(cut.find('li').last().text()).toEqual("123");
        });
        it('should render list of children primitives (via attribute)', () => {
            const cut = shallow(<List children={["hurf durf", 123]}/>)
            expect(cut.find('li')).toHaveLength(2);
            expect(cut.find('li').first().text()).toEqual("hurf durf");
            expect(cut.find('li').last().text()).toEqual("123");
        });
    });
});