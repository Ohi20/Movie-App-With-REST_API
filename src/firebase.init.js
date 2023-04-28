// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9iUhcOCAyXndhdQC1ExuniDpx568ZUQ",
  authDomain: "movie-app-175f1.firebaseapp.com",
  projectId: "movie-app-175f1",
  storageBucket: "movie-app-175f1.appspot.com",
  messagingSenderId: "876030750281",
  appId: "1:876030750281:web:72bc7c97326ba177dc9998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 