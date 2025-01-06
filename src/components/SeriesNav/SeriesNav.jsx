/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import "rivet-icons/dist/arrow-left.js";
import "rivet-icons/dist/arrow-right.js";
import { TestUtils } from "../util/TestUtils";

/**
 * Allow users to step forward or backward through a series of content pages
 */
const SeriesNav = ({
  className,
  children,
  nextClick,
  nextDisabled,
  nextLabel,
  nextUrl,
  previousClick,
  previousDisabled,
  previousLabel,
  previousUrl,
  testMode = false,
  ...attrs
}) => {
  const classNameArr = ["rvt-seriesnav", className];
  return (
    <nav
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.SeriesNav.container })}
      {...attrs}
    >
      {!previousDisabled && (
        <SeriesControl
          label={previousLabel}
          onClick={previousClick}
          previous
          testMode={testMode}
          url={previousUrl}
          {...(testMode && { "data-testid": TestUtils.SeriesNav.previous })}
        />
      )}
      {!nextDisabled && (
        <SeriesControl
          label={nextLabel}
          onClick={nextClick}
          testMode={testMode}
          url={nextUrl}
          {...(testMode && { "data-testid": TestUtils.SeriesNav.next })}
        />
      )}
    </nav>
  );
};

const SeriesControl = ({
  className,
  children,
  label,
  previous = false,
  testMode,
  url,
  ...attrs
}) => {
  const classNameArr = [
    previous ? "rvt-seriesnav__previous" : "rvt-seriesnav__next",
    className,
  ];
  return (
    <a
      className={classNames(classNameArr)}
      {...(url && { href: url })}
      {...attrs}
    >
      <div className="rvt-seriesnav__text">
        <span
          className="rvt-seriesnav__label"
          {...(testMode && { "data-testid": TestUtils.SeriesNav.controlLabel })}
        >
          {previous ? "Previous:" : "Next:"}
        </span>
        <span
          className="rvt-seriesnav__item"
          {...(testMode && { "data-testid": TestUtils.SeriesNav.controlText })}
        >
          {label}
        </span>
      </div>
      <span className="rvt-seriesnav__icon">
        <rvt-icon
          name={previous ? "arrow-left" : "arrow-right"}
          {...(testMode && { "data-testid": TestUtils.RivetIcons.testId })}
        />
      </span>
    </a>
  );
};

SeriesNav.displayName = "SeriesNav";
SeriesNav.propTypes = {
  /** The on click function for the next component */
  nextClick: PropTypes.func,
  /** Whether the next component should be disabled */
  nextDisabled: PropTypes.bool,
  /** The label for the next component */
  nextLabel: PropTypes.string,
  /** The navigation url for the next component */
  nextUrl: PropTypes.string,
  /** The on click function for the previous component */
  previousClick: PropTypes.func,
  /** Whether the previous component should be disabled */
  previousDisabled: PropTypes.bool,
  /** The label for the previous component */
  previousLabel: PropTypes.string,
  /** The navigation url for the previous component */
  preivousUrl: PropTypes.string,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(SeriesNav);
