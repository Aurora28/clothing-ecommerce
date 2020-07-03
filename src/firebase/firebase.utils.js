import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0qNJ4HojYn7uaPFnTI7igEGckx-rHdkI",
    authDomain: "clothing-ecommercedb.firebaseapp.com",
    databaseURL: "https://clothing-ecommercedb.firebaseio.com",
    projectId: "clothing-ecommercedb",
    storageBucket: "clothing-ecommercedb.appspot.com",
    messagingSenderId: "1042223240218",
    appId: "1:1042223240218:web:74eef8d3b7aebe99efeda3",
    measurementId: "G-EVW7QEVSF2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const singnInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

