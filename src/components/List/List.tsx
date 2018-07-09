import * as React from 'react'
import * as Rivet from '../Rivet'

export interface ListProps extends Rivet.Props {
    /** A numerically ordered list */
    ordered?: boolean;
    /** Remove decoration (bullets, numbers, etc) from list items */
    plain?: boolean;
    /** Present all list items on a single line */
    inline?: boolean;
}

/** Return any <li> children unchanged; otherwise wrap child in an <li> */
const asListItem = (child: React.ReactChild) =>
    typeof(child) === "string" 
    || typeof(child) === "number" 
    || child.type !== "li" 
    ? <li>{child}</li>
    : child;

/** Ensure all children are <li> elements. */
const asListItems = (children?: React.ReactNode) =>
    children 
    ? React.Children.map(children, asListItem)
    : [];

const plainList = (props: ListProps) =>
    props.plain ? "rvt-plain-list" : "";

const inlineList = (props: ListProps) =>
    props.inline ? "rvt-inline-list" : "";

const componentClass = "rvt-list";
const componentDecorators = [ plainList, inlineList ];

class List extends React.Component<ListProps> {
    public render() {
        const classNames = Rivet.classify<ListProps>(this.props, componentClass, componentDecorators);
        const listItems = asListItems(this.props.children);
        return (
            this.props.ordered 
            ? <ol className={classNames} {...this.props}> {listItems} </ol>
            : <ul className={classNames} {...this.props}> {listItems} </ul>
        );
    }
}

export default List;