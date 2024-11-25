import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Define the Dish type
interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
}

export const addFavorite = async (uid: string, dish: Dish) => {
  const favoritesRef = collection(db, "favorites");
  await addDoc(favoritesRef, { uid, ...dish });
};

export const fetchFavorites = async (uid: string): Promise<Dish[]> => {
  const favoritesRef = collection(db, "favorites");
  const q = query(favoritesRef, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({ ...(doc.data() as Dish), id: doc.id }));
};
