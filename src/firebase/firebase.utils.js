import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAa1z_TzH-OHoiWLFMl5D_k5Lrc3Y4zUM",
    authDomain: "e-commerce-app-db-c1b90.firebaseapp.com",
    projectId: "e-commerce-app-db-c1b90",
    storageBucket: "e-commerce-app-db-c1b90.appspot.com",
    messagingSenderId: "254087126340",
    appId: "1:254087126340:web:7f3c8fac1d7a8185c90b11",
    measurementId: "G-G74WTSQP30"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
