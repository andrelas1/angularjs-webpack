import NgModule from "../models/ng.module";
import DirectivesModule from "./directives/directives.module";

const SharedModule = new NgModule({
  module: "shared",
  dependencies: [DirectivesModule.getModuleName()]
});

export default SharedModule;
