// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "maier-estate.firebaseapp.com",
  projectId: "maier-estate",
  storageBucket: "maier-estate.appspot.com",
  messagingSenderId: "830754834674",
  appId: "1:830754834674:web:ace6d4b515c7a6890e686b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);