module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: "auto",
        useBuiltIns: "usage",
        corejs: "3.39.0",
      },
    ],
    "@babel/react",
  ],
};
