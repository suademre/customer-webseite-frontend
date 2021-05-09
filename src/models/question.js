import Firebase from "./../api/firebase";
import Model from "./model";

class Question extends Model {
  isRoot;
  text;
  answers;

  constructor(id, isRoot, text, answers) {
    this.id = id;
    this.isRoot = isRoot;
    this.text = text;
    this.answers = answers.map((answer) => {
      new Answer(
        answer.icon,
        answer.text,
        answer.cost,
        answer.days,
        answer.next,
        answer.contract
      );
    });
  }

  static async all() {
    res = await Firebase.store.collection("questions").get();
    let questions = [];

    res.forEach((doc) => {
      let data = doc.data();
      questions.push(
        new Question(doc.id, data.isRoot, data.text, data.answers)
      );
    });

    return questions;
  }

  async save() {
    return this._save("questions");
  }
}

class Answer {
  icon;
  text;
  cost;
  days;
  next;
  contract;

  constructor(icon, text, cost, days, next, contract) {
    this.icon = icon;
    this.text = text;
    this.cost = cost;
    this.days = days;
    this.next = next;
    this.contract = contract;
  }
}

export { Question, Answer };
