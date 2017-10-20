import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import HtmlPreview from './';

suite('HtmlPreview');

test('renders html from string', function () {
  const htmlStr = '<p>html output</p>';

  const node = shallow(
    <HtmlPreview htmlStr={htmlStr} />
  );

  assert.isTrue(node.html().includes(htmlStr), 'renders html');
});
