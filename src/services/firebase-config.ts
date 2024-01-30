// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo5KXXSU2N6Jw__4WgF8ZtOsfpQu_Z6CU",
  authDomain: "tipcalc1313.firebaseapp.com",
  projectId: "tipcalc1313",
  storageBucket: "tipcalc1313.appspot.com",
  messagingSenderId: "471391764522",
  appId: "1:471391764522:web:365caf05ca6ef5da154353",
  measurementId: "G-7E8H1F50CB",
  hosting: {
    "public": "build",
  }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);