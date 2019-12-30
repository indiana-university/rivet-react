/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';
import { Dropdown } from '../Dropdown';
import HeaderCollapse from './HeaderCollapse';

interface HeaderProps {
    /**
     * The label of the menu
     * @see https://rivet.uits.iu.edu/components/navigation/header/#base-header
     */
    label: string;
}

const HeaderMenu: React.FC<HeaderProps & React.HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...attrs }) => {
    const isDrawer = className && className.includes('rvt-drawer-menu');
    const Component = isDrawer ? HeaderCollapse : Dropdown;
    return (
        <Component {...attrs} className={className} variant="navigation">
            {children}
        </Component>
    );
}
HeaderMenu.displayName = 'HeaderMenu';

export default HeaderMenu;
