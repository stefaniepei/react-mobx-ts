export default class User {

  id;
  login;
  name;
  company;
  avatarUrl;
  htmlUrl;

  constructor (user) {
    this.id = user.id;
    this.login = user.login;
    this.name = user.name;
    this.company = user.company;
    this.avatarUrl = user.avatar_url;
    this.htmlUrl = user.html_url;
  }

}
