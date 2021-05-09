import Firebase from "./../api/firebase";
import Model from './model';

export default class Contract extends Model{
    request;
    user;
    language;
    currency;
    form;

    static async all() {}

    async save() {
        return this._save("contracts");
    }
}