/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from "react";
import PropTypes from "prop-types";

const DropdownGroup = ({ children, label, ...attrs }) => (
  <>
    {label && (
      <div className="rvt-dropdown__menu-heading" aria-hidden="true">
        {label}
      </div>
    )}
    <div {...attrs} role="group" aria-label={label}>
      {children}
    </div>
  </>
);

DropdownGroup.displayName = "DropdownGroup";
DropdownGroup.propTypes = {
  /**
   * Optional header for a related group of menu items.
   */
  label: PropTypes.node,
};

export default DropdownGroup;
