// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl9Mz0vOC33sbjyFPeu6RkpXrDnq6gzGg",
  authDomain: "website-deployment-b671b.firebaseapp.com",
  projectId: "website-deployment-b671b",
  storageBucket: "website-deployment-b671b.appspot.com",
  messagingSenderId: "781694153711",
  appId: "1:781694153711:web:019e3bf8f07cfe312bbc1a",
  measurementId: "G-P6PRN6WLKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);