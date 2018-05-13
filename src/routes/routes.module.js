export default class NgRouteModule {
  constructor(ngModule) {
    this.ngModule = ngModule;
  }

  initiliazeRoutes(routesConfig) {
    this.ngModule.config(function($stateProvider) {
      routesConfig.forEach(config => {
        $stateProvider.state(config.routePath ? config.routePath : "index", {
          url: config.routePath,
          template: config.template,
          controller: config.controller,
          controllerAs: "vm"
        });
      });
    });
  }
}
