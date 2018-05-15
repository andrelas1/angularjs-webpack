import ServicesModule from "./services.module";

describe("Services module testing", () => {
  it("should load without crashing", () => {
    expect(ServicesModule).toBeDefined();
  });

  it("should be named services", () => {
    expect(ServicesModule.getModuleName()).toBe("services");
  });

  it("should have the usersService as a factory", () => {
    expect(ServicesModule.services.indexOf("usersService") !== -1).toBe(true);
  });
});
