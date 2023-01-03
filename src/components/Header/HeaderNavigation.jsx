/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import Icon, { IconNames } from "../util/RivetIcons";
import HeaderMenu from "./HeaderMenu";
import getDisplayName from "react-display-name";

const renderChild = (child, index) => {
  const childType = child && child["type"] && getDisplayName(child["type"]);
  return (
    <li className="rvt-header-menu__item" key={"header-menu-item-" + index}>
      {childType === HeaderMenu.displayName ? (
        <>{child}</>
      ) : (
        React.cloneElement(child, { className: "rvt-header-menu__link" })
      )}
    </li>
  );
};

const HeaderNavigation = ({ children, ...attrs }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  return (
    <div className="rvt-header-global__controls">
      <div data-rvt-disclosure="menu" data-rvt-close-click-outside>
        <button
          aria-expanded={isNavMenuOpen}
          className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
          data-rvt-disclosure-toggle="menu"
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
        >
          <span className="rvt-sr-only">Menu</span>
          <Icon
            name={
              isNavMenuOpen ? IconNames.TOGGLE_OPEN : IconNames.TOGGLE_CLOSE
            }
          />
        </button>
        <nav
          aria-label="Main"
          className="rvt-header-menu"
          data-rvt-disclosure-target="menu"
          hidden={!isNavMenuOpen}
        >
          <ul className="rvt-header-menu__list">
            {React.Children.map(children, renderChild)}
          </ul>
        </nav>
      </div>
    </div>
  );
};
HeaderNavigation.displayName = "HeaderNavigation";

export default HeaderNavigation;
