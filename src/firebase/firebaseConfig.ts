import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBx-K6IMGmabN1_zOTvkw4pXoDuTQ8f2XI",
  authDomain: "foodspace-264ce.firebaseapp.com",
  projectId: "foodspace-264ce",
  storageBucket: "foodspace-264ce.appspot.com",
  messagingSenderId: "819781105751",
  appId: "1:819781105751:web:b02edd4d56ed54c3f84b12",
  measurementId: "G-YFGV9JW652"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
