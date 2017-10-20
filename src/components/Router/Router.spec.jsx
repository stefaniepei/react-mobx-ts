import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import {
  Router as BrowserRouter,
  Route
} from 'react-router-dom';

import Router from './';

const history = {
  test: 123
};

const routes = [
  { path: '/', component: () => <div className="/" />, routes: [ {} ] },
  { path: '/test', component: () => <div className="/test" /> }
];

suite('Router');

test('renders <Router>', function () {
  const node = shallow(
    <Router
      history={history}
      routes={routes}
    />
  );

  const browserRouter = node.find(BrowserRouter);

  assert.equal(browserRouter.length, 1, 'renders <BrowserRouter>');

  assert.deepEqual(
    browserRouter.prop('history'),
    history,
    'passes history to <BrowserRouter> history'
  );
});

test('renders <Route> for each route', function () {
  const node = shallow(
    <Router
      history={history}
      routes={routes}
    />
  );

  const routeNodes = node.find(Route);

  assert.equal(
    routeNodes.length,
    routes.length,
    'renders <Route> for each route'
  );

  routeNodes.forEach((routeNode, i) => {
    assert.deepEqual(
      routeNode.prop('path'),
      routes[i].path,
      'passes path to <Route>'
    );

    assert.deepEqual(
      routeNode.prop('component'),
      routes[i].component,
      'passes component to <Route>'
    );
  });
});
