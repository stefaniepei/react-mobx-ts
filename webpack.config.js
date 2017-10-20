/**
 * webpack.config.js
 *
 * This config serves as both the development and production
 * Webpack config. The difference is that it's consumed by
 * either webpack-dev-server (development) or webpack itself
 * (production)
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Envs
 */
const ENV = process.env.NODE_ENV;
const IS_PROD = ENV === 'production';
const host = '0.0.0.0';
const port = process.env.HMR_PORT || 9000;
const publicPath = '/';

/**
 * Directories
 */
const srcDirRelative = './src';
const distDirRelative = './dist';

const srcDir = path.join(__dirname, srcDirRelative);
const distDir = path.join(__dirname, distDirRelative);

const entry = IS_PROD
  ? []
  : [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server' // "only" stops HMR on syntax errors
  ];

/**
 * Plugins
 */
const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(ENV)
});

const noEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(srcDir, 'html-template.ejs'),
  inject: true
});

const uglifyWebpackPlugin = new UglifyWebpackPlugin();
const extractSassPlugin = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash:5].css'
});

const hmrPlugin = new webpack.HotModuleReplacementPlugin();
const namedModulesPlugin = new webpack.NamedModulesPlugin();

const envPlugins = IS_PROD
  ? [ uglifyWebpackPlugin, extractSassPlugin ]
  : [ hmrPlugin, namedModulesPlugin ];

/**
 * Special loaders
 */
const cssLoader = {
  loader: 'css-loader',
  options: {
    /* sourceMap: true, */
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]',
    importLoaders: 2
  }
};

const scssLoader = {
  loader: 'sass-loader', options: { sourceMap: true }
};

const postCssLoader = {
  loader: 'postcss-loader', options: { sourceMap: true }
};

const styleLoaders = IS_PROD
  ? extractSassPlugin.extract({
    fallback: 'style-loader',
    use: [
      cssLoader,
      postCssLoader,
      scssLoader,
    ]
  })
  : [
    'style-loader',
    cssLoader,
    postCssLoader,
    scssLoader,
  ];

/**
 * Any additional top-level config params, specific to the ENV
 */
const envConfig = IS_PROD
  ? {}
  : {
    devServer: {
      contentBase: srcDir,
      compress: true,
      hot: true,
      overlay: true,
      historyApiFallback: true,
      disableHostCheck: true,
      stats: 'minimal',
      publicPath,
      port,
      host
    }
  };

/**
 * Export config
 */
module.exports = {
  devtool: IS_PROD ? 'source-map' : 'cheap-module-source-map',
  entry: [
    ...entry,
    'babel-polyfill',
    'whatwg-fetch',
    `${srcDirRelative}/index`
  ],
  output: {
    path: distDir,
    filename: 'scripts/[name].[hash:5].js',
    publicPath
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.scss' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDir,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: srcDir,
        exclude: /node_modules/,
        use: styleLoaders
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[hash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff2?|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name].[hash:5].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    definePlugin,
    noEmitOnErrorsPlugin,
    htmlWebpackPlugin,
    ...envPlugins
  ],
  ...envConfig
};
