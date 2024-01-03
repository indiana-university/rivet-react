/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";

const SubnavItem = ({
  children,
  className,
  current,
  testMode = false,
  url,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-subnav__item",
    className
  ]
  return (
    <li
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Subnav.itemContainer })}
      {...(!url && { ...attrs })}
      >
      {
        url &&
          <a
            href={url}
            {...(current && { "aria-current": "page" })}
            {...(testMode && { "data-testid": TestUtils.Subnav.itemLink })}
            {...attrs}
          >
            {children}
          </a>
      }
      {!url && <>{children}</>}
    </li>
  )
};

SubnavItem.displayName = "SubnavItem";
SubnavItem.propTypes = {
  /** Indicates item is current page if link with url */
  current: PropTypes.bool,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The navigation url for the item, wraps content in link */
  url: PropTypes.string
};

export default Rivet.rivetize(SubnavItem);
