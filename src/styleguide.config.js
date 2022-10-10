/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'Rivet React Style Guide',
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    pagePerSection: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    sections: [
        {
            name: 'Overlays',
            components: () => [
              'src/components/Alert/Alert.tsx',
            ],
        },
    ],
    require: [
        'rivet-uits/css/rivet.min.css',
        './src/docs/documentation.css',
        // See https://stackoverflow.com/questions/46067207/how-to-add-examples-a-component-with-dependencies-in-react-styleguidist#answer-46090262
        path.resolve(__dirname, 'styleguide.setup.js')
      ],
    theme: {
        maxWidth: 1920
    }
};
