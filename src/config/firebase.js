import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrBnRNsce5eCvefhCgA4j_IWSxa_-MUCE",
  authDomain: "myapp-cc3c3.firebaseapp.com",
  databaseURL: "https://myapp-cc3c3.firebaseio.com",
  projectId: "myapp-cc3c3",
  storageBucket: "myapp-cc3c3.appspot.com",
  messagingSenderId: "788103151543",
  appId: "1:788103151543:web:007832e0d541bd2f64f232",
  measurementId: "G-R4PBWRVHVL"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(app);