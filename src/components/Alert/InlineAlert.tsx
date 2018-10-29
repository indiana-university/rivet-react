import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as Rivet from '../util/Rivet';
import { validationIcon } from '../util/validation'

interface InlineAlertProps {
    /**
     * Whether the inline alert is a standalone alert or not
     * See: https://rivet.uits.iu.edu/components/overlays/alerts/#standalone-inline-alerts
     */
    standalone?: boolean;
    /**
     * Rivet style for inline validation.
     */
    variant: 'danger' | 'info' | 'success' | 'warning';
};

const InlineAlert: React.SFC<InlineAlertProps & React.HTMLAttributes<HTMLDivElement>> =
    ({
        children,
        className,
        id = Rivet.shortuid(),
        standalone = false,
        variant,
        ... attrs
    }) => {
        const classes = classNames({
            ['rvt-inline-alert']: true,
            ['rvt-inline-alert--standalone']: standalone,
            [`rvt-inline-alert--${variant}`]: true
        }, className);
        return (
            <div className={classes} {...attrs}>
                <span className="rvt-inline-alert__icon">
                    {validationIcon(variant)}
                </span>
                <span className="rvt-inline-alert__message" role="alert" id={id}>
                    {children}
                </span>
            </div>
        );
    };
InlineAlert.displayName = 'InlineAlert';
InlineAlert.propTypes = {
    standalone: PropTypes.bool,
    variant: PropTypes.string
};

export default Rivet.rivetize(InlineAlert);
