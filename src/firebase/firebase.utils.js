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


export const createUserProfileDocument = async (userAuth, additionData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData
      })
    } catch(error){
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;