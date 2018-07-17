import * as React from 'react'
import * as Rivet from '../Rivet'

export interface ListProps extends Rivet.Props {
    /**
     * Optional Rivet style for the type of list decoration.
     * See: https://rivet.uits.iu.edu/components/page-content/lists/#unordered-list
     */
    variant?: 'ordered' | 'plain' | 'unordered';
    /**
     * Optional Rivet style for the layout of the list.
     * See: https://rivet.uits.iu.edu/components/page-content/lists/#inline-list
     */
    orientation?: 'inline' | 'default';
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

const plainList = (props : ListProps) => props.variant === 'plain'
    ? 'rvt-plain-list'
    : '';

const inlineList = (props : ListProps) => props.orientation === 'inline'
    ? 'rvt-inline-list'
    : '';

const componentClass = 'rvt-list';
const componentDecorators = [plainList, inlineList];

export const List : React.SFC <ListProps> = ({ children, variant, ...props }) => {
    const classNames = Rivet.classify <ListProps> ({ variant, ...props}, componentClass, componentDecorators);
    const listItems = asListItems(children);
    const ListTag = variant === 'ordered' ? 'ol' : 'ul';
    return (
        <ListTag className={classNames} {...props}>
            {listItems}
        </ListTag>
    );
};
List.displayName = 'List';

export default List;
