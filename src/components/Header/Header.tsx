import * as classNames from 'classnames';
import * as React from 'react';
import { findFirstChildOfType } from '../util/childUtils';
import Drawer from './HeaderDrawer';
import Identity from './HeaderIdentity';
import Menu from './HeaderMenu';
import Navigation from './HeaderNavigation';

interface HeaderProps {
    /**
     * The application name or title that appears in the header.
     * @see https://rivet.uits.iu.edu/components/navigation/header/#base-header
     */
    title: string;
}

interface Header extends React.SFC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> {
    Identity?: typeof Identity;
    Menu?: typeof Menu;
    Navigation?: typeof Navigation;
}

const componentClass = "rvt-header";

const HeaderComponent: Header = ({ children, className, title, ...attrs }) => {
    const identity = findFirstChildOfType(children, Identity.displayName);
    const navigation = findFirstChildOfType(children, Navigation.displayName);
    return (
        <header {...attrs} className={classNames(componentClass, className)} role="banner">
            <a className="rvt-skip-link" href="#main-content">Skip to content</a>
            <div className="rvt-header__trident">
                <svg role="img" className="rvt-header__trident-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48" aria-describedby="iu-logo">
                    <title id="iu-logo">Indiana University Logo</title>
                    <rect width="41" height="48" fill="#900" />
                    <polygon points="24.59 12.64 24.59 14.98 26.34 14.98 26.34 27.78 22.84 27.78 22.84 10.9 24.59 10.9 24.59 8.57 16.41 8.57 16.41 10.9 18.16 10.9 18.16 27.78 14.66 27.78 14.66 14.98 16.41 14.98 16.41 12.64 8.22 12.64 8.22 14.98 9.97 14.98 9.97 30.03 12.77 33.02 18.16 33.02 18.16 36.52 16.41 36.52 16.41 39.43 24.59 39.43 24.59 36.52 22.84 36.52 22.84 33.02 28 33.02 31.01 30.03 31.01 14.98 32.78 14.98 32.78 12.64 24.59 12.64" fill="#fff" />
                </svg>
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
HeaderComponent.Identity = Identity;
HeaderComponent.Menu = Menu;
HeaderComponent.Navigation = Navigation;

export default HeaderComponent;
