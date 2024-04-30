import Model from "./model.js";
import View from "./view.js";

class Controller {
  constructor() {
    this.model = new Model(this);
    this.view = new View(this);

    this.currentQuestion = this.model.questionOne;
  }

  start() {
    this.view.showQuestion(this.currentQuestion);
    this.registerButtonClicks();
  }

  registerButtonClicks() {
    document
      .querySelector("main")
      .addEventListener("click", (event) => this.userClicked(event));
  }

  userClicked = (event) => {
    const target = event.target;

    if (target.tagName === "BUTTON") {
      this.buttonClicked(target);
    }
  };

  //TODO Lav dynamisk
  buttonClicked(button) {
    button.parentElement.remove();

    const choice = button.textContent;

    if (choice === "Yes") {
      this.currentQuestion = this.model.questionOne.yes;
    } else if (choice === "No") {
      this.currentQuestion = this.model.questionOne.no;
    }

    // Show the next question
    this.view.showQuestion(this.currentQuestion);
  }

  connectNodes() {
    this.model.questionOne.yes = this.model.questionOneCorrect;
    this.model.questionOne.no = this.model.questionOneIncorrect;
  }
}

let controller = new Controller();
window.addEventListener("load", controller.start());
