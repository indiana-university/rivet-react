import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";
import {
  isEscapeKeyPress,
  isMouseEvent,
  isTabKeyPress,
  targets,
} from "../util/EventUtils";
import { handler, isUnhandledKeyPress } from "./HeaderEventUtils";
import { TestUtils } from "../util/TestUtils";
import { renderHeaderUnorderedList } from "./childUtils";

const HeaderNavigationSecondary = ({
  navWidth = "xl",
  title,
  href = "#",
  children,
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
    if (isExpanded) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  return (
    <div className="rvt-header-local" ref={wrapperDivRef}>
      <div
        className={"rvt-container-" + navWidth}
        data-testid={TestUtils.Header.secondaryNavContainerTestId}
      >
        <div className="rvt-header-local__inner">
          <a href={href} className="rvt-header-local__title">
            {title}
          </a>
          <button
            aria-expanded={isExpanded}
            className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
            onClick={toggleNavigation}
            data-testid={TestUtils.Header.secondaryNavToggleTestId}
          >
            <span className="rvt-sr-only">Toggle local menu</span>
            <Icon name={IconNames.CARET_DOWN} />
          </button>
          <nav
            aria-label="Secondary"
            className="rvt-header-menu"
            hidden={!isExpanded}
            data-testid={TestUtils.Header.secondaryNavTestId}
          >
            {React.Children.map(children, renderHeaderUnorderedList)}
          </nav>
        </div>
      </div>
    </div>
  );
};

HeaderNavigationSecondary.displayName = "Header.NavigationSecondary";
HeaderNavigationSecondary.propTypes = {
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
  /** The title of the anchor */
  title: PropTypes.string.isRequired,
  /** The URL that the anchor will redirect to */
  href: PropTypes.string,
};

export default Rivet.rivetize(HeaderNavigationSecondary);
