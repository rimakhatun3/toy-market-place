// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDQlnozDRR3Vn0bBIvtdrxRxRP5KVWrUk",
  authDomain: "toy-marketplace-6e61f.firebaseapp.com",
  projectId: "toy-marketplace-6e61f",
  storageBucket: "toy-marketplace-6e61f.appspot.com",
  messagingSenderId: "560303335685",
  appId: "1:560303335685:web:5f82287e9899d6bcd6af6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;