import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBICGXKWqqammqYGSn5y0T-hygnEd9HFas",
  authDomain: "kareyeapp.firebaseapp.com",
  projectId: "kareyeapp",
  storageBucket: "kareyeapp.appspot.com",
  messagingSenderId: "319320226970",
  appId: "1:319320226970:web:8dcde1363f8dafd16b7323",
  measurementId: "G-6K7EHXS85H",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

export { firebase, auth };
