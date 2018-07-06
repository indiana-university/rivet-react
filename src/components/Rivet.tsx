import * as classnames from 'classnames'
import * as React from 'react';
import { Link } from 'react-router-dom';


// Classes, Interfaces, and Types

export type Action = () => void;

export interface Props extends React.Props<Props> {
    id?: string,
    ref?: any,
    className?: string
    children?: React.ReactNode
    //
    ts?: number
    hide?: boolean,
    border?: Edge | Edge[],
    margin?: Size | BoxStyle,
    padding?: Size | BoxStyle,
    display?: string,
}

export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const Sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ];
export type Edge = 'top' | 'right' | 'bottom' | 'left';
export const Edges = [ 'top', 'right', 'bottom', 'left' ];

/**
 * An interface for describing the styling of box edges. 
 */
export interface BoxStyle {
    top?: Size,
    right?: Size,
    bottom?: Size,
    left?: Size,
    // 
    xxs?: Edge | Edge[],
    xs?:  Edge | Edge[],
    sm?: Edge | Edge[],
    md?: Edge | Edge[],
    lg?: Edge | Edge[],
    xl?: Edge | Edge[],
    xxl?: Edge | Edge[],
}

/**
 * Define and render a JSX navigation element. 
 */
export class Nav {
    public label: string
    public to: string
    constructor(label: string, to: string){
        this.label=label;
        this.to=to;
    }
    /**
     * Render a navigation element.
     * An external route (having a URL starting http(s)://) will be rendered as an HTML anchor <a/>.
     * An internal route will be rendered as a React <Link>.
     */
    public render = () =>
        (/^https?:\/\//.test(this.to))
        ? <a href={this.to}>{this.label}</a>
        : <Link to={this.to}>{this.label}</Link>;
};



// Helper and Styling Functions

export const shortuid = () => {
    const m = Date.now() % 4194304
    const r = Math.floor(Math.random() * 12582911) + 4194304
    const id = (m + r).toString(16);
    return `id_${id}`;
}

const inflate = (x) => Array.isArray(x) ? x : [x];
const flatten = (a,b) => a.concat(b);
const rivetSpacing = (type,edge,size) => `rvt-${type}-${edge}-${size}`

// determine spacing based on edge- or size-based styling
const edgeSpecificSpacing = (t, style) =>
    Edges
        .filter(e => style.hasOwnProperty(e))
        // edges can only have one specified size
        .map(e => rivetSpacing(t,e,style[e]))
        .concat(
    Sizes
        .filter(s => style.hasOwnProperty(s))
        // sizes can be applied to one or more edges.
        .map(s => inflate(style[s]) 
            .map(e => rivetSpacing(t,e,s)))
        .reduce(flatten, []))

export const parseRivetSpacing = (type, style: Size | BoxStyle) =>
    style !== undefined
    ? typeof style === "string"
        ? [rivetSpacing(type, "all", style)]
        : edgeSpecificSpacing(type, style)
    : [];

export const parseRivetMargin = (margin) => 
    parseRivetSpacing('m', margin);

export const parseRivetPadding = (padding) =>
    parseRivetSpacing('p', padding);

export const parseRivetTypescale = (ts?: number) =>
    ts ? [ `rvt-ts-${ts}` ] : [];

export const parseRivetBorder = (border) => 
    border
    ? Array.isArray(border)
        ? border.map((value) => `rvt-border-${value}`)
        : [ `rvt-border-${border}` ]
    : [];

export const parseRivetDisplay = (display) =>
    display 
    ? display === 'sr-only'
        ? [ `rvt-sr-only` ]
        : [ `rvt-display-${display}` ]
    : [];

export const parseRivetHidden = (hide: string) =>
    hide
    ? [ `rvt-hide-${hide}` ]
    : [];

export const parseRivetClasses = (margin, padding, ts, border, display, hide) =>
    [
        ...parseRivetMargin(margin),
        ...parseRivetPadding(padding),
        ...parseRivetTypescale(ts),
        ...parseRivetBorder(border),
        ...parseRivetDisplay(display),
        ...parseRivetHidden(hide)
    ];

export type ComponentClassDecorator<T extends Props> = ( props: T ) => string;

export const rivetize = <T extends Props> (props: T, componentClass: string = "", componentDecorators: Array<ComponentClassDecorator<T>> = []) => {
    const { className, border, margin, padding, display="", hide=false, ts } = props;
    const decorations = componentDecorators.map(cg => cg(props));
    return classnames(...parseRivetClasses(margin, padding, ts, border, display, hide), componentClass, className, decorations);
}
