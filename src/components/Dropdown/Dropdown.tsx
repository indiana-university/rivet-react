/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import Button, { ButtonProps } from '../Button/Button';
import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';
import DropdownEvent from './DropdownEvent';

interface DropdownProps extends ButtonProps {
    /** Optional Rivet style: alignment of the dropdown menu items relative to the edge of the dropdown button. */
    align?: 'right';
    /**
     * Optional text which appears on the dropdown toggle button. The label 
     * should always be provided with a standalone dropdown, however the label
     * can be omitted if the dropdown is part of a SegmentedButton.
     * @see https://rivet.uits.iu.edu/components/navigation/dropdown/
     * @see https://rivet.uits.iu.edu/components/forms/buttons-segmented/#using-segmented-buttons-with-dropdowns
     */
    label?: string | React.ReactNode;
    /**
     * Optional CSS classes which will be applied to the dropdown menu
     */
    menuClass?: string;
    /** Optional flag to toggle the dropdown open state when a click is done within the dropdown contents */
    toggleDropdownOnClickInside?: boolean;
}

const initialState = { open: false }
type DropdownState = Readonly<typeof initialState>

export class Dropdown extends React.PureComponent<DropdownProps & React.HTMLAttributes<HTMLButtonElement>, DropdownState> {

    public readonly state: DropdownState = initialState;
    private toggleButton: React.RefObject<HTMLButtonElement>;
    private dropdownWrapDiv: React.RefObject<HTMLDivElement>;
    private eventHandler;

    constructor(props) {
        super(props);
        this.toggleButton = React.createRef();
        this.dropdownWrapDiv = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
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
        const {
            toggleDropdownOnClickInside = false, // eslint-disable-line @typescript-eslint/no-unused-vars
            align, children, className, label, menuClass, ...attrs } = this.props;
        const menuClasses = classNames({
            'rvt-dropdown__menu': true,
            [`rvt-dropdown__menu--${align}`]: !!align
        }, menuClass);
        return (
            <div className="rvt-dropdown" ref={this.dropdownWrapDiv}>
                <Button type="button" {...attrs} innerRef={this.toggleButton} className={className} aria-haspopup="true" aria-expanded={this.state.open} onClick={this.toggleDropdown}>
                    { label && <span className="rvt-dropdown__toggle-text">{label}</span> }
                    <Icon name="caret-down" />
                </Button>
    
                {this.state.open &&
                    <div className={menuClasses} aria-hidden={!this.state.open} role="menu">
                        {children}
                    </div>
                }
            </div>
        );
    }

    private toggleDropdown(event) {
        this.setState({ open: !this.state.open });
        // if there is a stopPropagation method on the event we need to call is to prevent additional events from firing
        event.stopPropagation && event.stopPropagation();
    }

    private handleClickOutside(event: DropdownEvent) {
        if(event && this.shouldToggleDropdown(event)) {
            this.toggleDropdown(event);

            if(event.isEscapeKeyPress() && this.toggleButton.current) {
                // If the user pressed the escape key and we have a current reference to the dropdown toggle button put focus back on it
                this.toggleButton.current.focus();
            }
        }
    }

    private shouldToggleDropdown = (event: DropdownEvent) => {
        if (event.isRightMouseClick() || event.isUnhandledKeyPress()) {
            // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
            return false;
        }

        const preventToggleOnInsideClick = !event.isKeyEvent() && !this.props.toggleDropdownOnClickInside;
        if (event.targets(this.dropdownWrapDiv.current) && (preventToggleOnInsideClick || event.isTabKeyPress())) {
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

export default Rivet.rivetize<DropdownProps & React.HTMLAttributes<HTMLButtonElement>>(Dropdown);
