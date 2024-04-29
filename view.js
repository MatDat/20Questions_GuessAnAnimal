export default class View {
  constructor(controller) {}

  testView() {
    console.log("View Running");
  }

  currentQuestion;

  questionOne = {
    parent: null,
    title: "Question One",
    /* html */
    text: `<p>is it a mammal?</p>`,
    choices: [
      { name: "yes", node: this.questionTwo },
      { name: "no", node: null },
    ],
  };

  questionTwo = {
    parent: this.questionOne,
    title: "Question One",
    /* html */
    text: `<p>Is it a predator?</p>`,
    choices: [
      { name: "yes", node: null },
      { name: "no", node: null },
    ],
  };

  createQuestion(question) {
    const html =
      /* html */
      `<div class="questionBox">
          <h2>${question.title}</h2>

          <div class="text">${question.text}</div>

          <div class="choices">${question.choices
            .map(
              (choice, i) =>
                `<button id="btnChoice${i}">${choice.name}</button>`
            )
            .join(" ")}
            </div>`;

    document.querySelector("main").insertAdjacentHTML("beforeend", html);
  }
}
