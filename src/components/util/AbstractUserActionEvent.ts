

export default abstract class AbstractUserActionEvent {
    public static keys  = {
        tab: 9,
        escape: 27
    }

    public static handler = (callback, InstantiatingClass) => {
        const eventHandler = (event) => {
            callback(new InstantiatingClass(event));
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

    protected type;
    protected which;
    protected target;

    constructor(event: MouseEvent | KeyboardEvent | TouchEvent) {
        this.type = event.type;
        this.which = event.which;
        this.target = event.target;
    }

    public abstract isUnhandledKeyPress() : boolean;

    public isKeyEvent = () => {
        return this.type === 'keyup';
    }

    public isTabKeyPress = () => {
        return this.isKeyEvent() && this.which === AbstractUserActionEvent.keys.tab;
    }

    public isEscapeKeyPress = () => {
        return this.isKeyEvent() && this.which === AbstractUserActionEvent.keys.escape;
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
