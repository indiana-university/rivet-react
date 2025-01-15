/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

const Quote = ({
  avatar,
  children,
  citation,
  className,
  subCitation,
  testMode = false,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-quote",
    avatar ? "rvt-quote--image" : "",
    className
  ]
  return (
    <div
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Quote.container })}
      {...attrs}
    >
      {
        avatar &&
          <div
            className="rvt-avatar rvt-avatar--md"
            {...(testMode && { "data-testid": TestUtils.Quote.avatar })}
          >
            {avatar}
          </div>
      }
      <blockquote
        className="rvt-quote__text"
        {...(testMode && { "data-testid": TestUtils.Quote.content })}
      >
        <p>{children}</p>
      </blockquote>
      {
        citation &&
          <p
            className="rvt-quote__citation"
            {...(testMode && { "data-testid": TestUtils.Quote.citation })}
          >
            <span className="rvt-quote__title">{citation}</span>
            {
              subCitation &&
                <span className="rvt-quote__subtitle">{subCitation}</span>
            }
          </p>
      }
    </div>
  )
};

Quote.displayName = "Quote";
Quote.propTypes = {
  /** Avatar image to display above quote in place of quote icon */
  avatar: PropTypes.element,
  /** Optional citation at bottom of quote */
  citation: PropTypes.string,
  /** Optional sub citation, dependent on presence of citation */
  subCitation: PropTypes.string,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

export default Rivet.rivetize(Quote);
