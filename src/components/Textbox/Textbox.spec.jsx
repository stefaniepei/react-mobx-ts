import React from 'react';
import { assert } from 'chai';
import { stub } from 'sinon';
import { mount } from 'enzyme';
import { getClasses, noop } from '../../../test/test.helpers';

import Textbox from './';
import s from './Textbox.styles.scss';

const c = getClasses(s);

suite('Textbox');

test('passes value to <textarea>', function () {
  const value = 'a value';

  const node = mount(
    <Textbox
      value={value}
      onChange={noop}
    />
  );

  const textarea = node.find(c.textarea);

  assert.equal(
    textarea.prop('value'), value, 'passes value prop to textarea value'
  );
});

test('onChange gets called', function () {
  const onChange = stub();

  const node = mount(
    <Textbox onChange={onChange} />
  );

  const textarea = node.find(c.textarea);

  const e = { target: { value: 'a value' } };

  textarea.simulate('change', e);

  assert.isTrue(onChange.calledOnce, 'onChange called once');
  assert.deepEqual(
    onChange.args[0][0].target,
    e.target,
    'onChange receives <textarea> event'
  );
});
