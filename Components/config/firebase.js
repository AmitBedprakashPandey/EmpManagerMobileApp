// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGcbd4PpuwWKqD_MTkoZFKWD5GWZ9-S78",
  authDomain: "mvcportal-5da4d.firebaseapp.com",
  databaseURL: "https://mvcportal-5da4d-default-rtdb.firebaseio.com",
  projectId: "mvcportal-5da4d",
  storageBucket: "mvcportal-5da4d.appspot.com",
  messagingSenderId: "756870839092",
  appId: "1:756870839092:web:cefd14759a033a742b4361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const DB = getFirestore(app);