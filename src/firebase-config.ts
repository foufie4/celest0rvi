import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzeSyCvnJYTZSCVNNr9azRHGnE8QJXAVuGnrs8",
    authDomain: "celest0rvi.firebaseapp.com",
    projectId: "celest0rvi",
    storageBucket: "celest0rvi.firebasestorage.app",
    messagingSenderId: "37268381203",
    appId: "1:37268381203:web:de513f38b122f20cc9a9e6",
    measurementId: "G-FC8572BG5G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };