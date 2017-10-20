import { observable, action, runInAction } from 'mobx';

import { fetchUser } from './Users.utils';
import User from './User';

export default class Users {

  @observable isFetching = false;
  @observable userNotFound = '';
  @observable usersHistory = [];

  @action('Users :: searchUser')
  searchUser = async (userName) => {
    this.isFetching = true;
    this.userNotFound = '';

    try {
      const user = await fetchUser(userName);

      const wasUserFound = !!user.id;

      if (wasUserFound) {
        runInAction('Users :: add new user', () => {
          this.usersHistory.push(new User(user));
        });
      } else {
        runInAction('Users :: no user found', () => {
          this.userNotFound = userName;
        });
      }
    } catch (e) {
      runInAction('Users :: fetchUser rejected', () => {
        this.userNotFound = userName;
      });
    }

    runInAction('Users :: end searchUser', () => {
      this.isFetching = false;
    });
  }

}
