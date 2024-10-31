/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils.js";

/**
 * Support component for use primary/secondary navigation components and header menu components.
 */
const BaseHeaderMenuItem = ({
  children,
  current,
  onClick,
  itemUrl,
  subMenu = false,
  testMode = false,
  ...attrs
}) => {
  const classNameArr = [
    subMenu ? "rvt-header-menu__submenu-item" : "rvt-header-menu__item",
    current ? "rvt-header-menu__item--current" : "",
  ];
  return (
    <li
      className={classNames(classNameArr)}
      {...(testMode && {
        "data-testid": TestUtils.Header.headerMenuItemContainer,
      })}
    >
      {itemUrl && (
        <a
          {...attrs}
          className={
            subMenu ? "rvt-header-menu__submenu-link" : "rvt-header-menu__link"
          }
          {...(current && { "aria-current": "page" })}
          href={itemUrl}
          onClick={onClick}
          {...(testMode && {
            "data-testid": TestUtils.Header.headerMenuItemAnchor,
          })}
        >
          {children}
        </a>
      )}
      {!itemUrl && <>{children}</>}
    </li>
  );
};

BaseHeaderMenuItem.displayName = "BaseHeaderMenuItem";
BaseHeaderMenuItem.propTypes = {
  /** Indicates item is current page if link with url */
  current: PropTypes.bool,
  /** The navigation url for the item */
  itemUrl: PropTypes.string,
  /** Optional onClick handler for itemUrl anchor tag */
  onClick: PropTypes.func,
  /** Menu item is part of a sub menu */
  subMenu: PropTypes.bool,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(BaseHeaderMenuItem);
