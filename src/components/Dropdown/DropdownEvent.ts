import BaseEvent from '../util/BaseEvent';

export default class DropdownEvent extends BaseEvent  {

    public isUnhandledKeyPress() : boolean {
        return this.isKeyEvent() && !this.isTabKeyPress() && !this.isEscapeKeyPress();
    }

}
