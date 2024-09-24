/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

const alertIcons = {
  info: (
    <g fill="currentColor">
      <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
      <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z" />
      <circle cx="8" cy="5" r="1" />
    </g>
  ),
  success: (
    <g fill="currentColor">
      <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z" />
      <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
    </g>
  ),
  warning: (
    <g fill="currentColor">
      <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z" />
      <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
    </g>
  ),
  danger: (
    <g fill="currentColor">
      <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
      <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z" />
    </g>
  ),
};

/**
 * Alerts can also be used to highlight form fields with missing or invalid input.
 */
const InlineAlert = ({
  children,
  className,
  id = Rivet.shortuid(),
  variant = "info",
  standalone = false,
  ...attrs
}) => {
  const classes = classNames(
    "rvt-inline-alert",
    standalone && "rvt-inline-alert--standalone",
    `rvt-inline-alert--${variant}`,
    className
  );

  return (
    <div className={classes} id={id} {...attrs}>
      <span className="rvt-inline-alert__icon">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          {alertIcons[variant]}
        </svg>
      </span>
      <span className="rvt-inline-alert__message" id={`${id}--message`}>
        {children}
      </span>
    </div>
  );
};

InlineAlert.displayName = "InlineAlert";
InlineAlert.propTypes = {
  /** A unique identifier for the inline alert */
  id: PropTypes.string,
  /** The variant type which determines how the alert is styled */
  variant: PropTypes.oneOf(["info", "success", "warning", "danger"]),
  /** If set, a standalone inline alert has a background, otherwise it does not */
  standalone: PropTypes.bool,
};

export default Rivet.rivetize(InlineAlert);
