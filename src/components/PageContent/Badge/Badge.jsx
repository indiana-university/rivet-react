/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";

const badgeClass = "rvt-badge";

const computeStyle = (variant, modifier) => {
  if (!variant || variant === "plain") {
    if (modifier) {
      return `${badgeClass}--${modifier}`;
    } else {
      return null;
    }
  } else {
    let variantClass = `${badgeClass}--${variant}`;
    if (modifier) {
      variantClass += `-${modifier}`;
    }

    return variantClass;
  }
};

const Badge = ({
  children,
  className,
  id = Rivet.shortuid(),
  type: modifier,
  variant,
  ...attrs
}) => (
  <span
    id={id}
    className={classNames(
      badgeClass,
      computeStyle(variant, modifier),
      className
    )}
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
  modifier: PropTypes.oneOf(["secondary"]),
  /** A unique identifier for the badge */
  id: PropTypes.string,
};

export default Rivet.rivetize(Badge);
