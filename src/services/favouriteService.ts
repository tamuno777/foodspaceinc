import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";

// Define the Dish type
interface Dish {
  id: string;
  title: string;
  description?: string;
  image?: string;
  chef?: string;
  category?: string;
  content?: string;
}

export const addFavorite = async (uid: string, dish: Dish) => {
  const favoritesRef = collection(db, "favorites");
  await addDoc(favoritesRef, {
    uid,
    dishId: dish.id, 
    category: dish.category, 
    content: dish.content, 
    title: dish.title,
    description: dish.description || "",
    image: dish.image || "",
    chef: dish.chef || "",
  });
};

export const fetchFavorites = async (uid: string): Promise<Dish[]> => {
  try {
    const favoritesRef = collection(db, "favorites");
    const q = query(favoritesRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id, // Use Firestore document ID as dish ID
      ...doc.data(), // Include all dish data
    })) as Dish[];
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return [];
  }
};





export const removeFavorite = async (uid: string, dishId: string) => {
  const favoriteRef = doc(db, "favorites", dishId);
  // const q = query(favoritesRef, where("uid", "==", uid));

  await deleteDoc(favoriteRef); // Delete the document from Firestore
};
;
