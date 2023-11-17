// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjrBvKmHT6tEXdB5nRf_aZxhjMwwbPDWA",
  authDomain: "project-ecf.firebaseapp.com",
  projectId: "project-ecf",
  storageBucket: "project-ecf.appspot.com",
  messagingSenderId: "1037262490355",
  appId: "1:1037262490355:web:5774e29c51a40e57fd8586",
  measurementId: "G-7DXYDN0759"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);