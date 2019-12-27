/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import { Dropdown } from '../Dropdown';
import HeaderCollapse from './HeaderCollapse';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * The label of the menu
     * @see https://rivet.uits.iu.edu/components/navigation/header/#base-header
     */
    label: PropTypes.string
}

const HeaderMenu = ({ children, className, ...attrs }) => {
    const isDrawer = className && className.includes('rvt-drawer-menu');
    const Component = isDrawer ? HeaderCollapse : Dropdown;
    return (
        <Component {...attrs} className={className} variant="navigation">
            {children}
        </Component>
    );
}
HeaderMenu.displayName = 'HeaderMenu';
HeaderMenu.propTypes = propTypes;

export default HeaderMenu;
