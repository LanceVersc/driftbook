import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBajreYQf-aaQNF5QDmdAQwMwGQDFTD1HI",
    authDomain: "driftbook-inz.firebaseapp.com",
    projectId: "driftbook-inz",
    storageBucket: "driftbook-inz.appspot.com",
    messagingSenderId: "105051942946",
    appId: "1:105051942946:web:019ae61e4c2bb9b3445a7b"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage }