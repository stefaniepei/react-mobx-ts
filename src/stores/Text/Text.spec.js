import { assert } from 'chai';
import { stub } from 'sinon';
import proxyquire from 'proxyquire';

import Text from './';

suite('Text');

test('@observable rawText', function () {
  const text = new Text();

  assert.equal(text.rawText, '', 'default empty string');
});

test('@action setText()', function () {
  const text = new Text();

  text.setText({ target: { value: 'test' } });

  assert.equal(text.rawText, 'test', 'updates rawText');
});

test('@computed htmlStr', function () {
  const mdStub = stub().returns('return val');

  const StubbedText = proxyquire('./Text', {
    './Text.utils': {
      markdownToHtml: mdStub
    }
  }).default;

  const text = new StubbedText();

  text.setText({ target: { value: 'test' } });

  const { htmlStr } = text;

  assert.isTrue(mdStub.calledOnce, 'calls markdownToHtml');
  assert.equal(mdStub.args[0][0], 'test', 'calls markdownToHtml with value');
  assert.equal(htmlStr, 'return val', 'returns markdownToHtml output');
});
