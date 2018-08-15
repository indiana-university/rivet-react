import AbstractUserActionEvent from '../util/AbstractUserActionEvent';

export default class ModalEvent extends AbstractUserActionEvent  {

    public static handler = (callback) => {
        return AbstractUserActionEvent.handler(callback, ModalEvent);
    }

    public isUnhandledKeyPress() : boolean {
        return this.isKeyEvent() && !this.isEscapeKeyPress();
    }
}
