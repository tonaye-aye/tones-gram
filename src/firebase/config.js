import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJWgUc0_AZPkcx6J6Yh1BkXKh8CZXgR48",
  authDomain: "devtones-firegram.firebaseapp.com",
  databaseURL: "https://devtones-firegram.firebaseio.com",
  projectId: "devtones-firegram",
  storageBucket: "devtones-firegram.appspot.com",
  messagingSenderId: "1074261129505",
  appId: "1:1074261129505:web:39c6e521b532d3693f2660"
};

// Initialize Firebase here
firebase.initializeApp(firebaseConfig); // <- pass through the config variable above

// initialize upload storage
const projectStorage = firebase.storage();
// initialize firestore storage
const projectFirestore = firebase.firestore();
// create timestamp variable to add 'created at' time for image uploads
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
