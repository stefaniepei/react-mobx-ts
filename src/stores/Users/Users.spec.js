import { assert } from 'chai';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';
import { observable } from 'mobx';

import Users from './';
import User from './User';

suite('Users');

test('@observable isFetching', function () {
  const users = new Users();

  assert.equal(
    users.isFetching,
    observable(false),
    'default isFetching false'
  );
});

test('@observable userNotFound', function () {
  const users = new Users();

  assert.equal(
    users.userNotFound,
    observable(''),
    'default userNotFound to empty string'
  );
});

test('@observable usersHistory', function () {
  const users = new Users();

  assert.deepEqual(
    users.usersHistory,
    observable([]),
    'default usersHistory to empty array'
  );
});

test('@action searchUser (user found)', function (done) {
  const search = 'test search';

  const userData = {
    id: 1,
    login: 'test-login',
    name: 'test-name',
    company: 'test-company',
    avatar_url: 'test-avatar_url',
    html_url: 'test-html_url'
  };

  const fetchUser = stub().returns(Promise.resolve(userData));

  const StubbedUsers = proxyquire('./Users', {
    './Users.utils': { fetchUser }
  }).default;

  const users = new StubbedUsers();

  users.searchUser(search);

  assert.equal(users.isFetching, true, 'isFetching was set to true');

  assert.isTrue(fetchUser.calledOnce, 'fetchUser was called');
  assert.equal(fetchUser.args[0][0], search, 'passed search to fetchUser');

  setTimeout(() => {
    assert.deepEqual(
      users.usersHistory,
      observable([ new User(userData) ]),
      'usersHistory contains new user'
    );

    assert.equal(users.isFetching, false, 'isFetching was set to false');

    done();
  }, 0);
});

test('@action searchUser (user not found)', function (done) {
  const search = 'test search';

  const fetchUser = stub().returns(Promise.resolve({}));

  const StubbedUsers = proxyquire('./Users', {
    './Users.utils': { fetchUser }
  }).default;

  const users = new StubbedUsers();

  users.searchUser(search);

  assert.equal(users.isFetching, true, 'isFetching was set to true');

  assert.isTrue(fetchUser.calledOnce, 'fetchUser was called');
  assert.equal(fetchUser.args[0][0], search, 'passed search to fetchUser');

  setTimeout(() => {
    assert.equal(
      users.userNotFound,
      search,
      'sets userNotFound to the searched string'
    );

    assert.deepEqual(
      users.usersHistory,
      observable([]),
      'usersHistory remains empty'
    );

    assert.equal(users.isFetching, false, 'isFetching was set to false');

    done();
  }, 0);
});

test('@action searchUser (fetch Promise reject)', function (done) {
  const search = 'test search';

  const fetchUser = stub().returns(Promise.reject());

  const StubbedUsers = proxyquire('./Users', {
    './Users.utils': { fetchUser }
  }).default;

  const users = new StubbedUsers();

  users.searchUser(search);

  assert.equal(users.isFetching, true, 'isFetching was set to true');

  assert.isTrue(fetchUser.calledOnce, 'fetchUser was called');
  assert.equal(fetchUser.args[0][0], search, 'passed search to fetchUser');

  setTimeout(() => {
    assert.equal(
      users.userNotFound,
      search,
      'sets userNotFound to the searched string'
    );

    assert.deepEqual(
      users.usersHistory,
      observable([]),
      'usersHistory remains empty'
    );

    assert.equal(users.isFetching, false, 'isFetching was set to false');

    done();
  }, 0);
});
