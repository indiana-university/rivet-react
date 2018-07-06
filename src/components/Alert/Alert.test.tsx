
import { shallow } from 'enzyme';
import * as React from 'react';
import Alert from './Alert';

describe('<Alert />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = shallow(<Alert />);
            expect(cut.find('.rvt-alert')).toHaveLength(1);
        });
        it('should include alert text', () => {
            const cut = shallow(<Alert >This is the message.</Alert>);
            expect(cut.find('.rvt-alert__message').text()).toEqual("This is the message.");
        });
        it('should include title', () => {
            const cut = shallow(<Alert title="Alert Title" />);
            expect(cut.find('.rvt-alert__title').text()).toEqual("Alert Title");
        });      
    })

    describe('Styling', () => {
        it('should default to style: info', () => {
            const cut = shallow(<Alert />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--info")).toEqual(true);
        });
        it('should specify style: error', () => {
            const cut = shallow(<Alert error />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--error")).toEqual(true);
          });
        it('should specify style: info', () => {
            const cut = shallow(<Alert info />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--info")).toEqual(true);
        });
        it('should specify style: message', () => {
            const cut = shallow(<Alert message />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--message")).toEqual(true);
        });
        it('should specify style: success', () => {
            const cut = shallow(<Alert success />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--success")).toEqual(true);
        });        
    });

    describe('Dismiss behavior', ()=> {
        it('should not include dismiss button by default', () => {
            const cut = shallow(<Alert />);
            expect(cut.find('button')).toHaveLength(0);
        });
        it('should include dismiss button when dismissible', () => {
            const cut = shallow(<Alert dismissible />);
            expect(cut.find('button.rvt-alert__dismiss')).toHaveLength(1);
        });
        it('should fire dismiss delegate', () => {
            let fired = false;
            const delegate = () => fired = true;
            const cut = shallow(<Alert dismissible clickDismiss={delegate} />);

            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(fired).toEqual(true);
        });
        it('should dismiss the alert', () => {
            const cut = shallow(<Alert dismissible />);
            
            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(cut.find('.rvt-alert')).toHaveLength(0);
        });
    });

});