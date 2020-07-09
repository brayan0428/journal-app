import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvqwEc4ZCWeVzQ6v10o_XoI5bZyUqvmpI",
  authDomain: "journal-app-9a5df.firebaseapp.com",
  databaseURL: "https://journal-app-9a5df.firebaseio.com",
  projectId: "journal-app-9a5df",
  storageBucket: "journal-app-9a5df.appspot.com",
  messagingSenderId: "353473005519",
  appId: "1:353473005519:web:b953169e30d6bb38b634ba",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db };
