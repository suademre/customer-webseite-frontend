import Firebase from "./../api/firebase";
import Model from './model';

export default class Invitation extends Model {
    token;
    email;
    currency;
    language;

    static async all() {
        res = await Firebase.store.collection("questions").get();
        return res.map(doc =>  [doc.id, doc.data()]);
    }

    async save() {
        return this._save("invitations");
    }
}