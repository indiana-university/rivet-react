
import { render, shallow } from 'enzyme';
import * as React from 'react';
import DismissibleAlert from './DismissibleAlert';

describe('<Alert />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = shallow(<DismissibleAlert variant="info" onDismiss={() => {;}}/>);
            expect(cut.dive().find('.rvt-alert')).toHaveLength(1);
        });
        it('should include alert text', () => {
            const cut = shallow(<DismissibleAlert variant="info" onDismiss={() => {;}}>This is the message.</DismissibleAlert>);
            expect(cut.dive().find('.rvt-alert__message').text()).toEqual("This is the message.");
        });
        it('should include title', () => {
            const cut = shallow(<DismissibleAlert title="Alert Title" variant="info" onDismiss={() => {;}}  />);
            expect(cut.dive().find('.rvt-alert__title').text()).toEqual("Alert Title");
        });      
    })

    describe('Styling', () => {
        it('should specify style: error', () => {
            const cut = shallow(<DismissibleAlert variant="error" onDismiss={() => {;}}/>);
            expect(cut.dive().find('.rvt-alert').hasClass("rvt-alert--error")).toEqual(true);
          });
        it('should specify style: info', () => {
            const cut = shallow(<DismissibleAlert variant="info" onDismiss={() => {;}}/>);
            expect(cut.dive().find('.rvt-alert').hasClass("rvt-alert--info")).toEqual(true);
        });
        it('should specify style: message', () => {
            const cut = shallow(<DismissibleAlert variant="message" onDismiss={() => {;}}/>);
            expect(cut.dive().find('.rvt-alert').hasClass("rvt-alert--message")).toEqual(true);
        });
        it('should specify style: success', () => {
            const cut = shallow(<DismissibleAlert variant="success" onDismiss={() => {;}}/>);
            expect(cut.dive().find('.rvt-alert').hasClass("rvt-alert--success")).toEqual(true);
        });        
    });

    describe('Dismiss behavior', ()=> {
        it('should include dismiss button when dismissible', () => {
            const cut = shallow(<DismissibleAlert variant="info" onDismiss={() => {;}} />);
            expect(cut.dive().find('button.rvt-alert__dismiss')).toHaveLength(1);
        });
        it('should fire dismiss delegate', () => {
            let fired = false;
            const delegate = () => fired = true;
            const cut = shallow(<DismissibleAlert variant="info" onDismiss={delegate} />);

            cut.dive().find('button.rvt-alert__dismiss').simulate("click");
            
            expect(fired).toEqual(true);
        });
        it('should dismiss the alert', () => {
            const cut = shallow(<DismissibleAlert variant="info" onDismiss={() => {;}} />);
            
            cut.dive().find('button.rvt-alert__dismiss').simulate("click");
            
            expect(cut.find('.rvt-alert')).toHaveLength(0);
        });
    });

});