/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import { useEffect, useRef, useState } from "react";
import { handler } from "../Header/HeaderEventUtils.js";
import {
  getFocusableElements,
  isArrowDownKeyPress,
  isArrowKeyPress,
  isArrowUpKeyPress,
  isEscapeKeyPress,
  isTabKeyPress,
  targets,
} from "../util/EventUtils.js";
import { isUnhandledKeyPress } from "../Header/HeaderEventUtils.js";
import { TestUtils } from "../util/TestUtils";

const shouldToggleMenu = (event, wrapperDivRef) => {
  if (
    isArrowKeyPress(event) ||
    isUnhandledKeyPress(event) ||
    isTabKeyPress(event) ||
    (isEscapeKeyPress(event) && !targets(wrapperDivRef.current, event))
  ) {
    return false;
  }
  return true;
};

/**
 * Dropdown menu component for use primary/secondary header navigations.
 */
const BaseHeaderMenu = ({
  children,
  label,
  menuUrl,
  current, 
  testMode = false,
  ...attrs
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [focusedItemIndex, setFocusedItemIndex] = useState(null);

  const wrapperDivRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const menuAnchorRef = useRef(null);
  const dropdownRef = useRef(null);
  

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  useEffect(() => {
    // put focus on the first menu item when the menu opens
    if (isMenuOpen) {
      focusMenuItem(0);
    }
  }, [isMenuOpen]);

  const getRefsMap = () => {
    const children = getFocusableElements(dropdownRef.current)
    return getFocusableElements(dropdownRef.current)
  };

  const focusMenuItem = (index) => {
    getRefsMap()[index].focus();
    setFocusedItemIndex(index);
  };

  const toggleMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEvent = (event) => {
    if (shouldToggleMenu(event, wrapperDivRef)) {
      toggleMenu(event);
      // if menu is being closed through an escape key press, put focus back on the toggle button
      if (isEscapeKeyPress(event)) {
        toggleButtonRef.current.focus();
      }
    } else if (isArrowKeyPress(event)) {
      event.preventDefault();
      event.stopPropagation();
      handleArrowKeyPress(event);
    }
  };

  const eventHandler = handler(handleEvent);

  const handleEventRegistration = () => {
    if (isMenuOpen) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  const handleArrowKeyPress = (event) => {
    // no need to do anything if menu is closed
    if (!isMenuOpen) {
      return;
    }
    // if ArrowDown is pressed while focus is on anchor or toggle button, put focus on first menu item
    if (
      (event.target === toggleButtonRef.current ||
        event.target === menuAnchorRef.current) &&
      isArrowDownKeyPress(event)
    ) {
      focusMenuItem(0);
      return;
    }
    if (isArrowDownKeyPress(event)) {
      focusMenuItem(
        focusedItemIndex === children.length - 1 ? 0 : focusedItemIndex + 1
      );
    }
    if (isArrowUpKeyPress(event)) {
      focusMenuItem(
        focusedItemIndex === 0 ? children.length - 1 : focusedItemIndex - 1
      );
    }
  };

  return (
    <div
      className="rvt-header-menu__dropdown rvt-dropdown"
      ref={wrapperDivRef}
      onKeyDown={handleEvent}
      {...(testMode && { "data-testid": TestUtils.Header.menuContainerTestId })}
    >
      <div className="rvt-header-menu__group">
        {
          menuUrl &&
            <a
              className="rvt-header-menu__link"
              href={menuUrl}
              ref={menuAnchorRef}
              {...(current && { "aria-current": "page" })}
              {...(testMode && { "data-testid": TestUtils.Header.menuAnchorTestId })}
            >
              {label}
            </a>
        }
        {!menuUrl && <span {...(testMode && { "data-testid": TestUtils.Header.menuAnchorTestId })}>{label}</span>}
        <button
          ref={toggleButtonRef}
          aria-expanded={isMenuOpen}
          className="rvt-dropdown__toggle rvt-header-menu__toggle"
          onClick={toggleMenu}
          {...(testMode && { "data-testid": TestUtils.Header.menuButtonToggleTestId })}
        >
          <span className="rvt-sr-only">Toggle Sub-navigation</span>
          <Icon
            name={IconNames.CARET_DOWN}
            className={"rvt-global-toggle__open"}
          />
        </button>
      </div>
      <div
        className="rvt-header-menu__submenu rvt-dropdown__menu rvt-dropdown__menu--right"
        hidden={!isMenuOpen}
        ref={dropdownRef}
        {...(testMode && { "data-testid": TestUtils.Header.menuItemsContainerTestId })}
      >
        <ul className="rvt-header-menu__submenu-list">
          {children}
        </ul>
      </div>
    </div>
  );
};

BaseHeaderMenu.displayName = "BaseHeaderMenu";
BaseHeaderMenu.propTypes = {
  /** Indicates item is current page if link with url */
  current: PropTypes.bool,
  /** The label of the menu */
  label: PropTypes.string.isRequired,
  /** The navigation url for the menu label */
  menuUrl: PropTypes.string,
};

export default Rivet.rivetize(BaseHeaderMenu);
