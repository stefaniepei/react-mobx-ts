import Editor from '../../containers/Editor';
import UserSearch from '../../containers/UserSearch';

const routes = [
  {
    path: '/',
    component: Editor,
    exact: true,
    navOptions: {
      label: 'Markdown Editor'
    }
  },
  {
    path: '/user-search',
    component: UserSearch,
    exact: true,
    navOptions: {
      label: 'Github User Search'
    }
  }
];

export default routes;
