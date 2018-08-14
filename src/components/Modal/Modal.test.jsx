import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from '../Button';
import Modal, { Modal as UnwrappedModal } from './Modal';
import ModalEvent from './ModalEvent';

describe('<Modal />', () => {

    let root;

    beforeEach(() => {
        root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.appendChild(root);
    });

    afterEach(() => {
        document.body.removeChild(root);
        document.body.innerHTML = '';
        root = null;
    });

    const title = 'modal title';
    const okButton = <Button key="ok" id="ok-button">OK</Button>;
    const body = 'modal body';

    describe('Render and Structure', () => {
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
    
        it('should have a role of dialog', () => {
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
    });
   


    describe('Toggle Behavior', () => {

        const isAriaHidden = () => document.getElementsByClassName('rvt-modal')[0].getAttribute('aria-hidden') === 'true';
        
        const expectModalIsOpen = () => {
            expect(isAriaHidden()).toBe(false);
        }

        const expectModalIsClosed = () => {
            expect(isAriaHidden()).toBe(true);
        }        

        const render = (overrides={}) => {
            const defaults = {title, controls: okButton};
            const props = { ...defaults, ...overrides };
            ReactDOM.render(
                <Modal {...props}>
                    <a href="#">Hello, world!</a>
                </Modal>, root
            );
        };

        it('should be closed by default', () => {
            render();
            expectModalIsClosed();
        });

        it('should be open if isOpen is true', () => {
            render({ isOpen: true });
            expectModalIsOpen();
        });

        it('should call the onDismiss function if the close button is clicked', () => {
            const onDismiss = jest.fn();
            const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss}>{body}</Modal>);
            cut.find('button.rvt-modal__close').simulate('click');
            expect(onDismiss).toHaveBeenCalledTimes(1);
        });        

        it('should call onDismiss function if the user hits the escape key and the modal is open', () => {
            const onDismiss = jest.fn();
            render({ isOpen: true, onDismiss });
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: ModalEvent.keys.escape  }));
            expect(onDismiss).toHaveBeenCalled();
        });

        it('should not call onDismiss function if the user hits the escape key and the modal is not open', () => {
            const onDismiss = jest.fn();
            render({ isOpen: false, onDismiss });
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: ModalEvent.keys.escape  }));
            expect(onDismiss).toHaveBeenCalledTimes(0);
        });        

        it('should call onDismiss if the modal is open and the user clicks outside of the modal', () => {
            const onDismiss = jest.fn();
            render({ isOpen: true, onDismiss });
            document.body.click();
            expect(onDismiss).toHaveBeenCalled();
        });

        it('should not call onDismiss if the user taps an unhandled key', () => {
            const onDismiss = jest.fn();
            render({ isOpen: true, onDismiss });
            document.body.dispatchEvent(new KeyboardEvent('keyup', { which: 'a'.charCodeAt(0)  }));
            expect(onDismiss).toHaveBeenCalledTimes(0);
        });

        it('should not call onDismiss if the user clicks inside the modal', () => {
            const onDismiss = jest.fn();
            render({ isOpen: true, onDismiss });
            document.getElementsByClassName('rvt-modal__inner')[0].click();
            expect(onDismiss).toHaveBeenCalledTimes(0);
        });
    
    });

    describe('Event Handler Registration', () => {
        
        afterEach(() => {
            if(jest.isMockFunction(document.addEventListener)) {
                document.addEventListener.mockRestore();
            }
            if(jest.isMockFunction(document.removeEventListener)) {
                document.removeEventListener.mockRestore();
            }
            if(jest.isMockFunction(UnwrappedModal.prototype.componentDidUpdate)) {
                UnwrappedModal.prototype.componentDidUpdate.mockRestore();
            }
        });

        it('should register event handlers when it is mounted if there is an onDismiss and the modal is open', () => {
            const onDismiss = jest.fn();
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss} isOpen />);
            expect(document.addEventListener).toHaveBeenCalled();
        });

        it('should not register event handlers when it is mounted if the modal is closed', () => {
            const onDismiss = jest.fn();
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss} />);
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
        });

        it('should not register event handlers when it is mounted if there is no onDismiss', () => {
            const onDismiss = jest.fn();
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Modal title={title} controls={okButton} isOpen />);
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
        });      

        it('should register and unregister event handlers as isOpen changes', () => {
            const onDismiss = jest.fn();
            jest.spyOn(document, 'addEventListener');
            jest.spyOn(document, 'removeEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss} isOpen  />);
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.setProps({ isOpen: false });
            expect(document.removeEventListener).toHaveBeenCalledTimes(3);
        });

        it('should register and unregister event handlers as isOpen changes', () => {
            const onDismiss = jest.fn();
            jest.spyOn(document, 'addEventListener');
            jest.spyOn(document, 'removeEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss} isOpen  />);
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.setProps({ onDismiss: null });
            expect(document.removeEventListener).toHaveBeenCalledTimes(3);
        });        

        it('should unregister event handlers when unmounting', () => {
            const onDismiss = jest.fn();
            jest.spyOn(document, 'addEventListener');
            jest.spyOn(document, 'removeEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(<Modal title={title} controls={okButton} onDismiss={onDismiss} isOpen  />);
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.unmount();
            expect(document.removeEventListener).toHaveBeenCalledTimes(3);        
        });
    });

});
