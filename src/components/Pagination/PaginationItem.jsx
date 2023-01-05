/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import Icon from "../util/RivetIcons";
import * as Rivet from "../util/Rivet";

export const PaginationItem = ({
  ariaLabel,
  children,
  className,
  current,
  disabled = false,
  id = Rivet.shortuid(),
  onClick = (e) => {
    e.preventDefault();
  },
  ...attrs
}) => {
  if (disabled) {
    return (
      <li
        id={id}
        className={classNames(`rvt-pagination__item`, className)}
        aria-label={ariaLabel}
        {...attrs}
      >
        {children}
      </li>
    );
  }
  return (
    <li
      id={id}
      className={classNames("rvt-pagination__item", className)}
      {...attrs}
    >
      <a
        href="#0"
        onClick={onClick}
        aria-label={ariaLabel}
        aria-current={current && "page"}
      >
        {children}
      </a>
    </li>
  );
};
PaginationItem.propTypes = {
  /** A accessible label to use when using icons in navigation */
  ariaLabel: PropTypes.string,
  /** Whether this item is the current page */
  current: PropTypes.bool,
  /** A unique identifier */
  id: PropTypes.string,
  /** Whether the navigation item is disabled */
  disabled: PropTypes.bool,
  /** A function to call when the item is clicked */
  onClick: PropTypes.func,
};
PaginationItem.displayName = "PaginationItem";

export default PaginationItem;
