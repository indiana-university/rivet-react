import * as React from 'react';
import Icon from '../util/RivetIcons';

type ValidationType = 'info' | 'invalid' | 'valid' | 'warning';

const validationDisplayOptions : object = {
    info: {
        className: 'info',
        icon: <Icon name="info" />
    },
    valid: {
        className: 'success',
        icon: <Icon name="success" />
    },
    warning: {
        className: 'warning',
        icon: <Icon name="warning" />
    },
    invalid: {
        className: 'danger',
        icon: <Icon name="error" />
    },
}

export const validationIcon = (validation: ValidationType) =>  validationDisplayOptions[validation].icon;
export const validationClass = (validation : ValidationType) => validationDisplayOptions[validation].className;
