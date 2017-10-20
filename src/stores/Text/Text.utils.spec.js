import { assert } from 'chai';

import { markdownToHtml } from './Text.utils';

suite('Text utils');

test('markdownToHtml', function () {
  const defaultOutput = markdownToHtml();

  assert.equal(defaultOutput, '<p></p>', 'default returns empty <p>');

  const md = `# heading!
## heading 2!
### heading 3!`;

  const html = markdownToHtml(md);

  const expected = `<p><h1>heading!</h1>
<h2>heading 2!</h2>
<h3>heading 3!</h3></p>`;

  assert.equal(html, expected, 'converts md headings to html');
});
