import { default as App } from "./app";
import utils from "./tests/utils";

describe("AppModule test suite", () => {
  it("should create app module without crashing", () => {
    expect(App).toBeDefined();
  });

  it("should have the ui.router as a dependency", () => {
    expect(utils.checkDependency(App.ngModule, "ui.router")).toBeTruthy();
  });

  it("should have the HomePage module as a dependency", () => {
    expect(utils.checkDependency(App.ngModule, "home")).toBeTruthy();
  });

  it("should have the LoginPage module as a dependency", () => {
    expect(utils.checkDependency(App.ngModule, "login")).toBeTruthy();
  });

  it("should have the Shared module as a dependency", () => {
    expect(utils.checkDependency(App.ngModule, "shared")).toBeTruthy();
  });
});
