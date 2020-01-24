/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Optional header for a related group of menu items.
     */
    label: PropTypes.string
}

const DropdownGroup = 
({ children, label, ...attrs }) => (
    <>
        { label && <div className="rvt-dropdown__menu-heading" aria-hidden="true">{label}</div>}
        <div {...attrs} role="group" aria-label={label}>
            {children}
        </div>
    </>
);
DropdownGroup.displayName = 'DropdownGroup';
DropdownGroup.propTypes = propTypes;

export default DropdownGroup;
