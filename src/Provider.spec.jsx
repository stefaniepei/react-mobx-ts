import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { Provider as MobxProvider } from 'mobx-react';

import Provider from './Provider';

import App from './components/App';

suite('Provider');

test('renders <App> inside <MobxProvider>', function () {
  const node = shallow(
    <Provider />
  );

  const provider = node.find(MobxProvider);
  const app = provider.find(App);

  assert.equal(provider.length, 1, 'renders <MobxProvider>');
  assert.equal(app.length, 1, 'renders <App> inside <MobxProvider>');
});
