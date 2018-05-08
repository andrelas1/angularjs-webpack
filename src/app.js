import uirouter from "@uirouter/angularjs";
import "../styles.scss";

// Bootstrapping App
import AppController from "./app.controller";
import NgModule from "./models/ng.module";
import NgRouteModule from "./models/routes.module.js";

// Pages
import HomeModule from "./pages/home/home.module";

const NgBootstrap = new NgModule({
  module: "app",
  dependencies: [uirouter, HomeModule.getModuleName()],
  directives: [],
  components: [],
  services: [],
  controller: AppController
});

const NgRoutes = new NgRouteModule(NgBootstrap.getModule());

// THIS COULD BE BETTER
NgRoutes.initiliazeRoutes([
  {
    routePath: "/",
    template: require("./pages/home/home.html"),
    controller: "HomeController",
    controllerAs: "vm"
  }
]);

export default { NgBootstrap };
