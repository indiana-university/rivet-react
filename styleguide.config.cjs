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
            // components: 'src/components/**/[A-Z]*.js',
            components: 'src/components/**/[A-Z]*.jsx'
        }
    ],
    // webpackConfig: require('react-scripts/config/webpack.config.js')
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
    }
}
