/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon, { IconNames } from "../util/RivetIcons";
import * as Rivet from "../util/Rivet";
import HeaderNavigationSecondary from "./HeaderNavigationSecondary";
import HeaderNavigation from "./HeaderNavigation";
import HeaderSearch from "./HeaderSearch";
import HeaderMenu from "./HeaderMenu";
import { TestUtils } from "../util/TestUtils";
import HeaderAvatar from "./HeaderAvatar";

const componentClass = "rvt-header-wrapper";

const Header = ({
  children,
  className,
  title = "Title",
  subtitle,
  headerWidth = "xl",
  href = "#",
  navigation,
  search,
  secondaryNavigation,
  ...attrs
}) => {
  return (
    <header {...attrs} className={classNames(componentClass, className)}>
      <a
        className="rvt-header-wrapper__skip-link"
        href="#main-content"
        data-testid={TestUtils.Header.skipLinkTestId}
      >
        Skip to main content
      </a>
      <div className="rvt-header-global">
        <div
          className={"rvt-container-" + headerWidth}
          data-testid={TestUtils.Header.headerWidthDivTestId}
        >
          <div className="rvt-header-global__inner">
            <div className="rvt-header-global__logo-slot">
              <a
                className="rvt-lockup"
                href={href}
                data-testid={TestUtils.Header.anchorTestId}
              >
                <div className="rvt-lockup__tab">
                  <Icon name={IconNames.TRIDENT_HEADER} />
                </div>
                <div className="rvt-lockup__body">
                  <span className="rvt-lockup__title">{title}</span>
                  <span className="rvt-lockup__subtitle">{subtitle}</span>
                </div>
              </a>
            </div>
            {(navigation || search) && (
              <div className="rvt-header-global__controls">
                <>{navigation}</>
                <>{search}</>
              </div>
            )}
          </div>
        </div>
      </div>
      {secondaryNavigation}
    </header>
  );
};

Header.Navigation = HeaderNavigation;
Header.Avatar = HeaderAvatar;
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
  headerWidth: PropTypes.oneOf([
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
  /** The primary navigation component */
  navigation: PropTypes.node,
  /** The search component */
  search: PropTypes.node,
  /** The secondary navigation component */
  secondaryNavigation: PropTypes.node,
};

export default Rivet.rivetize(Header);
