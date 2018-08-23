import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../util/Rivet';

type Variant = 'light';

interface PanelProps {

    /**
     * Color theming for the panel
     * @see https://rivet.uits.iu.edu/components/layout/panels/#light-modifier
     */
    variant?: Variant;
}

const Panel : React.SFC<PanelProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, variant, ...attrs }) => {
    const classes = classNames({
        ['rvt-panel']: true,
        [`rvt-panel--${variant}`]: variant !== undefined
    }, className);
    return (
        <div className={classes} {...attrs}>{children}</div>
    );
};
Panel.displayName = 'Panel';

export default rivetize(Panel);
