/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import { useEffect, useRef } from "react";
import { handler, isUnhandledKeyPress } from "./HeaderEventUtils";
import Header from "./Header";
import BaseHeaderMenuItem from "./BaseHeaderMenuItem";
import {
  isEscapeKeyPress,
  isMouseEvent,
  isTabKeyPress,
  targets,
} from "../util/EventUtils";
import { TestUtils } from "../util/TestUtils";

const shouldToggleNavigation = (event, wrapperDivRef) => {
  if (
    isUnhandledKeyPress(event) ||
    isTabKeyPress(event) ||
    (isEscapeKeyPress(event) && !targets(wrapperDivRef.current, event)) ||
    (isMouseEvent(event) && targets(wrapperDivRef.current, event))
  ) {
    return false;
  }
  return true;
};

const BaseHeaderNavigation = ({ children, testMode = false, ...attrs }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  const wrapperDivRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const toggleNavigation = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const handleEvent = (event) => {
    if (event && shouldToggleNavigation(event, wrapperDivRef)) {
      toggleNavigation(event);
      if (isEscapeKeyPress(event)) {
        toggleButtonRef.current.focus();
      }
    }
  };

  const eventHandler = handler(handleEvent);

  const handleEventRegistration = () => {
    if (isNavMenuOpen) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  // Avatar and Search components need to be rendered inside the nav tag, but outside of the list
  const listItems = [];
  const otherHeaderMenuItems = [];
  React.Children.forEach(children, (child) => {
    if ([Header.Avatar, Header.Search].includes(child.type)) {
      otherHeaderMenuItems.push(child);
    } else {
      listItems.push(child);
    }
  });

  return (
    <div ref={wrapperDivRef} onKeyDown={handleEvent}>
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
        <Icon name={IconNames.TOGGLE_OPEN} />
        <Icon name={IconNames.TOGGLE_CLOSE} />
      </button>
      <nav
        aria-label="Main"
        className="rvt-header-menu"
        hidden={!isNavMenuOpen}
        {...(testMode && { "data-testid": TestUtils.Header.headerNavTestId })}
      >
        <ul className={"rvt-header-menu__list"}>{listItems}</ul>
        {otherHeaderMenuItems}
      </nav>
    </div>
  );
};

BaseHeaderNavigation.displayName = "BaseHeaderNavigation";

BaseHeaderNavigation.propTypes = {
  /** All children must be BaseHeaderMenuItem, Header.Avatar, or Header.Search */
  children: (props, propName) => {
    let propValue = props[propName];
    if (!Array.isArray(propValue)) {
      propValue = [propValue];
    }
    const validChildren = [BaseHeaderMenuItem, Header.Avatar, Header.Search];
    propValue.forEach((value) => {
      if (!validChildren.includes(value.type)) {
        throw new Error(
          `children must only contain ${validChildren} components`
        );
      }
    });
  },
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(BaseHeaderNavigation);
