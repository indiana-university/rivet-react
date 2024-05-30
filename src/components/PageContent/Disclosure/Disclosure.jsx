/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { createRef, useEffect, useState } from "react";
import * as Rivet from "../../util/Rivet";
import {
  handler,
  isKeyEvent,
  isRightMouseClick,
  isTabKeyPress,
  targets,
} from "../../util/EventUtils.js";
import { TestUtils } from "../../util/TestUtils.js";

const disclosureClass = "rvt-disclosure";

const Disclosure = ({
  children,
  className,
  closeClickOutside,
  id = Rivet.shortuid(),
  isOpen,
  title,
  ...attrs
}) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const handleClickOutside = (event) => {
    if (event && shouldToggleDisclosure(event)) {
      toggleDisclosure(event);
    }
  };

  const disclosureWrapDiv = createRef();
  const eventHandler = handler(handleClickOutside);

  const toggleDisclosure = (event) => {
    setIsOpenState(!isOpenState);
    // if there is a stopPropagation method on the event we need to call it to prevent additional events from firing
    event.stopPropagation && event.stopPropagation();
  };

  const shouldToggleDisclosure = (event) => {
    if (isRightMouseClick(event) || isKeyEvent(event)) {
      // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
      return false;
    } else if (
      targets(disclosureWrapDiv.current, event)
    ) {
      // If the user clicks, touches or tabs inside the disclosure do not close the menu
      return false;
    }

    return true;
  };

  const handleEventRegistration = () => {
    if (isOpenState && closeClickOutside) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  return (
    <div
      id={id}
      className={classNames(disclosureClass, className)}
      ref={disclosureWrapDiv}
      {...attrs}
    >
      <button
        className="rvt-disclosure__toggle"
        onClick={toggleDisclosure}
        aria-expanded={isOpenState ? "true" : "false"}
      >
        {title}
      </button>
      {isOpenState && (
        <div
          className="rvt-disclosure__content"
          data-testid={TestUtils.Disclosure.testId}
        >
          {children}
        </div>
      )}
    </div>
  );
};

Disclosure.displayName = "Disclosure";
Disclosure.propTypes = {
  /** Determines whether the Disclosure closes when the user clicks anywhere outside of it */
  closeClickOutside: PropTypes.bool,
  /** A unique identifier for the badge */
  id: PropTypes.string,
  /** Determines whether the Disclosure is open or not */
  isOpen: PropTypes.bool,
  /** The content of the Disclosure button */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Rivet.rivetize(Disclosure);
