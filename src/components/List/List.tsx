/*
Copyright (C) 2020 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react'
import * as Rivet from '../util/Rivet'

type ListVariant = 'ordered' | 'plain' | 'unordered';
type ListOrientation = 'inline';
export interface ListProps {
    /**
     * Optional Rivet style for the type of list decoration.
     */
    variant?: 'ordered' | 'plain' | 'unordered';
    /**
     * Optional Rivet style for the layout of the list.
     */
    orientation?: 'inline';
}

/** Return any <li> children unchanged; otherwise wrap child in an <li> */
const asListItem = (child : React.ReactChild) => 
    typeof(child) === 'string' || typeof(child) === 'number' || child.type !== 'li'
    ? <li>{child}</li>
    : child;

/** Ensure all children are <li> elements. */
const asListItems = (children?: any) => 
    children
    ? React
        .Children
        .map(children, asListItem)
    : [];

const plainList = (variant?: ListVariant) => ({
    ['rvt-plain-list']: variant === 'plain'
});

const inlineList = (orientation?: ListOrientation) => ({
    ['rvt-inline-list']: orientation === 'inline'
});

const componentClass = 'rvt-list';

export const List : React.SFC <ListProps & React.HTMLAttributes<HTMLElement>> = 
({ children, className, orientation, variant, ...props }) => {
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

export default Rivet.rivetize<ListProps & React.HTMLAttributes<HTMLElement>>(List);
