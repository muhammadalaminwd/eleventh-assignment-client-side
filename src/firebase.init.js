// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiPHPHIix_eAtIhQgs-2dR5e0R6mKjWB4",
  authDomain: "eleventh-assignment-5c5bd.firebaseapp.com",
  projectId: "eleventh-assignment-5c5bd",
  storageBucket: "eleventh-assignment-5c5bd.appspot.com",
  messagingSenderId: "1018430920401",
  appId: "1:1018430920401:web:3f66e202c9d04369e397f0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;