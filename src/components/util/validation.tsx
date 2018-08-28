import * as React from 'react';
import Icon from '../util/RivetIcons';

type ValidationType = 'info' | 'invalid' | 'valid' | 'warning';

const validationDisplayOptions : object = {
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

export const validationIcon = (validation: ValidationType) =>  validationDisplayOptions[validation].icon;
export const validationClass = (validation : ValidationType) => validationDisplayOptions[validation].className;
