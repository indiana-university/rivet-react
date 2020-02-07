/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';

import * as Rivet from '../util/Rivet';

const Tab: React.SFC<React.HTMLAttributes<HTMLDivElement>> =
  ({ children, className, id = Rivet.shortuid(), ...attrs }) => {
    const classes = classNames('rvt-tabs__panel', className);
    return (
      <div {...attrs} className={classes} tabIndex={0} role="tabpanel" id={id} aria-labelledby={`${id}-tab`}>
        {children}
      </div>
    )
  };
Tab.displayName = 'Tab';

export default Tab;
