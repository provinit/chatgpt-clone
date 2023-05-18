import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBua7VjXp2ODcj5tPGr8UBguvf8du3AyS4",
  authDomain: "chatgpt-clone-2e356.firebaseapp.com",
  projectId: "chatgpt-clone-2e356",
  storageBucket: "chatgpt-clone-2e356.appspot.com",
  messagingSenderId: "264912751034",
  appId: "1:264912751034:web:8872b47855719ec3e5f583"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};