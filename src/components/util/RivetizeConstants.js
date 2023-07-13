/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
const FlexResp = ["sm-up", "md-up", "lg-up", "xl-up", "xxl-up"];

const AlignBase = ["start", "end", "center", "stretch", "baseline"];
const AlignResp = FlexResp.map((r) => AlignBase.map((s) => `${s}-${r}`)).flat(
  1
);

export const AlignContent = [...AlignBase, ...AlignResp];

export const AlignItems = [...AlignBase, ...AlignResp];

const AlignSelfBase = [
  "self-start",
  "self-end",
  "center-end",
  "stretch-end",
  "baseline-end",
];
const AlignSelfResp = FlexResp.map((r) =>
  AlignSelfBase.map((s) => `${s}-${r}`)
).flat(1);
export const AlignSelf = [...AlignSelfBase, ...AlignSelfResp];

const BorderStandard = ["all", "top", "right", "bottom", "left", "none"];
export const BorderRadius = ["radius", "radius-cicle"];
export const Borders = [...BorderStandard, ...BorderRadius];

export const BorderColor = [
  "blue",
  "crimson",
  "gold",
  "green",
  "orange",
  "purple",
];

const ColorBase = ["blue", "crimson", "gold", "green", "orange", "purple"];
const ColorWeight = ["000", "100", "200", "300", "400", "500", "600", "700"]
  .map((r) => ColorBase.map((s) => `${s}-${r}`))
  .flat(1);
export const Color = [...ColorBase, ...ColorWeight];

export const Display = ["inline", "inline-block", "block", "none"];

const SingleEdges = ["all", "top", "right", "bottom", "left"];
export const CombineEdges = ["tb", "lr"];
export const Edges = [...SingleEdges, ...CombineEdges];

const FlexDirectionBase = ["row", "row-reverse", "column", "column-reverse"];
const FlexDirectionResp = FlexResp.map((r) =>
  FlexDirectionBase.map((s) => `${s}-${r}`)
).flat(1);
export const FlexDirection = [...FlexDirectionBase, ...FlexDirectionResp];

export const FlexInline = ["inline", ...FlexResp.map((r) => `inline-${r}`)];
export const FlexNormal = ["normal", ...FlexResp.map((r) => `normal-${r}`)];

const FlexShrinkGrowBase = ["0", "1"];
const FlexShrinkGrowResp = FlexResp.map((r) =>
  FlexShrinkGrowBase.map((s) => `${s}-${r}`)
).flat(1);
export const FlexShrinkGrow = [
  0,
  1,
  ...FlexShrinkGrowBase,
  ...FlexShrinkGrowResp,
];

const FlexWrapBase = ["wrap", "no-wrap", "wrap-reverse"];
const FlexWrapResp = FlexResp.map((r) =>
  FlexWrapBase.map((s) => `${s}-${r}`)
).flat(1);
export const FlexWrap = [...FlexWrapBase, ...FlexWrapResp];

export const FontFamily = ["sans", "serif", "mono"];

const HiddenDown = ["sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
const HiddenUp = ["sm-up", "md-up", "lg-up", "xl-up", "xxl-up"];
export const HiddenScreenReader = "sr";
export const HiddenAll = "all";
export const Hidden = [
  ...HiddenDown,
  ...HiddenUp,
  HiddenScreenReader,
  HiddenAll,
];

const JustifyBase = [
  "start",
  "end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
];
const JustifyResp = FlexResp.map((r) =>
  JustifyBase.map((s) => `${s}-${r}`)
).flat(1);
export const JustifyContent = [...JustifyBase, ...JustifyResp];

export const Sizes = [
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "3-xl",
  "4-xl",
  "none",
];

const SpaceResp = ["sm-up", "md-up", "lg-up", "xl-up", "xxl-up"]
  .map((r) => Sizes.map((s) => `${s}-${r}`))
  .flat(1);
export const Spacing = [...Sizes, ...SpaceResp];

export const TextAlign = ["left", "center", "right"];

const TypescaleNum = [12, 14, 18, 20, 23, 26, 29, 32, 36, 41, 46, 52];
const TypescaleNumStr = [
  "12",
  "14",
  "18",
  "20",
  "23",
  "26",
  "29",
  "32",
  "36",
  "41",
  "46",
  "52",
];
const TypescaleSize = ["xxs", "xs", "base", "sm", "md", "lg", "xl", "xxl"];
const TypescaleSizes = [...TypescaleNum, ...TypescaleNumStr, ...TypescaleSize];
const TypescaleResp = ["sm-up", "md-up", "lg-up", "xl-up", "xxl-up"]
  .map((r) => TypescaleSizes.map((s) => `${s}-${r}`))
  .flat(1);
export const Typescale = [...TypescaleSizes, ...TypescaleResp];

export const Weight = ["regular", "medium", "bold"];

const WidthSize = [
  "xxs",
  "xs",
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "3-xl",
  "4-xl",
];
const WidthResp = ["sm-up", "md-up", "lg-up", "xl-up", "xxl-up"]
  .map((r) => WidthSize.map((s) => `${s}-${r}`))
  .flat(1);
export const Width = [...WidthSize, ...WidthResp];

const ZIndexNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ZIndexStr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
export const ZIndex = [...ZIndexNum, ...ZIndexStr];
