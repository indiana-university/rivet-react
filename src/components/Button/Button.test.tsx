
import { shallow } from 'enzyme';
import * as React from 'react';
import  Button from './Button';

describe('<Button />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = shallow(<Button />);
            expect(cut.find('button.rvt-button')).toHaveLength(1);
        });
        it('should take an id', () => {
            const cut = shallow(<Button id="the_id"/>);
            expect(cut.find('#the_id')).toHaveLength(1);
        })
        it('should show text', () => {
            const cut = shallow(<Button >The text</Button>);
            expect(cut.find('button.rvt-button').text()).toEqual("The text");
        })
        it('should accept disabled attribute', () => {
            const cut = shallow(<Button disabled />);
            expect(cut.find('button').prop('disabled')).toEqual(true);
        })
    })

    describe('Styling', ()=>{
        // Primary variations
        it('should have success style', () => {
            const cut = shallow(<Button style="success" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--success")).toEqual(true);
        });
        it('should have danger style', () => {
            const cut = shallow(<Button style="danger" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--danger")).toEqual(true);
        });
        it('should have plain style', () => {
            const cut = shallow(<Button style="plain" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--plain")).toEqual(true);
        });

        // Secondary variations
        it('should have secondary role', () => {
            const cut = shallow(<Button role="secondary" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--secondary")).toEqual(true);
        });
        it('should have secondary success style', () => {
            const cut = shallow(<Button role="secondary" style="success" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--success-secondary")).toEqual(true);
        });
        it('should have secondary danger style', () => {
            const cut = shallow(<Button role="secondary" style="danger" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--danger-secondary")).toEqual(true);
        });
        it('should have secondary plain style', () => {
            const cut = shallow(<Button role="secondary" style="plain" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--plain-secondary")).toEqual(true);
        });
        
        // Size variations
        it('should have small size', () => {
            const cut = shallow(<Button size="small"  />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--small")).toEqual(true);
        });

        // Disabled
        it('should be disabled', () => {
            const cut = shallow(<Button disabled  />);
            expect(cut.find('button.rvt-button').prop('disabled')).toEqual(true);
        });

        // All together now!
        it('should have a secondary small size', () => {
            const cut = shallow(<Button size="small" role="secondary" style="plain" />);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--plain-secondary")).toEqual(true);
            expect(cut.find('button.rvt-button').hasClass("rvt-button--small")).toEqual(true);
        });
    });

    describe("Events", ()=>{
        it('should fire click delegate', () => {
            let fired = false;
            const delegate = () => fired = true;
            const cut = shallow(<Button onClick={delegate} />);

            cut.find('button').simulate("click");
            
            expect(fired).toEqual(true);
        });
    })
});