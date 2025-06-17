// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHWryRTC8zN3GH_oBbr0fLVwNbxiu5Tao",
  authDomain: "webcafelanding-4215d.firebaseapp.com",
  projectId: "webcafelanding-4215d",
  storageBucket: "webcafelanding-4215d.firebasestorage.app",
  messagingSenderId: "472128676100",
  appId: "1:472128676100:web:ea076cd3c2c9cda889b051",
  measurementId: "G-BDEYXYSFG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);