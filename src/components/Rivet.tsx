import * as classnames from 'classnames'
import * as React from 'react';
import { Link } from 'react-router-dom';


// Classes, Interfaces, and Types

export type Action = () => void;

export interface Props {
    id?: string,
    key?: string,
    children?: React.ReactNode,
    className?: string,
    /**
     * Optional Rivet style: type scale adjustment
     * See: https://rivet.uits.iu.edu/components/layout/typography/
     */
    typescale?: Typescale,
    /**
     * Optional Rivet style: show/hide content based on screen size.
     * ex: 'md-down' will hide content on medium-sized screens and smaller.
     * ex: 'lg-up' will hide content on large-sized screens and larger.
     * See: https://rivet.uits.iu.edu/components/utilities/visibility/
     */
    hide?: Hidden,
    /**
     * Optional Rivet style: add a border to any or all sides of an element
     * See: https://rivet.uits.iu.edu/components/utilities/border/
     */
    border?: Border,
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
    display?: Display,
}

export type Typescale = "base" | 12 | 14 | 16 | 18 | 20 | 23 | 26 | 29 | 32 | 36 | 41 | 46 | 52;
export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const Sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ];
export type Edge = 'top' | 'right' | 'bottom' | 'left';
export const Edges = [ 'top', 'right', 'bottom', 'left' ];
export type Display = "inline" | "inline-block" | "block" | "flex" | "flex-vertical-center";
export type Border = "all" | Edge | Edge[]
export type Hidden = "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down" | "sm-up" | "md-up" | "lg-up" | "xl-up" | "xxl-up"

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

const parseRivetMarginLegacy = ({ margin }: Props) => 
    parseRivetSpacing('m', margin);

const parseRivetMargin = (margin?: Size | BoxStyle) =>
    parseRivetSpacing('m', margin);

const parseRivetPaddingLegacy = ({padding}: Props) =>
    parseRivetSpacing('p', padding);

const parseRivetPadding = (padding?: Size | BoxStyle) =>
    parseRivetSpacing('p', padding);

const parseRivetTypescaleLegacy = ({ typescale }: Props) =>
    typescale 
    ? `rvt-ts-${typescale}`
    : "";

const parseRivetTypescale = (typescale?: Typescale) => ({
    [`rvt-ts-${typescale}`]: !!typescale
});

const parseRivetBorderLegacy = ({ border }: Props) => 
    border
    ? Array.isArray(border)
        ? border.map((value) => `rvt-border-${value}`).join(" ")
        : `rvt-border-${border}`
    :"";

const parseRivetBorder = (border?: Border) => {
    if(Array.isArray(border)) {
        return border.map((value) => `rvt-border-${value}`);
    } else {
        return ({
            [`rvt-border-${border}`]: !!border
        });
    }
}

const parseRivetDisplayLegacy = ({ display }: Props) => {
    switch(display) {
        case "inline":
        case "inline-block":
        case "block":
        case "flex":
            return `rvt-display-${display}`;
        case "flex-vertical-center":
            return "rvt-display-flex rvt-vertical-center";
        default: return "";
    }
}

const parseRivetDisplay = (display?: Display) => {
    switch(display) {
        case 'inline':
        case 'inline-block':
        case 'block':
        case 'flex':
            return `rvt-display-${display}`;
        case 'flex-vertical-center':
            return 'rvt-display-flex rvt-vertical-center';
        default: return '';
    }
}

const parseRivetHiddenLegacy = ({ hide }: Props) =>
    hide
    ? `rvt-hide-${hide}`
    : "";

const parseRivetHidden = (hide?: Hidden) => ({
    [`rvt-hide-${hide}`]: !!hide
});

const legacyStandardDecorators = [
    parseRivetMarginLegacy,
    parseRivetPaddingLegacy,
    parseRivetTypescaleLegacy,
    parseRivetBorderLegacy,
    parseRivetDisplayLegacy,
    parseRivetHiddenLegacy
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
    const decorations = [ ...legacyStandardDecorators,  ...componentDecorators ].map(d => d(props));
    return classnames(componentClass, props.className, decorations);
}

export const rivetize = <T extends React.HTMLAttributes<T>>(Component: React.ComponentType<T>): React.SFC<T & Props> =>
({ className, border, display, hide, margin, padding, typescale, ...attrs }: Props) => (
        <Component className={classnames(
            parseRivetMargin(margin),
            parseRivetPadding(padding),
            parseRivetTypescale(typescale),
            parseRivetBorder(border),
            parseRivetDisplay(display),
            parseRivetHidden(hide),
            className)
        } {...attrs} />
    );

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