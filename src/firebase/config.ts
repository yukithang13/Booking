import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyCfJYB6yB4bYqoZosQhKu0BfK1GKDm9tNg",
  authDomain: "typescript-d56bc.firebaseapp.com",
  databaseURL: "https://typescript-d56bc-default-rtdb.firebaseio.com",
  projectId: "typescript-d56bc",
  storageBucket: "typescript-d56bc.appspot.com",
  messagingSenderId: "11413491329",
  appId: "1:11413491329:web:2bf99dca9f86e1477b0780",
  measurementId: "G-K8L6H0TYVH"
};
firebase.initializeApp(config);
export default firebase.firestore();


