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
            name: 'Page Content',
            components: () => [
              'src/components/List/*.tsx', 
          ],
        },
        {
            name: 'Forms',
            components: () => [
              'src/components/Form/*.tsx', 
              'src/components/Button/*.tsx', 
              'src/components/Checkbox/*.tsx', 
              'src/components/RadioButton/*.tsx', 
              'src/components/Input/Input.tsx', 
              'src/components/Input/Textarea.tsx', 
          ],
        },
        {
            name: 'Layout',
            components: () => [
              'src/components/Grid/*.tsx', 
          ],
        },
        {   
            name: 'Navigation',
            components: () => [
              'src/components/Footer/*.tsx', 
          ],
        },
        {
            name: 'Overlays',
            components: () => [
              'src/components/Alert/*.tsx', 
          ],
        },
    ],
    styleguideDir: 'build/styleguide',
    webpackConfig: require('./node_modules/react-scripts-ts/config/webpack.config.dev')
};
