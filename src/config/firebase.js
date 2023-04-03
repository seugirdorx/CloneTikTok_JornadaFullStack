import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPgG1hz42QGV4yuMPCrj7outkk1Ytdj6E",
  authDomain: "tiktok---jornada-2c668.firebaseapp.com",
  projectId: "tiktok---jornada-2c668",
  storageBucket: "tiktok---jornada-2c668.appspot.com",
  messagingSenderId: "291021831715",
  appId: "1:291021831715:web:2a5053955ad147c4143b96"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
