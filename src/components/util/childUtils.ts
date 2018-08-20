import * as React from 'react';
import getDisplayName from 'react-display-name';

export const findFirstChildOfType = (children, componentDisplayName) => {
    let firstChild;
    React.Children.forEach(children, (child: React.ReactElement<any>) => {
        const childType = child && child.type && getDisplayName(child.type);
        if (!firstChild && childType === componentDisplayName) {
            firstChild = child;
        }
    });
    return firstChild;
}
