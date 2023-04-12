// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbbjvmg5gBGk-PIZEtwjPM7GkieEvHhMU",
  authDomain: "portfolioprojectapp.firebaseapp.com",
  databaseURL: "https://portfolioprojectapp-default-rtdb.firebaseio.com",
  projectId: "portfolioprojectapp",
  storageBucket: "portfolioprojectapp.appspot.com",
  messagingSenderId: "640093303640",
  appId: "1:640093303640:web:6ef32b9901da46ed2cab2d",
  measurementId: "G-9PBTRH5K6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {app, db}
