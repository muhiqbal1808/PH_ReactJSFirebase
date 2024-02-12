// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx9-HRWpWPIE7TgRuoLkMtCpLC4sKY44c",
  authDomain: "simple-notes-firebase-b44a2.firebaseapp.com",
  projectId: "simple-notes-firebase-b44a2",
  storageBucket: "simple-notes-firebase-b44a2.appspot.com",
  messagingSenderId: "370451762878",
  appId: "1:370451762878:web:493172faab86f8a23898ef",
  measurementId: "G-FV1NSKY07F",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default analytics;
