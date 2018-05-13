export default class AppController {
  constructor() {
    this.hello = "AngularJS + Webpack + ES6";
    this.title = "AngularJS";
    this.init();
  }

  init() {
    this.vm = this;
  }

  setTitle(str) {
    this.title = str;
  }
}
