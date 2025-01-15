# Rivet-react

[Rivet-react](https://github.com/indiana-university/rivet-react) is a library of React components that implement the [Rivet Software Design System](https://rivet.uits.iu.edu). The components can be used by any Javascript application with a peer dependency of React 16+.

## Rivet-react resources

- [Component Documentation and Style Guide](https://indiana-university.github.io/rivet-react/)
- [Contribution Guidelines](https://github.com/indiana-university/rivet-react/blob/master/CONTRIBUTING.md)
- [GitHub repo](https://github.com/indiana-university/rivet-react)
- [NPM package](https://www.npmjs.com/package/rivet-react)
- [Circle CI](https://circleci.com/gh/indiana-university/rivet-react)

| Branch  | Build                                                                                                                                                                 | Code Coverage                                                                                                                                                          |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| master  | [![CircleCI](https://circleci.com/gh/indiana-university/rivet-react/tree/master.svg?style=svg)](https://circleci.com/gh/indiana-university/rivet-react/tree/master)   | [![codecov](https://codecov.io/gh/indiana-university/rivet-react/branch/master/graph/badge.svg)](https://codecov.io/gh/indiana-university/rivet-react/branch/master)   |
| beta    | [![CircleCI](https://circleci.com/gh/indiana-university/rivet-react/tree/beta.svg?style=svg)](https://circleci.com/gh/indiana-university/rivet-react/tree/beta)       | [![codecov](https://codecov.io/gh/indiana-university/rivet-react/branch/beta/graph/badge.svg)](https://codecov.io/gh/indiana-university/rivet-react/branch/beta)       |

## Installation

To install the rivet-react package from NPM,

```shell
npm install rivet-react
```

Or with yarn,

```shell
yarn add rivet-react
```

Once installed you can use the components in your project. The Rivet styles are included as a dependency of _rivet-react_ but they are not bundled into the components, so you'll need to import them as well.

```typescript static
import * as React from "react";
import "rivet-core/css/rivet.min.css";
import { Alert } from "rivet-react";

<Alert variant="info">A very important message for you!</Alert>;
```

## Documentation

Check out the [Component Documentation and Style Guide](https://indiana-university.github.io/rivet-react/) for comprehensive component documentation and examples.

You can also find [documentation for the 2.x beta components](https://indiana-university.github.io/rivet-react/beta).

## Issues and Contributions

[Rivet-react](https://github.com/indiana-university/rivet-react/) is open source and maintained by members of the [Indiana University](https://github.com/indiana-university) organization on GitHub. If you have questions about the library or encounter problems please [file an issue](https://github.com/indiana-university/rivet-react/issues). If you wish to contribute, [pull requests](https://help.github.com/articles/about-pull-requests/) are welcome! Please review our [Contribution Guidelines](https://github.com/indiana-university/rivet-react/blob/master/CONTRIBUTING.md).
