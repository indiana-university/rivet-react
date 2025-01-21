/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";
import * as Rivet from "../util/Rivet";

import "../../util/icons/chevrons-left.js";
import "../../util/icons/chevron-left.js";
import "../../util/icons/chevron-right.js";
import "../../util/icons/chevrons-right.js";

/**
 * Use the pagination item component to define individual page controls.
 */
const PaginationItem = ({
  ariaLabel,
  children,
  className,
  component = "a",
  current,
  disabled = false,
  id = Rivet.shortuid(),
  onClick,
  url,
  ...attrs
}) => {
  if (disabled) {
    return (
      <li
        aria-label={ariaLabel}
        className={classNames(`rvt-pagination__item`, className)}
        id={id}
        {...attrs}
      >
        {children}
      </li>
    );
  }
  const Component = component;
  const processedUrl = url ? url : component === "a" ? "#" : null;
  return (
    <li
      id={id}
      className={classNames("rvt-pagination__item", className)}
      {...attrs}
    >
      <Component
        href={processedUrl}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-current={current && "page"}
      >
        {children}
      </Component>
    </li>
  );
};

PaginationItem.propTypes = {
  /** A accessible label to use when using icons in navigation */
  ariaLabel: PropTypes.string,
  /** The display for the item */
  children: PropTypes.any,
  /** The control element of used for the item. Note: elements beside "a" may require additional styling*/
  component: PropTypes.oneOf(["a", "button"]),
  /** Whether this item is the current page */
  current: PropTypes.bool,
  /** Whether this item is disabled page */
  disabled: PropTypes.bool,
  /** A unique identifier */
  id: PropTypes.string,
  /** A function to call when the item is clicked */
  onClick: PropTypes.func,
  /** Url to page in pagination */
  url: PropTypes.string,
};
PaginationItem.displayName = "PaginationItem";

const First = ({ ...attrs }) => (
  <PaginationItem
    {...attrs}
    ariaLabel={attrs.disabled ? "No previous pages" : "Go to first page"}
  >
    <rvt-react-icon name="chevrons-left" />
  </PaginationItem>
);

First.displayName = "Pagination.First";
PaginationItem.First = First;

const Previous = ({ ...attrs }) => (
  <PaginationItem
    {...attrs}
    ariaLabel={attrs.disabled ? "No previous pages" : "Go to previous page"}
  >
    <rvt-react-icon name="chevron-left" />
  </PaginationItem>
);
Previous.displayName = "Pagination.Previous";
PaginationItem.Previous = Previous;

const Next = ({ ...attrs }) => (
  <PaginationItem
    {...attrs}
    ariaLabel={attrs.disabled ? "No next pages" : "Go to next page"}
  >
    <rvt-react-icon name="chevron-right" />
  </PaginationItem>
);
Next.displayName = "Pagination.Next";
PaginationItem.Next = Next;

const Last = ({ ...attrs }) => (
  <PaginationItem
    {...attrs}
    ariaLabel={attrs.disabled ? "No next pages" : "Go to last page"}
  >
    <rvt-react-icon name="chevrons-right" />
  </PaginationItem>
);
Last.displayName = "Pagination.Last";
PaginationItem.Last = Last;

export default PaginationItem;
