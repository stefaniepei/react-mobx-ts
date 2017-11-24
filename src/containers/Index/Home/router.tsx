import * as React from 'react'
import * as Loadable from 'react-loadable'

const loading = ({ isLoading, error }) => {
  return isLoading && !error ? <div>loading...</div> : error ? <div>error</div> : null
}

const HomeRouters = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('./index'),
      loading,
    }),
    exact: true,
    navOptions: {
      label: 'Home Page',
    },
  },
  {
    path: '/login',
    component: Loadable({
      loader: () => import('./Components/Login/index'),
      loading,
    }),
    exact: true,
    navOptions: {
      label: 'Login Page',
    },
  },
]

export default HomeRouters
