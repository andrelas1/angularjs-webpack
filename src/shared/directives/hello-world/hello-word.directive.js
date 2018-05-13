export default function helloWorld($interval) {
  function link(scope, elem, attrs) {
    console.log("elem", elem);
    console.log("scope", scope);
    console.log("attrs", attrs);

    function updateVal() {
      elem.text(new Date().toISOString());
    }

    scope.$watch(attrs.helloWorld, (value, oldVal) => {
      console.log("VALUE", value, oldVal);
      updateVal();
    });

    const timeout = $interval(() => {
      updateVal();
    }, 1000);

    elem.on("destroy", () => {
      $interval.cancel(timeout);
    });
  }
  return {
    link
  };
}
