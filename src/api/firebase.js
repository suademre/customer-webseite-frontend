import app from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
 
import config from './../config/firebase';
  
class Firebase {

  static instance = null;

  constructor() {
    // Initialize Firebase
    app.initializeApp(config);

    this.analytics = app.analytics();
    this.auth = app.auth();
    this.store = app.firestore();
  }

  static getInstance() {
      if(Firebase.instance == null)
        this.instance = new Firebase();
      return Firebase.instance;
  }
}

export default Firebase.getInstance();