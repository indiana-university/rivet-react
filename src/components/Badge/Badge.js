/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Rivet from '../util/Rivet';

const propTypes = {
    role: PropTypes.oneOf(['secondary']),
    /**
     * Optional Rivet style: a secondary badge.
     */
    modifier: PropTypes.oneOf(['secondary']),
    /**
     * Optional Rivet style: an info/danger/success/warning badge.
     */
    variant: PropTypes.oneOf(['info', 'danger', 'success', 'warning'])
};

const Badge = ({ children, className, modifier, variant, ...attrs }) => {
    const classes = classNames({
        [`rvt-badge--${variant}-secondary`]: !!variant && modifier === 'secondary',
        [`rvt-badge--${variant}`]: !!variant && modifier === undefined
    }, className);
    return (
        <span className={classes} {...attrs}>{children}</span>
    );
};

Badge.displayName = 'Badge';
Badge.propTypes = propTypes;

export default Rivet.rivetize(Badge);
