import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeaderDrawerEvent from './HeaderDrawerEvent';

interface HeaderDrawerProps {
    identity?: React.ReactElement<any>;
    navigation?: React.ReactElement<any>;
}

const initialState = { open: false };
type HeaderDrawerState = Readonly<typeof initialState>;

class HeaderDrawer extends React.PureComponent<HeaderDrawerProps & React.HTMLAttributes<HTMLDivElement>, HeaderDrawerState> {

    public readonly state: HeaderDrawerState = initialState;
    private toggleButton: React.RefObject<HTMLButtonElement>;
    private eventHandler;

    constructor(props) {
        super(props);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.toggleButton = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.eventHandler = HeaderDrawerEvent.handler(this.handleClickOutside);
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

    public toggleDrawer(event) {
        this.setState({
            open: !this.state.open
        });
    }

    public render() {
        const { identity, navigation } = this.props;
        const drawerToggleClasses = classNames({
            ['rvt-drawer-button']: true,
            ['is-open']: this.state.open
        });
        return (
            <div> {/* This is a div instead of a fragment due to needing a real element wrapping this for how we use ReactDOM.findDOMNode */}
                <button className={drawerToggleClasses} aria-haspopup="true" aria-expanded={this.state.open} onClick={this.toggleDrawer} ref={this.toggleButton}>
                    <span className="sr-only">Toggle menu</span>
                    {!this.state.open &&
                        <svg role="img" className="rvt-drawer-button-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <g fill="currentColor">
                                <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z" />
                                <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z" />
                                <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z" />
                            </g>
                        </svg>
                    }
                    {this.state.open &&
                        <svg role="img" className="rvt-drawer-button-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z" />
                        </svg>
                    }
                </button>
                { this.state.open &&
                    <div className="rvt-drawer">
                        { identity && React.Children.count(identity.props.children) === 0 && React.cloneElement(identity, { className: 'rvt-header-id--drawer' }) }
                        <nav className="rvt-drawer__nav" role="navigation">
                            <ul>
                                <li className="has-children">
                                    { identity && React.Children.count(identity.props.children) !== 0 && React.cloneElement(identity, { className: 'rvt-header-id--drawer' }) }
                                </li>
                                { navigation && React.cloneElement(navigation, { className: 'rvt-drawer-navigation' })}
                            </ul>
                            <button className="rvt-drawer__bottom-close">Close nav</button>
                        </nav>
                    </div>
                }
            </div>
        );
    }

    private handleClickOutside(event: HeaderDrawerEvent) {
        if(event && this.shouldToggleDrawer(event)) {
            this.toggleDrawer(event);

            if(event.isEscapeKeyPress() && this.toggleButton.current) {
                // If the user pressed the escape key and we have a current reference to the dropdown toggle button put focus back on it
                this.toggleButton.current.focus();
            }
        }
    }

    private shouldToggleDrawer = (event: HeaderDrawerEvent) => {
        if (event.isRightMouseClick() || event.isUnhandledKeyPress()) {
            // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
            return false;
        }

        if (event.targets(ReactDOM.findDOMNode(this)) && !event.isKeyEvent()) {
            // If the user clicks, touches or tabs inside the dropdown do not close the menu
            return false;
        }

        return true;
    }

    private handleEventRegistration = () => {
        if(this.state.open) {
            this.eventHandler.register();
        } else {
            this.eventHandler.deregister();
        }
    }
}

export default HeaderDrawer;
