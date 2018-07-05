
import { shallow } from 'enzyme';
import * as React from 'react';
import { Notification } from '../common'
import Alert from './Alert';

describe('<Alert />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = shallow(<Alert type={Notification.Info} />);
            expect(cut.find('.rvt-alert')).toHaveLength(1);
        });
        it('should include alert text', () => {
            const cut = shallow(<Alert type={Notification.Info}>This is the message.</Alert>);
            expect(cut.find('.rvt-alert__message').text()).toEqual("This is the message.");
        });
        it('should include title', () => {
            const cut = shallow(<Alert type={Notification.Info} title="Alert Title" />);
            expect(cut.find('.rvt-alert__title').text()).toEqual("Alert Title");
        });      
    })

    describe('Styling', () => {
        it('should specify style: error', () => {
            const cut = shallow(<Alert type={Notification.Error} />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--error")).toEqual(true);
          });
        it('should specify style: info', () => {
            const cut = shallow(<Alert type={Notification.Info} />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--info")).toEqual(true);
        });
        it('should specify style: message', () => {
            const cut = shallow(<Alert type={Notification.Message} />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--message")).toEqual(true);
        });
        it('should specify style: success', () => {
            const cut = shallow(<Alert type={Notification.Success} />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--success")).toEqual(true);
        });        
    });

    describe('Dismiss behavior', ()=> {
        it('should not include dismiss button by default', () => {
            const cut = shallow(<Alert type={Notification.Info} />);
            expect(cut.find('button')).toHaveLength(0);
        });
        it('should include dismiss button when dismissible', () => {
            const cut = shallow(<Alert type={Notification.Info} dismissible />);
            expect(cut.find('button.rvt-alert__dismiss')).toHaveLength(1);
        });
        it('should fire dismiss delegate', () => {
            let fired = false;
            const delegate = () => fired = true;
            const cut = shallow(<Alert type={Notification.Info} dismissible clickDismiss={delegate} />);

            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(fired).toEqual(true);
        });
        it('should dismiss the alert', () => {
            const cut = shallow(<Alert type={Notification.Info} dismissible />);
            
            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(cut.find('.rvt-alert')).toHaveLength(0);
        });
    });

});