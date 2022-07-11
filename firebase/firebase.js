// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS9EzaH_uvI3BkkcQl0xQV-b2lCkhcz3I",
  authDomain: "instagramclone-6f442.firebaseapp.com",
  projectId: "instagramclone-6f442",
  storageBucket: "instagramclone-6f442.appspot.com",
  messagingSenderId: "416399830753",
  appId: "1:416399830753:web:e1da219fd1c809b3e811a0",
  measurementId: "G-TY5BZFCSB7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

const analytics = getAnalytics(app);
