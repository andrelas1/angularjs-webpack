export default function helloWorld() {
  return {
    restrict: "E",
    scope: {
      name: "=name"
    },
    templateUrl: "./hello-world.directive.html"
  };
}
