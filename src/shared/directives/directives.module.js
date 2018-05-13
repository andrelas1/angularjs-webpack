import NgModule from "../../models/ng.module";

import helloWorld from "./hello-world/hello-word.directive";
import myDialog from "./dialog/dialog.diretive";

const DirectivesModule = new NgModule({
  module: "directives",
  directives: [helloWorld, myDialog]
});

export default DirectivesModule;
