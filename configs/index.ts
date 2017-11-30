/* tslint:disable */
import * as path from 'path'

export default {
  // base configuration
  env: process.env.NODE_ENV || 'development',
  pathBase: path.join(__dirname, '..'),
  pathSrc: path.join(__dirname, '../src'),
  outDir: path.join(__dirname, '../dist'),
  publicDir: path.join(__dirname, '../src/public'),
  port: process.env.PORT || 5000,
  version: '1.0.0',
  compilerVendor: [
    'react',
    'react-dom',
    'react-router-dom',
    'react-loadable',
    'antd',
    'axios',
    'history',
    'lodash',
    'mobx',
    'mobx-react',
    'mobx-react-router',
    'moment',
  ],
  sourcemaps: false,
  globals: {},
  compilerPublicPath: '/',
}
