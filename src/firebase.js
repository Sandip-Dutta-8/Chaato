import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDAZb5jDgEQgKYNeWdhzDP1pT7Ptud_fpk",
  authDomain: "chat-app-sd-f4e4b.firebaseapp.com",
  projectId: "chat-app-sd-f4e4b",
  storageBucket: "chat-app-sd-f4e4b.appspot.com",
  messagingSenderId: "139025032548",
  appId: "1:139025032548:web:bf3d17fdfaf7890f7c0671"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();