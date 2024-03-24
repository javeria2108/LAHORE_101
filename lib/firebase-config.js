// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjP3QebQEhZ-rqDEfLSwLZHMDLQPLq1fc",
  authDomain: "lahore101-91d01.firebaseapp.com",
  projectId: "lahore101-91d01",
  storageBucket: "lahore101-91d01.appspot.com",
  messagingSenderId: "567336091026",
  appId: "1:567336091026:web:26fe601c9d7c4810a8954b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)