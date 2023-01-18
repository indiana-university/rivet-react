import React from "react";
import Icon, { IconNames } from "../util/RivetIcons";
import PropTypes from "prop-types";
import getDisplayName from "react-display-name";
import HeaderMenu from "./HeaderMenu";
import classNames from "classnames";

const HeaderNavigationSecondary = ({
  width = "xl",
  title,
  href = "#",
  children,
  ...attrs
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="rvt-header-local">
      <div className={"rvt-container-" + width}>
        <div
          className="rvt-header-local__inner"
          data-rvt-disclosure="local-header-menu"
          data-rvt-close-click-outside
        >
          <a href={href} className="rvt-header-local__title">
            {title}
          </a>
          <button
            aria-expanded={isExpanded}
            className="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
            data-rvt-disclosure-toggle="local-header-menu"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span className="rvt-sr-only">Toggle local menu</span>
            <Icon name={IconNames.CARET_DOWN} />
          </button>
          <nav
            aria-label="Secondary"
            className="rvt-header-menu"
            data-rvt-disclosure-target="local-header-menu"
            hidden={!isExpanded}
          >
            {React.Children.map(children, renderUnorderedList)}
          </nav>
        </div>
      </div>
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

HeaderNavigationSecondary.displayName = "HeaderNavigationSecondary";
HeaderNavigationSecondary.propTypes = {
  /** Optional prop to constrain the width of all content in the header */
  width: PropTypes.oneOf([
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "3-xl",
    "4-xl",
  ]),
  /** The title of the anchor */
  title: PropTypes.string.isRequired,
  /** The URL that the anchor will redirect to */
  href: PropTypes.string,
};

export default HeaderNavigationSecondary;
