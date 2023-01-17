/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
const path = require("path");

module.exports = {
  title: "Rivet React Style Guide",
  resolver: require("react-docgen").resolver.findAllComponentDefinitions,
  propsParser: (filePath, source, resolver, handlers) => {
    return require("react-docgen").parse(source, resolver, handlers);
  },
  pagePerSection: true,
  exampleMode: "expand",
  usageMode: "expand",
  sections: [
    {
      name: "Forms",
      components: () => [
        "src/components/Checkbox/[A-Z]*.jsx",
        "src/components/Button/[A-Z]*.jsx",
        "src/components/Input/[A-Z]*.jsx",
        "src/components/RadioButton/[A-Z]*.jsx",
      ],
    },
    {
      name: "Grid",
      components: "src/components/Grid/[A-Z]*.jsx",
    },
    {
      name: "Navigation",
      components: () => [
        "src/components/Breadcrumbs/[A-Z]*.jsx",
        "src/components/Dropdown/[A-Z]*.jsx",
      ],
    },
    {
      name: "Overlays",
      components: "src/components/Alert/[A-Z]*.jsx",
    },
    {
      name: "Tables",
      components: "src/components/Table/[A-Z]*.jsx",
    },
    {
      name: "Rivet Properties",
      content: "src/docs/RivetizedProperties.md",
      sections: [
        {
          name: "alignContent",
          content: "src/docs/alignContent.md",
        },
        {
          name: "alignItems",
          content: "src/docs/alignItems.md",
        },
        {
          name: "alignSelf",
          content: "src/docs/alignSelf.md",
        },
        {
          name: "bg",
          content: "src/docs/bg.md",
        },
        {
          name: "border",
          content: "src/docs/border.md",
        },
        {
          name: "borderColor",
          content: "src/docs/borderColor.md",
        },
        {
          name: "color",
          content: "src/docs/color.md",
        },
        {
          name: "display",
          content: "src/docs/display.md",
        },
        {
          name: "flex",
          content: "src/docs/flex.md",
        },
        {
          name: "flexDirection",
          content: "src/docs/flexDirection.md",
        },
        {
          name: "flexWrap",
          content: "src/docs/flexWrap.md",
        },
        {
          name: "flow",
          content: "src/docs/flow.md",
        },
        {
          name: "fontFamily",
          content: "src/docs/fontFamily.md",
        },
        {
          name: "grow",
          content: "src/docs/grow.md",
        },
        {
          name: "hide",
          content: "src/docs/hide.md",
        },
        {
          name: "justifyContent",
          content: "src/docs/justifyContent.md",
        },
        {
          name: "lhTitle",
          content: "src/docs/lhTitle.md",
        },
        {
          name: "margin",
          content: "src/docs/margin.md",
        },
        {
          name: "padding",
          content: "src/docs/padding.md",
        },
        {
          name: "prose",
          content: "src/docs/prose.md",
        },
        {
          name: "shadow",
          content: "src/docs/shadow.md",
        },
        {
          name: "shrink",
          content: "src/docs/shrink.md",
        },
        {
          name: "stopBreak",
          content: "src/docs/stopBreak.md",
        },
        {
          name: "textAlign",
          content: "src/docs/textAlign.md",
        },
        {
          name: "typescale",
          content: "src/docs/typescale.md",
        },
        {
          name: "uppercase",
          content: "src/docs/uppercase.md",
        },
        {
          name: "weight",
          content: "src/docs/weight.md",
        },
        {
          name: "width",
          content: "src/docs/width.md",
        },
        {
          name: "z",
          content: "src/docs/z.md",
        },
      ],
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
  require: [
    path.join(__dirname, "node_modules/rivet-core/css/rivet.min.css"),
    "./src/docs/documentation.css",
    path.resolve(__dirname, "styleguide.setup.js"),
  ],
  theme: {
    maxWidth: 1920,
  },
};
