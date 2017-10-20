import { assert } from 'chai';
import { stub } from 'sinon';
import { observable } from 'mobx';
import { mountWithStores } from '../../../test/test.helpers';

import UserSearch from './';
import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

const store = {
  searchUser: stub(),
  isFetching: false,
  userNotFound: 'test not found',
  usersHistory: observable([])
};

const mountWrapped = mountWithStores({ Users: store });

suite('UserSearch');

beforeEach(function () {
  store.searchUser.reset();
});

test('renders expected children', function () {
  const node = mountWrapped(UserSearch);

  const searchInput = node.find(SearchInput);
  const usersList = node.find(UsersList);

  assert.equal(searchInput.length, 1, 'renders <SearchInput>');

  assert.deepEqual(
    searchInput.prop('onChange'),
    store.searchUser,
    'passes searchUser to <SearchInput> onChange'
  );

  assert.equal(
    searchInput.prop('isFetching'),
    store.isFetching,
    'passes isFetching to <SearchInput>'
  );

  assert.equal(
    searchInput.prop('userNotFound'),
    store.userNotFound,
    'passes userNotFound to <SearchInput>'
  );

  assert.equal(usersList.length, 1, 'renders <UsersList>');

  assert.deepEqual(
    usersList.prop('users'),
    store.usersHistory,
    'passes usersHistory to <UsersList>'
  );
});
