// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfyQfREv4hqgqBHF2jmMavn09moOZyEVM",
    authDomain: "dragon-news-a127b.firebaseapp.com",
    projectId: "dragon-news-a127b",
    storageBucket: "dragon-news-a127b.firebasestorage.app",
    messagingSenderId: "1040509582849",
    appId: "1:1040509582849:web:6783009e1f53fdd3f48a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
