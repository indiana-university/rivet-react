import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../Rivet';

interface PanelProps {

    /**
     * If true, adds a class to create a panel with a white background
     * See https://rivet.uits.iu.edu/components/layout/panels/#light-modifier
     */
    light?: boolean;
}

const Panel : React.SFC<PanelProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className,  light, ...attrs }) => {
    const classes = classNames({
        ['rvt-panel']: true,
        [`rvt-panel--light`]: light
    }, className);
    return (
        <div className={classes} {...attrs}>{children}</div>
    );
};
Panel.displayName = 'Panel';

export default rivetize(Panel);
