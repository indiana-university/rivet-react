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
  onClick,
  testMode = false,
  url,
  ...attrs
}) => {
  const classNameArr = ["rvt-sidenav__item", className];
  const urlOnClick = onClick
    ? (e) => {
        e.preventDefault();
        onClick(e);
      }
    : null;

  return (
    <li
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Sidenav.item })}
      {...(!url && { ...attrs })}
    >
      {url && (
        <a
          className="rvt-sidenav__link"
          onClick={urlOnClick}
          href={url}
          {...(current && { "aria-current": "page" })}
          {...attrs}
        >
          {children}
        </a>
      )}
      {!url && <>{children}</>}
    </li>
  );
};

SidenavItem.displayName = "SidenavItem";
SidenavItem.propTypes = {
  /** Indicates item is current page if link with url */
  current: PropTypes.bool,
  /** Optional onClick handler for url anchor tag, it will prevent the anchor tag's default behavior */
  onClick: PropTypes.func,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The url for the nav item, makes item a link */
  url: PropTypes.string,
};

export default Rivet.rivetize(SidenavItem);
