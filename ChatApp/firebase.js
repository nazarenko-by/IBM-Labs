// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAt02etuCV15A5tW_veEv4oFTQbh06BqIM",
    authDomain: "reactnative-push-notific-696f4.firebaseapp.com",
    projectId: "reactnative-push-notific-696f4",
    storageBucket: "reactnative-push-notific-696f4.firebasestorage.app",
    messagingSenderId: "489214276411",
    appId: "1:489214276411:web:f026ca5fdf915a0bf9fd1e"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
