import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiXMVWLTEqq9rvNgc037HgdewbGWKa9Bo",
  authDomain: "react-social-event-d2b7d.firebaseapp.com",
  projectId: "react-social-event-d2b7d",
  storageBucket: "react-social-event-d2b7d.appspot.com",
  messagingSenderId: "652231936840",
  appId: "1:652231936840:web:bf3fa12af54b32b7cd017d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app)