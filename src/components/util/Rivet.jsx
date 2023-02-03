/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/

import classNames from "classnames";
import * as React from "react";
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  BorderColor,
  Color,
  Display,
  FlexDirection,
  FlexWrap,
  FlexShrinkGrow,
  FontFamily,
  JustifyContent,
  TextAlign,
  Typescale,
  Weight,
  Width,
  ZIndex,
} from "./RivetizeConstants.js";
import {
  parseRivetBooleanUtility,
  parseRivetBorder,
  parseRivetFlex,
  parseRivetHidden,
  parseRivetMultiListUtility,
  parseRivetShadow,
  parseRivetSingleListUtility,
  parseRivetSpacing,
} from "./RivetizeAux.js";

/**
 *  Helper and Styling Functions
 */
export const shortuid = () => {
  const m = Date.now() % 4194304;
  const r = Math.floor(Math.random() * 12582911) + 4194304;
  const id = (m + r).toString(16);
  return `id_${id}`;
};

export const rivetize = (Component) => {
  let rivetizedComponent = ({
    alignContent,
    alignItems,
    alignSelf,
    bg,
    border,
    borderColor,
    className,
    color,
    display,
    flex,
    flexDirection,
    flexWrap,
    flow,
    fontFamily,
    grow,
    hide,
    justifyContent,
    lhTitle,
    margin,
    padding,
    prose,
    shadow,
    shrink,
    stopBreak,
    textAlign,
    typescale,
    uppercase,
    weight,
    width,
    z,
    ...attrs
  }) => {
    return (
      <Component
        className={classNames(
          parseRivetMultiListUtility(alignContent, AlignContent, `rvt-content`),
          parseRivetMultiListUtility(alignItems, AlignItems, `rvt-items`),
          parseRivetMultiListUtility(alignSelf, AlignSelf, `rvt`),
          parseRivetSingleListUtility(bg, Color, `rvt-bg-${bg}`),
          parseRivetBorder(border),
          parseRivetSingleListUtility(
            borderColor,
            BorderColor,
            `rvt-border-color-${borderColor}`
          ),
          parseRivetSingleListUtility(color, Color, `rvt-color-${color}`),
          parseRivetSingleListUtility(
            display,
            Display,
            `rvt-display-${display}`
          ),
          parseRivetFlex(flex),
          parseRivetMultiListUtility(flexDirection, FlexDirection, `rvt-flex`),
          parseRivetMultiListUtility(flexWrap, FlexWrap, `rvt`),
          parseRivetBooleanUtility(flow, "rvt-flow"),
          parseRivetMultiListUtility(grow, FlexShrinkGrow, `rvt-grow`),
          parseRivetSingleListUtility(
            fontFamily,
            FontFamily,
            `rvt-font-${fontFamily}`
          ),
          parseRivetHidden(hide),
          parseRivetMultiListUtility(
            justifyContent,
            JustifyContent,
            `rvt-justify`
          ),
          parseRivetBooleanUtility(lhTitle, "rvt-lh-title"),
          parseRivetSpacing("m", margin),
          parseRivetSpacing("p", padding),
          parseRivetBooleanUtility(prose, "rvt-prose"),
          parseRivetShadow(shadow),
          parseRivetMultiListUtility(shrink, FlexShrinkGrow, `rvt-shrink`),
          parseRivetBooleanUtility(stopBreak, "rvt-text-nobr"),
          parseRivetSingleListUtility(
            textAlign,
            TextAlign,
            `rvt-text-${textAlign}`
          ),
          parseRivetMultiListUtility(typescale, Typescale, `rvt-ts`),
          parseRivetBooleanUtility(uppercase, "rvt-text-uppercase"),
          parseRivetSingleListUtility(weight, Weight, `rvt-text-${weight}`),
          parseRivetMultiListUtility(width, Width, `rvt-width`),
          parseRivetSingleListUtility(z, ZIndex, `rvt-z-${z * 100}`),
          className
        )}
        {...attrs}
      />
    );
  };

  // copy any properties set on the original component. Needed for child components (like Header.Navigation), which would otherwise be lost.
  for (const [key, val] of Object.entries(Component)) {
    rivetizedComponent[key] = val;
  }

  return rivetizedComponent;
};

/**
 * Determine whether to apply class limiting label visibility to screenreaders.
 * @param visibility The desired visibility type.
 */
export const labelVisiblityClass = (visibility) =>
  visibility === "screen-reader-only" ? "rvt-sr-only" : "";
