// DO  NOT SHARE FIREBASE CONFIGE ON ONLINE


// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhLde8alBuLNxH2XBuxyGpoymKcV7v--M",
  authDomain: "simple-firebase-auth-39759.firebaseapp.com",
  projectId: "simple-firebase-auth-39759",
  storageBucket: "simple-firebase-auth-39759.firebasestorage.app",
  messagingSenderId: "764530551371",
  appId: "1:764530551371:web:7b8eb89d2e1012b5df7bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);