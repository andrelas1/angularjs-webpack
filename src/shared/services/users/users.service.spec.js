import angular from "angular";
import usersService from "./users.service";

describe("usersService testing suite", () => {
  describe("general", () => {
    it("should load without crashing'", () => {
      expect(usersService.name).toBeDefined();
    });
  });

  describe("fetching functionality", () => {
    let usersService;
    beforeEach(angular.mock.module("app"));
    beforeEach(function() {
      angular.mock.inject(function($injector) {
        usersService = $injector.get("usersService");
      });
    });

    it("getUser should fetch the users", () => {
      expect(usersService.getUser()).toEqual(jasmine.any(Array));
    });
  });
});
