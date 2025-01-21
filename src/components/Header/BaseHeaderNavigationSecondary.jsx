/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import {
  isEscapeKeyPress,
  isMouseEvent,
  isTabKeyPress,
  targets,
} from "../util/EventUtils";
import { TestUtils } from "../util/TestUtils";
import { handler, isUnhandledKeyPress } from "./HeaderEventUtils";

import "../../util/icons/chevron-down.js";

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

/**
 *
 */
const BaseHeaderNavigationSecondary = ({
  navWidth = "xl",
  title,
  titleUrl,
  children,
  testMode = false,
  ...attrs
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const wrapperDivRef = useRef(null);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEvent = (event) => {
    if (event && shouldToggleNavigation(event, wrapperDivRef)) {
      toggleNavigation(event);
    }
  };

  const eventHandler = handler(handleEvent);

  const handleEventRegistration = () => {
    if (isExpanded) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  return (
    <div
      className="rvt-header-local"
      ref={wrapperDivRef}
      onKeyDown={handleEvent}
    >
      <div
        className={"rvt-container-" + navWidth}
        {...(testMode && {
          "data-testid": TestUtils.Header.secondaryNavContainerTestId,
        })}
      >
        <div className="rvt-header-local__inner">
          {titleUrl && (
            <a href={titleUrl} className="rvt-header-local__title">
              {title}
            </a>
          )}
          {!titleUrl && (
            <span className="rvt-header-local__title">{title}</span>
          )}
          <button
            aria-expanded={isExpanded}
            className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
            onClick={toggleNavigation}
            {...(testMode && {
              "data-testid": TestUtils.Header.secondaryNavToggleTestId,
            })}
          >
            <span className="rvt-sr-only">Toggle local menu</span>
            <rvt-react-icon name="chevron-down" />
          </button>
          <nav
            aria-label="Secondary"
            className="rvt-header-menu"
            hidden={!isExpanded}
            {...(testMode && {
              "data-testid": TestUtils.Header.secondaryNavTestId,
            })}
          >
            <ul className={"rvt-header-menu__list"}>{children}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

BaseHeaderNavigationSecondary.displayName = "BaseHeaderNavigationSecondary";
BaseHeaderNavigationSecondary.propTypes = {
  /** Optional prop to constrain the width of all content in the header */
  navWidth: PropTypes.oneOf([
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "3-xl",
    "4-xl",
  ]),
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The title for the navigation */
  title: PropTypes.string.isRequired,
  /** Url for the navigation title */
  titleUrl: PropTypes.string,
};

export default Rivet.rivetize(BaseHeaderNavigationSecondary);
