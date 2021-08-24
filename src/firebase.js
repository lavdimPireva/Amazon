import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCx2rNVI3QOZ95jV4FxySJYR0ZFU52mXug",
  authDomain: "clone-c26dd.firebaseapp.com",
  projectId: "clone-c26dd",
  storageBucket: "clone-c26dd.appspot.com",
  messagingSenderId: "1016130866585",
  appId: "1:1016130866585:web:2ac53839f69e445e371708",
  measurementId: "G-EV21SGYC0D",
});

const auth = firebase.auth();

export { auth };
