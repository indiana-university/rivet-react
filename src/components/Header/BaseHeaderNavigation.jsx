/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";
import { v5 as uuidv5 } from "uuid";

import * as Rivet from "../util/Rivet";
import { useEffect, useRef } from "react";
import Header from "./Header";
import BaseHeaderMenuItem from "./BaseHeaderMenuItem";
import HeaderAvatar from "./HeaderAvatar";
import HeaderSearch from "./HeaderSearch";
import { getFocusableElements, stillFocused } from "../util/EventUtils";
import { TestUtils } from "../util/TestUtils";

import "rivet-icons/dist/close.js";
import "rivet-icons/dist/menu.js";
import button from "../Button/Button.jsx";

// This is a randomly generated UUID namespace so that we can create consistent keys for list item children
const UUID_NAMESPACE = "f9e6c1d0-3b8a-4f5e-9c7a-2f3b1c6d7e8f";

const BaseHeaderNavigation = ({ children, testMode = false, ...attrs }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  const toggleButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // put focus on the first menu item when the menu opens
    if (isNavMenuOpen) {
      focusMenuItem(0);
    }
  }, [isNavMenuOpen]);

  const toggleNavigation = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const focusMenuItem = (index) => {
    const children = getFocusableElements(dropdownRef.current, "[tabindex]");
    children[index].focus();
  };

  const handleBlur = (event) => {
    if (!stillFocused(event)) {
      setIsNavMenuOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (
      window.getComputedStyle(toggleButtonRef.current, null).display == "none"
    ) {
      // Untested due to limitations with jest and computed styles
      return;
    }
    const children = getFocusableElements(dropdownRef.current);
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        event.stopPropagation();
        setIsNavMenuOpen(false);
        toggleButtonRef.current.focus();
        break;
      case "ArrowDown":
        event.preventDefault();
        event.stopPropagation();
        if (event.target === toggleButtonRef.current) {
          if (!isNavMenuOpen) {
            setIsNavMenuOpen(true);
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

  // Avatar and Search components need to be rendered inside the nav tag, but outside of the list
  const listItems = [];
  const otherHeaderMenuItems = [];
  React.Children.map(children, (child) => {
    if (child) {
      if (
        [BaseHeaderMenuItem, "li"].includes(child.type) ||
        (child.props["data-navlistitem"] ?? false) !== false
      ) {
        // We want to strip the invalid HTML attribute "data-navlistitem" from the list item, but we still want to use it to determine if the item should be rendered inside the list or not. So we destructure it out of the props and then spread the rest of the props into the cloned element.
        const { "data-navlistItem": dataNavlistItem, ...rest } = child.props;
        listItems.push(
          React.cloneElement(child, {
            key: uuidv5(JSON.stringify(rest), UUID_NAMESPACE),
            ...rest,
          }),
        );
      } else {
        otherHeaderMenuItems.push(
          React.cloneElement(child, {
            key: uuidv5(JSON.stringify(child.props), UUID_NAMESPACE),
            ...child.props,
          }),
        );
      }
    }
  });

  return (
    <div onBlur={handleBlur} onKeyDown={handleKeyDown} tabIndex={-1}>
      <button
        aria-expanded={isNavMenuOpen}
        className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
        onClick={toggleNavigation}
        ref={toggleButtonRef}
        data-testid={testMode ? TestUtils.Header.navButtonToggleTestId : null}
      >
        <span className="rvt-sr-only">Menu</span>
        {!isNavMenuOpen && (
          <rvt-icon
            className="rvt-global-toggle__open"
            name="menu"
            data-testid={testMode ? TestUtils.Header.navButtonToggleIcon : null}
          />
        )}
        {isNavMenuOpen && (
          <rvt-icon
            className="rvt-global-toggle__close"
            name="close"
            data-testid={testMode ? TestUtils.Header.navButtonToggleIcon : null}
          />
        )}
      </button>
      <nav
        aria-label="Main"
        className="rvt-header-menu"
        hidden={!isNavMenuOpen}
        ref={dropdownRef}
        data-testid={testMode ? TestUtils.Header.headerNavTestId : null}
      >
        <ul className="rvt-header-menu__list">
          {React.Children.toArray(listItems)}
        </ul>
        {React.Children.toArray(otherHeaderMenuItems)}
      </nav>
    </div>
  );
};

BaseHeaderNavigation.displayName = "BaseHeaderNavigation";
/* istanbul ignore next */
BaseHeaderNavigation.propTypes = {
  /** All children must be 'li', BaseHeaderMenuItem, Header.Avatar, or Header.Search */
  children: PropTypes.shape({
    type: PropTypes.oneOf([
      "li",
      BaseHeaderMenuItem,
      HeaderAvatar,
      HeaderSearch,
    ]),
    "data-navlistitem": PropTypes.bool,
  }),
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(BaseHeaderNavigation);
