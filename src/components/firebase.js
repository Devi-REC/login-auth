// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABpQ1Qb28dnYWHXlWS5sr0Xd6ZF6gZtDo",
    authDomain: "loginpage-9d1b1.firebaseapp.com",
    projectId: "loginpage-9d1b1",
    storageBucket: "loginpage-9d1b1.appspot.com",
    messagingSenderId: "7323077796",
    appId: "1:7323077796:web:0408cd048a50ebf1c96a31"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;