import { assert } from 'chai';
import { RouterStore } from 'mobx-react-router';

import createStore from './createStore';

suite('createStore');

test('creates RouterStore', function () {
  const store = createStore();

  assert.instanceOf(
    store.RouterStore, RouterStore,
    'returns an instance of MobX RouterStore'
  );
});
