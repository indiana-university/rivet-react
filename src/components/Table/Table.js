/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';
import * as Rivet from '../util/Rivet';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * Optional Rivet style which changes the look and feel of the rendered table.
     */
    variant: PropTypes.oneOf(['stripes', 'plain']),

    /**
     * Determines if the table is compact.  Default is not compact.
     */
    compact: PropTypes.bool,

    /**
     * Determines if the table has borders around all cells.  Default is no borders around cells.
     */
    cells: PropTypes.bool
}

const Table =
({ children, className, variant, compact, cells, ...attrs }) => {
    const classes = classNames({
        [`rvt-table-${variant}`]: variant,
        'rvt-table-compact': compact,
        'rvt-table-cells': cells && variant !== 'plain',
    }, className);
    return (
        <table {...attrs} className={classes}>
            {children}
        </table>
    );
};
Table.displayName = 'Table';
Table.propTypes = propTypes;

export default Rivet.rivetize(Table);
