/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface TableProps {
    /**
     * Optional Rivet style which changes the look and feel of the rendered table.
     */
    variant?: 'stripes' | 'plain'

    /**
     * Determines if the table is compact.  Default is not compact.
     */
    compact?: boolean;

    /**
     * Determines if the table has borders around all cells.  Default is no borders around cells.
     */
    cells?: boolean;
}

const Table : React.SFC<TableProps & React.HTMLAttributes<HTMLTableElement>> =
({ children, className, variant, compact, cells, ...attrs }) => {
    const classes = classNames({
        [`rvt-table-${variant}`]: variant,
        ['rvt-table-compact']: compact,
        ['rvt-table-cells']: cells && variant !== 'plain',
    }, className);
    return (
        <table {...attrs} className={classes}>
            {children}
        </table>
    );
};
Table.displayName = 'Table';

export default Rivet.rivetize<TableProps & React.HTMLAttributes<HTMLTableElement>>(Table);
