import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const addFavorite = async (uid: string, dish: any) => {
  const favoritesRef = collection(db, "favorites");
  await addDoc(favoritesRef, { uid, ...dish });
};

export const fetchFavorites = async (uid: string) => {
  const favoritesRef = collection(db, "favorites");
  const q = query(favoritesRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
