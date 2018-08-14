import * as classNames from 'classnames';
import * as React from 'react';
import getDisplayName from 'react-display-name';
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
const initialState = { open: false };
type HeaderState = Readonly<typeof initialState>;

class Header extends React.PureComponent<HeaderProps & React.HTMLAttributes<HTMLDivElement>, HeaderState> {

    public static Navigation = Navigation;
    public static Identity = Identity;

    public readonly state: HeaderState = initialState;

    constructor(props) {
        super(props);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    public toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    public render() {
        const { children, className, title, ...attrs } = this.props;
        let identity;
        let navigation;
        React.Children.forEach(children, (child: React.ReactElement<any>) => {
            const childType = child && child.type && getDisplayName(child.type);
            if (childType === Navigation.displayName) {
                navigation = child;
            } else if (childType === Identity.displayName) {
                identity = child;
            }
        });
        const drawerToggleClasses = classNames({
            ['rvt-drawer-button']: true,
            ['is-open']: this.state.open
        });
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
                        {navigation}
                        {identity}
                        <button className={drawerToggleClasses} aria-haspopup="true" aria-expanded={this.state.open} onClick={this.toggleDrawer}>
                            <span className="sr-only">Toggle menu</span>
                            {!this.state.open &&
                                <svg role="img" className="rvt-drawer-button-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <g fill="currentColor">
                                        <path d="M15,3H1A1,1,0,0,1,1,1H15a1,1,0,0,1,0,2Z" />
                                        <path d="M15,9H1A1,1,0,0,1,1,7H15a1,1,0,0,1,0,2Z" />
                                        <path d="M15,15H1a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z" />
                                    </g>
                                </svg>
                            }
                            {this.state.open &&
                                <svg role="img" className="rvt-drawer-button-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fill="currentColor" d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z" />
                                </svg>
                            }
                        </button>
                    </div>
                }
                {this.state.open &&
                    <div className="rvt-drawer">
                        <nav className="rvt-drawer__nav" role="navigation">
                            <ul>
                                <li className="has-children">
                                    {identity && React.cloneElement(identity, { className: 'rvt-header-id--drawer' })}
                                </li>
                                <li>
                                    <a href="#">Nav one</a>
                                </li>
                                <li className="has-children">
                                    <button data-subnav-toggle="subnav-1" aria-haspopup="true" aria-expanded="false">Nav two</button>
                                    <div id="subnav-1" role="menu" aria-hidden="true">
                                        <ul>
                                            <li>
                                                <a href="#">Subnav one</a>
                                            </li>
                                            <li>
                                                <a href="#">Subnav two</a>
                                            </li>
                                            <li>
                                                <a href="#">Subnav three</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" aria-current="page">Nav three</a>
                                </li>
                                <li className="has-children">
                                    <button data-subnav-toggle="subnav-2" aria-haspopup="true" aria-expanded="false">Nav four</button>
                                    <div id="subnav-2" role="menu" aria-hidden="true">
                                        <ul>
                                            <li>
                                                <a href="#">Subnav one</a>
                                            </li>
                                            <li>
                                                <a href="#">Subnav two</a>
                                            </li>
                                            <li>
                                                <a href="#">Subnav three</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <button className="rvt-drawer__bottom-close">Close nav</button>
                        </nav>
                    </div>
                }
            </header>
        );
    }
}

export default Header;
