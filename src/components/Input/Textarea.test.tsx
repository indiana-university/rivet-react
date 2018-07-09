
import { shallow } from 'enzyme';
import * as React from 'react';
import { Textarea } from './Textarea';

describe('<Texarea />', () => {
    describe("Rendering", () => {
        it('should render without throwing an error', () => {
            const cut = shallow(<Textarea label="Label" />);
            expect(cut.find('textarea')).toHaveLength(1);
        });
        it('should render the label', () => {
            const cut = shallow(<Textarea label="Label" />);
            expect(cut.find('label').text()).toEqual("Label");
        });
        it('should associate the label with the input', () => {
            const cut = shallow(<Textarea id="the_id" label="Label" />);
            expect(cut.find('textarea').prop('id')).toEqual("the_id");
            expect(cut.find('label').prop('htmlFor')).toEqual("the_id");
        });
        it('should apply custom class', () => {
            const cut = shallow(<Textarea className="my-class" label="Label" />);
            expect(cut.find('div.rvt-input').hasClass("my-class")).toEqual(true);
        });
    });
    describe("Notes", () => {
        it('should apply the note', () => {
            const cut = shallow(<Textarea note="Note" label="Label" />);
            expect(cut.find('small').text()).toEqual("Note");
        });
        it('should associate the input with the note', () => {
            const cut = shallow(<Textarea id="the_id" note="Note" label="Label" />);
            expect(cut.find('textarea').prop('aria-describedby')).toEqual("the_id_note");
        });
    });
    describe("Inline Alerts", () => {
        it('info style', () => { 
            const cut = shallow(<Textarea info note="Note" label="Label" />);
            expect(cut.find('textarea').hasClass("rvt-has-info")).toEqual(true);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--has-info")).toBe(true);
        });
        it('valid style', () => { 
            const cut = shallow(<Textarea valid note="Note" label="Label" />);
            expect(cut.find('textarea').hasClass("rvt-is-valid")).toEqual(true);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--is-valid")).toBe(true);
        });
        it('warning style', () => { 
            const cut = shallow(<Textarea warning note="Note" label="Label" />);
            expect(cut.find('textarea').hasClass("rvt-has-warning")).toEqual(true);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--has-warning")).toBe(true);
        });
        it('invalid style', () => { 
            const cut = shallow(<Textarea invalid note="Note" label="Label" />);
            expect(cut.find('textarea').hasClass("rvt-is-invalid")).toEqual(true);
            expect(cut.find('textarea').prop("aria-invalid")).toEqual(true);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--is-invalid")).toBe(true);
        });
        it('invalid has aria-invalid flag', () => { 
            const cut = shallow(<Textarea invalid note="Note" label="Label" />);
            expect(cut.find('textarea').prop("aria-invalid")).toEqual(true);
        });
    });
});