import NgModule from "../../models/ng.module";

import LoginController from "./login.controller";

const LoginPage = new NgModule({
  module: "login",
  dependencies: [],
  controller: LoginController,
  routes: [
    {
      routeName: "login",
      routePath: "",
      template: require("./login.html"),
      controller: "LoginController",
      controllerAs: "vm"
    }
  ]
});

export default LoginPage;
