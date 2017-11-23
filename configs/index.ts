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
  compilerVendor: [
    'react',
    'react-dom',
    'react-router-dom',
  ],
  sourcemaps: false,
  globals: {},
  compilerPublicPath: '/',
}
