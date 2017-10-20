Try entering any text to fake fetching a Github user.

Type `error` to simulate a user not being found.

```js
const { observable } = require('mobx');

initialState = {
  isFetching: false,
  userNotFound: '',
  usersHistory: [],
};

const fakeFetch = (value) => {
  setTimeout(() => {
    if (value === 'error') {
      setState({
        isFetching: false,
        userNotFound: 'error'
      });

      return;
    }

    setState({
      isFetching: false,
      usersHistory: [
        ...state.usersHistory,
        {
          id: state.usersHistory.length,
          login: value,
          name: String(Math.random() * 1000),
          company: String(Math.random() * 10000),
          avatarUrl: 'http://lorempixel.com/256/256',
          htmlUrl: 'http://www.google.com'
        }
      ]
    });
  }, 1500);
};

const searchUser = (value) => {
  setState({
    isFetching: true,
    userNotFound: ''
  });

  fakeFetch(value);
};

<UserSearch
  Users={{
    searchUser,
    isFetching: state.isFetching,
    userNotFound: state.userNotFound,
    usersHistory: observable(state.usersHistory)
  }}
/>
```
