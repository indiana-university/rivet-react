/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface ContainerProps {
    /**
     * When combined with a fixed width property this being set to true will
     * cause the container to be horizontally centered within its parent.
     */
    center?: boolean;
    /** Sets the width of the container to a fixed size. */
    width?: 'freshman' | 'sophomore' | 'junior' | 'senior';
}

const Container : React.SFC<ContainerProps & React.HTMLAttributes<HTMLDivElement>> = 
({ center, children, className, width, ...attrs }) => {
    const classes = classNames.default({
        ['rvt-container']: true,
        ['rvt-container--center']: center,
        [`rvt-container--${width}`]: !!width
    }, className);
    return (
        <div className={classes} {...attrs}>
           {children}
        </div>
    );
};
Container.displayName = 'Container';

export default Rivet.rivetize<ContainerProps & React.HTMLAttributes<HTMLDivElement>>(Container);
