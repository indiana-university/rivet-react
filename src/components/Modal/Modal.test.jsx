import { mount } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Button } from '../Button';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalControls from './ModalControls';
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

    const defaultTitle = 'modal title';
    const okButton = <Button key="ok" id="ok-button">OK</Button>;
    const defaultChildren = (
        <div>
            <ModalBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ModalBody>
            <ModalControls>{okButton}</ModalControls>
        </div>   
    );

    const component = (overrides={}) => {
        const defaults = {
            title: defaultTitle,
            isOpen: true,
            children: defaultChildren
        };
        const { children, ...props } = { ...defaults, ...overrides };
        return <Modal {...props}>{ children }</Modal>;

    }

    describe('Render and Structure', () => {
        it('should render without throwing an error', () => {
            const cut = mount(component());
            expect(cut.find('div.rvt-modal')).toHaveLength(1);
        });
    
        it('should have the correct structure', () => {
            const cut = mount(component());
            const rootPath = '.rvt-modal .rvt-modal__inner';
            expect(cut.find(rootPath).length).toBe(1);
            expect(cut.find(`${rootPath} header.rvt-modal__header`).length).toBe(1);
            expect(cut.find(`${rootPath} header.rvt-modal__header h1.rvt-modal__title`).length).toBe(1);
        });
    
        it('should add any classnames passed to the outer div', () => {
            const className = 'foo';
            const cut = mount(component({ className }));
            expect(cut.find('.rvt-modal').prop('className').split(' ')).toContain(className);
        });
    
        it('should have an aria-labelledby that matches the h1 id', () => {
            const cut = mount(component());
            const ariaLabelleby = cut.find('.rvt-modal').prop('aria-labelledby');
            const h1id = cut.find('h1').prop('id');
            expect(ariaLabelleby).toBe(h1id);
        });
    
        it('should have aria-hidden=false if isOpen is true', () => {
            const cut = mount(component());
            expect(cut.find('.rvt-modal').prop('aria-hidden')).toBe(false);
        });
    
        it('should have aria-hidden=true if isOpen is false', () => {
            const cut = mount(component({ isOpen: false }));
            expect(cut.find('.rvt-modal').prop('aria-hidden')).toBe(true);
        });    
    
        it('should have a role of dialog', () => {
            const cut = mount(component());
            expect(cut.find('.rvt-modal').prop('role')).toBe('dialog');
        });
    
        it('should display the title in the h1 tag', () => {
            const cut = mount(component());
            expect(cut.find('h1.rvt-modal__title').text()).toBe(defaultTitle);
        });
    
        it('should show its children in the inner div after the header', () => {
            const cut = mount(component());
            const inner = cut.find('.rvt-modal__inner');
            expect(inner.children().get(0).type).toBe('header');
            expect(inner.children().get(1).type).toBe('div');
        });
    
        it('should have a close button if an onDismiss prop is provided', () => {
            const cut = mount(component({ onDismiss: () => {}}));
            expect(cut.find('button.rvt-modal__close').length).toBe(1);
        });
    
        it('should not have a close button if an onDismiss prop is not provided', () => {
            const cut = mount(component());
            expect(cut.find('button.rvt-modal__close').length).toBe(0);
        }); 
    });

    describe('Toggle Behavior', () => {
      
        const render = (overrides={}) => {
            const defaults = { title: defaultTitle };
            const props = { ...defaults, ...overrides };
            ReactDOM.render(
                <Modal {...props}>
                    { defaultChildren }
                </Modal>, root
            );
        };

        it('should call the onDismiss function if the close button is clicked', () => {
            const onDismiss = jest.fn();
            const cut = mount(component({ onDismiss }));
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
            if(jest.isMockFunction(Modal.prototype.componentDidUpdate)) {
                Modal.prototype.componentDidUpdate.mockRestore();
            }
        });

        it('should register event handlers when it is mounted if there is an onDismiss and the modal is open', () => {
            const onDismiss = () => {};
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(component({ onDismiss }));
            expect(document.addEventListener).toHaveBeenCalled();
        });

        it('should not register event handlers when it is mounted if the modal is closed', () => {
            const onDismiss = () => {};
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(component({ isOpen: false, onDismiss }));
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
        });

        it('should not register event handlers when it is mounted if there is no onDismiss', () => {
            jest.spyOn(document, 'addEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(component());
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
        });      

        it('should register and unregister event handlers as isOpen changes', () => {
            const onDismiss = () => {};
            jest.spyOn(document, 'addEventListener');
            jest.spyOn(document, 'removeEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(component({ onDismiss }));
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.setProps({ isOpen: false });
            expect(document.removeEventListener).toHaveBeenCalledTimes(3);
        });

        it('should register and unregister event handlers as isOpen changes', () => {
            const onDismiss = () => {};
            jest.spyOn(document, 'addEventListener');
            jest.spyOn(document, 'removeEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(component({ onDismiss }));
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.setProps({ onDismiss: null });
            expect(document.removeEventListener).toHaveBeenCalledTimes(3);
        });        

        it('should unregister event handlers when unmounting', () => {
            const onDismiss = () => {};
            jest.spyOn(document, 'addEventListener');
            jest.spyOn(document, 'removeEventListener');
            expect(document.addEventListener).toHaveBeenCalledTimes(0);
            const cut = mount(component({ onDismiss }));
            expect(document.addEventListener).toHaveBeenCalledTimes(3);
            cut.unmount();
            expect(document.removeEventListener).toHaveBeenCalledTimes(3);        
        });
    });
}); 
