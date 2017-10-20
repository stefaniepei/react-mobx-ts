import React from 'react';
import { observer, PropTypes } from 'mobx-react';

import s from './UsersList.styles.scss';
import UserItem from '../UserItem';

function UsersList ({ users }) {
  return (
    <div className={s.container}>
      {
        users.map(user => (
          <UserItem
            key={user.id}
            {...user}
          />
        ))
      }
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.observableArrayOf(
    PropTypes.observableObject
  ).isRequired
};

export default observer(UsersList);
