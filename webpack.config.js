const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const PATHS = {
  app: path.join(__dirname , 'app'),
  dist: path.join(__dirname, 'dist'),
};

const plugin = new ExtractTextPlugin({
  filename: '[name].css',
  ignoreOrder: true,
});

const config = {
  devServer: {
    host: process.env.HOST, // Defaults to `localhost`
    port: 9000, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
    }),
    plugin,
    new BabiliPlugin(),
  ],
  performance: {
    hints: 'warning',
    maxEntrypointSize: 100000, // bytes
    maxAssetSize: 450000, // bytes
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: plugin.extract({
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          fallback : 'style-loader',
        }),
      },
    ],
  },
};

module.exports = config;
