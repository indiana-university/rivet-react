import * as classnames from 'classnames'
import * as React from 'react';
import { Link } from 'react-router-dom';


// Classes, Interfaces, and Types

export type Action = () => void;

export interface Props {
    /** Optional component ID. Default: auto-generated unique ID. */
    id?: string,
    /** Optional component key. */
    key?: string,
    /** Optional component children. Children can be passed via this property or as the contents of the Component element. */
    children?: React.ReactNode,
    /** Optional CSS class(es) to apply to the component. */
    className?: string,
    /**
     * Optional Rivet style: type scale adjustment
     * See: https://rivet.uits.iu.edu/components/layout/typography/
     */
    typescale?: "base" | 12 | 14 | 16 | 18 | 20 | 23 | 26 | 29 | 32 | 36 | 41 | 46 | 52,
    /**
     * Optional Rivet style: show/hide content based on screen size.
     * ex: 'md-down' will hide content on medium-sized screens and smaller.
     * ex: 'lg-up' will hide content on large-sized screens and larger.
     * See: https://rivet.uits.iu.edu/components/utilities/visibility/
     */
    hide?: "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down" | "sm-up" | "md-up" | "lg-up" | "xl-up" | "xxl-up",
    /**
     * Optional Rivet style: add a border to any or all sides of an element
     * See: https://rivet.uits.iu.edu/components/utilities/border/
     */
    border?: "all" | Edge | Edge[],
    /**
     * Optional Rivet style: adjust the margin(s) of an element
     * See: https://rivet.uits.iu.edu/components/layout/spacing/
     */
    margin?: Size | BoxStyle,
    /**
     * Optional Rivet style: adjust the padding(s) of an element
     * See: https://rivet.uits.iu.edu/components/layout/spacing/
     */
    padding?: Size | BoxStyle,
    /**
     * Optional Rivet style: adjust the display property of an element
     * See: https://rivet.uits.iu.edu/components/utilities/display/#display-property-utilities
     */
    display?: "inline" | "inline-block" | "block" | "flex" | "flex-vertical-center",
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
        .join(" ");

const parseRivetSpacing = (type, style?: Size | BoxStyle) =>
    style
    ? typeof style === "string"
        ? rivetSpacing(type, "all", style)
        : edgeSpecificSpacing(type, style)
    : "";

const parseRivetMargin = (props: Props) => 
    parseRivetSpacing('m', props.margin);

const parseRivetPadding = (props: Props) =>
    parseRivetSpacing('p', props.padding);

const parseRivetTypescale = (props: Props) =>
    props.typescale 
    ? `rvt-ts-${props.typescale}`
    : "";

const parseRivetBorder = (props: Props) => 
    props.border
    ? Array.isArray(props.border)
        ? props.border.map((value) => `rvt-border-${value}`).join(" ")
        : `rvt-border-${props.border}`
    :"";

const parseRivetDisplay = (props: Props) => {
    switch(props.display) {
        case "inline":
        case "inline-block":
        case "block":
        case "flex":
            return `rvt-display-${props.display}`;
        case "flex-vertical-center":
            return "rvt-display-flex rvt-vertical-center";
        default: return "";
    }
}

const parseRivetHidden= (props: Props) =>
    props.hide
    ? `rvt-hide-${props.hide}`
    : "";

const standardDecorators = [
    parseRivetMargin,
    parseRivetPadding,
    parseRivetTypescale,
    parseRivetBorder,
    parseRivetDisplay,
    parseRivetHidden
];

/**
 *  Given component properties, generate one or more CSS class decorations.
 */
export type ComponentDecorator<T extends Props> = ( props: T ) => string;

/** 
 * Generate class decorations for a Rivet component
 * @param props The component properties
 * @param componentClass (optional) The base component class, if any.
 * @param componentDecorators (optional) A collection of functions that can generate component-specific decorations. 
 */
export const classify = <T extends Props>(
    props: T, 
    componentClass: string = "", 
    componentDecorators: Array<ComponentDecorator<T>> = []
) => {
    const decorations = [ ...standardDecorators,  ...componentDecorators ].map(d => d(props));
    return classnames(componentClass, props.className, decorations);
}

/**
 * A type and class decorator for visually hidden labels
 * See: https://rivet.uits.iu.edu/components/utilities/display/#visually-hidden-labels-example
 */
export type LabelVisibility = "screen-reader-only" | "default";

/** 
 * Determine whether to apply class limiting label visibility to screenreaders.
 * @param visibility The desired visibility type.
 */
export const labelVisiblityClass = (visibility?: LabelVisibility) => 
    visibility === "screen-reader-only" ? "rvt-sr-only" : "";