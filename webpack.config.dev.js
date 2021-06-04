const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.config.common");

module.exports = merge(
  commonConfig,
  {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3001,
      https: true
    }
  }
);