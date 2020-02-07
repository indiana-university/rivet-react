/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as React from 'react';
import getDisplayName from 'react-display-name';

export const findFirstChildOfType = (children, componentDisplayName) => {
    let firstChild;
    React.Children.forEach(children, (child: React.ReactChild) => {
        const childType = child && child['type'] && getDisplayName(child['type']);
        if (!firstChild && childType === componentDisplayName) {
            firstChild = child;
        }
    });
    return firstChild;
}

export const hasChildOfType = (children, componentDisplayName) => {
    return findFirstChildOfType(children, componentDisplayName) !== undefined;
}
