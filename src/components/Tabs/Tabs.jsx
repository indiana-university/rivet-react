/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import React, { useState } from "react";
import * as Rivet from "../util/Rivet";
import { TestUtils } from "../util/TestUtils";
import TabPanel from "./TabPanel"

const createControlId = (id, index) => `tab_${id}_control_${index}`

/**
 * Allow users to switch between related groups of content without having to leave the page
 */
const Tabs = ({
  children,
  className,
  id,
  label,
  initialTab,
  testMode = false,
  ...attrs
}) => {
  const validInit = initialTab && initialTab >=0 && initialTab < React.Children.count(children)
  const [tabsId] = useState(id);
  const [tabOpen, setOpen] = useState(validInit ? createControlId(tabsId, initialTab) : createControlId(tabsId, 0))

  const tabs = !children ? [] :  React.Children.map(children, (child, index) => {
    const { title } = child.props
    const controlId = `tab_${tabsId}_control_${index}`
    const onClick = () => {
      setOpen(controlId);
    }

    const extraProps = {
      controlId
    }
    if(tabOpen !== controlId) {
      extraProps.hidden = true
    }

    const panel = React.cloneElement(child, extraProps)  

    return {
      onClick,
      controlId,
      label: title,
      panel,
      selected: tabOpen === controlId,
      testMode
    }
  })

  const panels = tabs.map(({panel}) => panel)

  const classNameArr = [
    "rvt-tabs",
    className
  ]

  return (
    <div
      className={classNames(classNameArr)}
      {...(testMode && { "data-testid": TestUtils.Tabs.container })}
      {...attrs}
    >
      <Controls
        label={label}
        tabs={tabs}
        testMode={testMode}
      />
      {panels}
    </div>
  )
};

Tabs.displayName = "Tabs";
Tabs.propTypes = {
  /** A unique identifier for the tab list */
  id: PropTypes.string,
  /** An unseen label for the menu to help with accessibility */
  label: PropTypes.string.isRequired,
  /** Index of initially opened tab starting at index 0 */
  initialTab: PropTypes.number,
  /** [Developer] Adds data-testId attributes for component testing */
  testMode: PropTypes.bool
};

Tabs.Panel = TabPanel;

const Controls = (props) => { 
  const { label, tabs, testMode } = props
  return (
    <div
      aria-label={label}
      className="rvt-tabs__tablist"
      role="tablist"
      {...(testMode && { "data-testid": TestUtils.Tabs.controls })}
    >
      {tabs.map(tab => {
        const { controlId } = tab
        return (
          <Control
            key={`tab-${controlId}`}
            {...tab}
          />
        )
      })

      }
    </div>
  )
}

const Control = (props) => {
  const { controlId, label, onClick, selected, testMode } = props
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onClick()
  }
  return (
    <button
      aria-selected={selected}
      className="rvt-tabs__tab"
      id={controlId}
      onClick={handleClick}
      role="tab"
      {...(!selected && { "tabIndex": "-1" })}
      {...(testMode && { "data-testid": `${TestUtils.Tabs.controls}-${controlId}` })}
    >
      {label}
    </button>
  )
}

export default Rivet.rivetize(Tabs);
