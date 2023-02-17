/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import { useEffect, useRef } from "react";
import { handler, isUnhandledKeyPress } from "./HeaderEventUtils";
import {
  isEscapeKeyPress,
  isMouseEvent,
  isRightMouseClick,
  isTabKeyPress,
  targets,
} from "../util/EventUtils";
import { TestUtils } from "../util/TestUtils";
import { renderHeaderUnorderedList } from "./childUtils";

const HeaderNavigation = ({ children, ...attrs }) => {
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
    if (event && shouldToggleNavigation(event)) {
      toggleNavigation(event);
      // if menu is being closed through an escape key press, put focus back on the toggle button
      if (isEscapeKeyPress(event)) {
        toggleButtonRef.current.focus();
      }
    }
  };

  const eventHandler = handler(handleEvent);

  const shouldToggleNavigation = (event) => {
    if (
      isRightMouseClick(event) ||
      isUnhandledKeyPress(event) ||
      isTabKeyPress(event) ||
      (isEscapeKeyPress(event) && !targets(wrapperDivRef.current, event)) ||
      (isMouseEvent(event) && targets(wrapperDivRef.current, event))
    ) {
      return false;
    }

    return true;
  };

  const handleEventRegistration = () => {
    if (isNavMenuOpen) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  return (
    <div ref={wrapperDivRef}>
      <button
        ref={toggleButtonRef}
        aria-expanded={isNavMenuOpen}
        className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
        onClick={toggleNavigation}
        data-testid={TestUtils.Header.navButtonToggleTestId}
      >
        <span className="rvt-sr-only">Menu</span>
        <Icon name={IconNames.TOGGLE_OPEN} />
        <Icon name={IconNames.TOGGLE_CLOSE} />
      </button>
      <nav
        aria-label="Main"
        className="rvt-header-menu"
        hidden={!isNavMenuOpen}
        data-testid={TestUtils.Header.headerNavTestId}
      >
        {React.Children.map(children, renderHeaderUnorderedList)}
      </nav>
    </div>
  );
};

HeaderNavigation.displayName = "Header.Navigation";

export default Rivet.rivetize(HeaderNavigation);
