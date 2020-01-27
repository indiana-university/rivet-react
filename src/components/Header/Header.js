/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { findFirstChildOfType } from '../util/childUtils';
import Icon from '../util/RivetIcons';
import Drawer from './HeaderDrawer';
import Identity from './HeaderIdentity';
import Navigation from './HeaderNavigation';

const propTypes = {
    /**
     * The application name or title that appears in the header.
     * @see https://rivet.uits.iu.edu/components/navigation/header/#base-header
     */
    title: PropTypes.string.isRequired
}

const componentClass = "rvt-header";

const HeaderComponent = ({ children, className, title, ...attrs }) => {
    const identity = findFirstChildOfType(children, Identity.displayName);
    const navigation = findFirstChildOfType(children, Navigation.displayName);
    let mainContentUrl = document.URL;
    const anchorCharacter = '#';
    const mainContentAnchor = 'main-content'
    if (mainContentUrl.indexOf(anchorCharacter) >= 0) {
        // Split on any anchors and filter them out
        const [baseUrl, ...params] = mainContentUrl.split(/\s?(#[a-zA-Z0-9-]+)/).filter(section => !section.startsWith(anchorCharacter));
        // Rejoin the URL with our anchor and any params
        mainContentUrl = [baseUrl, `${anchorCharacter}${mainContentAnchor}`, ...params].join('');
    } else {
        mainContentUrl = `${mainContentUrl}${anchorCharacter}${mainContentAnchor}`;
    }

    return (
        <header {...attrs} className={classNames(componentClass, className)} role="banner">
            <a className="rvt-skip-link" href={mainContentUrl}>Skip to content</a>
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
HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
