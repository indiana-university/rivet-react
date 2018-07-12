import { shallow } from 'enzyme';
import * as React from 'react';
import Alert from './Alert';

describe('<Alert />', () => {

    describe('Rendering and text', ()=>{
        it('should render without throwing an error', () => {
            const cut = shallow(<Alert rvtStyle="info" />);
            expect(cut.find('.rvt-alert')).toHaveLength(1);
        });
        it('should include alert text', () => {
            const cut = shallow(<Alert rvtStyle="info">This is the message.</Alert>);
            expect(cut.find('.rvt-alert__message').text()).toEqual("This is the message.");
        });
        it('should include title', () => {
            const cut = shallow(<Alert rvtStyle="info" rvtTitle="Alert Title" />);
            expect(cut.find('.rvt-alert__title').text()).toEqual("Alert Title");
        });      
    })

    describe('Styling', () => {
        it('should specify style: error', () => {
            const cut = shallow(<Alert rvtStyle="error" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--error")).toEqual(true);
          });
        it('should specify style: info', () => {
            const cut = shallow(<Alert rvtStyle="info" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--info")).toEqual(true);
        });
        it('should specify style: message', () => {
            const cut = shallow(<Alert rvtStyle="message" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--message")).toEqual(true);
        });
        it('should specify style: success', () => {
            const cut = shallow(<Alert rvtStyle="success" />);
            expect(cut.find('.rvt-alert').hasClass("rvt-alert--success")).toEqual(true);
        });        
    });
});