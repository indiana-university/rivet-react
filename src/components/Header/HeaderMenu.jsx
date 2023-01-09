/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import Icon, { IconNames } from "../util/RivetIcons";

const renderChild = (child, index) => {
  return (
    <li
      className="rvt-header-menu__submenu-item"
      key={"header-submenu-item-" + index}
    >
      {React.cloneElement(child, {
        className: "rvt-header-menu__submenu-link",
      })}
    </li>
  );
};

const HeaderMenu = ({ children, label, href = "#", ...attrs }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
      className="rvt-header-menu__dropdown rvt-dropdown"
      data-rvt-dropdown="primary-nav-1"
    >
      <div className="rvt-header-menu__group">
        <a
          className="rvt-header-menu__link"
          href={href}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {label}
        </a>
        <button
          aria-expanded={isMenuOpen}
          className="rvt-dropdown__toggle rvt-header-menu__toggle"
          data-rvt-dropdown-toggle="primary-nav-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="rvt-sr-only">Toggle Sub-navigation</span>
          <Icon
            name={IconNames.CARET_DOWN}
            className={"rvt-global-toggle__open"}
          />
        </button>
      </div>
      <div
        className="rvt-header-menu__submenu rvt-dropdown__menu rvt-dropdown__menu--right"
        data-rvt-dropdown-menu="primary-nav-1"
        hidden={!isMenuOpen}
      >
        <ul className="rvt-header-menu__submenu-list">
          {React.Children.map(children, renderChild)}
        </ul>
      </div>
    </div>
  );
};

HeaderMenu.displayName = "HeaderMenu";

export default HeaderMenu;
