// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.react_apiKey,
  authDomain: process.env.react_authDomain,
  projectId: process.env.react_projectId,
  storageBucket: process.env.react_storageBucket,
  messagingSenderId: process.env.react_messagingSenderId,
  appId: process.env.react_appId,
  measurementId: process.env.react_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);