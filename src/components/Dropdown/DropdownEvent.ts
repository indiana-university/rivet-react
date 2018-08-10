export const keys = {
    tab: 9,
    escape: 27
};

export default class DropdownEvent {

    public static handler = (callback) => {
        const eventHandler = (event) => {
            callback(new DropdownEvent(event));
        };
        return ({
            register: () => {
                ['click', 'touchstart', 'keyup'].forEach(event =>
                    document.addEventListener(event, eventHandler, true)
                );
            },
            deregister: () => {
                ['click', 'touchstart', 'keyup'].forEach(event =>
                    document.removeEventListener(event, eventHandler, true)
                );
            }
        });
    };

    private type;
    private which;
    private target;

    constructor(event: MouseEvent | KeyboardEvent | TouchEvent) {
        this.type = event.type;
        this.which = event.which;
        this.target = event.target;
    }

    public isKeyEvent = () => {
        return this.type === 'keyup';
    }

    public isTabKeyPress = () => {
        return this.isKeyEvent() && this.which === keys.tab;
    }

    public isEscapeKeyPress = () => {
        return this.isKeyEvent() && this.which === keys.escape;
    }

    public isUnhandledKeyPress = () => {
        return this.isKeyEvent() && !this.isTabKeyPress() && !this.isEscapeKeyPress();
    }

    public isMouseEvent = () => {
        return this.type === 'click';
    }

    public isRightMouseClick = () => {
        return this.isMouseEvent && this.which === 3;
    }

    public targets = (container: Element | Text | null) =>
        container && container.contains(this.target) && container !== this.target;

}
