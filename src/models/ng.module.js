import angular from "angular";

export default class NgModule {
  constructor(moduleConfig) {
    const {
      module,
      dependencies,
      controller,
      services,
      directives,
      components
    } = moduleConfig;
    this.module = module;
    this.ngModule = angular.module(module, dependencies || []);

    this.init({ controller, services, directives, components });
  }

  init({ controller, services, directives, components }) {
    this.registerController(controller);
    this.registerServices(services);
    this.registerDirectives(directives);
    this.registerComponents(components);
  }

  registerServices(services = []) {
    services.forEach(service => {
      this.ngModule.factory(service.name, service);
    });
  }

  registerDirectives(directives = []) {
    directives.forEach(directive => {
      this.ngModule.directive(`${directive.name}`, directive);
    });
  }

  registerComponents(components = []) {
    components.forEach(component => {
      this.ngModule.component(`${component.name}`, component);
    });
  }

  registerController(controller = {}) {
    this.ngModule.controller(controller.name, controller);
  }

  registerDependency(dependencyName) {
    this.ngModule.requires.push(dependencyName);
  }

  getModule() {
    return this.ngModule;
  }

  getModuleName() {
    return this.ngModule.name;
  }
}
