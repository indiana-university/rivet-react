import * as classNames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import * as Rivet from '../Rivet';

type InlineAlertVariant = 'success' | 'warning' | 'error' | 'info';
interface InlineAlertProps {
    /** The text label/description for this radio option */
    variant: InlineAlertVariant
}

const componentClass = "rvt-inline-alert";
const getIcon = (variant:InlineAlertVariant):React.ReactNode => {
    switch (variant) {
        case 'success':
            return (
            <>
                <path d="M10.2,5.4,7.1,9.53,5.67,8.25a1,1,0,1,0-1.34,1.5l2.05,1.82a1.29,1.29,0,0,0,.83.32h.12a1.23,1.23,0,0,0,.88-.49L11.8,6.6a1,1,0,1,0-1.6-1.2Z" />
                <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
            </>
            );
            break;
        case 'warning':
            return (
                <>
                    <path d="M11,9H5A1,1,0,0,1,5,7h6a1,1,0,0,1,0,2Z" />
                    <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
                </>
            );
            break;
        case 'error':
            return (
                <>
                    <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,14a6,6,0,1,1,6-6A6,6,0,0,1,8,14Z" />
                    <path d="M10.83,5.17a1,1,0,0,0-1.41,0L8,6.59,6.59,5.17A1,1,0,0,0,5.17,6.59L6.59,8,5.17,9.41a1,1,0,1,0,1.41,1.41L8,9.41l1.41,1.41a1,1,0,0,0,1.41-1.41L9.41,8l1.41-1.41A1,1,0,0,0,10.83,5.17Z"/>
                </>
            );
            break;
        case 'info':
            return (
                <>
                    <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z" />
                    <path d="M8,12a1,1,0,0,1-1-1V8A1,1,0,0,1,9,8v3A1,1,0,0,1,8,12Z" />
                    <circle cx="8" cy="5" r="1" />
                </>
            );
            break;
        default:
            return null;
            break;
    }
}

const getVariantClass = (variant:InlineAlertVariant):string => {
    let alertVariantClass = 'rvt-inline-alert--';
    switch (variant) {
        case 'success':
            alertVariantClass += 'is-valid';
            break;
        case 'warning':
            alertVariantClass += 'has-warning';
            break;
        case 'error':
            alertVariantClass += 'is-invalid';
            break;
        case 'info':
            alertVariantClass += 'has-info';
            break;
        default:
            alertVariantClass = '';
            break;
    }

    return alertVariantClass;
}

export const InlineAlert: React.SFC<InlineAlertProps & React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    variant,
    id = Rivet.shortuid(),
    ...attrs }) => {
        const classes = classNames(componentClass, getVariantClass(variant));
        return (
            <div className={classes} {...attrs}>
                <span className="rvt-inline-alert__icon">
                    <svg role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                    >
                        <g fill="currentColor">
                            {getIcon(variant)}
                        </g>
                    </svg>
                </span>
                <span className="rvt-inline-alert__message" role="alert" id={id}>
                    {children}
                </span>
            </div>
        );
};
InlineAlert.displayName = "InlineAlert";
InlineAlert.propTypes = {
    id: PropTypes.string,
    variant: PropTypes.string
};

export default Rivet.rivetize(InlineAlert);
