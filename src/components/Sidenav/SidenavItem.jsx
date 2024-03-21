/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";

/**
 * Create an item for the side navigation menu
 */
const SidenavItem = ({
  className,
  children,
  current = false,
  testMode =  false,
  url,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-sidenav__item",
    className
  ]

  return (
    <li
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Sidenav.item })}
      {...(!url && { ...attrs })}
    >
      {
        url &&
          <a
            className="rvt-sidenav__link"
            href={url}
            {...(current && { "aria-current": "page" })}
            {...attrs}
          >
            {children}
          </a>
      }
      {!url && <>{children}</>}
    </li>
  )
};

SidenavItem.displayName = "SidenavItem";
SidenavItem.propTypes = {
  /** Indicates item is current page if link with url */
  current: PropTypes.bool,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The url for the nav item, makes item a link */
  url: PropTypes.string
};

export default Rivet.rivetize(SidenavItem);