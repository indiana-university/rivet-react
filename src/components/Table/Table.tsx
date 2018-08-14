import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../util/Rivet';

interface TableProps {
    /** 
     * Optional Rivet style which changes the look and feel of the rendered table.
     * @see https://rivet.uits.iu.edu/components/page-content/tables/
     */
    variant?: 'default' | 'stripes' | 'plain'
}

const Table : React.SFC<TableProps & React.HTMLAttributes<HTMLTableElement>> = ({ children, className, variant = 'default', ...attrs }) => {
    const classes = classNames({
        ['rvt-table-plain']: variant === 'plain',
        ['rvt-table-stripes']: variant === 'stripes',
    }, className);
    return (
        <table {...attrs} className={classes}>
            {children}
        </table>
    );
};
Table.displayName = 'Table';

export default rivetize(Table);
