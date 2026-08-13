/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      environmentOptions: {
        jsdom: {
          url: "http://localhost/",
        },
      },
      setupFiles: ["./src/setupTests.js"],
      coverage: {
        provider: "v8",
        reporter: ["text", "cobertura"],
        exclude: ["**/index.js", "**/index.jsx", "src/setupTests.js"],
      },
      reporters: ["default", "junit"],
      outputFile: {
        junit: "./junit.xml",
      },
    },
  }),
);
