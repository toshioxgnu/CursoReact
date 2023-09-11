// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnviroments } from "../../helpers/getEnviroments";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnviroments();
console.log(env);

// DEV/PROD
// const firebaseConfig = {
//   apiKey: "AIzaSyCs-JQMA_Je35QuUuLM8riv6jczYt4LVf4",
//   authDomain: "react-courses-6495a.firebaseapp.com",
//   projectId: "react-courses-6495a",
//   storageBucket: "react-courses-6495a.appspot.com",
//   messagingSenderId: "80724663983",
//   appId: "1:80724663983:web:2e95e99d44b3a465cc3e5a"
// };

// TEST-Dev
// const firebaseConfig = {
//   apiKey: "AIzaSyCs-JQMA_Je35QuUuLM8riv6jczYt4LVf4",
//   authDomain: "react-courses-6495a.firebaseapp.com",
//   projectId: "react-courses-6495a",
//   storageBucket: "react-courses-6495a.appspot.com",
//   messagingSenderId: "80724663983",
//   appId: "1:80724663983:web:fd6b4f6adf28a071cc3e5a"
// };


// dev-testing
const firebaseConfig = {
  apiKey: "AIzaSyA6onuBsgq0VXRIQhnZ_js3RBkvmcKTRKY",
  authDomain: "test-databases-988ed.firebaseapp.com",
  projectId: "test-databases-988ed",
  storageBucket: "test-databases-988ed.appspot.com",
  messagingSenderId: "708686952731",
  appId: "1:708686952731:web:733579e5a560989b037bbe"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const firebaseDB = getFirestore( FirebaseApp );
