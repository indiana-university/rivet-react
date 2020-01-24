/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import * as Rivet from '../util/Rivet';

const Row = 
({ children, className, ...attrs }) => (
    <div className={classNames('rvt-grid', className)} {...attrs}>
        {children}
    </div>
);
Row.displayName = 'Row';

export default Rivet.rivetize(Row);
