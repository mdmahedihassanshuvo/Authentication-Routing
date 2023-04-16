// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7b2FC_93eHlJNA6uxyyL_Mkrrz6cPnDY",
  authDomain: "authentication-with-daisy-ui.firebaseapp.com",
  projectId: "authentication-with-daisy-ui",
  storageBucket: "authentication-with-daisy-ui.appspot.com",
  messagingSenderId: "648818861595",
  appId: "1:648818861595:web:80717862815b3db960fabe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;