import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTrJetwvtG5H9ClomQmNiDdRxdAjc_9Us",
  authDomain: "web-programminng.firebaseapp.com",
  databaseURL: "https://web-programminng-default-rtdb.firebaseio.com",
  projectId: "web-programminng",
  storageBucket: "web-programminng.appspot.com",
  messagingSenderId: "446429172546",
  appId: "1:446429172546:web:7e4a00d6886f2d053aeedb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
