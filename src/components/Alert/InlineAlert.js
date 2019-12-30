/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import * as Rivet from '../util/Rivet';
import { validationIcon } from '../util/validation'

const InlineAlert =
    ({
        children,
        className,
        id = Rivet.shortuid(),
        standalone = false,
        variant,
        ... attrs
    }) => {
        const classes = classNames({
            ['rvt-inline-alert']: true,
            ['rvt-inline-alert--standalone']: standalone,
            [`rvt-inline-alert--${variant}`]: true
        }, className);
        return (
            <div className={classes} {...attrs}>
                <span className="rvt-inline-alert__icon">
                    {validationIcon(variant)}
                </span>
                <span className="rvt-inline-alert__message" role="alert" id={id}>
                    {children}
                </span>
            </div>
        );
    };
InlineAlert.displayName = 'InlineAlert';
InlineAlert.propTypes = {
    /**
     * Whether the inline alert is a standalone alert or not
     * See: https://rivet.uits.iu.edu/components/overlays/alerts/#standalone-inline-alerts
     */
    standalone: PropTypes.bool,
    /**
     * Rivet style for inline validation.
     */
    variant: PropTypes.string
};

export default Rivet.rivetize(InlineAlert);
