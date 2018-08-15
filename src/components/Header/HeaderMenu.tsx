import * as React from 'react';
import { Dropdown } from '../Dropdown';
import HeaderCollapse from './HeaderCollapse';

interface HeaderProps {
    drawer: boolean;
    /**
     * The label.
     * @see https://rivet.uits.iu.edu/components/navigation/header/#base-header
     */
    label: string;
}

const HeaderMenu: React.SFC<HeaderProps & React.HTMLAttributes<HTMLButtonElement>> = ({ children, className, ...attrs }) => {
    const isDrawer = className && className.includes('rvt-drawer-menu');
    const Component = isDrawer ? HeaderCollapse : Dropdown;
    return (
        <Component {...attrs} variant="navigation">
            {children}
        </Component>
    );
}
HeaderMenu.displayName = 'HeaderMenu';

export default HeaderMenu;
