import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDg8SQ52u6oEng6N8-DlSSjGhDabqGOm3c",
    authDomain: "entreganextjs.firebaseapp.com",
    projectId: "entreganextjs",
    storageBucket: "entreganextjs.firebasestorage.app",
    messagingSenderId: "1094465305898",
    appId: "1:1094465305898:web:37671ba171403fd9753253",
    measurementId: "G-9WCE8KXZVL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };

export { db };
