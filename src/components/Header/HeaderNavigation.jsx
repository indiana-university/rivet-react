/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";

import * as Rivet from "../util/Rivet";
import "rivet-icons/dist/chevron-up.js";
import "rivet-icons/dist/chevron-down.js";
import { useEffect, useMemo, useRef } from "react";
import { handler, isUnhandledKeyPress } from "./HeaderEventUtils";
import { renderHeaderNavUnorderedList, simplify } from "./childUtils";
import {
  isEscapeKeyPress,
  isMouseEvent,
  isTabKeyPress,
  targets,
} from "../util/EventUtils";
import { TestUtils } from "../util/TestUtils";
import PropTypes from "prop-types";

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

const HeaderNavigation = ({ avatar, children, ...attrs }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  const wrapperDivRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const wrappedChildren = useMemo(() => {
    return React.Children.map(renderHeaderNavUnorderedList);
  }, [children]);

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

  return (
    <div ref={wrapperDivRef} onKeyDown={handleEvent}>
      <button
        aria-expanded={isNavMenuOpen}
        className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
        onClick={toggleNavigation}
        data-testid={TestUtils.Header.navButtonToggleTestId}
        ref={toggleButtonRef}
      >
        <span className="rvt-sr-only">Menu</span>
        <rvt-icon name="chevron-up" />
        <rvt-icon name="chevron-down" />
      </button>
      <nav
        aria-label="Main"
        className="rvt-header-menu"
        hidden={!isNavMenuOpen}
        data-testid={TestUtils.Header.headerNavTestId}
      >
        {wrappedChildren}
        {avatar}
      </nav>
    </div>
  );
};

HeaderNavigation.displayName = "Header.Navigation";

HeaderNavigation.propTypes = {
  /** The Avatar component */
  avatar: PropTypes.element,
};

export default Rivet.rivetize(HeaderNavigation);
