import classNames from 'classnames';
import * as React from 'react';

// Helper and Styling Functions

export const Sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' ];
export const Edges = [ 'top', 'right', 'bottom', 'left', 'tb', 'lr' ];

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

const parseRivetSpacing = (type, style) =>
  style
    ? (typeof style === "string"
      ? rivetSpacing(type, "all", style)
      : edgeSpecificSpacing(type, style))
    : "";

const parseRivetMargin = (margin) => parseRivetSpacing('m', margin);

const parseRivetPadding = (padding) => parseRivetSpacing('p', padding);

const parseRivetTypescale = (typescale) => ({
  [`rvt-ts-${typescale}`]: !!typescale
});

const parseRivetBorder = (border) => {
  if(Array.isArray(border)) {
    return border.map((value) => `rvt-border-${value}`);
  } else {
    return ({
      [`rvt-border-all`]: border === 'radius',
      [`rvt-border-${border}`]: !!border
    });
  }
}

const parseRivetDisplay = (display) => {
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

const parseRivetHidden = (hide) => ({
  [`rvt-hide-${hide}`]: !!hide
});

export const rivetize = (Component) => {
  return ({ className, border, display, hide, margin, padding, typescale, ...attrs }) => {
    return<Component
    className={classNames(
      parseRivetMargin(margin),
      parseRivetPadding(padding),
      parseRivetTypescale(typescale),
      parseRivetBorder(border),
      parseRivetDisplay(display),
      parseRivetHidden(hide),
      className)
  } {...attrs} /> 
  }
};
