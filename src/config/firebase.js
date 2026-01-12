// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqu94Hp19X3rCeoEJNqkKIfl8cIJhn1vs",
  authDomain: "vite-contact-3267a.firebaseapp.com",
  projectId: "vite-contact-3267a",
  storageBucket: "vite-contact-3267a.firebasestorage.app",
  messagingSenderId: "924394100368",
  appId: "1:924394100368:web:0eb5830bedd4b1c8852a15",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
