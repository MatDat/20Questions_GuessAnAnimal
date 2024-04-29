import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);
  }

  start() {
    // this.testMVC();
    this.view.createQuestion(this.view.questionOne);
    this.model.registerButtonClicks();
  }

  testMVC() {
    this.testController();
    this.model.testModel();
    this.view.testView();
  }

  testController() {
    console.log("JS Running");
  }
}

let controller = new Controller();
window.addEventListener("load", controller.start());
