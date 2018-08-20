import * as React from 'react';
import { hasChildOfType } from '../util/childUtils';
import HeaderMenu from './HeaderMenu';

const renderChild = (child, isDrawer) => {
    if(isDrawer && hasChildOfType(child, HeaderMenu.displayName)) {
        return (
            <li className="has-children">{React.cloneElement(child, { className: 'rvt-drawer-menu'})}</li>
        );
    } else {
        return (
            <li>{child}</li>
        );
    }
}

const HeaderNavigation : React.SFC<React.HTMLAttributes<HTMLLIElement>> = ({ children, className }) => {
    const isDrawer = !!className && className.includes('rvt-drawer-navigation');
    return (
        <>
            {React.Children.map(children, (c) => renderChild(c, isDrawer))}
        </>
    );    
}
HeaderNavigation.displayName = 'HeaderNavigation';

export default HeaderNavigation;
