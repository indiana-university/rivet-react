/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

/**
 * Use the Social Media Footer component to display social media links above the footer
 */
const SocialMediaFooter = ({
  children,
  className,
  containerClass,
  id = Rivet.shortuid(),
  label = "Social media",
  size = "sm",
  ...attrs
}) => {
  const classes = classNames("rvt-footer-social", className);
  const containerClasses = classNames(`rvt-container-${size}`, containerClass);
  const headerId = `${id}-header`;
  return (
    <div
      aria-labelledby={headerId}
      className="rvt-footer-social"
      role="complementary"
      {...attrs}
    >
      <div className={containerClasses}>
        <h2 className="rvt-sr-only" id={headerId}>
          {label}
        </h2>
        <ul className="rvt-footer-social__list">{asListItems(children)}</ul>
      </div>
    </div>
  );
};

const asListItems = (children) => {
  return children ? React.Children.map(children, asListItem) : [];
};

const asListItem = (child) => {
  if (typeof child.type == "function") {
    return child;
  }
  if (
    typeof child === "string" ||
    typeof child === "number" ||
    child.type !== "li"
  ) {
    return <li>{child}</li>;
  }
  return child;
};

SocialMediaFooter.displayName = "SocialMediaFooter";
SocialMediaFooter.propTypes = {
  /** Additional css classes for the content */
  containerClas: PropTypes.string,
  /** A unique identifier for the resource footer */
  id: PropTypes.string,
  /** The label for the social media footer (screen reader only) */
  label: PropTypes.string,
  /** The grid container size for content */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default Rivet.rivetize(SocialMediaFooter);
