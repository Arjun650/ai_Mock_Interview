// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2ek763KwsTdh4xjyMvC9XU7Dnh6Yt1L4",
  authDomain: "mock-interview-fbe71.firebaseapp.com",
  projectId: "mock-interview-fbe71",
  storageBucket: "mock-interview-fbe71.firebasestorage.app",
  messagingSenderId: "722200815698",
  appId: "1:722200815698:web:87e97b518b18ba9148578b",
  measurementId: "G-DCC5YSNS5Z"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);