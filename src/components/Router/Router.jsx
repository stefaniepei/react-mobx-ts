import React from 'react';
import PropTypes from 'prop-types';
import {
  Router as BrowserRouter,
  Route
} from 'react-router-dom';

/**
 * Generic component to render react-router routes and any other
 * child nodes passed in
 */
function Router ({
  history,
  routes,
  children
}) {
  return (
    <BrowserRouter history={history}>
      <div>
        {children}
        {
          routes.map(route => (
            <Route
              key={route.path}
              {...route}
            />
          ))
        }
      </div>
    </BrowserRouter>
  );
}

Router.propTypes = {
  /**
   * A browser history object
   */
  history: PropTypes.object.isRequired,

  /**
   * Array of objects to render routes from
   */
  routes: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,

  /**
   * Child nodes to render
   */
  children: PropTypes.node
};

Router.defaultProps = {
  children: null
};

export default Router;
