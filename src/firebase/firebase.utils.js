import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBwWIhh1X70reYUMdRlMnk12qmjNjQQcPY",
  authDomain: "crwn-db-b0db5.firebaseapp.com",
  databaseURL: "https://crwn-db-b0db5.firebaseio.com",
  projectId: "crwn-db-b0db5",
  storageBucket: "crwn-db-b0db5.appspot.com",
  messagingSenderId: "77507128526",
  appId: "1:77507128526:web:d2ac869e7b05b1f6d6b49f",
  measurementId: "G-TBPRLRD2Z8"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;