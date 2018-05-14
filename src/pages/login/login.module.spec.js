import { default as LoginModule } from "./login.module";

describe("LoginPage Module testing", () => {
  it("should load without crashing", () => {
    expect(LoginModule).toBeDefined();
  });

  it("should be named 'login'", () => {
    expect(LoginModule.getModuleName()).toBe("login");
  });
});
