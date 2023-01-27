/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import { useEffect, useRef } from "react";
import { handler } from "../Header/HeaderEventUtils.js";
import {
  isKeyEvent,
  isRightMouseClick,
  isTabKeyPress,
  targets,
} from "../util/EventUtils.js";
import { isUnhandledKeyPress } from "../Header/HeaderEventUtils.js";

const HeaderMenu = ({ children, label, href = "#", current, ...attrs }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const firstMenuItemRef = useRef(null);
  useEffect(() => {
    firstMenuItemRef.current.focus();
  }, [isMenuOpen]);

  const wrapperDivRef = useRef(null);

  const toggleMenu = (event) => {
    setIsMenuOpen(!isMenuOpen);
    event.stopPropagation && event.stopPropagation();
  };

  const handleClickOutside = (event) => {
    if (event && shouldToggleMenu(event)) {
      toggleMenu(event);
    }
  };

  const eventHandler = handler(handleClickOutside);

  const shouldToggleMenu = (event) => {
    if (
      isRightMouseClick(event) ||
      isUnhandledKeyPress(event) ||
      (isTabKeyPress(event) && targets(wrapperDivRef.current, event))
    ) {
      return false;
    }

    // const preventToggleOnInsideClick =
    //   !isKeyEvent(event) && !toggleDropdownOnClickInside;
    // if (
    //   targets(dropdownWrapDiv.current, event) &&
    //   (preventToggleOnInsideClick || isTabKeyPress(event))
    // ) {
    //   // If the user clicks, touches or tabs inside the dropdown do not close the menu
    //   return false;
    // }

    // if (is)

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
              ...(index === 0 && { ref: firstMenuItemRef }),
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
