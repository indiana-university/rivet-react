/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
const path = require('path');

module.exports = {
    title: 'Rivet React Style Guide',
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: (filePath, source, resolver, handlers) => {
        return require('react-docgen').parse(source, resolver, handlers)
    },
    pagePerSection: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    sections: [
        {
            name: 'Overlays',
            components: 'src/components/Alert/[A-Z]*.jsx'
        }
    ],
    webpackConfig: {
        module: {
            rules: [
                // Babel loader will use your project’s babel.config.js
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // Other loaders that are needed for your components
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    },
    require: [
        path.join(__dirname, 'node_modules/rivet-core/css/rivet.min.css'),
        './src/docs/documentation.css',
    ],
    theme: {
        maxWidth: 1920
    }
}
