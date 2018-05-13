import NgModule from "../../models/ng.module";

import LoginController from "./login.controller";

const LoginPage = new NgModule({
  module: "login",
  dependencies: [],
  controller: LoginController
});

export default LoginPage;
