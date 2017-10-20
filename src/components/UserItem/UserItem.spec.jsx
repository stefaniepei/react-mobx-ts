import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { getClasses } from '../../../test/test.helpers';

import UserItem from './';
import s from './UserItem.styles.scss';

const c = getClasses(s);

suite('UserItem');

test('default', function () {
  const node = shallow(
    <UserItem
      id={123}
      login="test-login"
      name="test-name"
      company="test-company"
      avatarUrl="test-avatarUrl"
      htmlUrl="test-htmlUrl"
    />
  );

  assert.equal(
    node.find(c.avatar).prop('src'),
    'test-avatarUrl',
    'passes avatarUrl to <img> src'
  );

  const htmlUrlA = node.find(c.htmlUrl).find('a');

  assert.equal(
    htmlUrlA.prop('href'),
    'test-htmlUrl',
    'passes htmlUrl to <a> href'
  );

  assert.isTrue(
    node.find(c.id).text().includes('123'),
    'renders id into id'
  );

  assert.isTrue(
    htmlUrlA.text().includes('test-htmlUrl'),
    'renders htmlUrl into htmlUrl <a>'
  );

  [ 'login', 'name', 'company' ]
    .forEach((field) => {
      assert.isTrue(
        node.find(c[field]).text().includes(`test-${field}`),
        `renders ${field} into ${field} field`
      );
    });
});
