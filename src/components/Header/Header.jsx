/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon, { IconNames } from "../util/RivetIcons";
import { findFirstChildOfType, hasChildOfType } from "../util/childUtils";
import HeaderNavigationSecondary from "./HeaderNavigationSecondary";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";

const componentClass = "rvt-header-wrapper";

const Header = ({
  children,
  className,
  title,
  subtitle,
  width = "xl",
  href = "/",
  ...attrs
}) => {
  const hasSecondaryNav = hasChildOfType(
    children,
    HeaderNavigationSecondary.displayName
  );
  const secondaryNavChild =
    hasSecondaryNav &&
    findFirstChildOfType(children, HeaderNavigationSecondary.displayName);

  let innerChildren; // inner children are HeaderNavigation and HeaderSearch

  if (typeof children === "object" && !Array.isArray(children)) {
    innerChildren = !hasSecondaryNav && children;
  } else {
    innerChildren =
      children && children.filter((child) => child !== secondaryNavChild);
  }

  return (
    <header {...attrs} className={classNames(componentClass, className)}>
      <a className="rvt-header-wrapper__skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="rvt-header-global">
        <div className={"rvt-container-" + width}>
          <div className="rvt-header-global__inner">
            <div className="rvt-header-global__logo-slot">
              <a className="rvt-lockup" href={href}>
                <div className="rvt-lockup__tab">
                  <Icon name={IconNames.TRIDENT_HEADER} />
                </div>
                <div className="rvt-lockup__body">
                  <span className="rvt-lockup__title">{title}</span>
                  <span className="rvt-lockup__subtitle">{subtitle}</span>
                </div>
              </a>
            </div>
            <div className="rvt-header-global__controls">{innerChildren}</div>
          </div>
        </div>
      </div>
      {secondaryNavChild}
    </header>
  );
};

Header.Navigation = HeaderNavigation;
Header.Menu = HeaderMenu;
Header.Search = HeaderSearch;
Header.NavigationSecondary = HeaderNavigationSecondary;

Header.displayName = "Header";
Header.propTypes = {
  /** The application name or title that appears in the header */
  title: PropTypes.string.isRequired,
  /** Optional subTitle that will be displayed below the title */
  subtitle: PropTypes.string,
  /** The URL that the anchor towards the left of the header will point to */
  href: PropTypes.string,
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
};

export default Header;
