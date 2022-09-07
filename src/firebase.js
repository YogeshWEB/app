import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCa7Eui1aEsQZN0QdpGMCtYc19WtoDqLw",
  authDomain: "e-challenge-ba65e.firebaseapp.com",
  projectId: "e-challenge-ba65e",
  storageBucket: "e-challenge-ba65e.appspot.com",
  messagingSenderId: "632014675790",
  appId: "1:632014675790:web:09a17c94077efa09de081f",
  measurementId: "G-5XMYMMWDS3"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };