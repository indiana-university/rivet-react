/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
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
  const classNameArr = [
    "rvt-seriesnav",
    className
  ]
  return (
    <nav
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.SeriesNav.container })}
      {...attrs}
    >
      {
        !previousDisabled &&
          <SeriesControl
            label={previousLabel}
            onClick={previousClick}
            previous
            testMode={testMode}
            url={previousUrl}
            {...(testMode && { "data-testid": TestUtils.SeriesNav.previous })}
          />
      }
      {
        !nextDisabled &&
          <SeriesControl
            label={nextLabel}
            onClick={nextClick}
            testMode={testMode}
            url={nextUrl}
            {...(testMode && { "data-testid": TestUtils.SeriesNav.next })}
          />
      }
    </nav>
  )
};

const nextIcon = <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M1 7h10.844L7.737 2.146 9.263.854 15.31 8l-6.047 7.146-1.526-1.292L11.844 9H1V7Z"></path></svg>
const previousIcon = <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M15 7H4.156l4.107-4.854L6.737.854.69 8l6.047 7.146 1.526-1.292L4.156 9H15V7Z"></path></svg>

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
    className
  ]
  return (
    <a
      className={classNames(classNameArr)}
      {...(url && { "href": url })}
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
      <span 
        aria-hidden="true"
        className="rvt-seriesnav__icon"
        {...(testMode && { "data-testid": TestUtils.SeriesNav.controlIcon })}
      >
        {previous ? previousIcon :  nextIcon}
      </span>
    </a>
  )
};

SeriesNav.displayName = "SeriesNav";
SeriesNav.propTypes = {
  /** The on click function for the next component */
  nextClick: PropTypes.func,
  /** Whether the next component should be disabled */
  nextDisabled: PropTypes.bool,
  /** The label for the next component */
  nextLabel: PropTypes.string.isRequired,
  /** The navigation url for the next component */
  nextUrl: PropTypes.string.isRequired,
  /** The on click function for the next component */
  previousClick: PropTypes.func,
  /** Whether the next component should be disabled */
  previousDisabled: PropTypes.bool,
  /** The label for the next component */
  previousLabel: PropTypes.string.isRequired,
  /** The navigation url for the next component */
  preivousUrl: PropTypes.string.isRequired,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool
};

export default Rivet.rivetize(SeriesNav);
