/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import Icon, { IconNames } from "../util/RivetIcons.jsx";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";

const testIds = TestUtils.Accordion

const AccordionPanelHeader = (props) => {
  const {
    children,
    className,
    controlId,
    iconOpened = <Icon name={IconNames.ACCORDIAN_IND} />,
    iconClosed = <Icon name={IconNames.ACCORDIAN_IND} />,
    isOpen = false,
    label,
    onClick,
    testMode = false,
    ...attrs
  } = props
  const classNameArr = [
    "rvt-accordion__summary",
    className
  ]
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }
  return (
    <h3
        className={classNames(classNameArr)}
        {...(testMode && { "data-testid": `${testIds.header}-${controlId}` })}
    >
      <button
        aria-expanded={isOpen}
        className="rvt-accordion__toggle"
        id={controlId}
        onClick={handleClick}
        {...attrs}
      >
        <span className="rvt-accordion__toggle-text">{label}</span>
        <div className="rvt-accordion__toggle-icon">
          {isOpen ? iconOpened : iconClosed}
        </div>
      </button>
    </h3>
  )
};

AccordionPanelHeader.displayName = "AccordionPanelHeader";
AccordionPanelHeader.propTypes = {
  /** Unique Identifer for the header */
  controlId: PropTypes.string.isRequired,
  /** Icon/Indicator for a closed panel */
  iconClosed: PropTypes.element,
  /** Icon/Indicator for an open panel */
  iconOpened: PropTypes.element,
  /** Header label for the corresponding panel */
  label: PropTypes.string.isRequired,
  /** Handler for onClick event of the header */
  onClick: PropTypes.func.isRequired,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool
};

export default Rivet.rivetize(AccordionPanelHeader);
