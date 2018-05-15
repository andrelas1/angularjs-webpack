import NgModule from "../../models/ng.module";
import usersService from "./users/users.service";

const ServicesModule = new NgModule({
  module: "services",
  dependencies: [],
  services: [usersService]
});

export default ServicesModule;
