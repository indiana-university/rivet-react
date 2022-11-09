/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

import classNames from 'classnames';
import * as React from 'react';

// Helper and Styling Functions
export const shortuid = () => {
  const m = Date.now() % 4194304
  const r = Math.floor(Math.random() * 12582911) + 4194304
  const id = (m + r).toString(16);
  return `id_${id}`;
}

const inflate = (x) => Array.isArray(x) ? x : [x];
const flatten = (a,b) => a.concat(b);
const rivetColor = (type,color) => `rvt-${type}-${color}`

const singleEdges = [ 'top', 'right', 'bottom', 'left'];
const combineEdges = [ 'all', 'tb', 'lr' ];
const Edges = [...singleEdges, ...combineEdges];
const Sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3-xl', '4-xl', 'none' ];
const SpaceResp = ['sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'].map(r => Sizes.map(s => `${s}-${r}`)).flat(1)
const Spacing = [...Sizes, ...SpaceResp];
const BorderStandard = [ 'all', 'top', 'right', 'bottom', 'left', 'none' ];
const BorderRemove = [ 'top-none', 'right-none', 'bottom-none', 'left-none'];
const BorderRadius = [ 'radius', 'radius-cicle' ];
const BorderColor = [ 'blue', 'crimson', 'gold', 'green', 'orange', 'purple' ];
const Borders = [ ...BorderStandard, ...BorderRemove, ...BorderRadius, ...BorderColor ];
const ColorBase= [ 'blue', 'crimson', 'gold', 'green', 'orange', 'purple' ];
const ColorWeight= [ '000', '100', '200', '300', '400', '500', '600', '700' ].map(r => ColorBase.map(s => `${s}-${r}`)).flat(1);
const Color = [...ColorBase, ...ColorWeight]
const HiddenDown = [ 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down' ];
const HiddenUp = [ 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up' ];
const HiddenScreenReader = 'sr';
const HiddenAll = 'all';
const Hidden = [ ...HiddenDown, ...HiddenUp, HiddenScreenReader, HiddenAll ];
const TypescaleNum = ['12', '14', '18', '20', '23', '26', '29', '32', '36', '41', '46', '52'];
const TypescaleSize = ['xxs', 'xs', 'base', 'sm', 'md', 'lg', 'xl', 'xxl'];
const TypescaleSizes = [...TypescaleNum, ...TypescaleSize];
const TypescaleResp = ['sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'].map(r => TypescaleSizes.map(s => `${s}-${r}`)).flat(1)
const Typescale = [...TypescaleSizes, ...TypescaleResp];
const FontFamily = ['sans', 'serif', 'mono'];
const TextAlign = ['left', 'center', 'right'];
const WidthSize = ['xxs', 'xs', 'base', 'sm', 'md', 'lg', 'xl', 'xxl', '3-xl', '4-xl'];
const WidthResp = ['sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'].map(r => WidthSize.map(s => `${s}-${r}`)).flat(1)
const Width = [...WidthSize, ...WidthResp]
const ZIndex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const Display = ['inline', 'inline-block', 'block', 'flex', 'none'];
const FlexDirection = ['row', 'row-reverse', 'column', 'column-reverse'];
const FlexWrap = ['wrap', 'no-wrap', 'wrap-reverse'];
const JustifyContent = ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'];
const AlignContent = ['start', 'end', 'center', 'stretch', 'baseline'];
const AlignItem = ['start', 'end', 'center', 'stretch', 'baseline'];
const AlignSelf = ['self-start', 'self-end', 'center-end', 'stretch-end', 'baseline-end'];
const FlexShrinkGrow = [ '0', '1'];
const Weight = ['regular', 'medium', 'bold'];

/**
 * Support functions
 */

const parseRivetBooleanUtility = (value, css) => {
  return ({
    [css]: !!value
  });
}

const parseRivetSingleListUtility = (list, value, css) => {
  if(!list.includes(value)) {
    return '';
  }
  return css
}

const rivetSpacing = (type,edge,size) => {
  const neg = size.startsWith('-')
  const processedSize = neg ? size.substring(1) : size
  if(neg && combineEdges.includes(edge)) {
    return '';
  }
  if(!Spacing.includes(processedSize)) {
    return '';
  }
  return `${neg ? '-' : ''}rvt-${type}-${edge}-${processedSize}`
}

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

/**
 * Attribute functions
 */

/**
 * Optional Rivet style: add a border to any or all sides of an element
 * See: https://rivet.uits.iu.edu/components/utilities/border/
 */
const parseRivetBorder = (border) => {
  if(Array.isArray(border)) {
    return border.map((value) => {
      if(!Borders.includes(border)) {
        return '';
      }
      return `rvt-border-${value}`
    });
  } else {
    if(!Borders.includes(border)) {
      return '';
    }
    return ({
      [`rvt-border-all`]: BorderRadius.includes(border) === 'radius',
      [`rvt-border-${border}`]: !!border
    });
  }
}

/**
 * Optional Rivet style: show/hide content based on screen size.
 * ex: 'md-down' will hide content on medium-sized screens and smaller.
 * ex: 'lg-up' will hide content on large-sized screens and larger.
 * See: https://rivet.uits.iu.edu/components/utilities/visibility/
 */
const parseRivetHidden = (hide) => {
  if(!Hidden.includes(hide)) {
    return '';
  }
  switch(hide) {
    case HiddenScreenReader:
      return 'rvt-sr-only';
    case HiddenAll:
      return 'rvt-display-none';
    default:
      return `rvt-hide-${hide}`
  }
}

/**
 * Optional Rivet style: adjust the padding(s) of an element
 * See: https://rivet.uits.iu.edu/components/layout/spacing/
 */
 const parseRivetPadding = (padding) => parseRivetSpacing('p', padding);

/**
 * Optional Rivet style: adjust the margin(s) of an element
 * See: https://rivet.uits.iu.edu/components/layout/spacing/
 */
 const parseRivetMargin = (margin) => parseRivetSpacing('m', margin);

/**
 * Optional Rivet style: Adds a shadow effect to an element
 * See: https://rivet.uits.iu.edu/components/utilities/shadow/
 */
 const parseRivetShadow = (shadow) => {
  switch(shadow) {
    case 'normal':
      return 'rvt-shadow';
    case 'subtle':
    case 'heavy':
      return `rvt-shadow-${shadow}`;
    default: return '';
  }
}

/**
 * Optional Rivet style: Adjusts width of element
 * See: https://rivet.uits.iu.edu/components/utilities/width/
 */
 const parseRivetWidth = (width) => {
  if(Array.isArray(width)) {
    return width.map((value) => {
      if(!Width.includes(value)) {
        return '';
      }
      return `rvt-width-${value}`
    });
  } else {
    if(!Width.includes(width)) {
      return '';
    }
    return `rvt-width-${width}`
  }
}

/**
 * Optional Rivet style: type scale adjustment
 * See: https://rivet.uits.iu.edu/components/layout/typography/
 */
const parseRivetTypescale = (typescale) => {
  if(Array.isArray(typescale)) {
    return typescale.map((value) => {
      if(!Typescale.includes(value)) {
        return '';
      }
      return `rvt-ts-${value}`
    });
  } else {
    if(!Typescale.includes(typescale)) {
      return '';
    }
    return `rvt-ts-${typescale}`
  }
}

/**
 *  Given component properties, generate one or more CSS class decorations.
 */
export const rivetize = (Component) => {
  return ({
    alignContent, alignItem, alignSelf, bg, border, className, color, display, flow, fontFamily, hide, justifyContent,
    lhTitle, margin, padding, prose, shadow , stopBreak, textAlign, typescale, uppercase, weight, width, z, ...attrs
  }) => {
    return<Component
    className={classNames(
      parseRivetSingleListUtility(AlignContent, alignContent, `rvt-content-${alignContent}`),
      parseRivetSingleListUtility(AlignItem, alignItem, `rvt-items-${alignItem}`),
      parseRivetSingleListUtility(AlignSelf, alignSelf, `rvt-${alignSelf}`),
      parseRivetSingleListUtility(Color, bg, `rvt-bg-${bg}`),
      parseRivetBorder(border),
      parseRivetSingleListUtility(Color, color, `rvt-color-${color}`),
      parseRivetSingleListUtility(Display, display, `rvt-display-${display}`),
      parseRivetBooleanUtility(flow, 'rvt-flow'),
      parseRivetSingleListUtility(FlexShrinkGrow, grow, `rvt-grow-${grow}`),
      parseRivetSingleListUtility(FlexShrinkGrow, shrink, `rvt-shrink-${shrink}`),
      parseRivetSingleListUtility(FontFamily, fontFamily, `rvt-font-${fontFamily}`),
      parseRivetHidden(hide),
      parseRivetSingleListUtility(JustifyContent, justifyContent, `rvt-justify-${justifyContent}`),
      parseRivetBooleanUtility(lhTitle, 'rvt-lh-title'),
      parseRivetMargin(margin),
      parseRivetPadding(padding),
      parseRivetBooleanUtility(prose, 'rvt-prose'),
      parseRivetShadow(shadow),
      parseRivetBooleanUtility(stopBreak, 'rvt-text-nobr'),
      parseRivetSingleListUtility(TextAlign, textAlign, `rvt-text-${textAlign}`),
      parseRivetTypescale(Typescale, typescale, `rvt-ts-${typescale}`),
      parseRivetBooleanUtility(uppercase, 'rvt-text-uppercase'),
      parseRivetSingleListUtility(Weight, weight, `rvt-text-${weight}`),
      parseRivetWidth(width),
      parseRivetSingleListUtility(ZIndex, z, `rvt-z-${z * 100}`),
      className)
  } {...attrs} /> 
  }
};
