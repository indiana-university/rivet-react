/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils.js";

const Timeline = ({
  children,
  className,
  align = "left",
  id = Rivet.shortuid(),
  ...attrs
}) => {
  const classNameAlign = align === "left" ? "" : `rvt-timeline--${align}`;
  const renderChildren =
    align === "center" && Array.isArray(children)
      ? children.map((child, index) => (
          <div key={`rvt-timeline__row${index}`} className="rvt-timeline__row">
            {child}
          </div>
        ))
      : children;

  return (
    <div
      id={id}
      className={classNames("rvt-timeline", classNameAlign, className)}
      data-testid={TestUtils.Timeline.testId}
      {...attrs}
    >
      {renderChildren}
    </div>
  );
};

Timeline.displayName = "Timeline";
Timeline.propTypes = {
  /** A unique identifier for the timeline */
  id: PropTypes.string,
  /** Determines whether the Timeline is aligned center or right. Left is the default */
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default Rivet.rivetize(Timeline);
