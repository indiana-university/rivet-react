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
     * Color theming for the panel
     */
    variant: PropTypes.oneOf(['light'])
}

const Panel = 
({ children, className, variant, ...attrs }) => {
    const classes = classNames({
        'rvt-panel': true,
        [`rvt-panel--${variant}`]: !!variant
    }, className);
    return (
        <div className={classes} {...attrs}>{children}</div>
    );
};
Panel.displayName = 'Panel';
Panel.propTypes = propTypes;

export default Rivet.rivetize(Panel);
