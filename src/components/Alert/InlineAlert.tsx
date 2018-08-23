import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as Rivet from '../util/Rivet';
import { validationClass, validationIcon, ValidationProps } from '../util/validation'

interface InlineAlertProps extends ValidationProps {
    /**
     * Whether the inline alert is a standalone alert or not
     * See: https://rivet.uits.iu.edu/components/overlays/alerts/#standalone-inline-alerts
     */
    standalone?: boolean;
};

const InlineAlert: React.SFC<InlineAlertProps & React.HTMLAttributes<HTMLDivElement>> =
    ({
        children,
        className,
        id = Rivet.shortuid(),
        standalone = false,
        ... props
    }) => {
        const classes = classNames({
            ['rvt-inline-alert']: true,
            ['rvt-inline-alert--standalone']: standalone,
            [`rvt-inline-alert--${validationClass(props)}`]: true
        }, className);
        return (
            <div className={classes}>
                <span className="rvt-inline-alert__icon">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g fill="currentColor">
                            {validationIcon(props)}
                        </g>
                    </svg>
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
