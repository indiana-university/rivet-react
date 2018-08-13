import ModalEvent from './ModalEvent';

describe('ModalEvent', () => {
    describe('handler', () => {
        it('should return an instance with register and deregister methods', () => {
            const callback = jest.fn();
            const handler = ModalEvent.handler(callback);
            
        });
    });
});