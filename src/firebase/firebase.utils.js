import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import configFb from "./configFb";

const config = configFb;

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
