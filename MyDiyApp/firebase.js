// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from 'firebase/firestore';
// Uncomment the below line if you want to try the app with Firebase app storage
// You must have upgraded your Firebae account to use this
// import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt02etuCV15A5tW_veEv4oFTQbh06BqIM",
  authDomain: "reactnative-push-notific-696f4.firebaseapp.com",
  projectId: "reactnative-push-notific-696f4",
  storageBucket: "reactnative-push-notific-696f4.firebasestorage.app",
  messagingSenderId: "489214276411",
  appId: "1:489214276411:web:9f953b206d37ba91f9fd1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// Uncomment the below line if you are trying the app with Firebase app storage
// export const storage = getStorage(app);
