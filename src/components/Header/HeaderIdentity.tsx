/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import DropdownGroup from '../Dropdown/DropdownGroup';
import HeaderCollapse from './HeaderCollapse';

export interface HeaderIdentityProps {
    /**
     * An optional user avatar which appears next to the username
     * @see https://rivet.uits.iu.edu/components/navigation/header/#header-with-identity-menu
     */
    avatar?: string | React.ReactNode;
    /**
     * An optional action to take when the user logs out.  If provided a "log out" link will be included.
     * @see https://rivet.uits.iu.edu/components/navigation/header/#header-with-identity-menu
     */
    onLogout?: () => void
    /**
     * The currently logged in user's username
     * @see https://rivet.uits.iu.edu/components/navigation/header/#header-with-identity-menu
     */
    username: string;
}

const desktopWithoutChildren = (classes, label, logout) =>
    <div className={classes}>
        <div className="rvt-header-id__profile">
            {label}
        </div>
        {logout}
    </div>

const drawerWithoutChildren = (classes, label, logout) =>
    // This custom style is only needed until https://github.iu.edu/UITS/rivet-source/issues/362 is resolved
    <div className={classes} style={{borderBottom: '2px solid #eee'}}>
        <div className="rvt-header-id__profile rvt-header-id__profile--drawer p-all-sm">
            {label}
            {logout}
        </div>
    </div>

const desktopWithChildren = (classes, label, logout, children) =>
    <div className={classes}>
        <Dropdown label={label} variant="navigation" align="right" className="rvt-header-id__profile rvt-header-id__profile--has-dropdown" menuClass="rvt-header-id__menu">
            {children}
            {logout &&
                <DropdownGroup>
                    {logout}
                </DropdownGroup>
            }
        </Dropdown>
    </div>

const drawerWithChildren = (classes, label, logout, children) =>
    <HeaderCollapse label={label}>
        {children}
        {logout}
    </HeaderCollapse>

const HeaderIdentity: React.SFC<HeaderIdentityProps & React.HTMLAttributes<HTMLDivElement>> = ({ avatar, children, className, onLogout, username }) => {
    const wrapperClasses = classNames.default('rvt-header-id', className);
    const drawerOpen = wrapperClasses.includes('rvt-header-id--drawer');
    const avatarIcon = avatar && <span className="rvt-header-id__avatar" aria-hidden="true">{avatar}</span>;
    const userLabel = drawerOpen && (children || !onLogout)
        ? <span className="rvt-header-id__user rvt-header-id__user--has-dropdown">{username}</span>
        : <span className="rvt-header-id__user">{username}</span>;
    const label = <>{avatarIcon} {userLabel}</>;
   
    let logout;
    if (children && onLogout) {
        logout = <a href="javascript:void(0)" onClick={onLogout}>Log out</a>
    } else if (!children && onLogout) {
        logout = <a href="javascript:void(0)" className="rvt-header-id__log-out" onClick={onLogout}>Log out</a>
    }

    return children
        ? drawerOpen
            ? drawerWithChildren(wrapperClasses, label, logout, children)
            : desktopWithChildren(wrapperClasses, label, logout, children)
        : drawerOpen
            ? drawerWithoutChildren(wrapperClasses, label, logout)
            : desktopWithoutChildren(wrapperClasses, label, logout);
}

HeaderIdentity.displayName = 'HeaderIdentity';

export default HeaderIdentity;
