export function markdownToHtml (str = '') {
  let html = str;

  // headings
  html = html
    .replace(new RegExp('^(# (\\S+.*))$', 'gim'), '<h1>$2</h1>')
    .replace(new RegExp('^(## (\\S+.*))$', 'gim'), '<h2>$2</h2>')
    .replace(new RegExp('^(### (\\S+.*))$', 'gim'), '<h3>$2</h3>');

  return `<p>${html}</p>`; // lazy string to markup
}
