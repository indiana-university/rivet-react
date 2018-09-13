import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

export interface BreadcrumbsProps {
  /**
   * Optional Rivet style: A call out styled set of breadcrumbs.
   */
  variant?: 'call-out'
}

const Breadcrumbs: React.SFC<BreadcrumbsProps & React.HTMLAttributes<HTMLDivElement>> =
  ({ children, variant, ...attrs }) => {
    const childCount = React.Children.count(children);
    const breadcrumbLinks = React.Children.map(children, (child, index) => (index === (childCount - 1)) ? <li aria-label="Current page">{child}</li> : <li>{child}</li>);
    const classes = classNames({
      ['rvt-breadcrumbs']: true,
      [`rvt-breadcrumbs--${variant}`]: variant
    });
    return (
      <nav {...attrs}>
        <ol className={classes}>
          {breadcrumbLinks}
        </ol>
      </nav>
    );
  };
Breadcrumbs.displayName = 'Breadcrumbs';

export default Rivet.rivetize(Breadcrumbs);
