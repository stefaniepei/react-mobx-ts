```js
const { BrowserRouter } = require('react-router-dom');

<BrowserRouter>
  <Header
    navItems={[
      {
        path: '/something',
        navOptions: { label: 'Something' }
      },
      {
        path: '/else',
        navOptions: { label: 'Else' }
      }
    ]}
  />
</BrowserRouter>
```
