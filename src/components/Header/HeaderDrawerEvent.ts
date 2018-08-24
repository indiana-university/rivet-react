import AbstractUserActionEvent from '../util/AbstractUserActionEvent';

export default class HeaderDrawerEvent extends AbstractUserActionEvent  {

    public static handler = (callback) => {
        return AbstractUserActionEvent.handler(callback, HeaderDrawerEvent);
    }

    public isUnhandledKeyPress() : boolean {
        return this.isKeyEvent() && !this.isEscapeKeyPress();
    }

}
