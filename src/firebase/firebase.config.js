// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1xaG4kbU9_VUfulNYA205rtuGfAnjndY",
    authDomain: "heal-heart.firebaseapp.com",
    projectId: "heal-heart",
    storageBucket: "heal-heart.appspot.com",
    messagingSenderId: "137088735263",
    appId: "1:137088735263:web:582f546d3acb4b01e61d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;