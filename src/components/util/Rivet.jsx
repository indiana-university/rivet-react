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

const singleEdges = [ 'top', 'right', 'bottom', 'left'];
const combineEdges = [ 'all', 'tb', 'lr' ];
const Edges = [...singleEdges, ...combineEdges];
const Sizes = [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3-xl', '4-xl', 'none' ];
const SpaceResp = ['sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'].map(r => Sizes.map(s => `${s}-${r}`)).flat(1)
const Spacing = [...Sizes, ...SpaceResp];
const BorderStandard = [ 'all', 'top', 'right', 'bottom', 'left', 'none' ];
const BorderRadius = [ 'radius', 'radius-cicle' ];
const BorderColor = [ 'blue', 'crimson', 'gold', 'green', 'orange', 'purple' ];
const Borders = [ ...BorderStandard, ...BorderRadius ];
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
const Display = ['inline', 'inline-block', 'block', 'none'];
const FlexResp = ['sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up']
const FlexInline = ['inline', ...FlexResp.map(r => `inline-${r}`)]
const FlexNormal = ['normal', ...FlexResp.map(r => `normal-${r}`)]
const FlexDirectionBase = ['row', 'row-reverse', 'column', 'column-reverse'];
const FlexDirectionResp = FlexResp.map(r => FlexDirectionBase.map(s => `${s}-${r}`)).flat(1)
const FlexDirection = [...FlexDirectionBase, ...FlexDirectionResp];
const FlexWrapBase = ['wrap', 'no-wrap', 'wrap-reverse'];
const FlexWrapResp = FlexResp.map(r => FlexWrapBase.map(s => `${s}-${r}`)).flat(1)
const FlexWrap = [...FlexWrapBase, ...FlexWrapResp];
const JustifyBase = ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'];
const JustifyResp = FlexResp.map(r => JustifyBase.map(s => `${s}-${r}`)).flat(1)
const JustifyContent = [...JustifyBase, ...JustifyResp];
const AlignBase = ['start', 'end', 'center', 'stretch', 'baseline'];
const AlignResp = FlexResp.map(r => AlignBase.map(s => `${s}-${r}`)).flat(1)
const AlignContent = [...AlignBase, ...AlignResp];
const AlignItems = [...AlignBase, ...AlignResp]
const AlignSelfBase = ['self-start', 'self-end', 'center-end', 'stretch-end', 'baseline-end'];
const AlignSelfResp = FlexResp.map(r => AlignSelfBase.map(s => `${s}-${r}`)).flat(1)
const AlignSelf = [...AlignSelfBase, ...AlignSelfResp];
const FlexShrinkGrowBase = [ '0', '1'];
const FlexShrinkGrowResp = FlexResp.map(r => AlignSelfBase.map(s => `${s}-${r}`)).flat(1)
const FlexShrinkGrow = [ ...FlexShrinkGrowBase, ...FlexShrinkGrowResp];
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

const parseRivetMultiListUtility = (list, values, cssBase) => {
  if(Array.isArray(values)) {
    return values.map((value) => {
      if(!list.includes(value)) {
        return '';
      }
      return `${cssBase}-${value}`
    });
  } else {
    if(!list.includes(values)) {
      return '';
    }
    return `${cssBase}-${values}`
  }
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

const parseRivetBorder = (border) => {
  if(Array.isArray(border)) {
    return border.map((value) => {
      return parseBorderAux(value);
    });
  } else {
    return parseBorderAux(border);
  }
}

const parseBorderAux = (border) => {
  if(!border) {
    return '';
  }

  if(BorderRadius.includes(border)) {
    return ({
      [`rvt-border-all`]: true,
      [`rvt-border-${border}`]: true
    });
  }

  const neg = border.startsWith('-');
  const processedBorder = neg ? border.substring(1) : border;

  if(!Borders.includes(processedBorder)) {
    return '';
  }

  return `rvt-border-${border}${neg ? '-none' : ''}`;
}


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

const parseRivetPadding = (padding) => parseRivetSpacing('p', padding);

const parseRivetMargin = (margin) => parseRivetSpacing('m', margin);

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

const parseRivetFlex = (flex) => {
  if(Array.isArray(flex)) {
    return flex.map((value) => {
      return parseFlexAux(value)
    });
  } else {
    return parseFlexAux(flex)
  }
}

const parseFlexAux = (flex) => {
  if(FlexNormal.includes(flex)) {
    return flex.replace('normal','rvt-flex')
  }

  if(FlexInline.includes(flex)) {
    return flex.replace('inline','rvt-inline-flex')
  }

  return '';
}

/**
 *  Given component properties, generate one or more CSS class decorations.
 */
export const rivetize = (Component) => {
  return ({
    alignContent, alignItems, alignSelf, bg, border, borderColor, className, color, display, flex, flexDirection, flexWrap,
    flow, fontFamily, grow, hide, justifyContent, lhTitle, margin, padding, prose, shadow, shrink, stopBreak,
    textAlign, typescale, uppercase, weight, width, z, ...attrs
  }) => {
    return<Component
    className={classNames(
      parseRivetMultiListUtility(AlignContent, alignContent, `rvt-content`),
      parseRivetMultiListUtility(AlignItems, alignItems, `rvt-items`),
      parseRivetMultiListUtility(AlignSelf, alignSelf, `rvt`),
      parseRivetSingleListUtility(Color, bg, `rvt-bg-${bg}`),
      parseRivetBorder(border),
      parseRivetSingleListUtility(BorderColor, borderColor, `rvt-border-color-${borderColor}`),
      parseRivetSingleListUtility(Color, color, `rvt-color-${color}`),
      parseRivetSingleListUtility(Display, display, `rvt-display-${display}`),
      parseRivetFlex(flex),
      parseRivetMultiListUtility(FlexDirection, flexDirection, `rvt-flex`),
      parseRivetMultiListUtility(FlexWrap, flexWrap, `rvt`),
      parseRivetBooleanUtility(flow, 'rvt-flow'),
      parseRivetMultiListUtility(FlexShrinkGrow, grow, `rvt-grow`),
      parseRivetMultiListUtility(FlexShrinkGrow, shrink, `rvt-shrink`),
      parseRivetSingleListUtility(FontFamily, fontFamily, `rvt-font-${fontFamily}`),
      parseRivetHidden(hide),
      parseRivetMultiListUtility(JustifyContent, justifyContent, `rvt-justify`),
      parseRivetBooleanUtility(lhTitle, 'rvt-lh-title'),
      parseRivetMargin(margin),
      parseRivetPadding(padding),
      parseRivetBooleanUtility(prose, 'rvt-prose'),
      parseRivetShadow(shadow),
      parseRivetBooleanUtility(stopBreak, 'rvt-text-nobr'),
      parseRivetSingleListUtility(TextAlign, textAlign, `rvt-text-${textAlign}`),
      parseRivetMultiListUtility(Typescale, typescale, `rvt-ts`),
      parseRivetBooleanUtility(uppercase, 'rvt-text-uppercase'),
      parseRivetSingleListUtility(Weight, weight, `rvt-text-${weight}`),
      parseRivetMultiListUtility(Width, width, `rvt-width`),
      parseRivetSingleListUtility(ZIndex, z, `rvt-z-${z * 100}`),
      className)
  } {...attrs} /> 
  }
};
