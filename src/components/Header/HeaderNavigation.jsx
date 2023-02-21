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
  isTabKeyPress,
  targets,
} from "../util/EventUtils";
import { TestUtils } from "../util/TestUtils";
import { renderHeaderNavUnorderedList } from "./childUtils";
import { findFirstChildOfType } from "../util/childUtils";
import HeaderAvatar from "./HeaderAvatar";

const HeaderNavigation = ({ children, ...attrs }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  const wrapperDivRef = useRef(null);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const avatarChild = findFirstChildOfType(children, HeaderAvatar.displayName);

  const toggleNavigation = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const handleEvent = (event) => {
    if (event && shouldToggleNavigation(event)) {
      toggleNavigation(event);
    }
  };

  const eventHandler = handler(handleEvent);

  const shouldToggleNavigation = (event) => {
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
        {React.Children.map(children, renderHeaderNavUnorderedList)}
        {avatarChild}
      </nav>
    </div>
  );
};

HeaderNavigation.displayName = "Header.Navigation";

export default Rivet.rivetize(HeaderNavigation);
