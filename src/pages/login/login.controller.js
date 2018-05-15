export default class LoginController {
  constructor(usersService) {
    this.username = "";
    this.password = "";
    this.usersService = usersService;
  }

  $onInit() {
    console.log(this.usersService.getUser());
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
