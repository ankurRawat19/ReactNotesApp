// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXZMROhs7OWLs0Vej9bP1jCjLwyY6TxdI",
    authDomain: "react-notes-2c20f.firebaseapp.com",
    projectId: "react-notes-2c20f",
    storageBucket: "react-notes-2c20f.appspot.com",
    messagingSenderId: "882308535178",
    appId: "1:882308535178:web:41baa9ab3ad90e0d45ae73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")