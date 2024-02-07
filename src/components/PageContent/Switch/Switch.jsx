/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import React, { useState }  from "react";
import * as PropTypes from "prop-types";
import { TestUtils } from "../../util/TestUtils";

/**
 * Allow users to toggle a configuration option between "on" and "off" states
 */
const Switch = ({
  label,
  className,
  children,
  onClick,
  startOn = false,
  testMode,
  variant,
  ...attrs
}) => {
  const [on, setOn] = useState(startOn)
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const value = !on
    setOn(value)
    if(onClick) {
      onClick(value, e)
    }
  }
  const variantOptions = variant ? Array.isArray(variant) ? variant : [variant] : []
  const variantClasses = variantOptions.map(value => {
    switch(value) {
      case "danger":
        return "rvt-switch--danger"
      case "small":
        return "rvt-switch--small"
      default:
        return ""
    }
  })
  const classNameArr = [
    "rvt-switch",
    ...variantClasses,
    className
  ]

  return (
    <button
      aria-checked={on}
      aria-label={label}
      className={classNames(classNameArr)}
      onClick={handleClick}
      role="switch"
      {...(testMode && { "data-testid": TestUtils.Switch.container })}
      {...attrs}
    >
      <span class="rvt-switch__on">On</span>
      <span class="rvt-switch__off">Off</span>
    </button>
  );
};
Switch.displayName = "Switch";
Switch.propTypes = {
  /** An unseen label for the menu to help with accessibility */
  label: PropTypes.string.isRequired,
  /** Supplement function ran when switch is clicked, parameters (newSwitchState, clickEvent) */
  onClick: PropTypes.func,
  /** Initial on/off state of the switch */
  startOn: PropTypes.bool,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The variant type which determines how the switch is styled. Options include: [danger, small]*/
  variant: PropTypes.oneOfType([PropTypes.string,  PropTypes.array]),
};

export default Switch;
