import { shallow } from 'enzyme';
import * as React from 'react';
import Icon from './RivetIcons';

describe ("<Icon>", () => {
    it("should render without crashing", () => {
        const cut = shallow(<Icon name="info" />)
        expect(cut.find('svg')).toHaveLength(1);
    })
    it("should have a default height of 16", () => {
        const cut = shallow(<Icon name="info" />)
        expect(cut.find('svg').prop("height")).toBe("16");
    })
    it("should pass a custom height", () => {
        const cut = shallow(<Icon name="info" height="24" />)
        expect(cut.find('svg').prop("height")).toBe("24");
    })
    it("should apply a custom class", () => {
        const cut = shallow(<Icon name="info" className="foo" />)
        expect(cut.find('.foo')).toHaveLength(1);
    })
});
