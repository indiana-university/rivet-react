import { mount } from 'enzyme';
import * as React from 'react';
import InlineAlert from './InlineAlert';

describe('Inline Alerts', () => {
    it('should have "info" styling with the info variant', () => { 
        const cut = mount(<InlineAlert variant="info">🤔</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--has-info")).toBe(true);
    });
    it('should have "valid" styling with the valid variant', () => { 
        const cut = mount(<InlineAlert variant="valid">😎</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--is-valid")).toBe(true);
    });
    it('should have "warning" styling with the warning variant', () => { 
        const cut = mount(<InlineAlert variant="warning">🤨</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--has-warning")).toBe(true);
    });
    it('should have "invalid" styling with the invalid variant', () => { 
        const cut = mount(<InlineAlert variant="invalid">😬</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--is-invalid")).toBe(true);
    });
    it('applies class names to the containing div', () => {
        const cut = mount(<InlineAlert variant="invalid" className="foo">😬</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("foo")).toBe(true);
    });

    it('renders the children as a message of the alert', () => {
        const messageText = 'This is some alert text'
        const cut = mount(<InlineAlert variant="info">{messageText}</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').text()).toBe(messageText);
    });
});

describe('Standalone Inline Alerts', () => {
    it('should have the standalone class if the standalone prop is set', () => {
        const cut = mount(<InlineAlert variant="invalid" standalone>😬</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass('rvt-inline-alert--standalone'));
    });
});
