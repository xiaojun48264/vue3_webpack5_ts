module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'airbnb-base',
		'./.eslintrc-auto-import.json',
		'prettier'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			webpack: {
				config: './build/webpack.config.js'
			}
		}
	},
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'./build/*.base.js',
					'./build/*.config.js',
					'./build/*.dev.js',
					'./build/*.prod.js'
				]
			}
		]
	}
}
