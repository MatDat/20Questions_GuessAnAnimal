export default class View {
  constructor(controller) {}

  showQuestion(question) {
    const html =
      /* html */
      `<div class="questionBox">
          <h2>${question.title}</h2>

          <div id="questionBox">
          ${question.question}
          </div>

          <div id="btnBox">
            <button>Yes</button>
            <button>No</button>
          </div>`;

    document.querySelector("main").insertAdjacentHTML("beforeend", html);
  }
}
