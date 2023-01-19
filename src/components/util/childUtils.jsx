/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import getDisplayName from "react-display-name";
import classNames from "classnames";
import { HeaderMenu } from "../Header";

export const findFirstChildOfType = (children, componentDisplayName) => {
  let firstChild;
  React.Children.forEach(children, (child) => {
    const childType = child && child["type"] && getDisplayName(child["type"]);
    if (!firstChild && childType === componentDisplayName) {
      firstChild = child;
    }
  });
  return firstChild;
};

export const hasChildOfType = (children, componentDisplayName) => {
  return findFirstChildOfType(children, componentDisplayName) !== undefined;
};

const renderHeaderListItem = (child) => {
  const isListItemCurrent = child.props["data-rvt-c-header-nav-item__current"];

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
    <li
      className={classNames(
        "rvt-header-menu__item",
        isListItemCurrent && "rvt-header-menu__item--current"
      )}
    >
      {childrenWithProps}
    </li>
  );
};

export const renderHeaderUnorderedList = (child) => {
  let listItems = React.Children.map(
    child.props.children,
    renderHeaderListItem
  );
  return <ul className={"rvt-header-menu__list"}>{listItems}</ul>;
};
