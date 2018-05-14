import { default as Services } from "./services.module";

describe("Services module testing", () => {
  it("should load without crashing", () => {
    expect(Services).toBeDefined();
  });

  it("should be named services", () => {
    expect(Services.getModuleName()).toBe("services");
  });
});
