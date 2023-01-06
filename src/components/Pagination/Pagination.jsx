/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import * as PropTypes from "prop-types";

import Icon from "../util/RivetIcons";
import * as Rivet from "../util/Rivet";

const classPrefix = "rvt-pagination";

/**
 * Use the pagination component to allow users to move between multiple pages of content.
 */
const Pagination = ({
  id = Rivet.shortuid(),
  className,
  children,
  ...attrs
}) => {
  let subComponentList = ["li", ...Object.keys(Pagination)];

  let subComponents = React.Children.map(children, (child) =>
    subComponentList.includes(child.type.name) ? child : null
  );

  return (
    <nav role="navigation">
      <ul id={id} className={classNames(classPrefix, className)} {...attrs}>
        {subComponents.map((component) => component)}
      </ul>
    </nav>
  );
};
Pagination.displayName = "Pagination";
Pagination.propTypes = {
  /** A unique identifier */
  id: PropTypes.string,
};

export const Item = ({
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
Item.propTypes = {
  /** A accessible label to use when using icons in navigation */
  ariaLabel: PropTypes.string,
  /** The display for the item */
  children: PropTypes.any,
  /** Whether this item is the current page */
  current: PropTypes.bool,
  /** A unique identifier */
  id: PropTypes.string,
  /** Whether the navigation item is disabled */
  disabled: PropTypes.bool,
  /** A function to call when the item is clicked */
  onClick: PropTypes.func,
};
Item.displayName = "Pagination.Item";
Pagination.Item = Item;

const First = ({ ...attrs }) => (
  <Pagination.Item
    {...attrs}
    ariaLabel={attrs.disabled ? "No previous pages" : "Go to first page"}
  >
    <Icon name="first" />
  </Pagination.Item>
);
First.displayName = "Pagination.First";
Pagination.First = First;

const Previous = ({ ...attrs }) => (
  <Pagination.Item
    {...attrs}
    ariaLabel={attrs.disabled ? "No previous pages" : "Go to previous page"}
  >
    <Icon name="previous" />
  </Pagination.Item>
);
Previous.displayName = "Pagination.Previous";
Pagination.Previous = Previous;

const Next = ({ ...attrs }) => (
  <Pagination.Item
    {...attrs}
    ariaLabel={attrs.disabled ? "No next page" : "Go to next page"}
  >
    <Icon name="next" />
  </Pagination.Item>
);
Next.displayName = "Pagination.Next";
Pagination.Next = Next;

const Last = ({ ...attrs }) => (
  <Pagination.Item
    {...attrs}
    ariaLabel={attrs.disabled ? "No next page" : "Go to last page"}
  >
    <Icon name="last" />
  </Pagination.Item>
);
Last.displayName = "Pagination.Last";
Pagination.Last = Last;

export default Pagination;
