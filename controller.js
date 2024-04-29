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
    this.registerButtonClicks();
  }

  testMVC() {
    this.testController();
    this.model.testModel();
    this.view.testView();
  }

  testController() {
    console.log("JS Running");
  }

  registerButtonClicks() {
    document.querySelector("main").addEventListener("click", userClicked);

    function userClicked(event) {
      const target = event.target;
      //   console.log(target);

      if (target.tagName === "BUTTON") {
        buttonClicked(target);
      }
    }
  }

  buttonClicked(button) {
    console.log(button);

    button.parentElement.remove();
  }
}

let controller = new Controller();
window.addEventListener("load", controller.start());
