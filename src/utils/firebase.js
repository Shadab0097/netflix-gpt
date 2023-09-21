// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB20oyOtX_ejznqi0GQZkTgn9OdmeOkFwo",
  authDomain: "flixgpt-77869.firebaseapp.com",
  projectId: "flixgpt-77869",
  storageBucket: "flixgpt-77869.appspot.com",
  messagingSenderId: "846260306250",
  appId: "1:846260306250:web:5269b3a37b210eccc941b3",
  measurementId: "G-RVR9C3VWXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();