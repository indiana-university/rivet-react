/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";

const classPrefix = "rvt-list-description";

/**
 * Use the decription list show a set of terms and descriptions.
 */
const DescriptionList = ({
  id = Rivet.shortuid(),
  className,
  children,
  ...attrs
}) => {
  return (
    <dl className={classNames(classPrefix, className)} id={id} {...attrs}>
      {asListItems(children)}
    </dl>
  );
};
DescriptionList.displayName = "DescriptionList";
DescriptionList.propTypes = {
  /** A unique identifier for the description list */
  id: PropTypes.string,
};

const asListItems = (children) =>
  children
    ? React.Children.map(children, (child, index) => {
        if (
          typeof child === "string" ||
          typeof child === "number" ||
          !["dd", "dt"].includes(child.type)
        ) {
          return index % 2 === 0 ? <dt>{child}</dt> : <dd>{child}</dd>;
        }
        return child;
      })
    : [];

export default Rivet.rivetize(DescriptionList);
