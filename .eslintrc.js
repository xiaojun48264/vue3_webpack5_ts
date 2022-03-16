module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'./.eslintrc-auto-import.json',
		'prettier'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab'], // 使用 tab 间隔
		'linebreak-style': ['error', 'unix'], // 使用 lf 换行符
		quotes: ['error', 'single'], // 使用单引号
		semi: ['error', 'never'], // 取消结尾分号
		eqeqeq: ['error', 'always'], // 使用全等于
		'no-unused-vars': 'error', // 禁止变量声明未使用
		'no-var': 'error', // 禁止使用 var 声明变量
		'keyword-spacing': [
			// 强制在关键字前后使用一致的空格
			'error',
			{
				overrides: {
					if: {
						after: true
					},
					for: {
						after: true
					},
					while: {
						after: true
					},
					else: {
						after: true
					}
				}
			}
		],
		'array-bracket-spacing': ['error', 'never'], // 数组括号内的前后禁止空格
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁止使用 debugger
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生成环境禁止使用 console
		'arrow-parens': 'off', // 箭头函数只有一个参数时可以省略圆括号
		'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空语句（可在空语句写注释避免），允许空的 catch 语句
		/* 函数圆括号之前没有空格 */
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never', // 匿名函数表达式
				named: 'never', // 命名函数表达式
				asyncArrow: 'never' // 异步箭头函数表达式
			}
		],
		'no-trailing-spaces': 'error', // 禁止行尾有空格
		/* 注释的斜线或 * 后必须有空格 */
		'spaced-comment': [
			'error',
			'always',
			{
				line: { markers: ['*package', '!', '/', ',', '='] },
				block: {
					// 前后空格是否平衡
					balanced: false,
					markers: ['*package', '!', ',', ':', '::', 'flow-include'],
					exceptions: ['*']
				}
			}
		],
		'no-template-curly-in-string': 'off', // 不限制在字符串中使用字符串模板
		'no-useless-escape': 'off', // 不限制出现没必要的转义
		'prefer-const': 'error' // 如果一个变量不会被重新复制，必须使用 `const` 进行声明
	}
}
