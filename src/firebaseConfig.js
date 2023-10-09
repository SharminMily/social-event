import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByrNiEZgPyRchr6pxjSMPfDK8viLc3nkY",
  authDomain: "react-social-events-92624.firebaseapp.com",
  projectId: "react-social-events-92624",
  storageBucket: "react-social-events-92624.appspot.com",
  messagingSenderId: "1018154211130",
  appId: "1:1018154211130:web:167053aed56b7e44536203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;