export default function myDialog() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      close: "&onClose"
    },
    template: require("./dialog.directive.html")
  };
}
