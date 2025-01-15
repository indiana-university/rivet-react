/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Icon, { IconNames } from "../util/RivetIcons";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";

const BaseHeader = ({
  children,
  className,
  contentHref,
  onClick,
  title,
  subtitle,
  headerWidth = "fluid",
  homeUrl,
  secondaryNavigation,
  testMode = false,
  ...attrs
}) => {
  const widthClass =
    headerWidth === "fluid" ? "rvt-p-lr-md" : "rvt-container-" + headerWidth;
  const titleBlock = (
    <React.Fragment>
      <div className="rvt-lockup__tab">
        <Icon name={IconNames.TRIDENT_HEADER} />
      </div>
      <div className="rvt-lockup__body">
        <span className="rvt-lockup__title">{title}</span>
        <span className="rvt-lockup__subtitle">{subtitle}</span>
      </div>
    </React.Fragment>
  );
  const homeUrlOnClick = onClick
    ? (e) => {
        e.preventDefault();
        onClick(e);
      }
    : null;
  return (
    <header {...attrs} className={classNames("rvt-header-wrapper", className)}>
      <a
        className="rvt-header-wrapper__skip-link"
        href={contentHref}
        {...(testMode && { "data-testid": TestUtils.Header.skipLinkTestId })}
      >
        Skip to main content
      </a>
      <div className="rvt-header-global">
        <div
          className={widthClass}
          {...(testMode && {
            "data-testid": TestUtils.Header.headerWidthDivTestId,
          })}
        >
          <div className="rvt-header-global__inner">
            <div className="rvt-header-global__logo-slot">
              {homeUrl && (
                <a
                  className="rvt-lockup"
                  href={homeUrl}
                  onClick={homeUrlOnClick}
                  {...(testMode && {
                    "data-testid": TestUtils.Header.anchorTestId,
                  })}
                >
                  {titleBlock}
                </a>
              )}
              {!homeUrl && (
                <div
                  className="rvt-lockup"
                  {...(testMode && {
                    "data-testid": TestUtils.Header.anchorTestId,
                  })}
                >
                  {titleBlock}
                </div>
              )}
            </div>
            {children && (
              <div className="rvt-header-global__controls">{children}</div>
            )}
          </div>
        </div>
      </div>
      {secondaryNavigation}
    </header>
  );
};

BaseHeader.displayName = "BaseHeader";
BaseHeader.propTypes = {
  /** The application name or title that appears in the header */
  title: PropTypes.string.isRequired,
  /** The href to use for the skip to content link */
  contentHref: PropTypes.string.isRequired,
  /** Optional onClick handler that will be applied to the homeUrl anchor tag, it will prevent the anchor tag's default behavior */
  onClick: PropTypes.func,
  /** Optional subTitle that will be displayed below the title */
  subtitle: PropTypes.string,
  /** The navigation url for the application titles */
  homeUrl: PropTypes.string,
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
    "fluid",
  ]),
  /** The secondary navigation component */
  secondaryNavigation: PropTypes.element,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(BaseHeader);
