import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'mobx-react';

export const noop = () => {};

/**
 * Dummy simple decorator
 */
const decoratorSimple = _ => _;

/**
 * Dummy curried decorator
 */
const decoratorCurried = () => decoratorSimple;

/**
 * Wraps the given component with MobX React <Provider>, injecting
 * passed objects as instantiated stores. Returns a curried function
 * that accepts the Component to be wrapped plus any props
 * @param {object} stores
 */
export const mountWithStores = (stores = {}) => {
  const storeNames = Object.keys(stores);

  // Create the constructor function for each store object
  const Stores = storeNames
    .map(storeName =>
      function () {
        Object.keys(stores[storeName])
          .forEach((storeFieldName) => {
            this[storeFieldName] = stores[storeName][storeFieldName];
          });
      }
    );

  // Stores only get instantiated when this curried function is called
  return (Component, props = {}) => {
    const instantiatedStores = Stores
      .reduce((acc, Store, i) => ({
        ...acc,
        [storeNames[i]]: new Store()
      }), {});

    return mount(
      <Provider {...instantiatedStores}>
        <Component {...props} />
      </Provider>
    );
  };
};

/**
 * Get a config object for proxyquire with MobX stubs applied
 * @param {object} opts
 */
export const getProxyConfig = (opts = {}) => {
  const {
    inject = decoratorCurried,
    observer = decoratorSimple
  } = opts;

  return {
    'mobx-react': {
      inject,
      observer
    },
    '@noCallThru': true
  };
};

/**
 * Ignore imports for the passed file types
 * @param {array} extensions
 */
export const ignoreImportExtensions = (extensions = []) => {
  extensions
    .forEach((ext) => {
      require.extensions[ext] = noop;
    });
};

/**
 * Fills missing properties in target from src
 * @param {object} src
 * @param {object} target
 */
export const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
};

/**
 * Convert style names to class selectors
 * @param {object} styles
 */
export const getClasses = styles =>
  Object.keys(styles)
    .reduce((acc, key) => {
      const classes = styles[key]
        .split(' ')
        .join('.');

      return {
        ...acc,
        [key]: `.${classes}`
      };
    }, {});
