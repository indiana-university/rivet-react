import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Action, rivetize, shortuid } from '../Rivet';
import DropdownEvent from './DropdownEvent';

interface DropdownProps {
    align?: 'right';
    menuClass?: string;
    nav?: boolean;
    title?: string;
    toggleDesktopDropdown?: Action;
}

const initialState = { open: false }
type DropdownState = Readonly<typeof initialState>

class Dropdown extends React.PureComponent<DropdownProps & React.HTMLAttributes<HTMLButtonElement>, DropdownState> {

    public readonly state: DropdownState = initialState;
    private toggleButton: React.RefObject<HTMLButtonElement>;
    private eventHandler;

    constructor(props) {
        super(props);
        this.toggleButton = React.createRef();
        this.eventHandler = DropdownEvent.handler(this.handleClickOutside);
    }

    public componentDidMount() {
        this.handleEventRegistration();
    }

    public componentDidUpdate(prevProps, prevState) {
        if(this.state.open !== prevState.open) {
            this.handleEventRegistration();
        }
    }

    public componentWillUnmount() {
        this.eventHandler.deregister();
    }

    public render() {
        const { align, children, className, id = shortuid(), menuClass, nav, title, ...attrs } = this.props;
        const classes = classNames({
            ['rvt-button']: !nav,
            ['rvt-dropdown__toggle']: nav
        }, className);
        const menuClasses = classNames({
            ['rvt-dropdown__menu']: true,
            [`rvt-dropdown__menu--${align}`]: !!align
        }, menuClass);
        return (
            <div className="rvt-dropdown">
                <button {...attrs} ref={this.toggleButton} className={classes} aria-haspopup="true" aria-expanded={this.state.open} onClick={this.toggleDropdown}>
                    <span className="rvt-dropdown__toggle-text">{title}</span>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <title>Dropdown icon</title>
                        <path fill="currentColor" d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z" />
                    </svg>
                </button>
    
                {this.state.open &&
                    <div className={menuClasses} id={id} aria-hidden={!this.state.open} role="menu">
                        {children}
                    </div>
                }
            </div>
        );
    }

    private toggleDropdown = (event) => {
        this.setState({ open: !this.state.open });
    }

    private shouldToggleDropdown = (event: DropdownEvent) => {
        if (event.isRightMouseClick() || event.isUnhandledKeyPress()) {
            // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
            return false;
        }

        if (event.targets(ReactDOM.findDOMNode(this)) && (!event.isKeyEvent() || event.isTabKeyPress())) {
            // If the user clicks, touches or tabs inside the dropdown do not close the menu
            return false;
        }

        return true;
    }

    private handleClickOutside = (event: DropdownEvent) => {
        if(event && this.shouldToggleDropdown(event)) {
            this.toggleDropdown(event);

            if(event.isEscapeKeyPress() && this.toggleButton.current) {
                // If the user pressed the escape key and we have a current reference to the dropdown toggle button put focus back on it
                this.toggleButton.current.focus();
            }
        }
    }

    private handleEventRegistration = () => {
        if(this.state.open) {
            this.eventHandler.register();
        } else {
            this.eventHandler.deregister();
        }
    }

}

export default rivetize(Dropdown);
