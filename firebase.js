// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOifsS0zOUQyy6LDZJg5AvxGNH0fPLtzo",
  authDomain: "inventory-management-c0600.firebaseapp.com",
  projectId: "inventory-management-c0600",
  storageBucket: "inventory-management-c0600.appspot.com",
  messagingSenderId: "1014882309822",
  appId: "1:1014882309822:web:6dcbfa930ef8196e24b0ef",
  measurementId: "G-JQDXWDS3R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}