import { mount } from 'enzyme';
import * as React from 'react';

import { Button } from '../Button';
import Modal from './Modal';
import ModalControls from './ModalControls';

describe('<ModalControls />', () => {
    it('renders without error', () => {
        const cut = mount(
            <Modal title="foo">
                <ModalControls>
                    <Button key="ok" id="ok-button">OK</Button>
                </ModalControls>
            </Modal>
        );
        const controls = cut.find('ModalControls');

        expect(controls.find('.rvt-modal__controls').length).toBe(1);
        expect(controls.find('Button').length).toBe(1);
    });
});
