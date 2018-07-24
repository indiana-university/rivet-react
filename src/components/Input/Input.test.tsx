import { mount } from 'enzyme';
import * as React from 'react';
import * as Rivet from '../Rivet';
import Input from './Input';

describe('<Input />', () => {
    describe("Rendering", () => {
        it('should render without throwing an error', () => {
            const cut = mount(<Input label="Label" />);
            expect(cut.find('input')).toHaveLength(1);
        });
        it('should have the correct type', () => {
            const cut = mount(<Input type="text" label="Label" />);
            expect(cut.find('input').prop('type')).toEqual("text");
        });
        it('should render the label', () => {
            const cut = mount(<Input label="Label" />);
            expect(cut.find('label').text()).toEqual("Label");
        });
        it('should associate the label with the input', () => {
            const cut = mount(<Input id="the_id" label="Label" />);
            expect(cut.find('input').prop('id')).toEqual("the_id");
            expect(cut.find('label').prop('htmlFor')).toEqual("the_id");
        });
        it('should apply custom class', () => {
            const cut = mount(<Input className="my-class" label="Label" />);
            expect(cut.find('div.rvt-input').hasClass("my-class")).toEqual(true);
        });
    });
    describe("Notes", () => {
        it('should apply the note', () => {
            const cut = mount(<Input note="Note" label="Label" />);
            expect(cut.find('small').text()).toEqual("Note");
        });
        it('should associate the input with the note', () => {
            const cut = mount(<Input id="the_id" note="Note" label="Label" />);
            expect(cut.find('input').prop('aria-describedby')).toEqual("the_id_note");
        });
        it('should not apply the aria-describedby attribute when no note is present', () => {
            const cut = mount(<Input id="the_id" label="Label" />);
            expect(cut.find('input').prop('aria-describedby')).toHaveLength(0);
        })
    });
    describe("Inline Alerts", () => {
        it('info style', () => { 
            const cut = mount(<Input variant="info" label="Label" note="🤔"/>);
            expect(cut.find('input').hasClass("rvt-has-info")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--has-info")).toBe(true);
        });
        it('valid style', () => { 
            const cut = mount(<Input variant="valid" label="Label" note="😎" />);
            expect(cut.find('input').hasClass("rvt-is-valid")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--is-valid")).toBe(true);
        });
        it('warning style', () => { 
            const cut = mount(<Input variant="warning" label="Label" note="🤨"/>);
            expect(cut.find('input').hasClass("rvt-has-warning")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--has-warning")).toBe(true);
        });
        it('invalid style', () => { 
            const cut = mount(<Input variant="invalid" label="Label" note="😬"/>);
            expect(cut.find('input').hasClass("rvt-is-invalid")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(true);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--is-invalid")).toBe(true);
        });
    });
});
