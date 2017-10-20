import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from './';

const navItems = [
  { path: '/test1', navOptions: { label: 'test1' } },
  { path: '/test2', navOptions: { label: 'test2' } }
];

suite('Header');

test('default', function () {
  const node = shallow(
    <Header />
  );

  assert.equal(node.find(Link).length, 0, 'renders no <Link> nodes');
});

test('renders <Link> nodes', function () {
  const node = shallow(
    <Header navItems={navItems} />
  );

  assert.equal(node.find(Link).length, 2,
    'renders expected number of <Link> nodes'
  );
});
