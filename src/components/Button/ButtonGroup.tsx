/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface ButtonGroupProps {
  /**
   * Optional Rivet style: Right-align the grouped buttons within the parent container
   */
  right?: boolean;
};

const propTypes = {
  right: PropTypes.bool
};

const ButtonGroup: React.FC<ButtonGroupProps & React.HTMLAttributes<HTMLDivElement>> = ({ className, children, right, ...attrs }) => {
  const classes = classNames({
    ['rvt-button-group']: true,
    ['rvt-button-group--right']: right
  }, className);
  return (
    <div {...attrs} className={classes}>
      {children}
    </div>
  );
};
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = propTypes;

export default Rivet.rivetize(ButtonGroup);
