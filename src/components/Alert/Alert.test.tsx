import { shallow } from 'enzyme';
import * as React from 'react';
import Alert from './Alert';

describe('<Alert />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = shallow(<Alert variant="info" />);
            expect(cut.find('.rvt-alert')).toHaveLength(1);
        });
        it('should include alert text', () => {
            const cut = shallow(<Alert variant="info">This is the message.</Alert>);
            expect(cut.find('.rvt-alert__message').text()).toEqual("This is the message.");
        });
        it('should include title', () => {
            const cut = shallow(<Alert variant="info" title="Alert Title" />);
            expect(cut.find('.rvt-alert__title').text()).toEqual("Alert Title");
        });      
        it('should apply the id', () => {
            const cut = shallow(<Alert variant="info" id="the_id" />);
            expect(cut.prop('id')).toEqual("the_id");
        });      
    })

    describe('Styling', () => {
        it('should specify style: error', () => {
            const cut = shallow(<Alert variant="error" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--error")).toEqual(true);
          });
        it('should specify style: info', () => {
            const cut = shallow(<Alert variant="info" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--info")).toEqual(true);
        });
        it('should specify style: message', () => {
            const cut = shallow(<Alert variant="message" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--message")).toEqual(true);
        });
        it('should specify style: success', () => {
            const cut = shallow(<Alert variant="success" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--success")).toEqual(true);
        });        
    });

    describe('Visbility', () => {
        it('can be made invisible', () => {
            const cut = shallow(<Alert variant="success" isOpen={false} />);
            expect(cut.find('.rvt-alert')).toHaveLength(0);
        });        
    })

    describe('Dismiss behavior', ()=> {
        it('should include dismiss button when dismissible', () => {
            const cut = shallow(<Alert variant="info" onDismiss={() => {;}} />);
            expect(cut.find('button.rvt-alert__dismiss')).toHaveLength(1);
        });
        it('should fire dismiss delegate', () => {
            let fired = false;
            const delegate = () => fired = true;
            const cut = shallow(<Alert variant="info" onDismiss={delegate} />);

            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(fired).toEqual(true);
        });
        it('the alert should remain visible when dismiss button clicked', () => {
            const cut = shallow(<Alert variant="info" onDismiss={() => {;}} />);
            
            cut.find('button.rvt-alert__dismiss').simulate("click");
            
            expect(cut.find('.rvt-alert')).toHaveLength(1);
        });
    });

});