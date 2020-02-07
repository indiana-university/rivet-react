/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';
import Icon from '../util/RivetIcons';

type ValidationType = 'danger' | 'info' | 'success' | 'warning';

const validationDisplayOptions : object = {
    danger: {
        icon: <Icon name="error" />
    },    
    info: {
        icon: <Icon name="info" />
    },
    success: {
        icon: <Icon name="success" />
    },
    warning: {
        icon: <Icon name="warning" />
    },
}

export const validationIcon = (validation: ValidationType) =>  validationDisplayOptions[validation].icon;
