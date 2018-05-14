import ValidatorsModule from "./validators.module";

describe("Validator module testing", () => {
  it("should load without crashing", () => {
    expect(ValidatorsModule.getModule()).toBeDefined();
  });
});
