```js
const { createBrowserHistory } = require('history');

const Component = () => (
  <div style={{ border: 'solid', padding: '10px' }}>
    Route Component
  </div>
);

<Router
  history={createBrowserHistory()}
  routes={[
    {
      path: '/',
      component: Component,
      exact: true,
      navOptions: { label: 'Markdown Editor' }
    }
  ]}
>
  <div>Child node</div>
</Router>
```
