/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React, { useState } from "react";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";

import "rivet-icons/dist/chevron-down.js";

/**
 * Create a collapsable submenu in the Side navigation menu
 */
const SidenavMenu = ({
  className,
  children,
  current = false,
  startOpen = false,
  label,
  testMode = false,
  url,
  ...attrs
}) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  const classNameArr = ["rvt-sidenav__item", className];

  return (
    <li
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Sidenav.menu })}
      {...attrs}
    >
      <div className="rvt-sidenav__item-wrapper">
        {url && (
          <a
            className="rvt-sidenav__link"
            href={url}
            {...(current && { "aria-current": "page" })}
            {...(testMode && { "data-testid": TestUtils.Sidenav.menuLabel })}
          >
            {label}
          </a>
        )}
        {!url && (
          <span
            className="rvt-sidenav__link"
            {...(testMode && { "data-testid": TestUtils.Sidenav.menuLabel })}
          >
            {label}
          </span>
        )}
        <button
          aria-expanded={isOpen}
          aria-haspopup={isOpen}
          className="rvt-sidenav__toggle"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          {...(testMode && { "data-testid": TestUtils.Sidenav.menuButton })}
        >
          <span className="rvt-sr-only">
            {isOpen ? "Hide" : "Show"} links nested under {label}
          </span>
          <rvt-icon name="chevron-down" />
        </button>
      </div>
      <ul
        className="rvt-sidenav__list"
        hidden={!isOpen}
        {...(testMode && { "data-testid": TestUtils.Sidenav.menuContent })}
      >
        {children}
      </ul>
    </li>
  );
};

SidenavMenu.displayName = "SidenavMenu";
SidenavMenu.propTypes = {
  /** Defaults the menu to open when first created */
  startOpen: PropTypes.bool,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The url for the menu label, makes the label a link */
  url: PropTypes.string,
};

export default Rivet.rivetize(SidenavMenu);
