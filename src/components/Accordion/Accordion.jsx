/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import React, { useState } from "react";
import * as Rivet from "../util/Rivet";
import { range } from "lodash";
import { TestUtils } from "../util/TestUtils";
import AccordionPanel from "./AccordionPanel";
import AccordionPanelHeader from "./AccordionPanelHeader";

const createControlId = (id, index) => `accordian_${id}_control_${index}`;
const testIds = TestUtils.Accordion;

/**
 * Group content into sections that can be opened and closed
 */
const Accordion = ({
  children,
  className,
  iconClosed,
  iconOpened,
  id,
  initial,
  testMode = false,
  ...attrs
}) => {
  const numPanels = React.Children.count(children);

  const [accordianId] = useState(id);
  const [panelsOpen, setPanelsOpen] = useState(
    getInitialOpen(initial, accordianId, numPanels)
  );

  const accordianPanels = !children
    ? []
    : React.Children.map(children, (child, index) => {
        const { title } = child.props;
        const controlId = createControlId(accordianId, index);
        const onClick = () => {
          const newPanelsOpen = panelsOpen.includes(controlId)
            ? panelsOpen.filter((v) => v !== controlId)
            : [...panelsOpen, controlId];
          setPanelsOpen(newPanelsOpen);
        };

        const extraProps = {
          controlId,
        };
        const isOpen = panelsOpen.includes(controlId);
        if (!isOpen) {
          extraProps.hidden = true;
        }

        const panel = React.cloneElement(child, extraProps);

        return {
          onClick,
          controlId,
          iconClosed,
          iconOpened,
          isOpen,
          label: title,
          panel,
          testMode,
        };
      });

  const classNameArr = ["rvt-accordion", className];
  return (
    <div
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": testIds.container })}
      {...attrs}
    >
      {accordianPanels.map((accordianPanel, panelIndex) => {
        const { panel, ...otherProps } = accordianPanel;
        return (
          <React.Fragment key={panelIndex}>
            <AccordionPanelHeader {...otherProps} />
            {panel}
          </React.Fragment>
        );
      })}
    </div>
  );
};

Accordion.displayName = "Accordion";
Accordion.propTypes = {
  /** Icon/Indicator for a closed panel */
  iconClosed: PropTypes.element,
  /** Icon/Indicator for an open panel */
  iconOpened: PropTypes.element,
  /** A unique identifier for the accordian */
  id: PropTypes.string.isRequired,
  /** Index of initially opened tab */
  initialTab: PropTypes.oneOfType([PropTypes.oneOf(["all"]), PropTypes.number]),
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool,
};

Accordion.Panel = AccordionPanel;
Accordion.Header = AccordionPanelHeader;

function getInitialOpen(option, id, count) {
  if (!option) {
    return [];
  }
  if (option === "all") {
    return range(0, count, 1).map((num) => createControlId(id, num));
  }
  return [createControlId(id, option)];
}

export default Rivet.rivetize(Accordion);
