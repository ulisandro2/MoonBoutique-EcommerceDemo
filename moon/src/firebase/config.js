// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc2_D2pn47nfPNNOPxscBFOcTfmkIBe_Q",
  authDomain: "moonboutique-31327.firebaseapp.com",
  projectId: "moonboutique-31327",
  storageBucket: "moonboutique-31327.appspot.com",
  messagingSenderId: "556919890594",
  appId: "1:556919890594:web:be9d763ff6ffe4d2c7adfb"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;


