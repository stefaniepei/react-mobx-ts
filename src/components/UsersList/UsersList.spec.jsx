import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { observable } from 'mobx';

import UsersList from './';
import UserItem from '../UserItem';

const users = observable([
  {
    id: 1,
    name: 'name1',
    login: 'login1',
    company: 'company1',
    avatarUrl: 'avatarUrl1',
    htmlUrl: 'htmlUrl1'
  },
  {
    id: 2,
    name: 'name2',
    login: 'login2',
    company: 'company2',
    avatarUrl: 'avatarUrl2',
    htmlUrl: 'htmlUrl2'
  }
]);

suite('UsersList');

test('renders <UserItem> for each user', function () {
  const node = shallow(
    <UsersList users={users} />
  );

  const userNodes = node.find(UserItem);

  assert.equal(
    userNodes.length,
    users.length,
    'renders 1 <UserItem> per user'
  );

  users.forEach((user, i) => {
    const userNode = userNodes.get(i);

    const { props } = userNode;

    assert.deepEqual(props, user, 'passes all user fields to <UserItem>');
  });
});
