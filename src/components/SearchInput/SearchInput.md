### Default

```js
initialState = { value: '' };

const onChange = (value) => setState({ value });

<div>
  <div>You searched for: {state.value}</div>
  <SearchInput onChange={onChange} />
</div>
```

### Is fetching
```js
<SearchInput
  onChange={() => {}}
  isFetching
/>
```

### User not found
```js
<SearchInput
  onChange={() => {}}
  userNotFound="Sausage man"
/>
```
