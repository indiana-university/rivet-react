/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface SegmentedButtonProps {
  /**
   * Optional Rivet style: Expand the segmented buttons to fill the entire width of the parent container
   */
  fit?: boolean;
};

const propTypes = {
  fit: PropTypes.bool
};

const SegmentedButton: React.SFC<SegmentedButtonProps & React.HTMLAttributes<HTMLDivElement>> =
  ({ className, children, fit, ...attrs }) => {
    const classes = classNames.default({
      ['rvt-button-segmented']: true,
      ['rvt-button-segmented--fitted']: fit
    }, className);
    return (
      <div {...attrs} role="group" className={classes}>
        {children}
      </div>
    );
  };
SegmentedButton.displayName = 'SegmentedButton';
SegmentedButton.propTypes = propTypes;

export default Rivet.rivetize<SegmentedButtonProps & React.HTMLAttributes<HTMLDivElement>>(SegmentedButton);
