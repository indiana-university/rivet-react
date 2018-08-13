import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../util/Rivet';

interface BadgeProps {
    role?: 'default' | 'secondary',
    variant?: '' | 'action' | 'error' | 'success' | 'warning';
}

const Badge : React.SFC<BadgeProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, role = 'default', variant, ...attrs }) => {
    const classes = classNames({
        ['rvt-badge']: true,
        [`rvt-badge--${variant}-secondary`]: !!variant && role === 'secondary',
        [`rvt-badge--${variant}`]: !!variant && role === 'default',
        ['rvt-badge--secondary']: !variant && role === 'secondary'
    }, className);
    return (
        <span className={classes} {...attrs}>{children}</span>
    );
};
Badge.displayName = 'Badge';

export default rivetize(Badge);
