import { db } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
  
    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      name: user.displayName,
      createdAt: new Date(),
    });
  };
  
  // Email & Password Sign-Up
  export const signupWithEmailPassword = async (email: string, password: string) => {
    const auth = getAuth();
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  
    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      name: user.displayName,
      createdAt: new Date(),
    });
  };
