/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import getDisplayName from "react-display-name";
import classNames from "classnames";
import { HeaderMenu } from "../Header";
import { TestUtils } from "./TestUtils";

export const findFirstChildOfType = (children, componentDisplayName) => {
  let firstChild;

  if (typeof children === "object" && !Array.isArray(children)) {
    let displayName =
      children && children["type"] && getDisplayName(children["type"]);
    return displayName === componentDisplayName ? children : undefined;
  }

  for (const child of children || []) {
    if (firstChild) {
      break;
    } else {
      const childType = child && child["type"] && getDisplayName(child["type"]);
      if (childType === componentDisplayName) {
        firstChild = child;
      }
    }
  }

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
    const isAnchor = childType === "a";

    const headerMenuProps = { ...(isListItemCurrent && { current: true }) };
    const anchorProps = {
      className: "rvt-header-menu__link",
      ...(isListItemCurrent && { "aria-current": "page" }),
    };

    return isHeaderMenu || isAnchor
      ? React.cloneElement(child, isHeaderMenu ? headerMenuProps : anchorProps)
      : child;
  });

  return (
    <li
      className={classNames(
        "rvt-header-menu__item",
        isListItemCurrent && "rvt-header-menu__item--current"
      )}
      data-testid={TestUtils.Header.navListItem}
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
