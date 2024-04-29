export default class Model {
  constructor(controller) {}

  testModel() {
    console.log("Model Running");
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
