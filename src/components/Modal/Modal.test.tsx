import { mount } from 'enzyme';
import * as React from 'react';

import { Button } from '../Button';
import Modal from './Modal';
import { ok } from 'assert';

describe('<Modal />', () => {
    const title = 'modal title';
    const okButton = <Button key="ok" id="ok-button">OK</Button>;
    const body = 'modal body';
    it('should render without throwing an error', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        expect(cut.find('div.rvt-modal')).toHaveLength(1);
    });

    it('should have the correct structure', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        const rootPath = '.rvt-modal .rvt-modal__inner';
        expect(cut.find(rootPath).length).toBe(1);
        expect(cut.find(`${rootPath} header.rvt-modal__header`).length).toBe(1);
        expect(cut.find(`${rootPath} header.rvt-modal__header h1.rvt-modal__title`).length).toBe(1);

        expect(cut.find(`${rootPath} .rvt-modal__body`).length).toBe(1);

        expect(cut.find(`${rootPath} .rvt-modal__controls`).length).toBe(1);
    });

    it('should add any classnames passed to the outer div', () => {
        const className = 'foo';
        const cut = mount(<Modal title={title} controls={okButton} className={className}>{body}</Modal>);
        expect(cut.find('.rvt-modal').prop('className').split(' ')).toContain(className);
    });

    it('should have an aria-labelledby that matches the h1 id', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        const ariaLabelleby = cut.find('.rvt-modal').prop('aria-labelledby');
        const h1id = cut.find('h1').prop('id');
        expect(ariaLabelleby).toBe(h1id);
    });

    it('should have aria-hidden=false if isOpen is true', () => {
        const cut = mount(<Modal title={title} controls={okButton} isOpen={true}>{body}</Modal>);
        expect(cut.find('.rvt-modal').prop('aria-hidden')).toBe(false);
    });

    it('should have aria-hidden=true if isOpen is false', () => {
        const cut = mount(<Modal title={title} controls={okButton} isOpen={false}>{body}</Modal>);
        expect(cut.find('.rvt-modal').prop('aria-hidden')).toBe(true);
    });    

    it('should have an role of dialog', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        expect(cut.find('.rvt-modal').prop('role')).toBe('dialog');
    });

    it('should display the title in the h1 tag', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        expect(cut.find('h1.rvt-modal__title').text()).toBe(title);
    });

    it('should show its children in the body div', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        expect(cut.find('div.rvt-modal__body').text()).toBe(body);
    });

    it('should render the controls in the controls div', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        expect(cut.find('div.rvt-modal__controls button#ok-button').length).toBe(1);
    });    

    it('should have a close button if an onDismiss prop is provided', () => {
        const cut = mount(<Modal title={title} controls={okButton} onDismiss={() => {}}>{body}</Modal>);
        expect(cut.find('button.rvt-modal__close').length).toBe(1);
    });

    it('should not have a close button if an onDismiss prop is not provided', () => {
        const cut = mount(<Modal title={title} controls={okButton}>{body}</Modal>);
        expect(cut.find('button.rvt-modal__close').length).toBe(0);
    });    

    it('should call the onDismiss function if the close button is clicked', () => {
        const onDismiss = jest.fn();
        const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss}>{body}</Modal>);
        cut.find('button.rvt-modal__close').simulate('click');
        expect(onDismiss.mock.calls.length).toBe(1);
    });

    // TODO: see if this can be fixed
    it.skip('should call the onDismiss function if the user hits the escape key', () => {
        const onDismiss = jest.fn();
        const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss}>{body}</Modal>);
        cut.simulate('keyUp', {which: 27});
        expect(onDismiss.mock.calls.length).toBe(1);
    });    

});
