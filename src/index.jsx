import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Provider from './Provider';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Provider);

if (module.hot) {
  module.hot.accept('./Provider', () => {
    render(Provider);
  });
}
