/*
Copyright (C) 2019 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import * as Rivet from '../util/Rivet';
import PropTypes from 'prop-types';

const componentClass = 'rvt-steps';

const propTypes = {
    /**
     * Defines whether the step indicator should use the alternate vertical styling
     */
    vertical: PropTypes.bool
}

const StepIndicator =
({ className, children, vertical, id = Rivet.shortuid(), ...attrs }) => (
    <ol id={id} className={classNames(componentClass, { 'rvt-steps--vertical': vertical}, className)} {...attrs}>
        {children}
    </ol>
);
StepIndicator.displayName = 'StepIndicator';
StepIndicator.propTypes = propTypes;

export default Rivet.rivetize(StepIndicator);
