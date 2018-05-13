import NgModule from "../models/ng.module";
import DirectivesModule from "./directives/directives.module";
import ComponentsModule from "./components/components.module";

const SharedModule = new NgModule({
  module: "shared",
  dependencies: [
    DirectivesModule.getModuleName(),
    ComponentsModule.getModuleName()
  ]
});

export default SharedModule;
