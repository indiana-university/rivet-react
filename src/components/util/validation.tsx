import * as React from 'react';
import Icon from '../util/RivetIcons';

export interface ValidationProps {
    /**
     * Rivet style for inline validation.
     */
    variant: 'info' | 'invalid' | 'valid' | 'warning';
}

const variantDisplayOptions : object = {
    info: {
        className: 'has-info',
        icon: <Icon name="info" />
    },
    valid: {
        className: 'is-valid',
        icon: <Icon name="success" />
    },
    warning: {
        className: 'has-warning',
        icon: <Icon name="warning" />
    },
    invalid: {
        className: 'is-invalid',
        icon: <Icon name="error" />
    },
}

export const validationIcon = (props : ValidationProps) => variantDisplayOptions[props.variant] && variantDisplayOptions[props.variant].icon;
export const validationClass = (props : ValidationProps) => variantDisplayOptions[props.variant] && variantDisplayOptions[props.variant].className;
