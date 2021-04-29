import Firebase from "./../api/firebase";
import Model from "./model";
import Comment from "./comment";

class Request extends Model {
  user;
  currency;
  answers;
  contract;
  status;
  comments;

  static status = {
    PENDING: {
      text: "status.pending",
      color: "warning",
    },
    ACCEPTED: {
      text: "status.accepted",
      color: "success",
    },
    REJECTED: {
      text: "status.rejected",
      color: "danger",
    },
    AWAITING_USER_REVIEW: {
      text: "status.awaiting_user_review",
      color: "warning",
    },
    CANCELLED: {
      text: "status.cancelled",
      color: "danger",
    },
    CONTRACT: {
      text: "status.contract",
      color: "info",
    },
  };

  constructor(
    id,
    user,
    currency,
    answers,
    status,
    comments = [],
    contract = null
  ) {
    this.id = id;
    this.user = user;
    this.currency = currency;
    this.answers = answers.map(
      (answer) => new UserAnswer(answer.question, answer.answer)
    );
    this.status = status;
    this.comments = comments.map(
      (comment) => new Comment(comment.user, comment.text, comment.timestamp)
    );
    this.contract = contract;
  }

  static async all() {
    let res = await Firebase.store.collection("requests").get();

    let requests = [];
    res.forEach((doc) => {
      let data = doc.data();
      requests.push(
        new Request(
          doc.id,
          data.user,
          data.currency,
          data.answers,
          data.status,
          data.comments,
          data.contract
        )
      );
    });

    return requests;
  }

  async save() {
    return this._save("requests");
  }
}

class UserAnswer {
  question;
  answer;

  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

export { Request, UserAnswer };
