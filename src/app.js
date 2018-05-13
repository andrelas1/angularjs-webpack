import uirouter from "@uirouter/angularjs";
import "../styles.scss";

// Bootstrapping App
import AppController from "./app.controller";
import NgModule from "./models/ng.module";
import NgRouteModule from "./routes/routes.module.js";

// Pages
import HomePage from "./pages/home/home.module";
import LoginPage from "./pages/login/login.module";

// Modules
import SharedModule from "./shared/shared.module";

const NgBootstrap = new NgModule({
  module: "app",
  dependencies: [
    uirouter,
    HomePage.getModuleName(),
    LoginPage.getModuleName(),
    SharedModule.getModuleName()
  ],
  directives: [],
  components: [],
  services: [],
  controller: AppController
});

// -- CREATING AND REGISTERING ROUTES
const NgRoutes = new NgRouteModule(NgBootstrap.getModule());

// THIS COULD BE BETTER
// BUNCH OF BUGS -- HAVE TO FIX IT
NgRoutes.initiliazeRoutes([
  {
    routePath: "/home",
    template: require("./pages/home/home.html"),
    controller: "HomeController",
    controllerAs: "vm"
  },
  {
    routePath: "",
    template: require("./pages/login/login.html"),
    controller: "LoginController",
    controllerAs: "vm"
  }
]);

export default { NgBootstrap, NgRoutes };
