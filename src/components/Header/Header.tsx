/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';
import { findFirstChildOfType } from '../util/childUtils';
import Icon from '../util/RivetIcons';
import Drawer from './HeaderDrawer';
import Identity from './HeaderIdentity';
import Navigation from './HeaderNavigation';

interface HeaderProps {
    /**
     * The application name or title that appears in the header.
     * @see https://rivet.uits.iu.edu/components/navigation/header/#base-header
     */
    title: string;
}

const componentClass = "rvt-header";

const HeaderComponent: React.SFC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, title, ...attrs }) => {
    const identity = findFirstChildOfType(children, Identity.displayName);
    const navigation = findFirstChildOfType(children, Navigation.displayName);
    return (
        <header {...attrs} className={classNames(componentClass, className)} role="banner">
            <a className="rvt-skip-link" href="#main-content">Skip to content</a>
            <div className="rvt-header__trident">
                <Icon name="trident-header" />
            </div>
            <span className="rvt-header__title">
                <a href="/">{title}</a>
            </span>
            {(navigation || identity) &&
                <div className="rvt-header__controls">
                    { navigation && 
                        <nav className="rvt-header__main-nav" role="navigation">
                            <ul>
                                {navigation}
                            </ul>
                        </nav>                
                    }
                    {identity}
                    <Drawer identity={identity} navigation={navigation} />
                </div>
            }
        </header>
    );
}

HeaderComponent.displayName = 'Header';

export default HeaderComponent;
