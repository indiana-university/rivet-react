import { mount } from 'enzyme';
import * as React from 'react';
import Select from './Select';

describe('<Select />', () => {
    describe("Rendering", () => {
        it('should render without throwing an error', () => {
            const cut = mount(<Select label="Label" />);
            expect(cut.find('select')).toHaveLength(1);
        });
        it('should render the label', () => {
            const cut = mount(<Select label="Label" />);
            expect(cut.find('label').text()).toEqual("Label");
        });
        it('should associate the label with the Select', () => {
            const cut = mount(<Select id="the_id" label="Label" />);
            expect(cut.find('select').prop('id')).toEqual("the_id");
            expect(cut.find('label').prop('htmlFor')).toEqual("the_id");
        });
        it('should apply custom class', () => {
            const cut = mount(<Select className="my-class" label="Label" />);
            expect(cut.find('div.rvt-input').hasClass("my-class")).toEqual(true);
        });
        it('should render its options', () => {
            const cut = mount(
                <Select label="label">
                    <option>foo</option>
                    <option>bar</option>
                    <option>baz</option>
                </Select>
            );
            const select = cut.find('select');
            expect(select.children().length).toBe(3);
        });
        it('should apply sr-only class to label', () => {
            const cut = mount(<Select label="Label" labelVisibility="screen-reader-only" />);
            expect(cut.find('div.rvt-input > label').hasClass("rvt-sr-only")).toEqual(true);
        });
    });
    describe("Notes", () => {
        it('should apply the note', () => {
            const cut = mount(<Select note="Note" label="Label" />);
            expect(cut.find('small').text()).toEqual("Note");
        });
        it('should associate the Select with the note', () => {
            const cut = mount(<Select id="the_id" note="Note" label="Label" />);
            expect(cut.find('select').prop('aria-describedby')).toEqual("the_id_note");
        });
        it('should not apply the aria-describedby attribute when no note is present', () => {
            const cut = mount(<Select id="the_id" label="Label" />);
            expect(cut.find('select').prop('aria-describedby')).toHaveLength(0);
        })
    });
    describe("Inline Alerts", () => {
        it('info style', () => { 
            const cut = mount(<Select variant="info" label="Label" note="🤔"/>);
            expect(cut.find('select').hasClass("rvt-validation-info")).toEqual(true);
            expect(cut.find('select').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--info")).toBe(true);
        });
        it('valid style', () => { 
            const cut = mount(<Select variant="valid" label="Label" note="😎" />);
            expect(cut.find('select').hasClass("rvt-validation-success")).toEqual(true);
            expect(cut.find('select').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--success")).toBe(true);
        });
        it('warning style', () => { 
            const cut = mount(<Select variant="warning" label="Label" note="🤨"/>);
            expect(cut.find('select').hasClass("rvt-validation-warning")).toEqual(true);
            expect(cut.find('select').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--warning")).toBe(true);
        });
        it('invalid style', () => { 
            const cut = mount(<Select variant="invalid" label="Label" note="😬"/>);
            expect(cut.find('select').hasClass("rvt-validation-danger")).toEqual(true);
            expect(cut.find('select').prop("aria-invalid")).toEqual(true);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--danger")).toBe(true);
        });
    });
});
