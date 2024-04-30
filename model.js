export default class Model {
  constructor(controller) {
    this.questionOneCorrect = {
      parent: this.questionOne,
      title: "Question Two",
      question: /* html */ `<p>Does it originate from Africa?</p>`,
      yes: null,
      no: null,
    };

    this.questionOneIncorrect = {
      parent: this.questionOne,
      title: "Question Two",
      question: /* html */ `<p>Is it able to fly?</p>`,
      yes: null,
      no: null,
    };

    this.questionOne = {
      parent: null,
      title: "Question One",
      question: /*html*/ `<p>Is the animal a predator?</p>`,
      yes: this.questionOneCorrect,
      no: this.questionOneIncorrect,
    };
  }
}
