/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the Resource Footer component to provide additional resources at the bottom of the page.
 */
const ResourceFooter = ({
  children,
  className,
  containerClass,
  id = Rivet.shortuid(),
  label = "Additional resources",
  size = "sm",
  ...attrs
}) => {
  const classes = classNames("rvt-footer-resources", className);
  const containerClasses = classNames(`rvt-container-${size}`, containerClass);
  const headerId = `${id}-header`;
  return (
    <div
      aria-labelledby={headerId}
      className={classes}
      role="complementary"
      {...attrs}
    >
      <h2 className="rvt-sr-only" id={headerId}>
        {label}
      </h2>
      <div className={containerClasses}>{children}</div>
    </div>
  );
};

ResourceFooter.displayName = "ResourceFooter";
ResourceFooter.propTypes = {
  /** Additional css classes for the content */
  containerClas: PropTypes.string,
  /** A unique identifier for the resource footer */
  id: PropTypes.string,
  /** The label for the resource footer (screen reader only) */
  label: PropTypes.string,
  /** The grid container size for content */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default Rivet.rivetize(ResourceFooter);
