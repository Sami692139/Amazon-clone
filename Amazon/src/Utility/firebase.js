// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYLAVd_5UGllpXXVN5ukq_dLZpmfGESY",
  authDomain: "clon-6eb90.firebaseapp.com",
  projectId: "clon-6eb90",
  storageBucket: "clon-6eb90.firebasestorage.app",
  messagingSenderId: "313944374195",
  appId: "1:313944374195:web:23111fb849d7101d51a9c6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
