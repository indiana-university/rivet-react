import * as React from 'react';
import getDisplayName from 'react-display-name';
import HeaderMenu from './HeaderMenu';

const hasChildren = (child) => { 
    console.log(child && child.type && getDisplayName(child.type) === HeaderMenu.displayName)
    return child && child.type && getDisplayName(child.type) === HeaderMenu.displayName;
};

const renderChild = (child, isDrawer) => {
    if(isDrawer && hasChildren(child)) {
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
