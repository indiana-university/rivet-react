/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as Rivet from '../util/Rivet';

const propTypes = {
    /**
     * Optional Rivet style for the type of list decoration.
     */
    variant: PropTypes.oneOf(['ordered', 'plain', 'unordered']),
    /**
     * Optional Rivet style for the layout of the list.
     */
    orientation: PropTypes.oneOf(['inline'])
}

/** Return any <li> children unchanged; otherwise wrap child in an <li> */
const asListItem = (child) => 
    typeof(child) === 'string' || typeof(child) === 'number' || child.type !== 'li'
    ? <li>{child}</li>
    : child;

/** Ensure all children are <li> elements. */
const asListItems = (children) => 
    children
    ? React
        .Children
        .map(children, asListItem)
    : [];

const plainList = (variant) => ({
    'rvt-plain-list': variant === 'plain'
});

const inlineList = (orientation) => ({
    'rvt-inline-list': orientation === 'inline'
});

const componentClass = 'rvt-list';

const List = ({ children, className, orientation, variant, ...props }) => {
    const classes = classNames(componentClass, plainList(variant), inlineList(orientation), className);
    const listItems = asListItems(children);
    const ListTag = variant === 'ordered' ? 'ol' : 'ul';
    return (
        <ListTag className={classes} {...props}>
            {listItems}
        </ListTag>
    );
};
List.displayName = 'List';
List.propTypes = propTypes;

export default Rivet.rivetize(List);
