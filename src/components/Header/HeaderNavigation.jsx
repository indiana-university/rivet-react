/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import classNames from "classnames";
import getDisplayName from "react-display-name";

import Icon, { IconNames } from "../util/RivetIcons";
import HeaderMenu from "./HeaderMenu";

const HeaderNavigation = ({ children, ...attrs }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

  return (
    <div data-rvt-disclosure="menu" data-rvt-close-click-outside>
      <button
        aria-expanded={isNavMenuOpen}
        className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
        data-rvt-disclosure-toggle="menu"
        onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
      >
        <span className="rvt-sr-only">Menu</span>
        <Icon name={IconNames.TOGGLE_OPEN} />
        <Icon name={IconNames.TOGGLE_CLOSE} />
      </button>
      <nav
        aria-label="Main"
        className="rvt-header-menu"
        data-rvt-disclosure-target="menu"
        hidden={!isNavMenuOpen}
      >
        {React.Children.map(children, renderUnorderedList)}
      </nav>
    </div>
  );
};

const renderListItem = (child) => {
  const isListItemCurrent =
    child.props.className &&
    child.props.className.includes("rvt-header-menu__item--current");

  let childrenWithProps = React.Children.map(child.props.children, (child) => {
    const childType = child && child["type"];
    const isHeaderMenu = getDisplayName(childType) === HeaderMenu.displayName;
    const isLink = childType === "a";

    const headerMenuProps = { ...(isListItemCurrent && { current: true }) };
    const linkProps = {
      className: "rvt-header-menu__link",
      ...(isListItemCurrent && { "aria-current": "page" }),
    };

    return isHeaderMenu || isLink
      ? React.cloneElement(child, isHeaderMenu ? headerMenuProps : linkProps)
      : child;
  });

  return (
    <li className={classNames("rvt-header-menu__item", child.props.className)}>
      {childrenWithProps}
    </li>
  );
};

const renderUnorderedList = (child) => {
  let listItems = React.Children.map(child.props.children, renderListItem);
  return <ul className={"rvt-header-menu__list"}>{listItems}</ul>;
};

HeaderNavigation.displayName = "HeaderNavigation";

export default HeaderNavigation;
