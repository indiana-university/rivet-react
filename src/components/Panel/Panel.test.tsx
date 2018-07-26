import { mount } from 'enzyme';
import * as React from 'react';
import Panel from './Panel';

describe('<Panel />', () => {
    describe("Rendering", () => {
        it('should render without throwing an error', () => {
            const cut = mount(<Panel />);
            expect(cut.find('div')).toHaveLength(1);
        });

        it('should pass attributes through', () => {
            const id = 'foo';
            const cut = mount(<Panel id={id} />);
            expect(cut.find('div').prop('id')).toBe(id);
        });

        it('should contain the rivet class', () =>{
            const cut = mount(<Panel />);
            expect(cut.find('div').prop('className')).toBe('rvt-panel');
        });        

        it('should contain the appropriate classes if given "light" prop', () =>{
            const cut = mount(<Panel light />);
            expect(cut.find('div').prop('className')).toBe('rvt-panel rvt-panel--light');
        });        

        it('should apply custom classes', () => {
            const className = 'foo';
            const cut = mount(<Panel className={className} />);
            expect(cut.find('div').prop('className').split(' ')).toContain(className);
        });

        it('should render children', () => {
            const children = <span>foo</span>;
            const cut = mount(<Panel>{ children }</Panel>);
            expect(cut.find('div').prop('children')).toEqual(children);
        });

    });
});
