export default class LoginController {
  constructor() {
    this.username = "";
    this.password = "";
  }

  $onInit() {
    console.log("initializing login controller");
  }

  isUsernameValid(username) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(username);
  }

  isPasswordValid(password) {
    const pwRegex = /\w{8}/;
    return pwRegex.test(password);
  }
}
