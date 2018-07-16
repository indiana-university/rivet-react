import * as React from 'react'
import * as Rivet from '../Rivet'

export interface ListProps extends Rivet.Props {
    /**
     * Optional Rivet style for the type of list decoration.
     * See: https://rivet.uits.iu.edu/components/page-content/lists/#unordered-list
     */
    rvtStyle?: 'ordered' | 'plain' | 'unordered';
    /**
     * Optional Rivet style for the layout of the list.
     * See: https://rivet.uits.iu.edu/components/page-content/lists/#inline-list
     */
    rvtOrientation?: 'inline' | 'default';
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

const plainList = (props : ListProps) => props.rvtStyle === 'plain'
    ? 'rvt-plain-list'
    : '';

const inlineList = (props : ListProps) => props.rvtOrientation === 'inline'
    ? 'rvt-inline-list'
    : '';

const componentClass = 'rvt-list';
const componentDecorators = [plainList, inlineList];

export const List : React.SFC<ListProps> = ({ children, rvtStyle, ...props} ) => {
    const classNames = Rivet.classify<ListProps>({ rvtStyle, ...props}, componentClass, componentDecorators);
    const listItems = asListItems(children);
    const ordered = rvtStyle === 'ordered';
    return (ordered
        ? <ol className={classNames} {...props}>
                {listItems}
            </ol>
        : <ul className={classNames} {...props}>
            {listItems}
        </ul>);
};

export default List;