const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ArcGISPlugin = require('@arcgis/webpack-plugin');
const stencil = require('@stencil/webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: ['./index.ts']
  },
  devtool: "source-map",
  node: false,
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: 'chunks/[id].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|tiff|ttf|woff2?)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets'
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
      { // ESRI Calcite Components
        from: '**',
        context: 'node_modules/@esri/calcite-components/dist/calcite/',
        to: './',
      }
    ]
    }),
    new CleanWebpackPlugin(),
    new ArcGISPlugin({}),
    new HtmlWebPackPlugin({
      title: 'ArcGIS API for JavaScript',
      template: './public/index.html',
      filename: './index.html',
      chunksSortMode: 'none',
      inlineSource: '.(css)$'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),
  ]
};