import { assert } from 'chai';

import User from './User';

suite('User');

test('default', function () {
  const userData = {
    id: 1,
    login: 'test-login',
    name: 'test-name',
    company: 'test-company',
    avatar_url: 'test-avatar_url',
    html_url: 'test-html_url'
  };

  const user = new User(userData);

  assert.equal(user.id, userData.id, 'assigns id to id');
  assert.equal(user.login, userData.login, 'assigns login to login');
  assert.equal(user.name, userData.name, 'assigns name to name');
  assert.equal(user.company, userData.company, 'assigns  company to company');

  assert.equal(
    user.avatarUrl,
    userData.avatar_url,
    'assigns avatar_url to avatarUrl'
  );

  assert.equal(
    user.htmlUrl,
    userData.html_url,
    'assigns html_url to htmlUrl'
  );
});
