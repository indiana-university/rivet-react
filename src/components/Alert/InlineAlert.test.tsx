import { mount } from 'enzyme';
import * as React from 'react';
import InlineAlert from './InlineAlert';

describe('Inline Alerts', () => {
    it('should have "info" styling with the info variant', () => { 
        const cut = mount(<InlineAlert variant="info">🤔</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--info")).toBe(true);
    });
    it('should have "success" styling with the success variant', () => { 
        const cut = mount(<InlineAlert variant="success">😎</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--success")).toBe(true);
    });
    it('should have "warning" styling with the warning variant', () => { 
        const cut = mount(<InlineAlert variant="warning">🤨</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--warning")).toBe(true);
    });
    it('should have "danger" styling with the danger variant', () => { 
        const cut = mount(<InlineAlert variant="danger">😬</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass("rvt-inline-alert--danger")).toBe(true);
    });
    it('applies class names to the containing div', () => {
        const cut = mount(<InlineAlert variant="danger" className="foo">😬</InlineAlert>);
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
        const cut = mount(<InlineAlert variant="danger" standalone>😬</InlineAlert>);
        expect(cut.find('.rvt-inline-alert').hasClass('rvt-inline-alert--standalone'));
    });
});
