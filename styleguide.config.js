const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'Rivet React Style Guide',
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({
        propFilter: (prop, component) => 
            prop.description.length > 0               // skip props with no documentation
            && prop.name.includes("aria-") === false  // skip aria props
    }).parse,
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
            ],
            exampleMode: 'expand'
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
            ],
            exampleMode: 'expand'
        },
        {
            name: 'Layout',
            components: () => [
              'src/components/Grid/*.tsx',
              'src/components/Section/*.tsx',
            ],
            exampleMode: 'expand'
        },
        {   
            name: 'Navigation',
            components: () => [
              'src/components/Footer/*.tsx', 
            ],
            exampleMode: 'expand'
        },
        {
            name: 'Overlays',
            components: () => [
              'src/components/Alert/*.tsx', 
            ],
            exampleMode: 'expand'
        },
    ],
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
    require: [
        'rivet-uits/css/rivet.min.css'
      ]
};
