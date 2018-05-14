import { default as App } from "./app";

describe("AppModule test suite", () => {
  function checkDependency(module, dependencyName) {
    return module.requires.reduce((acc, dependency) => {
      if (dependency === dependencyName) {
        return true;
      } else {
        return acc;
      }
    });
  }

  it("should create app module without crashing", () => {
    expect(App).toBeDefined();
  });

  it("should have the ui.router as a dependency", () => {
    expect(checkDependency(App.ngModule, "ui.router")).toBeTruthy();
  });

  it("should have the HomePage module as a dependency", () => {
    expect(checkDependency(App.ngModule, "home")).toBeTruthy();
  });

  it("should have the LoginPage module as a dependency", () => {
    expect(checkDependency(App.ngModule, "login")).toBeTruthy();
  });

  it("should have the Shared module as a dependency", () => {
    expect(checkDependency(App.ngModule, "shared")).toBeTruthy();
  });
});
