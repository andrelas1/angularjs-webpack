import NgModule from "../../models/ng.module";

import helloWorld from "./hello-world/hello-word.directive";

const DirectivesModule = new NgModule({
  module: "directives",
  directives: [helloWorld]
});

export default DirectivesModule;
