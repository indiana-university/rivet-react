/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import { useEffect, useRef } from "react";
import Header from "./Header";
import BaseHeaderMenuItem from "./BaseHeaderMenuItem";
import { getFocusableElements, stillFocused } from "../util/EventUtils";
import { TestUtils } from "../util/TestUtils";

import "rivet-icons/dist/close.js";
import "rivet-icons/dist/menu.js";
import button from "../Button/Button.jsx";

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
  React.Children.forEach(children, (child) => {
    if (
      child &&
      ([BaseHeaderMenuItem, "li"].includes(child.type) ||
        child.props.navlistitem)
    ) {
      listItems.push(child);
    } else {
      otherHeaderMenuItems.push(child);
    }
  });

  return (
    <div onBlur={handleBlur} onKeyDown={handleKeyDown} tabIndex={-1}>
      <button
        aria-expanded={isNavMenuOpen}
        className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
        onClick={toggleNavigation}
        ref={toggleButtonRef}
        {...(testMode && {
          "data-testid": TestUtils.Header.navButtonToggleTestId,
        })}
      >
        <span className="rvt-sr-only">Menu</span>
        {!isNavMenuOpen && (
          <rvt-icon
            className="rvt-global-toggle__open"
            name="menu"
            {...(testMode && {
              "data-testid": TestUtils.Header.navButtonToggleIcon,
            })}
          />
        )}
        {isNavMenuOpen && (
          <rvt-icon
            className="rvt-global-toggle__close"
            name="close"
            {...(testMode && {
              "data-testid": TestUtils.Header.navButtonToggleIcon,
            })}
          />
        )}
      </button>
      <nav
        aria-label="Main"
        className="rvt-header-menu"
        hidden={!isNavMenuOpen}
        ref={dropdownRef}
        {...(testMode && { "data-testid": TestUtils.Header.headerNavTestId })}
      >
        <ul className="rvt-header-menu__list">{listItems}</ul>
        {otherHeaderMenuItems}
      </nav>
    </div>
  );
};

BaseHeaderNavigation.displayName = "BaseHeaderNavigation";

BaseHeaderNavigation.propTypes = {
  /** All children must be 'li', BaseHeaderMenuItem, Header.Avatar, or Header.Search */
  children: (props, propName) => {
    let propValue = props[propName];
    const validChildren = [
      "li",
      BaseHeaderMenuItem,
      Header.Avatar,
      Header.Search,
    ];
    React.Children.forEach(propValue, (child) => {
      if (
        child &&
        !(validChildren.includes(child.type) || child.props.navlistitem)
      ) {
        throw new Error(
          `each child should be of type ${validChildren} or have navlistitem property set as true`,
        );
      }
    });
  },
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(BaseHeaderNavigation);
