/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

import * as Rivet from "../util/Rivet";
import Icon, { IconNames } from "../util/RivetIcons";

const HeaderMenu = ({ children, label, href = "#", current, ...attrs }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="rvt-header-menu__dropdown rvt-dropdown">
      <div className="rvt-header-menu__group">
        <a
          className="rvt-header-menu__link"
          href={href}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          {...(current && { "aria-current": "page" })}
        >
          {label}
        </a>
        <button
          aria-expanded={isMenuOpen}
          className="rvt-dropdown__toggle rvt-header-menu__toggle"
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
        hidden={!isMenuOpen}
      >
        <ul className="rvt-header-menu__submenu-list">
          {React.Children.map(children, renderChild)}
        </ul>
      </div>
    </div>
  );
};

const renderChild = (child, index) => {
  return (
    <li
      className="rvt-header-menu__submenu-item"
      key={"header-submenu-item-" + index}
    >
      {child.type === "a"
        ? React.cloneElement(child, {
            className: "rvt-header-menu__submenu-link",
          })
        : child}
    </li>
  );
};

HeaderMenu.displayName = "Header.Menu";
HeaderMenu.propTypes = {
  /** The label of the menu */
  label: PropTypes.string.isRequired,
  /** The link that the corresponding anchor redirects to */
  href: PropTypes.string,
};

export default Rivet.rivetize(HeaderMenu);
