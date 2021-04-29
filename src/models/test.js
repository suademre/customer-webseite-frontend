import User from './user';
import Contract from './contract';
import Invitation from './invitation';
import Request from './request';
import SettingCompany from './settingCompany';
import SettingLocales from './settingLocales';
import { Company, Address } from './company';
import { Question, Answer } from './question';


let data = {
    company: {
        name: "Muster Ltd.",
        address: {
            street_and_no: "Musteraddress 1",
            zip_code: "09876",
            city: "Musterstadt",
            state: "MM",
            country: "Musterland"
        },
    },
    contact: {
        name: "Max Muster",
        email: "max.muster@gmail.com",
        tel: "79218012332",
        mobile: "+93 7213812 81239",
        fax: null,
    },
}
User.signUpWithEmailAndPassword("uifhkNAWFKUJNSAKDJwlkfmLNDJFbhsvjh", data).then(
    (cred) => {
        console.log(cred)
    }
)