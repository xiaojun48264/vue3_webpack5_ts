const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { NaiveUiResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[fullhash].js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
		alias: {
			'@': path.resolve(__dirname, '../src')
		}
	},
	devServer: {
		client: {
			progress: true
		}
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/i,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				},
				exclude: /node_modules/
			},
			{
				test: /\.s?[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 5 * 1024
					}
				},
				generator: {
					filename: 'image/[hash][ext][query]'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		AutoImport({
			resolvers: [NaiveUiResolver({ importStyle: 'sass' })],
			eslintrc: {
				enabled: true,
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true
			},
			imports: ['vue', 'vue-router', 'vuex'],
			dts: 'src/types/auto-imports.d.ts',
			sourceMap: true
		}),
		Components({
			resolvers: [NaiveUiResolver({ importStyle: 'sass' })],
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			dts: 'src/types/components.d.ts',
			exclude: [/\.[tj]sx?$/, /[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
		}),
		new FriendlyErrorsWebpackPlugin(),
		new CopyPlugin({
			patterns: [{ from: './public', to: './public' }]
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/bundle.[fullhash].css'
		}),
		new HtmlWebpackPlugin({
			title: 'vue3_webpack_ts',
			template: './index.html',
			inject: 'body'
		})
	]
}
