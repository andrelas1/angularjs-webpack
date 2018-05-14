import NgModule from "../../models/ng.module";
import HomeController from "./home.controller";

const HomeModule = new NgModule({
  module: "Home",
  components: [],
  controller: HomeController,
  routes: [
    {
      routeName: "home",
      routePath: "/home",
      template: require("./home.html"),
      controller: "HomeController",
      controllerAs: "vm"
    }
  ]
});

export default HomeModule;
