/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'Rivet React Style Guide',
//    propsParser: require('react-docgen').withDefaultConfig({
//        // https://github.com/styleguidist/react-styleguidist/issues/1439
//        savePropValueAsString: true,
//        propFilter: (prop, component) =>
//            // skip props with no documentation
//            prop.description.length > 0
//            // skip aria props
//            && prop.name.includes("aria-") === false
//            // skip 'rivetize' props (these are documented separately)
//            && ['className','border','display','hide','margin','padding','typescale'].indexOf(prop.name) === -1
//    }).parse,
    webpackConfig: require('react-scripts/config/webpack.config.js'),
    pagePerSection: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    sections: [
        {
            name: 'Introduction',
            content: 'README.md'
        },
        {
            name: 'Page Content',
            components: () => [
              'src/components/Badge/[A-Z]*.js',
              'src/components/List/[A-Z]*.js',
              'src/components/StepIndicator/[A-Z]*.js',
              'src/components/Table/[A-Z]*.js',
              'src/components/Tabs/[A-Z]*.js',
            ],
            ignore: ['src/components/**/index.js'],
            sections: [
                {
                    name: 'Links',
                    content: 'src/docs/links.md',
                }
            ],
        },
        {
            name: 'Forms',
            components: () => [
              'src/components/Form/[A-Z]*.js',
              'src/components/Button/[A-Z]*.js',
              'src/components/Checkbox/[A-Z]*.js',
              'src/components/File/[A-Z]*.js',
              'src/components/RadioButton/[A-Z]*.js',
              'src/components/Input/Input.js',
              'src/components/Input/Textarea.js',
              'src/components/Input/Select.js',
            ],
            ignore: ['src/components/**/index.js', 'src/components/Input/common.js'],
        },
        // {
        //     name: 'Layout',
        //     sections: [
        //         {
        //             name: 'Grid',
        //             components: () => [
        //                 'src/components/Grid/Container.js',
        //                 'src/components/Grid/Row.js',
        //                 'src/components/Grid/Col.js'
        //             ],
        //         },
        //         {
        //             name: 'Spacing',
        //             content: 'src/docs/spacing.md',
        //         },
        //         {
        //             name: 'Typography',
        //             content: 'src/docs/typography.md',
        //         }
        //     ],
        //     components: () => [
        //       'src/components/Panel/*.js',
        //       'src/components/Section/*.js',
        //     ],
        // },
        // {
        //     name: 'Navigation',
        //     components: () => [
        //       'src/components/Breadcrumbs/*.js',
        //       'src/components/Dropdown/*.js',
        //       'src/components/Footer/*.js',
        //       'src/components/Header/Header.js',
        //       'src/components/Header/HeaderIdentity.js',
        //       'src/components/Header/HeaderNavigation.js',
        //       'src/components/Header/HeaderMenu.js',
        //       'src/components/Pagination/*.js',
        //     ],
        // },
        // {
        //     name: 'Overlays',
        //     components: () => [
        //       'src/components/Alert/Alert.js',
        //       'src/components/Alert/DismissibleAlert.js',
        //       'src/components/Alert/InlineAlert.js',
        //       'src/components/Modal/*.js'
        //     ],
        // },
        // {
        //     name: 'Utilities',
        //     sections: [
        //         {
        //             name: 'Border',
        //             content: 'src/docs/border.md',
        //         },
        //         {
        //             name: 'Display',
        //             content: 'src/docs/display.md',
        //         },
        //         {
        //             name: 'Text',
        //             content: 'src/docs/text-utils.md',
        //         },
        //         {
        //             name: 'Visibility',
        //             content: 'src/docs/visibility.md',
        //         },
        //         {
        //             name: 'z-index',
        //             content: 'src/docs/z-index.md',
        //         }
        //     ]
        // },
        // {
        //     name: 'Addons',
        //     components: () => [
        //       'src/components/Addons/Collapse/*.js',
        //       'src/components/Addons/Switch/*.js',
        //     ],
        // },
    ],
    require: [
        'rivet-uits/css/rivet.min.css',
        './src/docs/documentation.css'
    ],
    theme: {
        maxWidth: 1920
    }
};
