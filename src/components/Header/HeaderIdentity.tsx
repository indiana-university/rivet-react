import * as React from 'react';

const HeaderIdentity : React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => (
    <nav className="rvt-header__main-nav" role="navigation">
        <ul>
            {React.Children.map(children, (c) => <li>{c}</li>)}
        </ul>
    </nav>
);
HeaderIdentity.displayName = 'HeaderIdentity';

export default HeaderIdentity;
