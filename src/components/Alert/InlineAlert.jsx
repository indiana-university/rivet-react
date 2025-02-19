/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";
import * as Rivet from "../util/Rivet";
import "rivet-icons/dist/info-circle.js";
import "rivet-icons/dist/check-circle.js";
import "rivet-icons/dist/minus-circle.js";
import "rivet-icons/dist/close-circle.js";

const alertIcons = {
  info: "info-circle",
  success: "check-circle",
  warning: "minus-circle",
  danger: "close-circle",
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
    className,
  );

  return (
    <div className={classes} id={id} {...attrs}>
      <span className="rvt-inline-alert__icon">
        <rvt-icon name={alertIcons[variant]} />
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
