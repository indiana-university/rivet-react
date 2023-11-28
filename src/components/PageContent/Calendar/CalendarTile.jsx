/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../../util/Rivet";
import { TestUtils } from "../../util/TestUtils";

function getMonth (month, abbr){
  switch(month) {
    case 1:
    case "1":
      return abbr ? "Jan" : "January"
    case 2:
    case "2":
      return abbr ? "Feb" : "Febuary"
    case 3:
    case "3":
      return abbr ? "Mar" : "March"
    case 4:
    case "4":
      return abbr ? "Apr" : "April"
    case 5:
    case "5":
      return "May"
    case 6:
    case "6":
      return "June"
    case 7:
    case "7":
      return "July"
    case 8:
    case "8":
      return abbr ? "Aug" : "August"
    case 9:
    case "9":
      return abbr ? "Sept" : "September"
    case 10:
    case "10":
      return abbr ? "Oct" : "October"
    case 11:
    case "11":
      return abbr ? "Nov" : "November"
    case 12:
    case "12":
      return abbr ? "Dec" : "December"
    default:
      return month
  }
}

const CalendarTile = ({
  abbreviate,
  children,
  className,
  day,
  month,
  testMode = false,
  year,
  ...attrs
}) => {
  const classNameArr = [
    "rvt-cal",
    className
  ]
  return (
    <div 
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.CalendarTile.container })}
      {...attrs}
    >
      <span
        className="rvt-cal__month"
        {...(testMode && { "data-testid": TestUtils.CalendarTile.month })}
      >
        {getMonth(month, abbreviate)}
      </span>
      <span
        className="rvt-cal__day"
        {...(testMode && { "data-testid": TestUtils.CalendarTile.day })}
      >
        {day}
        {children}
      </span>
      {
        year &&
          <span
            className="rvt-cal__year"
            {...(testMode && { "data-testid": TestUtils.CalendarTile.year })}
          >
            {year}
          </span>
      }
      
    </div>
  )
};

CalendarTile.displayName = "CalendarTile";
CalendarTile.propTypes = {
  /** Whether the month is abbreviated or not */
  abbreviate: PropTypes.bool,
  /** The day */
  day: PropTypes.number,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
  /** The number of the month */
  month: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /** The year */
  year: PropTypes.string
};


export default Rivet.rivetize(CalendarTile);
