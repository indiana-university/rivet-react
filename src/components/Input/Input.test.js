/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import { mount } from 'enzyme';
import React from 'react';
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
        it('should apply sr-only class to label', () => {
            const cut = mount(<Input label="Label" labelVisibility="screen-reader-only" />);
            expect(cut.find('div.rvt-input > label').hasClass("rvt-sr-only")).toEqual(true);
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
            expect(cut.find('input').hasClass("rvt-validation-info")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--info")).toBe(true);
        });
        it('valid style', () => { 
            const cut = mount(<Input variant="success" label="Label" note="😎" />);
            expect(cut.find('input').hasClass("rvt-validation-success")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--success")).toBe(true);
        });
        it('warning style', () => { 
            const cut = mount(<Input variant="warning" label="Label" note="🤨"/>);
            expect(cut.find('input').hasClass("rvt-validation-warning")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(false);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--warning")).toBe(true);
        });
        it('invalid style', () => { 
            const cut = mount(<Input variant="danger" label="Label" note="😬"/>);
            expect(cut.find('input').hasClass("rvt-validation-danger")).toEqual(true);
            expect(cut.find('input').prop("aria-invalid")).toEqual(true);
            expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--danger")).toBe(true);
        });
    });
});
