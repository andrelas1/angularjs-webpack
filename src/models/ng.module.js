import angular from "angular";

export default class NgModule {
  constructor(moduleConfig) {
    this.services = [];
    this.routes = [];
    this.components = [];
    this.directives = [];
    const {
      module,
      dependencies,
      controller,
      services,
      directives,
      components,
      routes
    } = moduleConfig;
    this.module = module;
    this.ngModule = angular.module(module, dependencies || []);

    this.init({ controller, services, directives, components, routes });
  }

  init({ controller, services, directives, components, routes }) {
    this.registerController(controller);
    this.registerServices(services);
    this.registerDirectives(directives);
    this.registerComponents(components);
    this.registerRoutes(routes);
  }

  registerServices(services = []) {
    services.forEach(service => {
      this.services.push(service.name);
      this.ngModule.factory(service.name, service);
    });
  }

  registerDirectives(directives = []) {
    directives.forEach(directive => {
      this.directives.push(directive);
      this.ngModule.directive(`${directive.name}`, directive);
    });
  }

  registerComponents(components = []) {
    components.forEach(component => {
      this.components.push(component);
      this.ngModule.component(`${component.name}`, component);
    });
  }

  registerController(controller = {}) {
    this.ngModule.controller(controller.name, controller);
  }

  registerDependency(dependencyName) {
    this.ngModule.requires.push(dependencyName);
  }

  registerRoutes(routes = []) {
    this.ngModule.config(function($stateProvider) {
      routes.forEach(config => {
        $stateProvider.state(config.routeName, {
          url: config.routePath,
          template: config.template,
          controller: config.controller,
          controllerAs: "vm"
        });
      });
    });
  }

  getModule() {
    return this.ngModule;
  }

  getModuleName() {
    return this.ngModule.name;
  }
}
