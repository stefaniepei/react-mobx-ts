/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useStrict } from 'mobx'
import { Provider as MobxProvider } from 'mobx-react'
import createBrowserHistory from 'history/createBrowserHistory'

import createStore from './store/createStore'
import App from './containers/App'

useStrict(true) // MobX strict mode

const history = createBrowserHistory()
const stores = createStore()

export default function Provider() {
  return (
    <MobxProvider {...stores}>
      <App history={history} />
    </MobxProvider>
  )
}
