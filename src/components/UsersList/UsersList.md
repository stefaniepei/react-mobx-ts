```js
const { observable } = require('mobx');

const users = observable([
  {
    id: 123456,
    login: 'MonkeyBusiness"',
    name: 'Chimp Monkey"',
    company: 'Bananas Corporation"',
    avatarUrl: 'https://files.gamebanana.com/img/ico/sprays/monkey_.png',
    htmlUrl: 'http://www.google.com"'
  },
  {
    id: 654321,
    login: 'PandaChips"',
    name: 'Bamboo Panda"',
    company: 'Bamboo Monolith"',
    avatarUrl: 'https://at-cdn-s02.audiotool.com/2016/07/08/documents/cAUCpp66p5I8kdrw2kE8znVLUhn/0/cover256x256-b970dadc6ad14f67af477c4bc8cf3da8.jpg',
    htmlUrl: 'http://www.google.com"'
  }
]);

<UsersList users={users} />
```
