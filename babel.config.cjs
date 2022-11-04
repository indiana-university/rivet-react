module.exports = {
    presets: [
        [
            '@babel/env',
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: '3.25.5'
            }
        ],
        '@babel/react',
    ]
}
