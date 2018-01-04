/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useStrict } from 'mobx'
// import { LocaleProvider } from 'antd'
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
      {/* <LocaleProvider locale={zh_CN}> */}
      <App history={history} />
      {/* </LocaleProvider> */}
    </MobxProvider>
  )
}
