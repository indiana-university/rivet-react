[Rivet-react](https://github.com/indiana-university/rivet-react) is a library of React components that implement the [Rivet Software Design System](https://rivet.uits.iu.edu). The components are implemented in [TypeScript](http://www.typescriptlang.org/) and can be used by any Javascript application.

Rivet-react resources:
* [Component Documentation and Style Guide](https://indiana-university.github.io/rivet-react/)
* [GitHub repo](https://github.com/indiana-university/rivet-react)
* [NPM package](https://www.npmjs.com/package/rivet-react)
* [Travis CI](https://travis-ci.org/indiana-university/rivet-react)

| Branch | Build | Code Coverage |
| ------ | ----- | ------------- |
| master | [![Build Status](https://travis-ci.org/indiana-university/rivet-react.svg?branch=master)](https://travis-ci.org/indiana-university/rivet-react) | [![codecov](https://codecov.io/gh/indiana-university/rivet-react/branch/master/graph/badge.svg)](https://codecov.io/gh/indiana-university/rivet-react/branch/master) |
| develop | [![Build Status](https://travis-ci.org/indiana-university/rivet-react.svg?branch=develop)](https://travis-ci.org/indiana-university/rivet-react) | [![codecov](https://codecov.io/gh/indiana-university/rivet-react/branch/develop/graph/badge.svg)](https://codecov.io/gh/indiana-university/rivet-react/branch/develop) |

## Installation

To install the rivet-react package from NPM,

```shell
npm install rivet-react
```

Or with yarn,

```shell
yarn add rivet-react
```

Once installed you can use the components in your project. The Rivet styles are included as a dependency of *rivet-react* but they are not bundled into the components, so you'll need to import them as well.

```typescript
import * as React from 'react'
import 'rivet-uits/css/rivet.min.css'
import { Alert } from 'rivet-react'

<Alert variant="info">A very important message for you!</Alert>
``` 

Check out the [Component Documentation and Style Guide](https://indiana-university.github.io/rivet-react/) for comprehensive component documentation and examples.

## Contributing

[Rivet-react](https://github.com/indiana-university/rivet-react/) is open source and maintained by members of the [Indiana University](https://github.com/indiana-university) organization on GitHub. If you have questions about the library or encounter problems please [file an issue](https://github.com/indiana-university/rivet-react/issues). If you wish to contributed, [pull requests](https://help.github.com/articles/about-pull-requests/) are welcome!

To get started, fork the [rivet-react repo](https://github.com/indiana-university/rivet-react/) on GitHub.

To compile the components (we use `yarn` in these examples but `npm` works too):

```shell
yarn build
```

To test the components:

```shell
yarn test
```

To test with code coverage:

```shell
yarn test --coverage
```

To start a local server with the style guide and demo pages:

```shell
yarn start
```

This project supports hot reloading of tests and the demo page.

### Contribution Requirements

* **We aspire to full test coverage of all components.** Look at existing tests for examples on how to write them. If you have questions about testing or how to resolve coverage issues, we can help!  
* ***All component properties should be documented.** Property documentation should link to relevant Rivet documentation if available, particularly if the property is for styling and presentation options. Look to existing components for examples.
* **Components should be included in the style guide.** `styleguide.config.js` organizes component documentation into sections that align with the Rivet component documentation. If you're adding a new component, please place its documentation in the appropriate section.
* **Components should have usage examples.** Every component should have a markdown file (`.md`) alongside its implmentation file (`.tsx`) with usage examples for the style guide. Look to existing components for examples.
