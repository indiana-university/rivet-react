module.exports = {
		presets: [
				[
						'@babel/env',
						{
								modules: 'auto',
								useBuiltIns: 'usage',
								corejs: '3.25.5'
						}
				],
				'@babel/react',
		]
}
