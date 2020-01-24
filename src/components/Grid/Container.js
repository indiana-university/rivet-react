/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import * as Rivet from '../util/Rivet';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * When combined with a fixed width property this being set to true will
     * cause the container to be horizontally centered within its parent.
     */
    center: PropTypes.bool,
    /** Sets the width of the container to a fixed size. */
    width: PropTypes.oneOf(['freshman', 'sophomore', 'junior','senior'])
}

const Container = 
({ center, children, className, width, ...attrs }) => {
    const classes = classNames({
        'rvt-container': true,
        'rvt-container--center': center,
        [`rvt-container--${width}`]: !!width
    }, className);
    return (
        <div className={classes} {...attrs}>
           {children}
        </div>
    );
};
Container.displayName = 'Container';
Container.propTypes = propTypes;

export default Rivet.rivetize(Container);
