/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

import { mount } from 'enzyme';
import * as React from 'react';
import Button from './Button';

describe('<Button />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = mount(<Button />);
            expect(cut.find('button.rvt-button')).toHaveLength(1);
        });
        it('should take an id', () => {
            const cut = mount(<Button id="the_id"/>);
            expect(cut.find('button#the_id')).toHaveLength(1);
        })
        it('should show text', () => {
            const cut = mount(<Button>The text</Button>);
            expect(cut.find('button.rvt-button').text()).toEqual("The text");
        })
        it('should accept disabled attribute', () => {
            const cut = mount(<Button disabled />);
            expect(cut.find('button').prop('disabled')).toEqual(true);
        })
    })

    describe('Styling', ()=>{
        // Primary variations
        it('should have success style', () => {
            const cut = mount(<Button variant="success" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--success")).toEqual(true);
        });
        it('should have danger style', () => {
            const cut = mount(<Button variant="danger" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--danger")).toEqual(true);
        });
        it('should have plain style', () => {
            const cut = mount(<Button variant="plain" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--plain")).toEqual(true);
        });

        // Secondary variations
        it('should have secondary role', () => {
            const cut = mount(<Button modifier="secondary" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--secondary")).toEqual(true);
        });
        it('should have secondary success style', () => {
            const cut = mount(<Button modifier="secondary" variant="success" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--success-secondary")).toEqual(true);
        });
        it('should have secondary danger style', () => {
            const cut = mount(<Button modifier="secondary" variant="danger" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--danger-secondary")).toEqual(true);
        });
        it('should have secondary plain style', () => {
            const cut = mount(<Button modifier="secondary" variant="plain" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--plain-secondary")).toEqual(true);
        });
        
        // Size variations
        it('should have small size', () => {
            const cut = mount(<Button size="small"  />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--small")).toEqual(true);
        });
        it('should have normal size by default', () => {
            const cut = mount(<Button />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--small")).toEqual(false);
        });

        // All together now!
        it('should have a secondary small size', () => {
            const cut = mount(<Button size="small" modifier="secondary" variant="plain" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--plain-secondary")).toEqual(true);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--small")).toEqual(true);
        });

        it('should apply appropriate navigation classes', () => {
            const cut = mount(<Button variant="navigation" />);
            expect(cut.find('button').hasClass("rvt-button")).toEqual(false);
            expect(cut.find('button').hasClass("rvt-dropdown__toggle")).toEqual(true);
        });
    });

    describe("Events", ()=>{
        it('should fire click delegate', () => {
            let fired = false;
            const delegate = () => fired = true;
            const cut = mount(<Button onClick={delegate} />);

            cut.find('button').simulate("click");
            
            expect(fired).toEqual(true);
        });
    })
});
