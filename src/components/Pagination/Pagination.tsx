import * as classNames from 'classnames';
import * as React from 'react';

import * as Rivet from '../util/Rivet';

interface PaginationProps {
  /**
   * Alignment of the pagination within its container
   */
  align?: 'center' | 'right';
  /**
   * Size of the pagination component
   */
  size?: 'small';
}

const Pagination : React.SFC<PaginationProps & React.HTMLAttributes<HTMLDivElement>> =
 ({ align, children, className, size, ...attrs }) => {
    const classes = classNames({
      ['rvt-pagination']: true,
      [`rvt-pagination--${align}`]: align,
      [`rvt-pagination--${size}`]: size
    });
    const wrappedChildren = React.Children.map(children, (child: React.ReactElement<any>) => {
      const childClasses = classNames({
        'rvt-pagination__item': true,
        'is-disabled': child.props && child.props['aria-disabled'],
        'is-active': child.props && child.props['aria-current'] === 'page'
      });
      return (
        <li className={childClasses}>{child}</li>
      );
    });
    return (
      <nav {...attrs} role="navigation" className={className}>
        <ul className={classes}>
          {wrappedChildren}
        </ul>
      </nav>
    );
};
Pagination.displayName = 'Pagination';

export default Rivet.rivetize(Pagination);
