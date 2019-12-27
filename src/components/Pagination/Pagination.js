/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';

import Rivet from '../util/Rivet';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Alignment of the pagination within its container
   */
  align: PropTypes.oneOf(['center', 'right']),
  /**
   * Size of the pagination component
   */
  size: PropTypes.oneOf(['small'])
}

// interface PaginationItemProps {
//   ['aria-current']: string;
//   ['aria-disabled']: boolean;
//   disabled: boolean;
// }

const Pagination =
 ({ align, children, className, size, ...attrs }) => {
    const classes = classNames({
      ['rvt-pagination']: true,
      [`rvt-pagination--${align}`]: align,
      [`rvt-pagination--${size}`]: size
    });
    const wrappedChildren = React.Children.map(children, (child) => {
      const childProps = child.props;
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
Pagination.propTypes = propTypes;

export default Rivet.rivetize(Pagination);
