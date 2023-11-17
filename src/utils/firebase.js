// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFmwg0Jh1ahl6asLAcAX0rHL8DUQ9-VXo",
  authDomain: "mytube-8d4d0.firebaseapp.com",
  projectId: "mytube-8d4d0",
  storageBucket: "mytube-8d4d0.appspot.com",
  messagingSenderId: "658506545539",
  appId: "1:658506545539:web:faae94cfc81ad5444c9eb6",
  measurementId: "G-4QYR4G9PTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);