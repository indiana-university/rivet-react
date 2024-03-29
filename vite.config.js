import { defineConfig } from "vite";
import { externalizeDeps } from "vite-plugin-externalize-deps";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import classNames from "classnames";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        "rivet-react": resolve(__dirname, "lib/main.js"),
        "rivet-react-accordion": resolve(__dirname, "lib/Accordion.js"),
        "rivet-react-alert": resolve(__dirname, "lib/Alert.js"),
        "rivet-react-breadcrumbs": resolve(__dirname, "lib/Breadcrumbs.js"),
        "rivet-react-button": resolve(__dirname, "lib/Button.js"),
        "rivet-react-checkbox": resolve(__dirname, "lib/Checkbox.js"),
        "rivet-react-dialog": resolve(__dirname, "lib/Dialog.js"),
        "rivet-react-dropdown": resolve(__dirname, "lib/Dropdown.js"),
        "rivet-react-file": resolve(__dirname, "lib/File.js"),
        "rivet-react-footer": resolve(__dirname, "lib/Footer.js"),
        "rivet-react-grid": resolve(__dirname, "lib/Grid.js"),
        "rivet-react-header": resolve(__dirname, "lib/Header.js"),
        "rivet-react-input": resolve(__dirname, "lib/Input.js"),
        "rivet-react-list": resolve(__dirname, "lib/List.js"),
        "rivet-react-loadingindicator": resolve(__dirname, "lib/LoadingIndicator.js"),
        "rivet-react-pagecontent": resolve(__dirname, "lib/PageContent.js"),
        "rivet-react-pagination": resolve(__dirname, "lib/Pagination.js"),
        "rivet-react-radiobutton": resolve(__dirname, "lib/RadioButton.js"),
        "rivet-react-seriesnav": resolve(__dirname, "lib/SeriesNav.js"),
        "rivet-react-sidenav": resolve(__dirname, "lib/Sidenav.js"),
        "rivet-react-subnav": resolve(__dirname, "lib/Subnav.js"),
        "rivet-react-table": resolve(__dirname, "lib/Table.js")
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ["react", "react-dom", "classNames"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          classnames: "classNames",
        },
      },
    },
  },
  plugins: [react(), externalizeDeps()],
});
