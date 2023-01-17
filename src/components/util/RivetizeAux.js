import {
  BorderRadius,
  Borders,
  CombineEdges,
  Edges,
  FlexInline,
  FlexNormal,
  Hidden,
  HiddenAll,
  HiddenScreenReader,
  Sizes,
  Spacing,
} from "./RivetizeConstants.js";

const inflate = (x) => (Array.isArray(x) ? x : [x]);
const flatten = (a, b) => a.concat(b);

export const parseRivetBooleanUtility = (value, css) => {
  if (typeof value === "string") {
    if (value.toUpperCase() === "TRUE") {
      return css;
    }
    return "";
  }
  if (!!value) {
    return css;
  }
  return "";
};

export const parseRivetSingleListUtility = (value, list, css) => {
  if (!list.includes(value)) {
    return "";
  }
  return css;
};

export const parseRivetMultiListUtility = (values, list, cssBase) => {
  if (Array.isArray(values)) {
    return values.map((value) => {
      if (!list.includes(value)) {
        return "";
      }
      return `${cssBase}-${value}`;
    });
  } else {
    if (!list.includes(values)) {
      return "";
    }
    return `${cssBase}-${values}`;
  }
};

const rivetSpacing = (type, edge, size) => {
  const neg = size.startsWith("-");
  const processedSize = neg ? size.substring(1) : size;
  if (neg && CombineEdges.includes(edge)) {
    return "";
  }
  if (!Spacing.includes(processedSize)) {
    return "";
  }
  return `${neg ? "-" : ""}rvt-${type}-${edge}-${processedSize}`;
};

// determine spacing based on edge- or size-based styling
const edgeSpecificSpacing = (t, style) =>
  Edges.filter((e) => style.hasOwnProperty(e))
    // edges can only have one specified size
    .map((e) => rivetSpacing(t, e, style[e]))
    .concat(
      Sizes.filter((s) => style.hasOwnProperty(s))
        // sizes can be applied to one or more edges.
        .map((s) => inflate(style[s]).map((e) => rivetSpacing(t, e, s)))
        .reduce(flatten, [])
    )
    .join(" ");

export const parseRivetSpacing = (type, style) =>
  style
    ? typeof style === "string"
      ? rivetSpacing(type, "all", style)
      : edgeSpecificSpacing(type, style)
    : "";

export const parseRivetBorder = (border) => {
  if (Array.isArray(border)) {
    return border.map((value) => {
      return parseBorderAux(value);
    });
  } else {
    return parseBorderAux(border);
  }
};

const parseBorderAux = (border) => {
  if (!border) {
    return "";
  }

  if (BorderRadius.includes(border)) {
    return {
      [`rvt-border-all`]: true,
      [`rvt-border-${border}`]: true,
    };
  }

  const neg = border.startsWith("-");
  const processedBorder = neg ? border.substring(1) : border;

  if (!Borders.includes(processedBorder)) {
    return "";
  }

  return `rvt-border-${neg ? processedBorder : border}${neg ? "-none" : ""}`;
};

export const parseRivetHidden = (hide) => {
  if (!Hidden.includes(hide)) {
    return "";
  }
  switch (hide) {
    case HiddenScreenReader:
      return "rvt-sr-only";
    case HiddenAll:
      return "rvt-display-none";
    default:
      return `rvt-hide-${hide}`;
  }
};

export const parseRivetShadow = (shadow) => {
  switch (shadow) {
    case "normal":
      return "rvt-shadow";
    case "subtle":
    case "heavy":
      return `rvt-shadow-${shadow}`;
    default:
      return "";
  }
};

export const parseRivetFlex = (flex) => {
  if (Array.isArray(flex)) {
    return flex.map((value) => {
      return parseFlexAux(value);
    });
  } else {
    return parseFlexAux(flex);
  }
};

const parseFlexAux = (flex) => {
  if (FlexNormal.includes(flex)) {
    return flex.replace("normal", "rvt-flex");
  }

  if (FlexInline.includes(flex)) {
    return flex.replace("inline", "rvt-inline-flex");
  }

  return "";
};
