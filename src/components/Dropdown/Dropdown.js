/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import Button, { buttonPropTypes } from '../Button/Button';
import * as Rivet from '../util/Rivet';
import Icon from '../util/RivetIcons';
import DropdownEvent from './DropdownEvent';
import PropTypes from 'prop-types';

const propTypes = {
  ...buttonPropTypes,
  /** Optional Rivet style: alignment of the dropdown menu items relative to the edge of the dropdown button. */
  align: PropTypes.oneOf(['right']),
  /**
   * Optional text which appears on the dropdown toggle button. The label 
   * should always be provided with a standalone dropdown, however the label
   * can be omitted if the dropdown is part of a SegmentedButton.
   * @see https://rivet.uits.iu.edu/components/navigation/dropdown/
   * @see https://rivet.uits.iu.edu/components/forms/buttons-segmented/#using-segmented-buttons-with-dropdowns
   */
  label: PropTypes.node,
  /**
   * Optional CSS classes which will be applied to the dropdown menu
   */
  menuClass: PropTypes.string,
  /** Optional flag to toggle the dropdown open state when a click is done within the dropdown contents */
  toggleDropdownOnClickInside: PropTypes.bool
};

const initialState = { open: false }

export class Dropdown extends React.PureComponent {

    state = initialState;
    toggleButton;
    eventHandler;

    constructor(props) {
        super(props);
        this.toggleButton = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.eventHandler = DropdownEvent.handler(this.handleClickOutside);
    }

    componentDidMount() {
        this.handleEventRegistration();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.open !== prevState.open) {
            this.handleEventRegistration();
        }
    }

    componentWillUnmount() {
        this.eventHandler.deregister();
    }

    render() {
        // We don't want toggleDropdownOnClickInside passed to nested components, but we also don't have anything to do with it when rendering, so...
        // eslint-disable-next-line no-unused-vars
        const { align, children, className, label, menuClass, toggleDropdownOnClickInside = false, ...attrs } = this.props;
        const menuClasses = classNames({
            'rvt-dropdown__menu': true,
            [`rvt-dropdown__menu--${align}`]: !!align
        }, menuClass);
        return (
            <div className="rvt-dropdown">
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

    toggleDropdown(event) {
        this.setState({ open: !this.state.open });
    }

    handleClickOutside(event) {
        if(event && this.shouldToggleDropdown(event)) {
            this.toggleDropdown(event);

            if(event.isEscapeKeyPress() && this.toggleButton.current) {
                // If the user pressed the escape key and we have a current reference to the dropdown toggle button put focus back on it
                this.toggleButton.current.focus();
            }
        }
    }

    shouldToggleDropdown = (event) => {
        if (event.isRightMouseClick() || event.isUnhandledKeyPress()) {
            // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
            return false;
        }

        const preventToggleOnInsideClick = !event.isKeyEvent() && !this.props.toggleDropdownOnClickInside;
        if (event.targets(ReactDOM.findDOMNode(this)) && (preventToggleOnInsideClick || event.isTabKeyPress())) {
            // If the user clicks, touches or tabs inside the dropdown do not close the menu
            return false;
        }

        return true;
    }

    handleEventRegistration = () => {
        if(this.state.open) {
            this.eventHandler.register();
        } else {
            this.eventHandler.deregister();
        }
    }

}

Dropdown.propTypes = propTypes;

export default Rivet.rivetize(Dropdown);
