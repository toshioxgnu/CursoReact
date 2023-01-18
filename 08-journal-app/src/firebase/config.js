// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs-JQMA_Je35QuUuLM8riv6jczYt4LVf4",
  authDomain: "react-courses-6495a.firebaseapp.com",
  projectId: "react-courses-6495a",
  storageBucket: "react-courses-6495a.appspot.com",
  messagingSenderId: "80724663983",
  appId: "1:80724663983:web:2e95e99d44b3a465cc3e5a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const firebaseDB = getFirestore( FirebaseApp );
