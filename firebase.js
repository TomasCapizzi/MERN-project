// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFW-bSfoY8kYInZ6ueFdZzouRRZiBP4ms",
  authDomain: "tasks-mern.firebaseapp.com",
  projectId: "tasks-mern",
  storageBucket: "tasks-mern.appspot.com",
  messagingSenderId: "513227762672",
  appId: "1:513227762672:web:bc9e4e89ce2a1c49878b35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
