import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBA0FLFXoECd0Y3gnB-h5sa5hAT5wRXklU",
    authDomain: "notes-app-51373.firebaseapp.com",
    projectId: "notes-app-51373",
    storageBucket: "notes-app-51373.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "notes-app-51373",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
