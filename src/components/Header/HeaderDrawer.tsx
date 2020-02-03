/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../util/RivetIcons';
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
        const drawerToggleClasses = classNames.default({
            ['rvt-drawer-button']: true,
            ['is-open']: this.state.open
        });
        return (
            <div> {/* This is a div instead of a fragment due to needing a real element wrapping this for how we use ReactDOM.findDOMNode */}
                <button type="button" className={drawerToggleClasses} aria-haspopup="true" aria-expanded={this.state.open} onClick={this.toggleDrawer} ref={this.toggleButton}>
                    <span className="sr-only">Toggle menu</span>
                    {!this.state.open && <Icon name="menu" className="rvt-drawer-button-open" /> }
                    {this.state.open && <Icon name="close" className="rvt-drawer-button-close" /> }
                </button>
                { this.state.open &&
                    <div className="rvt-drawer">
                        { identity && React.Children.count(identity.props.children) === 0 && React.cloneElement(identity, { className: 'rvt-header-id--drawer' }) }
                        <nav className="rvt-drawer__nav" role="navigation">
                            <ul>
                                { identity && React.Children.count(identity.props.children) !== 0 &&
                                    <li className="has-children">
                                        { React.cloneElement(identity, { className: 'rvt-header-id--drawer' }) }
                                    </li> 
                                }
                                { navigation && React.cloneElement(navigation, { className: 'rvt-drawer-navigation' })}
                            </ul>
                            <button type="button" className="rvt-drawer__bottom-close">Close nav</button>
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
