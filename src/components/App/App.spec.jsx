import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import DevTools from 'mobx-react-devtools';

import App from './';
import routes from './App.routes';
import Router from '../Router';

const browserHistory = { test: 123 };

suite('App');

afterEach(function () {
  process.env.NODE_ENV = 'test';
});

test('renders <Router>', function () {
  const node = shallow(
    <App browserHistory={browserHistory} />
  );

  const router = node.find(Router);

  assert.equal(router.length, 1, 'renders <Router>');

  assert.deepEqual(
    router.prop('history'),
    browserHistory,
    'passes browserHistory to <Router> history'
  );

  assert.deepEqual(
    router.prop('routes'),
    routes,
    'passes routes to <Router> routes'
  );
});

test('renders <DevTools> (development)', function () {
  const node = shallow(
    <App browserHistory={browserHistory} />
  );

  const devToolsNode = node.find(DevTools);

  assert.equal(devToolsNode.length, 1, 'renders <DevTools>');
});

test('does not render <DevTools> (production)', function () {
  process.env.NODE_ENV = 'production';

  const node = shallow(
    <App browserHistory={browserHistory} />
  );

  const devToolsNode = node.find(DevTools);

  assert.equal(devToolsNode.length, 0, 'does not render <DevTools>');
});
