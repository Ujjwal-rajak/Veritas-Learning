import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "strike30-a6862.firebaseapp.com",
  projectId: "strike30-a6862",
  storageBucket: "strike30-a6862.firebasestorage.app",
  messagingSenderId: "210199362339",
  appId: "1:210199362339:web:1c8918f642d390ddf7ea96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}