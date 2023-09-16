
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3DHmmqmIx2fEOMaQybXb1vvHCaY2Xm9o",
  authDomain: "coderhousereact-6dcef.firebaseapp.com",
  projectId: "coderhousereact-6dcef",
  storageBucket: "coderhousereact-6dcef.appspot.com",
  messagingSenderId: "288487158784",
  appId: "1:288487158784:web:88b3381fb8554047c654e5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)