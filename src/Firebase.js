import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-6Xv9sEx0Ooy6BROHRzuMXrzVwI6POSM",
  authDomain: "study-abroad-96ff0.firebaseapp.com",
  databaseURL: "https://study-abroad-96ff0-default-rtdb.firebaseio.com",
  projectId: "study-abroad-96ff0",
  storageBucket: "study-abroad-96ff0.appspot.com",
  messagingSenderId: "637416971983",
  appId: "1:637416971983:web:c433e33d300e78ed74a1ba",
  measurementId: "G-DB1P7PZHFF",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
