import * as React from "react";
import getDisplayName from "react-display-name";
import { HeaderMenu } from "./index";
import classNames from "classnames";
import { TestUtils } from "../util/TestUtils";

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
      data-testid={TestUtils.Header.navListItemTestId}
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
