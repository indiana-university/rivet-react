/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as Rivet from '../util/Rivet';

const propTypes = {
  /** 
   * Optional Rivet style: Right-align the grouped buttons within the parent container
   */
  right: PropTypes.bool
};

const ButtonGroup = ({ className, children, right, ...attrs }) => {
  const classes = classNames({
    'rvt-button-group': true,
    'rvt-button-group--right': right
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
