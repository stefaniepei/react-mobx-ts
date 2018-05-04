/* tslint:disable */
import * as path from 'path'

export default {
  // base configuration
  env: process.env.NODE_ENV || 'development',
  pathBase: path.join(__dirname, '..'),
  pathSrc: path.join(__dirname, '../src'),
  outDir: path.join(__dirname, '../dist'),
  assetsDir: path.join(__dirname, '../src/assets/img'),
  port: process.env.PORT || 5000,
  version: '1.0.6',
  compilerVendor: [
    'antd',
    'axios',
    'core-js',
    'history',
    'mobx',
    'mobx-react',
    'mobx-react-router',
    'moment',
    'react',
    'react-dom',
    'react-router-dom',
    'react-loadable',
    'ramda',
  ],
  sourcemaps: false,
  globals: {},
  compilerPublicPath: '/',
}
