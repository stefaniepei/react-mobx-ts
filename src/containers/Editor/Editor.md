```js
initialState = {
  rawText: '',
  htmlStr: ''
};

const setText = ({ target }) => {
  setState({
    rawText: target.value,
    htmlStr: `(fake HTML conversion): ${target.value}`
  });
};

<Editor
  Text={{
    rawText: state.rawText,
    htmlStr: state.htmlStr,
    setText
  }}
/>
```
