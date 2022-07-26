import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDH09dCw-L-KgYPpArr3wKKi7P5ZfibqhY",
  authDomain: "react-proyect-final.firebaseapp.com",
  projectId: "react-proyect-final",
  storageBucket: "react-proyect-final.appspot.com",
  messagingSenderId: "789443847883",
  appId: "1:789443847883:web:e961f6304e6b505070dd4e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);