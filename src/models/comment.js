export default class Comment {
    user;
    text;
    timestamp;

    constructor(user, text, timestamp) {
        this.user = user;
        this.text = text;
        this.timestamp = timestamp;
    }
}