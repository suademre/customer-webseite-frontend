import Firebase from "./../api/firebase";
import Model from './model';

export default class SettingCompany extends Model {
    id = "company_data";
    company;
    contact;

    static async get() {
        let res = await Firebase.store.collection("settings").doc(SettingLocales.id).get();
        return res.data();
    }

    static async save() {
        return this._update("settings");
    }
}
