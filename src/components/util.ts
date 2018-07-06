// use strict

/**
 * Functions migrated from utils.js
 */

import * as classnames from 'classnames'
import * as Rivet from './common'


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
    Rivet.Edges
        .filter(e => style.hasOwnProperty(e))
        // edges can only have one specified size
        .map(e => rivetSpacing(t,e,style[e]))
        .concat(
    Rivet.Sizes
        .filter(s => style.hasOwnProperty(s))
        // sizes can be applied to one or more edges.
        .map(s => inflate(style[s]) 
            .map(e => rivetSpacing(t,e,s)))
        .reduce(flatten, []))

export const parseRivetSpacing = (type, style: Rivet.Size | Rivet.BoxStyle) =>
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

export type ComponentClassDecorator<T extends Rivet.Props> = ( props: T ) => string;

export const rivetize = <T extends Rivet.Props> (props: T, componentClass: string = "", componentDecorators: Array<ComponentClassDecorator<T>> = []) => {
    const { className, border, margin, padding, display="", hide=false, ts } = props;
    const decorations = componentDecorators.map(cg => cg(props));
    return classnames(...parseRivetClasses(margin, padding, ts, border, display, hide), componentClass, className, decorations);
}