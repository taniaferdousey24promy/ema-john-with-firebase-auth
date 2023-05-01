// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8-jxIoHQ990tdBESlNZRvkin6H2lT1NQ",
  authDomain: "ema-john-with-firebase-a-cb46a.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-cb46a",
  storageBucket: "ema-john-with-firebase-a-cb46a.appspot.com",
  messagingSenderId: "591182091152",
  appId: "1:591182091152:web:81af14a26db11223c29915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;