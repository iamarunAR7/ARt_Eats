
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB-x7EBYRGDP_CZFRyhtfTqA3NiLDSAPAs",
  authDomain: "ar7eats.firebaseapp.com",
  projectId: "ar7eats",
  storageBucket: "ar7eats.appspot.com",
  messagingSenderId: "462954793569",
  appId: "1:462954793569:web:26aaaa6e7468cee9ae3820"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();

