/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
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

interface PaginationItemProps {
  ['aria-current']: string;
  ['aria-disabled']: boolean;
  disabled: boolean;
}

const Pagination : React.SFC<PaginationProps & React.HTMLAttributes<HTMLDivElement>> =
 ({ align, children, className, size, ...attrs }) => {
    const classes = classNames({
      ['rvt-pagination']: true,
      [`rvt-pagination--${align}`]: align,
      [`rvt-pagination--${size}`]: size
    });
    const wrappedChildren = React.Children.map(children, (child: any & React.ReactElement<any>) => {
      const childProps = child.props as PaginationItemProps;
      const childClasses = classNames({
        'rvt-pagination__item': true,
        'is-disabled': childProps && (childProps['aria-disabled'] || childProps.disabled),
        'is-active': childProps && childProps['aria-current'] === 'page'
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
