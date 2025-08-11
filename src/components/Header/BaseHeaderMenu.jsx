/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import { useEffect, useRef, useState } from "react";
import { getFocusableElements, stillFocused } from "../util/EventUtils.js";
import { TestUtils } from "../util/TestUtils";

import "rivet-icons/dist/chevron-down.js";

/**
 * Dropdown menu component for use primary/secondary header navigations.
 */
const BaseHeaderMenu = ({
  children,
  label,
  menuButtonAttrs = {},
  menuUrl,
  current,
  testMode = false,
  ...attrs
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleButtonRef = useRef(null);
  const menuAnchorRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // put focus on the first menu item when the menu opens
    if (isMenuOpen) {
      focusMenuItem(0);
    }
  }, [isMenuOpen]);

  const focusMenuItem = (index) => {
    const children = getFocusableElements(dropdownRef.current);
    children[index].focus();
  };

  const toggleMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBlur = (event) => {
    if (!stillFocused(event)) {
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    const children = getFocusableElements(dropdownRef.current);
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        event.stopPropagation();
        setIsMenuOpen(false);
        toggleButtonRef.current.focus();
        break;
      case "ArrowDown":
        event.preventDefault();
        event.stopPropagation();
        if (
          event.target === toggleButtonRef.current ||
          event.target === menuAnchorRef.current
        ) {
          if (!isMenuOpen) {
            setIsMenuOpen(true);
          }
          focusMenuItem(0);
        } else {
          for (let i = 0; i < children.length; i++) {
            if (children[i] === document.activeElement) {
              const next = i === children.length - 1 ? 0 : i + 1;
              focusMenuItem(next);
              break;
            }
          }
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        event.stopPropagation();
        for (let i = 0; i < children.length; i++) {
          if (children[i] === document.activeElement) {
            const next = i === 0 ? children.length - 1 : i - 1;
            focusMenuItem(next);
            break;
          }
        }
        break;
    }
  };

  return (
    <div
      className="rvt-header-menu__dropdown rvt-dropdown"
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...(testMode && { "data-testid": TestUtils.Header.menuContainerTestId })}
      {...attrs}
    >
      <div className="rvt-header-menu__group">
        {menuUrl && (
          <a
            className="rvt-header-menu__link"
            href={menuUrl}
            ref={menuAnchorRef}
            {...(current && { "aria-current": "page" })}
            {...(testMode && {
              "data-testid": TestUtils.Header.menuAnchorTestId,
            })}
          >
            {label}
          </a>
        )}
        {!menuUrl && (
          <span
            {...(testMode && {
              "data-testid": TestUtils.Header.menuAnchorTestId,
            })}
          >
            {label}
          </span>
        )}
        <button
          ref={toggleButtonRef}
          aria-expanded={isMenuOpen}
          className="rvt-dropdown__toggle rvt-header-menu__toggle"
          onClick={toggleMenu}
          {...menuButtonAttrs}
          {...(testMode && {
            "data-testid": TestUtils.Header.menuButtonToggleTestId,
          })}
        >
          <span className="rvt-sr-only">Toggle Sub-navigation</span>
          <rvt-icon name="chevron-down" className="rvt-global-toggle__open" />
        </button>
      </div>
      <div
        className="rvt-header-menu__submenu rvt-dropdown__menu rvt-dropdown__menu--right"
        hidden={!isMenuOpen}
        ref={dropdownRef}
        {...(testMode && {
          "data-testid": TestUtils.Header.menuItemsContainerTestId,
        })}
      >
        <ul className="rvt-header-menu__submenu-list">{children}</ul>
      </div>
    </div>
  );
};

BaseHeaderMenu.displayName = "BaseHeaderMenu";
BaseHeaderMenu.propTypes = {
  /** Indicates item is current page if link with url */
  current: PropTypes.bool,
  /** The label of the menu */
  label: PropTypes.node,
  /** Attributes added to the menu's toggle button  */
  menuButtonAttrs: PropTypes.object,
  /** The navigation url for the menu label */
  menuUrl: PropTypes.string,
};

export default Rivet.rivetize(BaseHeaderMenu);
