import * as classNames from 'classnames';
import * as React from 'react'
import * as Rivet from '../util/Rivet'

type ListVariant = 'ordered' | 'plain' | 'unordered';
type ListOrientation = 'inline';
export interface ListProps {
    /**
     * Optional Rivet style for the type of list decoration.
     * See: https://rivet.uits.iu.edu/components/page-content/lists/#unordered-list
     */
    variant?: ListVariant;
    /**
     * Optional Rivet style for the layout of the list.
     * See: https://rivet.uits.iu.edu/components/page-content/lists/#inline-list
     */
    orientation?: ListOrientation;
}

/** Return any <li> children unchanged; otherwise wrap child in an <li> */
const asListItem = (child : React.ReactChild) => typeof(child) === 'string' || typeof(child) === 'number' || child.type !== 'li'
    ? <li>{child}</li>
    : child;

/** Ensure all children are <li> elements. */
const asListItems = (children?: React.ReactNode) => children
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

export const List : React.SFC <ListProps & React.HTMLAttributes<HTMLElement>> = ({ children, className, orientation, variant, ...props }) => {
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

export default Rivet.rivetize(List);
