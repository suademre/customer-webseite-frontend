import Firebase from "./../api/firebase";
import Model from "./model";
import { Request } from "./request";

export default class User extends Model {
  email;
  currency;
  language;
  commission;
  company;
  contact;
  user_type;

  constructor(
    id,
    email,
    language,
    contact,
    user_type,
    currency = null,
    commission = null,
    company = null
  ) {
    super();
    this.id = id;
    this.email = email;
    this.currency = currency;
    this.language = language;
    this.commission = commission;
    this.company = {
      name: company.name,
      address: {
        street_and_no: company.address.street_and_no,
        zip_code: company.address.zip_code,
        city: company.address.city,
        state: company.address.state,
        country: company.address.country,
      },
    };
    this.contact = {
      name: contact.name,
      email: contact.email,
      tel: contact.tel,
      mobile: contact.mobile,
      fax: contact.fax,
    };
    this.user_type = user_type;
  }

  static async checkInvitation(token) {
    let res = await Firebase.store
      .collection("invitations")
      .where("token", "==", token)
      .get();
      let invitation = null;
      res.forEach(doc => {
        invitation = doc.data();
      })
      return invitation;
  }
  
  static async signUpUser(token, data) {
    // Check for Validity of token
    let invitation = null;
    invitation = await this.checkInvitation(token);

    // If no invitation found
    if (invitation == null) return "invalid.token";

    // Create user in Firebase
    let userId = null;
    try {
      let res = await Firebase.auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      userId = res.user.uid;
    } catch(e) {
      return e.code;
    }


    let newUser = new User(
      null,
      invitation.email,
      invitation.language,
      data.contact,
      "user",
      invitation.currency,
      invitation.commission,
      data.company
    );

    // Add additional user data to Firestore
    newUser.save(userId);

    return newUser;
  }

  static async loginWithEmailAndPassword(email, password) {
    // Check Login
    let credentials = null;
    try {
      credentials = await Firebase.auth.signInWithEmailAndPassword(
        email,
        password
      );
    } catch(e) {
      return e.code;
    }
    
    // Get User Details
    let user = await User.get(credentials.user.uid);

    return new User(
      credentials.user.uid,
      credentials.user.email,
      user.language,
      user.contact,
      user.user_type,
      user.currency,
      user.commission,
      user.company
    );
  }

  static async get(id) {
    let res = await Firebase.store
    .collection("users")
    .doc(id)
    .get();
    return res.data();
  }

  async logout() {
    let res = await Firebase.auth.signOut();
    return res;
  }

  async save(id) {
    return this._save("users", id);
  }

  async getRequest() {
    let res = await Firebase.store
      .collection("requests")
      .where("user", "==", this.id)
      .get();

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

  async getContracts() {}
}
