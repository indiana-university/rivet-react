import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as Rivet from '../util/Rivet';
class Badge extends React.Component {
    static displayName = 'Badge';
    static propTypes = {
        /**
         * Optional Rivet style: a secondary badge.
         */
        modifier: PropTypes.oneOf(['secondary']),
        /**
         * Optional Rivet style: an info/danger/success/warning badge.
         */
        variant: PropTypes.oneOf(['info', 'danger', 'success', 'warning'])
    };
    render() {
        const { children, className, modifier, variant, ...attrs } = this.props;
        const classes = classNames({
            'rvt-badge': true,
            [`rvt-badge--${variant}-secondary`]: !!variant && modifier === 'secondary',
            [`rvt-badge--${variant}`]: !!variant && modifier === undefined,
            'rvt-badge--secondary': !variant && modifier === 'secondary'
        }, className);
        return (
            <span className={classes} {...attrs}>{children}</span>
        );
    }
}
export default Rivet.rivetize(Badge);