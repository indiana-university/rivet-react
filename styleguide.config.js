const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'Rivet React Style Guide',
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({
        propFilter: (prop, component) => 
            // skip props with no documentation
            prop.description.length > 0
            // skip aria props               
            && prop.name.includes("aria-") === false
            // skip 'rivetize' props (these are documented separately)
            && ['className','border','display','hide','margin','padding','typescale'].indexOf(prop.name) === -1  
    }).parse,
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
              'src/components/Badge/*.tsx',
              'src/components/List/*.tsx',
              'src/components/Table/*.tsx',
            ],
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
              'src/components/Form/*.tsx', 
              'src/components/Button/*.tsx', 
              'src/components/Checkbox/*.tsx',
              'src/components/File/*.tsx',
              'src/components/RadioButton/*.tsx', 
              'src/components/Input/Input.tsx', 
              'src/components/Input/Textarea.tsx',
              'src/components/Input/Select.tsx',
            ],
        },
        {
            name: 'Layout',
            sections: [
                {
                    name: 'Grid',
                    components: () => [
                        'src/components/Grid/Container.tsx',
                        'src/components/Grid/Row.tsx',
                        'src/components/Grid/Col.tsx'
                    ],
                },
                {
                    name: 'Spacing',
                    content: 'src/docs/spacing.md',
                },
                {
                    name: 'Typography',
                    content: 'src/docs/typography.md',
                }
            ],
            components: () => [
              'src/components/Panel/*.tsx',
              'src/components/Section/*.tsx',
            ],
        },
        {   
            name: 'Navigation',
            components: () => [
              'src/components/Dropdown/*.tsx', 
              'src/components/Footer/*.tsx', 
              'src/components/Header/Header.tsx',
              'src/components/Header/HeaderIdentity.tsx',
              'src/components/Header/HeaderNavigation.tsx',
              'src/components/Header/HeaderMenu.tsx'
            ],
        },
        {
            name: 'Overlays',
            components: () => [
              'src/components/Alert/Alert.tsx',
              'src/components/Alert/DismissibleAlert.tsx',
              'src/components/Alert/InlineAlert.tsx',
              'src/components/Modal/*.tsx'
            ],
        },
        {
            name: 'Utilities',
            sections: [
                {
                    name: 'Border',
                    content: 'src/docs/border.md',
                },
                {
                    name: 'Display',
                    content: 'src/docs/display.md',
                },
                {
                    name: 'Text',
                    content: 'src/docs/text-utils.md',
                },
                {
                    name: 'Visibility',
                    content: 'src/docs/visibility.md',
                },
                {
                    name: 'z-index',
                    content: 'src/docs/z-index.md',
                }
            ]
        },
    ],
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
    require: [
        'rivet-uits/css/rivet.min.css',
        './src/docs/documentation.css'
      ],
    theme: {
        maxWidth: 1920
      }
};
