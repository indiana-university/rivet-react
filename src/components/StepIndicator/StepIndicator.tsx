/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

export interface StepIndicatorProps {
    /**
     * Defines whether the step indicator should use the alternate vertical styling
     */
    vertical?: boolean
}

const componentClass = 'rvt-steps';

export const StepIndicator: React.SFC<StepIndicatorProps & React.HTMLAttributes<HTMLOListElement>> =
({ className, children, vertical, id = Rivet.shortuid(), ...attrs }) => (
    <ol id={id} className={classNames(componentClass, { 'rvt-steps--vertical': vertical}, className)} {...attrs}>
        {children}
    </ol>
);
StepIndicator.displayName = 'StepIndicator';

export default Rivet.rivetize<StepIndicatorProps & React.HTMLAttributes<HTMLOListElement>>(StepIndicator);
