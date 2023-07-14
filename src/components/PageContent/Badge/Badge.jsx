/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";

const badgeClass = "rvt-badge";

const computeStyle = (variant, role) => {
  if (!variant || variant === "plain") {
    if (role) {
      return `${badgeClass}--${role}`;
    } else {
      return null;
    }
  } else {
    let variantClass = `${badgeClass}--${variant}`;
    if (role) {
      variantClass += `-${role}`;
    }

    return variantClass;
  }
};

const Badge = ({
  children,
  className,
  id = Rivet.shortuid(),
  role,
  variant,
  ...attrs
}) => (
  <span
    id={id}
    className={classNames(badgeClass, computeStyle(variant, role), className)}
    {...attrs}
  >
    {children}
  </span>
);

Badge.displayName = "Badge";
Badge.propTypes = {
  /* The variant determines the style of the badge */
  variant: PropTypes.oneOf(["danger", "info", "plain", "success", "warning"]),
  /* Badges can be either default or secondary, which affects their styling */
  role: PropTypes.oneOf(["secondary"]),
  /** A unique identifier for the badge */
  id: PropTypes.string,
};

export default Rivet.rivetize(Badge);
