import LoginController from "./login.controller";

describe("LoginController testing suite", () => {
  let controller;

  beforeEach(() => {
    controller = new LoginController();
  });

  it("should load without crashing", () => {
    expect(controller).toBeDefined();
  });

  describe("Controller properties", () => {
    it("should have username prop to handle name input ", () => {
      const username = controller.username;
      expect(username).toBeDefined();
    });

    it("should have password prop to handle password input", () => {
      const password = controller.password;
      expect(password).toBeDefined();
    });
  });

  //that SHOULD be on a validation service
  describe("Email validation functions on form input", () => {
    it("should return false when validating the username email.email.com", () => {
      const isUsernameValid = controller.isUsernameValid;
      expect(isUsernameValid("email.email.com")).toBe(false);
    });

    it("should return true when validating the username email@email.com", () => {
      const isUsernameValid = controller.isUsernameValid;
      expect(isUsernameValid("email@email.com")).toBe(true);
    });

    it("should return false when validating the username email@email!!.com", () => {
      const isUsernameValid = controller.isUsernameValid;
      expect(isUsernameValid("email@email!!.com")).toBe(false);
    });

    it("should return true when validating the username email_email@email.nl", () => {
      const isUsernameValid = controller.isUsernameValid;
      expect(isUsernameValid("email_email@email.nl")).toBe(true);
    });
  });

  describe("Password validation", () => {
    it("should return false when validating the password '1234'", () => {
      const isPasswordValid = controller.isPasswordValid;
      expect(isPasswordValid("1234")).toBe(false);
    });
  });
});
