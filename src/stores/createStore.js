import { RouterStore } from 'mobx-react-router';

import Text from './Text';
import Users from './Users';

const appStores = {
  RouterStore,
  Text,
  Users
};

function createStore () {
  return Object.keys(appStores)
    .reduce((acc, storeName) => ({
      ...acc,
      [storeName]: new appStores[storeName]()
    }), {});
}

export default createStore;
