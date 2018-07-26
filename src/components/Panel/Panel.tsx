import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../Rivet';

type Variant = 'default' | 'light';

interface PanelProps {

    /**
     * Color theming fot the panel
     * See https://rivet.uits.iu.edu/components/layout/panels/#light-modifier
     */
    variant?: Variant;
}

const Panel : React.SFC<PanelProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className,  variant='default', ...attrs }) => {
    const classes = classNames({
        ['rvt-panel']: true,
        [`rvt-panel--${variant}`]: variant !== 'default' 
    }, className);
    return (
        <div className={classes} {...attrs}>{children}</div>
    );
};
Panel.displayName = 'Panel';

export default rivetize(Panel);
