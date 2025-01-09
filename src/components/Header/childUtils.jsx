/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import getDisplayName from "react-display-name";
import { v4 as uuidv4 } from "uuid";
import { HeaderMenu } from "./index";
import classNames from "classnames";
import { TestUtils } from "../util/TestUtils";
import HeaderAvatar from "./HeaderAvatar";
import BaseHeaderMenu from "./BaseHeaderMenu.jsx";

const renderHeaderNavListItem = (child) => {
  const isListItemCurrent = child.props["data-rvt-c-header-nav-item__current"];

  let childrenWithProps = React.Children.map(child.props.children, (child) => {
    const childType = child && child["type"];
    const isHeaderMenu = [
      HeaderMenu.displayName,
      BaseHeaderMenu.displayName,
    ].includes(getDisplayName(childType));
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
      key={uuidv4()}
      className={classNames(
        "rvt-header-menu__item",
        isListItemCurrent && "rvt-header-menu__item--current",
      )}
      data-testid={TestUtils.Header.navListItemTestId}
    >
      {childrenWithProps}
    </li>
  );
};

export const renderHeaderNavUnorderedList = (child) => {
  const childType = child && child.type;
  if (getDisplayName(childType) === HeaderAvatar.displayName) {
    return <React.Fragment></React.Fragment>;
  }

  let listItems = React.Children.map(
    child.props.children,
    renderHeaderNavListItem,
  );
  return listItems;
};
