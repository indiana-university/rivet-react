export const keys = {
    escape: 27
};

export default class ModalEvent {

    public static handler = (callback) => {
        const eventHandler = (event) => {
            callback(new ModalEvent(event));
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

    public isEscapeKeyPress = () => {
        return this.isKeyEvent() && this.which === keys.escape;
    }

    public isUnhandledKeyPress = () => {
        return this.isKeyEvent() && !this.isEscapeKeyPress();
    }

    public isMouseEvent = () => {
        return this.type === 'click';
    }

    public isRightMouseClick = () => {
        return this.isMouseEvent && this.which === 3;
    }

    public targets = (container: Element | Text | null) => {
        return (container && container.contains(this.target) && container !== this.target);
    }

    public toString = () => {
        return `ModalEvent { type: ${this.type}, which: ${this.which} }`;
    }

}