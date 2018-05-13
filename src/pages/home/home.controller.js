export default class HomeController {
  constructor($scope) {
    this.$scope = $scope;
  }

  $onInit() {
    this.title = "This is the home controller";
    this.$scope.msg = "Controller message";
  }

  doSomething(message) {
    alert("alerting about " + message);
  }
}
