import 'dotenv/config'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "test-nov-10.firebaseapp.com",
  databaseURL: "https://test-nov-10.firebaseio.com",
  projectId: "test-nov-10",
  storageBucket: "test-nov-10.appspot.com",
  messagingSenderId: "391046337629",
  appId: "1:391046337629:web:5448f4b5fb6462aca6a9b4",
  measurementId: "G-6TWYLEEWRW"
};

console.log('process env', process.env.API_KEY)
console.log('firebase config', firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
