import { auth, db } from "@/firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

const createUserIfNotExists = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        name: user.displayName || "Anonymous",
        email: user.email,
        createdAt: new Date(),
      });
    }
  }
};
