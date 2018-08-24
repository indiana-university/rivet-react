import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../util/Rivet';

const Grid : React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...attrs }) => (
    <div className={classNames('rvt-grid', className)} {...attrs}>
        {children}
    </div>
);
Grid.displayName = 'Grid';

export default rivetize(Grid);
