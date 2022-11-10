/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import * as Rivet from "../util/Rivet";
import {
  isEscapeKeyPress,
  isKeyEvent,
  isRightMouseClick,
  isTabKeyPress,
  targets,
} from "../util/EventUtils.js";
import { handler, isUnhandledKeyPress } from "./DropdownEventUtils.js";
import { Button } from "../Button";
import classNames from "classnames";
import * as PropTypes from "prop-types";

const Dropdown = ({
  toggleDropdownOnClickInside = false,
  align = "left",
  children,
  className,
  label,
  menuClass,
  modifier = "secondary",
  size = "small",
  ...attrs
}) => {
  const handleClickOutside = (event) => {
    if (event && shouldToggleDropdown(event)) {
      toggleDropdown(event);

      if (isEscapeKeyPress(event) && toggleButton.current) {
        // If the user pressed the escape key and we have a current reference to the dropdown toggle button put focus back on it
        toggleButton.current.focus();
      }
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    handleEventRegistration();
    return () => {
      eventHandler.deregister();
    };
  });

  const toggleButton = React.createRef();
  const dropdownWrapDiv = React.createRef();
  const eventHandler = handler(handleClickOutside);

  const menuClasses = classNames(
    {
      "rvt-dropdown__menu": true,
      [`rvt-dropdown__menu--${align}`]: !!align,
    },
    menuClass
  );

  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
    // if there is a stopPropagation method on the event we need to call it to prevent additional events from firing
    event.stopPropagation && event.stopPropagation();
  };

  const shouldToggleDropdown = (event) => {
    if (isRightMouseClick(event) || isUnhandledKeyPress(event)) {
      // If the user right clicks anywhere on the screen or they press an unhandled key do not close the menu
      return false;
    }

    const preventToggleOnInsideClick =
      !isKeyEvent(event) && !toggleDropdownOnClickInside;
    if (
      targets(dropdownWrapDiv.current) &&
      (preventToggleOnInsideClick || isTabKeyPress(event))
    ) {
      // If the user clicks, touches or tabs inside the dropdown do not close the menu
      return false;
    }

    return true;
  };

  const handleEventRegistration = () => {
    if (isOpen) {
      eventHandler.register();
    } else {
      eventHandler.deregister();
    }
  };

  return (
    <div
      className="rvt-dropdown"
      data-rvt-dropdown="dropdownNavigation"
      ref={dropdownWrapDiv}
    >
      <Button
        type="button"
        {...attrs}
        innerRef={toggleButton}
        className={className}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        {label && <span className="rvt-dropdown__toggle-text">{label}</span>}
        {/* begin todo - replace with Icon component */}
        <svg
          role="img"
          alt=""
          className="rvt-m-left-xs"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8,12.46a2,2,0,0,1-1.52-.7L1.24,5.65a1,1,0,1,1,1.52-1.3L8,10.46l5.24-6.11a1,1,0,0,1,1.52,1.3L9.52,11.76A2,2,0,0,1,8,12.46Z"
          />
        </svg>
        {/* end todo - replace with Icon component */}
      </Button>
      {isOpen && (
        <div className={menuClasses} aria-hidden={!isOpen} role="menu">
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = "Dropdown";
Dropdown.propTypes = {
  /** Optional Rivet style: alignment of the dropdown menu items relative to the edge of the dropdown button. */
  align: PropTypes.string,
  /**
   * Optional text which appears on the dropdown toggle button. The label
   * should always be provided with a standalone dropdown, however the label
   * can be omitted if the dropdown is part of a SegmentedButton.
   * @see https://rivet.uits.iu.edu/components/navigation/dropdown/
   * @see https://rivet.uits.iu.edu/components/forms/buttons-segmented/#using-segmented-buttons-with-dropdowns
   */
  label: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  /** Optional CSS classes which will be applied to the dropdown menu */
  menuClass: PropTypes.string,
  /** Optional Rivet style: a secondary button. */
  modifier: PropTypes.string,
  /** Optional Rivet style: a small button. */
  size: PropTypes.string,
  /** Optional flag to toggle the dropdown open state when a click is done within the dropdown contents */
  toggleDropdownOnClickInside: PropTypes.bool,
  /**
   * Optional Rivet style: a success/danger/plain button.
   * The 'navigation' variant is intended to support the Header component only.
   */
  variant: PropTypes.oneOf(["success", "danger", "plain"]),
};

export default Rivet.rivetize(Dropdown);
