# Contributing

[Rivet-react](https://github.com/indiana-university/rivet-react/) is open source and maintained by members of the [Indiana University](https://github.com/indiana-university) organization on GitHub. If you have questions about the library or encounter problems please [file an issue](https://github.com/indiana-university/rivet-react/issues). If you wish to contribute, [pull requests](https://help.github.com/articles/about-pull-requests/) are welcome!

To get started, fork the [rivet-react repo](https://github.com/indiana-university/rivet-react/) on GitHub.

To compile the components:

```shell
npm run build
```

To test the components:

```shell
npm test
```

To test with code coverage:

```shell
npm test --coverage
```

To start a local server with the style guide and demo pages:

```shell
npm run start
```

This project supports hot reloading of tests and the demo page.

## Adding new components

New components should always go in the `src/components` directory in the project. Every component must have a `jsx` component file, a test file, and a documentation markdown file explaining how the component is used. Additionally, in order to correctly modularize components, there should be an `index.jsx` file for each directory with the following content.

```js
export { default as ComponentName } from "./ComponentName";
```

When adding a new export, the module should be added to `package.json` as part of the `exports` section.

```json
"./path/to/component/directory/ComponentToExport": {
  "import": "./dist/rivet-react-componenttoexport.js",
  "require": "./dist/rivet-react-componenttoexport.cjs"
}
```

You will also need to add an export to the top level component index in `src/components/index.js`.

```js
export * from "./path/to/component/index.jsx";
```

To add a new section to the documentation, edit `styleguide.config.cjs` and add a new `sections` entry. They will typically follow the this pattern.

```js
{
  name: Section Name,
  components: () => [
    "src/components/path/to/Component/[A-Z]*.jsx",
  ],
}
```

## Contribution requirements

- **We aspire to full test coverage of all components.** Look at existing tests for examples on how to write them. If you have questions about testing or how to resolve coverage issues, we can help!
- **All component properties should be documented.** Property documentation should link to relevant Rivet documentation if available, particularly if the property is for styling and presentation options. Look to existing components for examples.
- **Components should be included in the style guide.** `styleguide.config.cjs` organizes component documentation into sections that align with the Rivet component documentation. If you're adding a new component, please place its documentation in the appropriate section.
- **Components should have usage examples.** Every component should have a markdown file (`.md`) alongside its implementation file (`.jsx`) with usage examples for the style guide. Look to existing components for examples.
- Every source file should contain a standard license header. You can ensure these are applied consistently by running `npm run license` before committing your code.

## Semantic release

[Semantic Release](https://github.com/semantic-release/semantic-release) is a workflow for using structured commit messages to determine the next version number of a package in accordance with [Semantic Versioning](https://semver.org/) principles and [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

The semantic-release package adds a number of useful automations.

1. Select the next version number based on commit logs since the last release;
2. Tag the GH commit with that version number;
3. Create a release from the tag with auto-generated release notes;
4. Add a friendly comment to any PRs referenced by the release notes, that the given PR was included in the release;
5. Push the package to NPM with the new version.
