/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";

const TimelineItem = ({
  children,
  className,
  align = "left",
  header,
  date,
  dateStyleAsLabel,
  id = Rivet.shortuid(),
  ...attrs
}) => {
  const classNameAlign = align === "left" ? "" : "rvt-timeline__item--right";
  const classNameDate = dateStyleAsLabel ? "rvt-timeline__date--label" : "";

  return (
    <div
      id={id}
      className={classNames("rvt-timeline__item", classNameAlign, className)}
    >
      <div className="rvt-timeline__marker" aria-hidden="true"></div>
      <div className="rvt-timeline__content">
        {header && <h2 className="rvt-timeline__heading">{header}</h2>}
        {date && (
          <span className={classNames("rvt-timeline__date", classNameDate)}>
            {date}
          </span>
        )}
        {children}
      </div>
    </div>
  );
};

TimelineItem.displayName = "TimelineItem";
TimelineItem.propTypes = {
  /** A unique identifier for the timeline */
  id: PropTypes.string,
  /** Determines whether the TimelineItem is aligned right. Left is the default */
  align: PropTypes.oneOf(["left", "right"]),
  /** Optional Header element of the Timeline */
  header: PropTypes.string,
  /** Optional Date element of the Timeline*/
  date: PropTypes.string,
  /** Determines whether the Date positioned as a label */
  dateStyleAsLabel: PropTypes.bool,
};

export default Rivet.rivetize(TimelineItem);
