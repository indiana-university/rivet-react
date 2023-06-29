/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";

const classPrefix = "rvt-breadcrumbs";

/**
 * Use the breadcrumbs component to show the user’s current location in a hierarchy of pages.
 * Pages further up the hierarchy from the current page are linked.
 */
const Breadcrumbs = ({
  className,
  children,
  id = Rivet.shortuid(),
  ...attrs
}) => (
  <nav role="navigation" aria-label="Breadcrumbs">
    <ol className={classNames(classPrefix, className)} {...attrs}>
      {asListItems(children)}
    </ol>
  </nav>
);

Breadcrumbs.displayName = "Breadcrumbs";
Breadcrumbs.propTypes = {
  id: PropTypes.string,
};

/* Ensure all children are <li> elements. */
const asListItems = (children) => {
  const length = children.length;
  return children
    ? React.Children.map(children, (child, index) => {
        if (
          typeof child === "string" ||
          typeof child === "number" ||
          child.type !== "li"
        ) {
          return index === children.length - 1 ? (
            <li aria-label="Current page">{child}</li>
          ) : (
            <li>{child}</li>
          );
        }
        return child;
      })
    : [];
};

export default Rivet.rivetize(Breadcrumbs);
