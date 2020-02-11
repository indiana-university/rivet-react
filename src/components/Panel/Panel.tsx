/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface PanelProps {
    /**
     * Color theming for the panel
     */
    variant?: 'light';
}

const Panel : React.SFC<PanelProps & React.HTMLAttributes<HTMLDivElement>> = 
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

export default Rivet.rivetize<PanelProps & React.HTMLAttributes<HTMLDivElement>>(Panel);
