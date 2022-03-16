const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = (env: any, args: any) => {
  const config = args.mode === 'production' ? prodConfig : devConfig;
  return merge(baseConfig, config);
};
