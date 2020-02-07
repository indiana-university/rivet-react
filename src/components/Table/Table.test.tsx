/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { mount } from 'enzyme';
import * as React from 'react';
import Table from './Table';

describe('<Table />', () => {
    describe('Rendering and styling', () =>{
        it('should render without throwing an error', () => {
            const cut = mount(<Table />);
            expect(cut.find('table')).toHaveLength(1);
        });
        it('should pass attributes through', () => {
            const cut = mount(<Table id="the_id" />);
            expect(cut.find('table').prop('id')).toEqual('the_id');
        });
        it('should apply custom classes', () => {
            const cut = mount(<Table className="foo" />);
            expect(cut.find('table').hasClass('foo')).toBe(true);
        });
        it('should apply variant classes', () => {
            expect(mount(<Table variant="stripes" />).find('table.rvt-table-stripes')).toHaveLength(1);
            expect(mount(<Table variant="plain" />).find('table.rvt-table-plain')).toHaveLength(1);
            expect(mount(<Table compact />).find('table.rvt-table-compact')).toHaveLength(1);
            expect(mount(<Table cells />).find('table.rvt-table-cells')).toHaveLength(1);
            expect(mount(<Table variant="plain" compact />).find('table.rvt-table-compact')).toHaveLength(1);
            expect(mount(<Table variant="plain" compact />).find('table.rvt-table-plain')).toHaveLength(1);
            expect(mount(<Table variant="plain" cells />).find('table.rvt-table-cells')).toHaveLength(0);
            expect(mount(<Table variant="plain" cells />).find('table.rvt-table-plain')).toHaveLength(1);
            expect(mount(<Table variant="stripes" cells compact />).find('table.rvt-table-stripes')).toHaveLength(1);
            expect(mount(<Table variant="stripes" cells compact />).find('table.rvt-table-cells')).toHaveLength(1);
            expect(mount(<Table variant="stripes" cells compact />).find('table.rvt-table-compact')).toHaveLength(1);
        });
    });
});
