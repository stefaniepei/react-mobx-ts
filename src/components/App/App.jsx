import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import './App.styles.scss';

import routes from './App.routes';
import Router from '../Router';
import Header from '../Header';

function App ({ browserHistory }) {
  const navItems = routes.filter(route => route.navOptions);

  const devToolsNode = process.env.NODE_ENV === 'production'
    ? null
    : <DevTools />;

  return (
    <Router
      history={browserHistory}
      routes={routes}
    >
      {devToolsNode}
      <Header navItems={navItems} />
    </Router>
  );
}

App.propTypes = {
  browserHistory: PropTypes.object.isRequired
};

export default observer(App);
