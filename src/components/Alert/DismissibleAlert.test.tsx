
import { mount } from 'enzyme';
import * as React from 'react';
import DismissibleAlert from './DismissibleAlert';

describe('<Alert />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = mount(<DismissibleAlert variant="info" />);
            expect(cut.find('.rvt-alert')).toHaveLength(1);
        });
        it('should include alert text', () => {
            const cut = mount(<DismissibleAlert variant="info">This is the message.</DismissibleAlert>);
            expect(cut.find('.rvt-alert__message').text()).toEqual("This is the message.");
        });
        it('should include title', () => {
            const cut = mount(<DismissibleAlert title="Alert Title" variant="info" />);
            expect(cut.find('.rvt-alert__title').text()).toEqual("Alert Title");
        });      
    })

    describe('Styling', () => {
        it('should specify style: error', () => {
            const cut = mount(<DismissibleAlert variant="danger" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--danger")).toEqual(true);
        });
        it('should specify style: info', () => {
            const cut = mount(<DismissibleAlert variant="info" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--info")).toEqual(true);
        });
        it('should specify style: message', () => {
            const cut = mount(<DismissibleAlert variant="message" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--message")).toEqual(true);
        });
        it('should specify style: success', () => {
            const cut = mount(<DismissibleAlert variant="success" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--success")).toEqual(true);
        });        
    });

    describe('Dismiss behavior', ()=> {
        it('should include dismiss button when dismissible', () => {
            const cut = mount(<DismissibleAlert variant="info" />);
            expect(cut.find('button.rvt-alert__dismiss')).toHaveLength(1);
        });
        it('should fire dismiss delegate', () => {
            let fired = false;
            const delegate = () => fired = true;
            const cut = mount(<DismissibleAlert variant="info" onDismiss={delegate} />);

            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(fired).toEqual(true);
        });
        it('alert should disappear when dismiss button clicked', () => {
            const cut = mount(<DismissibleAlert variant="info" />);
            
            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(cut.find('.rvt-alert')).toHaveLength(0);
        });
    });

});
