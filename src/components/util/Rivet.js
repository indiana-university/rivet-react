/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames'
import React from 'react';

export const sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ];
export const edges = [ 'top', 'right', 'bottom', 'left', 'tb', 'lr' ];

// Helper and Styling Functions

export const shortuid = () => {
    const m = Date.now() % 4194304
    const r = Math.floor(Math.random() * 12582911) + 4194304
    const id = (m + r).toString(16);
    return `id_${id}`;
}

const inflate = (x) => Array.isArray(x) ? x : [x];
const flatten = (a,b) => a.concat(b);
const rivetSpacing = (type,edge,size) => {
    return sizes.includes(size) ? `rvt-${type}-${edge}-${size}` : '';
};

// determine spacing based on edge- or size-based styling
const edgeSpecificSpacing = (t, style) =>
    edges
        .filter(e => style.hasOwnProperty(e))
        // edges can only have one specified size
        .map(e => rivetSpacing(t,e,style[e]))
        .concat(
    sizes
        .filter(s => style.hasOwnProperty(s))
        // sizes can be applied to one or more edges.
        .map(s => inflate(style[s]) 
            .map(e => rivetSpacing(t,e,s)))
        .reduce(flatten, []))
        .join(" ");

const parseRivetSpacing = (type, style) =>
    style
    ? typeof style === "string"
        ? rivetSpacing(type, "all", style)
        : edgeSpecificSpacing(type, style)
    : "";

/**
 * Optional Rivet style: adjust the margin(s) of an element
 * See: https://rivet.uits.iu.edu/components/layout/spacing/
 */
const parseRivetMargin = (margin) =>
    parseRivetSpacing('m', margin);

/**
 * Optional Rivet style: adjust the padding(s) of an element
 * See: https://rivet.uits.iu.edu/components/layout/spacing/
 */
const parseRivetPadding = (padding) =>
    parseRivetSpacing('p', padding);

/**
 * Optional Rivet style: type scale adjustment
 * See: https://rivet.uits.iu.edu/components/layout/typography/
 */
const parseRivetTypescale = (typescale) => {
    const validTypescales =  ["base", "xxs", "xs", "sm", "md", "lg", "xl", "xxl", 12, 14, 16, 18, 20, 23, 26, 29, 32, 36, 41, 46, 52];
    return {[`rvt-ts-${typescale}`]: !!typescale && validTypescales.includes(typescale)};
};

/**
 * Optional Rivet style: add a border to any or all sides of an element
 * See: https://rivet.uits.iu.edu/components/utilities/border/
 */
const parseRivetBorder = (border) => {
    const validBorder = ["all", "radius", ...edges];
    if(Array.isArray(border)) {
        return border.filter((value) => validBorder.includes(value))
            .map((value) => `rvt-border-${value}`);
    } else {
        return ({
            [`rvt-border-all`]: border === 'radius',
            [`rvt-border-${border}`]: !!border && validBorder.includes(border)
        });
    }
}

/**
 * Optional Rivet style: adjust the display property of an element
 * See: https://rivet.uits.iu.edu/components/utilities/display/#display-property-utilities
 */
const parseRivetDisplay = (display) => {
    const validDisplays = ["inline", "inline-block", "block", "flex", "flex-vertical-center"];
    switch(display) {
        case 'inline':
        case 'inline-block':
        case 'block':
        case 'flex':
            return validDisplays.includes(display) ? `rvt-display-${display}` : '';
        case 'flex-vertical-center':
            return 'rvt-display-flex rvt-vertical-center';
        default: return '';
    }
}

/**
 * Optional Rivet style: show/hide content based on screen size.
 * ex: 'md-down' will hide content on medium-sized screens and smaller.
 * ex: 'lg-up' will hide content on large-sized screens and larger.
 * See: https://rivet.uits.iu.edu/components/utilities/visibility/
 */
const parseRivetHidden = (hide) => {
    const validHidden = ["sm-down", "md-down", "lg-down", "xl-down", "xxl-down", "sm-up", "md-up", "lg-up", "xl-up", "xxl-up"];
    return {[`rvt-hide-${hide}`]: !!hide && validHidden.includes(hide)};
};

export const rivetize = (Component) => ({ className, border, display, hide, margin, padding, typescale, ...attrs }) => (
    <Component className={classNames(
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
 * Determine whether to apply class limiting label visibility to screenreaders.
 * @param visibility The desired visibility type.
 */
export const labelVisiblityClass = (visibility) => 
    visibility === "screen-reader-only" ? "rvt-sr-only" : "";
