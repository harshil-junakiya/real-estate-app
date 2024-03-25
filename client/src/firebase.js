// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import environment variables
import.meta.env;

// Load environment variables from .env file
const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "real-estate-abc.firebaseapp.com",
  projectId: "real-estate-abc",
  storageBucket: "real-estate-abc.appspot.com",
  messagingSenderId: "631623757488",
  appId: "1:631623757488:web:8a24324dc6fe56f1819575"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
