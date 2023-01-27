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
  isArrowDownKeyPress,
  isArrowUpKeyPress,
  isEscapeKeyPress,
  isRightMouseClick,
  isTabKeyPress,
  targets,
} from "../util/EventUtils.js";
import { isUnhandledKeyPress } from "../Header/HeaderEventUtils.js";

const HeaderMenu = ({ children, label, href = "#", current, ...attrs }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [focusedItemIndex, setFocusedItemIndex] = useState(null);

  const menuItemsRef = useRef(null);
  const wrapperDivRef = useRef(null);
  const toggleButtonRef = useRef(null);

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
    if (!menuItemsRef.current) {
      menuItemsRef.current = new Map();
    }
    return menuItemsRef.current;
  };

  const focusMenuItem = (index) => {
    getRefsMap().get(index).focus();
    setFocusedItemIndex(index);
  };

  const toggleMenu = (event) => {
    setIsMenuOpen(!isMenuOpen);
    event.stopPropagation && event.stopPropagation();
  };

  const handleEvent = (event) => {
    if (event && shouldToggleMenu(event)) {
      toggleMenu(event);
      // if button is being closed through an escape key press, put focus back on the toggle button
      if (isEscapeKeyPress(event)) {
        toggleButtonRef.current.focus();
      }
    }
  };

  const eventHandler = handler(handleEvent);

  const shouldToggleMenu = (event) => {
    if (
      isRightMouseClick(event) ||
      isUnhandledKeyPress(event) ||
      (isTabKeyPress(event) && targets(wrapperDivRef.current, event)) ||
      (isEscapeKeyPress(event) && !targets(wrapperDivRef.current, event))
    ) {
      return false;
    }

    return true;
  };

  const handleEventRegistration = () => {
    if (isMenuOpen) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  const renderChild = (child, index) => {
    return (
      <li
        className="rvt-header-menu__submenu-item"
        key={"header-submenu-item-" + index}
      >
        {child.type === "a"
          ? React.cloneElement(child, {
              className: "rvt-header-menu__submenu-link",
              ref: (node) => {
                const map = getRefsMap();
                if (node) {
                  map.set(index, node);
                } else {
                  map.delete(index);
                }
              },
              onKeyUp: (event) => {
                if (Array.isArray(children)) {
                  if (isArrowDownKeyPress(event)) {
                    focusMenuItem(
                      focusedItemIndex === children.length - 1
                        ? 0
                        : focusedItemIndex + 1
                    );
                  }
                  if (isArrowUpKeyPress(event)) {
                    focusMenuItem(
                      focusedItemIndex === 0
                        ? children.length - 1
                        : focusedItemIndex - 1
                    );
                  }
                }
              },
            })
          : child}
      </li>
    );
  };

  return (
    <div className="rvt-header-menu__dropdown rvt-dropdown" ref={wrapperDivRef}>
      <div className="rvt-header-menu__group">
        <a
          className="rvt-header-menu__link"
          href={href}
          onClick={(e) => toggleMenu(e)}
          {...(current && { "aria-current": "page" })}
        >
          {label}
        </a>
        <button
          ref={toggleButtonRef}
          aria-expanded={isMenuOpen}
          className="rvt-dropdown__toggle rvt-header-menu__toggle"
          onClick={(e) => toggleMenu(e)}
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
      >
        <ul className="rvt-header-menu__submenu-list">
          {React.Children.map(children, renderChild)}
        </ul>
      </div>
    </div>
  );
};

HeaderMenu.displayName = "Header.Menu";
HeaderMenu.propTypes = {
  /** The label of the menu */
  label: PropTypes.string.isRequired,
  /** The link that the corresponding anchor redirects to */
  href: PropTypes.string,
};

export default Rivet.rivetize(HeaderMenu);
