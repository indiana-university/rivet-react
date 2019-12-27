/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import Icon from '../util/RivetIcons';

const validationDisplayOptions = {
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

/**
 * @param {ValidationType} validation One of: 'danger' | 'info' | 'success' | 'warning'
 */
export const validationIcon = (validation) =>  validationDisplayOptions[validation].icon;
