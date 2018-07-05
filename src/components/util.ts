// use strict

/**
 * Functions migrated from utils.js
 */

import * as classnames from 'classnames'
import * as Rivet from './common'

const rvtSpacing = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ]
const SIZES = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
const dirs = ['top', 'right', 'bottom', 'left']
const DIRECTIONS = [ 'top', 'right', 'bottom', 'left' ]


export const addRivetSpacing = (c: string[], type: string, def: any) => {
    if (typeof def === 'string') {
        if (rvtSpacing.indexOf(def) !== -1) {
            c.push('rvt-' + type + '-all-' + def)
        }
    } else if (typeof def === 'object') {
        dirs.forEach(dir => {
            if (def.hasOwnProperty(dir)) {
                const size = def[dir]
                if (rvtSpacing.indexOf(size) !== -1) {
                    c.push('rvt-' + type + '-' + dir + '-' + size)
                }
            }
        })
        rvtSpacing.forEach(size => {
            if (def.hasOwnProperty(size)) {
                const dir = def[size]
                if (Array.isArray(dir)) {
                    dir.forEach(d => {
                        if (dirs.indexOf(d) !== 0) {
                            c.push('rvt-' + type + '-' + d + '-' + size)
                        }
                    })
                } else if (dirs.indexOf(dir) !== 0) {
                    c.push('rvt-' + type + '-' + dir + '-' + size)
                }
            }
        })
    }
}

export const copy = (o: any) => {
    if (typeof o !== 'object') {
        return o
    }

    const c = {}
    for (const p in o) {
        if (o.hasOwnProperty(p)) {
            c[p] = o[p]
        }
    }

    return c
}

export const hash = (s: string) => {
    let h = 0
    if (s.length === 0) {
        return s
    } 
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i)
        h = ((i << 5) - i) + c
        h &= h
    }
    return h
}

export const shortuid = () => {
    const m = Date.now() % 4194304
    const r = Math.floor(Math.random() * 12582911) + 4194304
    const id = (m + r).toString(16);
    return `id_${id}`;
}

export const getRivetClasses = (props: any, c: string[] = [])  => {
    if (props.margin) {
        addRivetSpacing(c, 'm', props.margin)
        delete props.margin
    }
    if (props.padding) {
        addRivetSpacing(c, 'p', props.padding)
        delete props.padding
    }


    if (typeof props.ts === 'number' || props.ts === 'base') {
        c.push('rvt-ts-' + props.ts)
        delete props.ts
    }
    return c
}

export const parseRivetSpacing = (type, definition: string | Rivet.BoxStyling) => {
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

export const rivetize = (props: Rivet.Props) => {
    const { className, border, margin, padding=[], display="", hide=false, ts, ...rest } = props;
    return classnames(...parseRivetClasses(margin, padding, ts, border, display, hide), className);
}