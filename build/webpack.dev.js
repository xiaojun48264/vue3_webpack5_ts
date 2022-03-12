const webpack = require('webpack')

module.exports = {
	devtool: 'source-map',
	cache: true,
	plugins: [
		new webpack.DefinePlugin({
			__VUE_PROD_DEVTOOLS__: true,
			__VUE_OPTIONS_API__: true
		})
	]
}
