import AppController from "./app.controller";

describe("AppController", () => {
  var appController;
  beforeEach(() => {
    appController = new AppController();
  });
  it("should return AngularJS as a title", () => {
    expect(appController.title).toBe("AngularJS");
  });

  it("should change the title to Webpack", () => {
    appController.setTitle("Webpack");
    expect(appController.title).toBe("Webpack");
  });
});
