// use strict

/**
 * Functions migrated from utils.js
 */

import * as classnames from 'classnames'
import * as Rivet from './common'

const SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const DIRECTIONS = [ 'top', 'right', 'bottom', 'left' ]

export const shortuid = () => {
    const m = Date.now() % 4194304
    const r = Math.floor(Math.random() * 12582911) + 4194304
    const id = (m + r).toString(16);
    return `id_${id}`;
}

export const parseRivetSpacing = (type, definition: Rivet.Size | Rivet.BoxStyle) => {
    if (!definition) {
        return [];
    }

    const classes = Array<string>();
    if (typeof definition === "string"){
        if (SIZES.indexOf(definition) !== -1) {
            classes.push(`rvt-${type}-all-${definition}`)
        }
    } else {
        DIRECTIONS.forEach(direction => {
            if (definition.hasOwnProperty(direction)) {
                const size = definition[direction]
                if (SIZES.indexOf(size) !== -1) {
                    classes.push(`rvt-${type}-${direction}-${size}`)
                }
            }
        });
        SIZES.forEach(size => {
            if (definition.hasOwnProperty(size)) {
                const directions = definition[size]
                if (Array.isArray(directions)) {
                    directions.forEach(direction => {
                        if (DIRECTIONS.indexOf(direction) !== -1) {
                            classes.push(`rvt-${type}-${direction}-${size}`)
                        }
                    })
                } else if (DIRECTIONS.indexOf(directions) !== -1) {
                    classes.push(`rvt-${type}-${directions}-${size}`)
                }
            }
        })
    }

    return classes
}

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