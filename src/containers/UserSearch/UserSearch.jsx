import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject, PropTypes as MXPropTypes } from 'mobx-react';

import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

/**
 * Combines together SearchInput & UsersList to provide a
 * Github user search component
 */
@inject('Users')
@observer
class UserSearch extends Component {

  render () {
    const {
      searchUser,
      isFetching,
      userNotFound,
      usersHistory
    } = this.props.Users;

    return (
      <div className="UserSearch">
        <SearchInput
          isFetching={isFetching}
          userNotFound={userNotFound}
          onChange={searchUser}
        />
        <UsersList users={usersHistory} />
      </div>
    );
  }

}

UserSearch.wrappedComponent.propTypes = {
  /**
   * Users data coming for the MobX Users store
   */
  Users: PropTypes.shape({
    searchUser: PropTypes.func,
    isFetching: PropTypes.bool,
    userNotFound: PropTypes.string,
    usersHistory: MXPropTypes.observableArray
  }).isRequired
};

export default UserSearch;
