const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname , 'app'),
  dist: path.join(__dirname, 'dist'),
};

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
  ],
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
