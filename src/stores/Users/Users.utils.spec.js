import { assert } from 'chai';
import { stub } from 'sinon';

import { fetchUser } from './Users.utils';

suite('Users.utils');

test('fetchUser', function (done) {
  const data = { test: 'data' };

  const json = stub().returns(data);

  const stubbedFetch = stub(global, 'fetch')
    .returns(Promise.resolve({ json }));

  const userName = 'test user';

  fetchUser(userName)
    .then((res) => {
      assert.isTrue(stubbedFetch.calledOnce, 'fetch was called');
      assert.isTrue(json.calledOnce, 'res.json was called');
      assert.deepEqual(res, data, 'response matches res.json() data');

      stubbedFetch.restore();

      done();
    });
});
