/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as React from "react";
import { findFirstChildOfType } from "../util/childUtils";
import Icon, { IconNames } from "../util/RivetIcons";
import Navigation from "./HeaderNavigation";
import PropTypes from "prop-types";

const componentClass = "rvt-header-wrapper";

const HeaderComponent = ({
  children,
  className,
  title,
  subtitle,
  width = "xl",
  ...attrs
}) => {
  const navigation = findFirstChildOfType(children, Navigation.displayName);

  return (
    <header {...attrs} className={classNames(componentClass, className)}>
      <a className="rvt-header-wrapper__skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="rvt-header-global">
        <div className={"rvt-container-" + width}>
          <div className="rvt-header-global__inner">
            <div className="rvt-header-global__logo-slot">
              <a className="rvt-lockup" href="/">
                <div className="rvt-lockup__tab">
                  <Icon name={IconNames.TRIDENT_HEADER} />
                </div>
                <div className="rvt-lockup__body">
                  <span className="rvt-lockup__title">{title}</span>
                  <span className="rvt-lockup__subtitle">{subtitle}</span>
                </div>
              </a>
            </div>
            {navigation}
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderComponent.displayName = "Header";
HeaderComponent.propTypes = {
  /** The application name or title that appears in the header */
  title: PropTypes.string.isRequired,
  /** Optional subTitle that will be displayed below the title */
  subtitle: PropTypes.string,
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

export default HeaderComponent;
