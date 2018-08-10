import * as React from 'react';

const HeaderNavigation : React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => (
    <nav className="rvt-header__main-nav" role="navigation">
        <ul>
            {React.Children.map(children, (c) => <li>{c}</li>)}
        </ul>
    </nav>
);
HeaderNavigation.displayName = 'HeaderNavigation';

export default HeaderNavigation;
