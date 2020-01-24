/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Custom PropType. Verifies component passed in is of a given type
 * @param propComponentName - Display name of the component
 * @return An Error if validation fails; otherwise, null
 */
export const propIsElementOfType = propComponentName => {
    return (props, propName, componentName) => {
        const propComponent = props[propName];
        if (propComponent) {
            if ((!propComponent.displayName && !propComponent.type) || (propComponent.type && !propComponent.type.displayName)) {
                return new Error(`Error when validating ${componentName}. Value passed in for ${propName} does not have a 'displayName' property.`)
            }
            const displayName = propComponent.displayName || propComponent.type.displayName;
            if (displayName !== propComponentName) {
                return new Error(`${componentName} expected element of type [${propComponentName}] for ${propName}, but received ${displayName}`);
            }
        }
        return null;
    }
};



