import 'babel-polyfill';

import { JSDOM } from 'jsdom';
import proxyquire from 'proxyquire';
import hook from 'css-modules-require-hook';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ignoreImportExtensions, copyProps } from './test.helpers';

Enzyme.configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

proxyquire.noCallThru();

ignoreImportExtensions([ '.jpg', '.jpeg', '.png', '.gif', '.svg' ]);

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: [ '.scss' ]
});

global.window = window;
global.document = window.document;
global.HTMLElement = window.HTMLElement;
global.navigator = {
  userAgent: 'node.js',
};

global.fetch = _ => Promise.resolve(_);

copyProps(window, global);
