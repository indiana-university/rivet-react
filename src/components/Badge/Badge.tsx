import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize } from '../util/Rivet';

interface BadgeProps {
    /**
     * Optional Rivet style: a secondary badge.
     * @see https://rivet.uits.iu.edu/components/forms/buttons/#secondary-variations
     */
    modifier?: 'secondary',
    /**
     * Optional Rivet style: a success/danger/plain badge.
     * @see https://rivet.uits.iu.edu/components/page-content/badges/#secondary-badges
     */
    variant?: 'action' | 'error' | 'success' | 'warning';
}

const Badge : React.SFC<BadgeProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, modifier, variant, ...attrs }) => {
    const classes = classNames({
        ['rvt-badge']: true,
        [`rvt-badge--${variant}-secondary`]: !!variant && modifier === 'secondary',
        [`rvt-badge--${variant}`]: !!variant && modifier === undefined,
        ['rvt-badge--secondary']: !variant && modifier === 'secondary'
    }, className);
    return (
        <span className={classes} {...attrs}>{children}</span>
    );
};
Badge.displayName = 'Badge';

export default rivetize(Badge);
