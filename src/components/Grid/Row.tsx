import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../util/Rivet';

const Row : React.SFC<React.HTMLAttributes<HTMLDivElement>> = 
({ children, className, ...attrs }) => (
    <div className={classNames('rvt-grid', className)} {...attrs}>
        {children}
    </div>
);
Row.displayName = 'Row';

export default rivetize(Row);
