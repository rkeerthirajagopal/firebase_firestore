import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiH1eW6QTxr2Aq63YzRiFLqPkHTrYf46c",
  authDomain: "blogproject-2a8c6.firebaseapp.com",
  projectId: "blogproject-2a8c6",
  storageBucket: "blogproject-2a8c6.appspot.com",
  messagingSenderId: "655152404422",
  appId: "1:655152404422:web:4823c5fd79c549c976c4c7",
  measurementId: "G-SHC8L1CMQH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

